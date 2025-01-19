import { LocationData, SisIdListing } from "@/lib/types";
import { NextResponse } from "next/server";
import path from "path";
import axios from "axios";
import getHydrovuAuthToken from "../../../../../hooks/hydrovuAuth";
import { apiConfig } from "@/lib/const";

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
    // initialize api url
    const now: EpochTimeStamp = Math.floor(Date.now() / 1000); // Convert to seconds
    const startTime: EpochTimeStamp = (now - 862800) as EpochTimeStamp;

    const token = await getHydrovuAuthToken();

    // configure api
    const apiUrl = `${apiConfig.baseUrl}/locations/${id}/data?startTime=${startTime}`;

    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Transform the response data into LocationData format
    const locationData: LocationData = {
      locationId: response.data.locationId,
      parameters: response.data.parameters,
    };

    for (const parameter of locationData.parameters) {
      // Match parameter with query param
      if (parameter.parameterId === param) {
        // Ensure parameter has readings
        if (parameter.readings.length > 0) {
          const limit = 50;
          // If limit is specified, return only the latest X readings
          const latestReadings = limit
            ? parameter.readings.slice(-limit)
            : parameter.readings;

          // Format timestamps in "Jan 16, 12:10pm" format
          const formattedReadings = latestReadings.map((reading) => ({
            ...reading,
            timestamp: new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "2-digit",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }).format(new Date(reading.timestamp * 1000)), // Convert seconds to milliseconds
          }));

          // console.log("count", latestReadings.length);

          return NextResponse.json({
            ...parameter,
            readings: formattedReadings,
          });
        }
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
