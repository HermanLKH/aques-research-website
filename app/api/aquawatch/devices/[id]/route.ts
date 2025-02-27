import { LocationData, Parameter, SisIdListing } from "@/lib/types";
import { NextResponse } from "next/server";
import path from "path";
import axios from "axios";
import getHydrovuAuthToken from "../../../../../hooks/hydrovuAuth";
import { apiConfig } from "@/lib/const";

const TWO_WEEKS = 2419200; // seconds in 2 weeks
const MAX_RETRIES = 5;

async function fetchLocationData(id: string, startTime: number, token: string) {
  const apiUrl = `${apiConfig.baseUrl}/locations/${id}/data?startTime=${startTime}`;
  return axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  // get location id from query param
  const id = params.id;

  const url = new URL(req.url);
  const param = url.searchParams.get("param");

  // Handle the case where `param` exists
  if (!param) {
    return NextResponse.json(
      {
        error:
          "Missing param query parameter. Please provide a value for the param query parameter.",
      },
      { status: 400 }
    );
  }

  // Handle missing id

  try {
    let response;
    let tryCount = 0;

    // initialize api url
    const now: EpochTimeStamp = Math.floor(Date.now() / 1000); // Convert to seconds
    let startTime: EpochTimeStamp = (now - TWO_WEEKS) as EpochTimeStamp;
    // We'll keep track of the best (latest) data we've obtained
    let bestParamData: Parameter | null = null;
    ``;

    const token = await getHydrovuAuthToken();

    let responseData: any;

    // Try up to MAX_RETRIES times
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      let responseData: any;
      try {
        // 1) Attempt to fetch
        responseData = await fetchLocationData(id, startTime, token);
      } catch (error) {
        // 2) If this fetch failed for any reason, subtract 2 more weeks and retry
        if (attempt < MAX_RETRIES) {
          startTime -= TWO_WEEKS;
          continue; // go to next iteration
        } else {
          // If we're out of retries, fail with 500
          console.error(`All attempts failed. Last error: `, error);
          return NextResponse.json(
            { error: "Failed to fetch data after multiple retries." },
            { status: 500 }
          );
        }
      }

      // Transform the response data into LocationData format
      const locationData: LocationData = {
        locationId: responseData.data.locationId,
        parameters: responseData.data.parameters,
      };

      const paramData = locationData.parameters.find(
        (p) => p.parameterId === param
      );

      // Parameter missing: if we have more attempts, shift startTime and retry
      if (!paramData || !paramData.readings) {
        if (attempt < MAX_RETRIES) {
          startTime -= TWO_WEEKS;
          continue;
        } else {
          // No more retries
          return NextResponse.json(
            { error: `No data found for parameter '${param}'.` },
            { status: 404 }
          );
        }
      }

      // We have some data for the parameter
      bestParamData = paramData;

      // If we have at least 5 readings, we stop early; otherwise, keep trying
      if (paramData.readings.length >= 5) {
        break; // we consider this "good enough" to stop the loop
      } else {
        // Otherwise, subtract 2 weeks and go for the next attempt (unless this was our last)
        if (attempt < MAX_RETRIES) {
          startTime -= TWO_WEEKS;
          continue;
        }
      }
    }

    // After the loop, check if we got any data at all
    if (
      !bestParamData ||
      !bestParamData.readings ||
      bestParamData.readings.length === 0
    ) {
      return NextResponse.json(
        { error: `No data found for parameter '${param}'.` },
        { status: 404 }
      );
    }

    // Finally, limit to the latest 50 readings
    const limit = 50;
    const latestReadings = bestParamData.readings.slice(-limit);

    // Format timestamps
    const formattedReadings = latestReadings.map((reading) => ({
      ...reading,
      timestamp: new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(new Date(reading.timestamp * 1000)), // Convert seconds to ms
    }));

    return NextResponse.json({
      ...bestParamData,
      readings: formattedReadings,
    });

    // } while (response.data.parameters[0].readings.length < 5 && tryCount < 5);

    // for (const parameter of locationData.parameters) {
    //   // Match parameter with query param
    //   if (parameter.parameterId === param) {
    //     // Ensure parameter has readings
    //     if (parameter.readings.length > 0) {
    //       const limit = 50;
    //       // If limit is specified, return only the latest X readings
    //       const latestReadings = limit
    //         ? parameter.readings.slice(-limit)
    //         : parameter.readings;

    //       // Format timestamps in "Jan 16, 12:10pm" format
    //       const formattedReadings = latestReadings.map((reading) => ({
    //         ...reading,
    //         timestamp: new Intl.DateTimeFormat("en-US", {
    //           month: "short",
    //           day: "2-digit",
    //           hour: "numeric",
    //           minute: "numeric",
    //           hour12: true,
    //         }).format(new Date(reading.timestamp * 1000)), // Convert seconds to milliseconds
    //       }));

    //       // console.log("count", latestReadings.length);

    //       return NextResponse.json({
    //         ...parameter,
    //         readings: formattedReadings,
    //       });
    //     }
    //   }
    // }
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
