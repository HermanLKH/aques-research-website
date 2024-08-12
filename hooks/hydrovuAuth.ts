import axios from "axios";

const getHydrovuAuthToken = async (): Promise<string> => {
  const clientId = process.env.HYDROVU_CLIENT_ID as string;
  const clientSecret = process.env.HYDROVU_CLIENT_SECRET as string;

  const tokenUrl = "https://www.hydrovu.com/public-api/oauth/token";
  const authString = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  try {
    const response = await axios.post(
      tokenUrl,
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authString}`,
        },
      }
    );

    return response.data.access_token; // Return the access token
  } catch (error) {
    console.error("Error fetching auth token:", error);
    throw new Error("Failed to obtain access token");
  }
};

export default getHydrovuAuthToken;
