import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import fs from "fs";
import getHydrovuAuthToken from "../../../../hooks/hydrovuAuth";
import { LocationData, Parameter, SisIdListing } from "@/lib/types";
import path from "path";
import { apiConfig } from "@/lib/const";

// Path to the data.json file
const dataFilePath = path.join(process.cwd(), "database", "data.json");
const sisIdListingPath = path.join(
  process.cwd(),
  "database",
  "SisIdListing.json"
);

async function fetchDeviceData(
  apiUrl: string,
  token: string,
  nextPage: string = ""
) {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-ISI-Start-Page": nextPage,
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // get location id from query param
  const id = params.id;

  // initialize api url & next page header
  let apiUrl: string = "";
  let nextPage: string = "";
  let startTime: EpochTimeStamp;
  const endTime: EpochTimeStamp = Date.now();

  // Load the data from the json files
  const rawData = fs.readFileSync(dataFilePath, "utf-8");
  const data: LocationData[] = JSON.parse(rawData);

  const rawSisIdListing = fs.readFileSync(sisIdListingPath, "utf-8");
  const sisIdListingData: SisIdListing = JSON.parse(rawSisIdListing);

  // get location data
  const locationData = data.find(
    (location: LocationData) => location?.locationId.toString() === id
  ) as LocationData;

  // if earliest time exists => fetch data from that time
  if (locationData.earliestTime) {
    startTime = locationData.earliestTime;
  }
  // if fetch data for the first time
  else {
    startTime = 1000;
  }

  // configure api
  apiUrl = `${apiConfig.baseUrl}/locations/${id}/data?startTime=${startTime}&endTime=${endTime}`;

  try {
    // get authentication token
    const token = await getHydrovuAuthToken();

    // initialize earliest time
    let earliestTime: EpochTimeStamp;

    // for debug only
    let x = 1;

    do {
      // get response object from api
      const response = await fetchDeviceData(apiUrl, token, nextPage);

      // for debug only
      console.log(`${x}. ${apiUrl}, next: ${nextPage}`);
      x += 1;

      // get response data & headers
      const responseData = response.data;
      const headers = response.headers;

      // find next page header
      nextPage = headers["x-isi-next-page"];

      // if next page header exists => there are more data to fetch
      if (nextPage) {
        // update api url with the next page header
      }

      // ensure location data is not undefined
      if (locationData) {
        // looping each parameter in response data
        for (const param of responseData.parameters as Parameter[]) {
          // find matching parameter in data.json
          const matchingParam = locationData.parameters.find(
            (p: Parameter) => p.parameterId === param.parameterId
          ) as Parameter | undefined;

          // if matched
          if (matchingParam) {
            param.readings.forEach((reading) => {
              if (reading.timestamp > matchingParam.latestTime) {
                matchingParam.readings.push(reading);
              }
            });
          }
          // if not matched => found new parameter
          else {
            param.parameterName =
              sisIdListingData.parameters[param.parameterId];
            param.unitName = sisIdListingData.units[param.unitId];

            locationData.parameters.push(param as Parameter);
          }

          // Update latest time for each parameter
          locationData.parameters.forEach((parameter) => {
            // ensure parameter has reading
            if (parameter.readings.length > 0) {
              // Update latestTime with the timestamp of the last reading
              parameter.latestTime =
                parameter.readings.at(-1)?.timestamp ?? parameter.latestTime;
            }
          });
        }
      }
    } while (nextPage);

    // Write updated data back to the file
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
