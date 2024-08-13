import { NextResponse } from "next/server";
import axios from "axios";
import getHydrovuAuthToken from "../../../hooks/hydrovuAuth";
import { apiConfig } from "@/lib/const";

export async function GET() {
  try {
    const token = await getHydrovuAuthToken();
    const apiUrl = `${apiConfig.baseUrl}/locations/list`;

    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
