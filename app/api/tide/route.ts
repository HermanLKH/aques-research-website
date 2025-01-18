import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
// Use named imports from Cheerio
import { load, Element } from "cheerio";

export async function GET(req: NextRequest) {
  try {
    const url = "https://tidechecker.com/malaysia/sarawak/santubong/";

    // Fetch the HTML content of the page
    const { data: html } = await axios.get(url);

    // Load the HTML into Cheerio (no default export anymore)
    const $ = load(html);

    // Normalize "today" to midnight
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Extract tide table data
    const tideData: any[] = [];
    $(".tc-table tbody tr").each((i: number, el: Element) => {
      if (tideData.length >= 7) {
        return;
      }

      const day = $(el).find("td").eq(0).text().trim();
      const year = new Date().getFullYear(); // Get the current year
      const date = new Date(`${day} ${year}`); // Create the date object

      // Compare the parsed date with today
      if (date >= today) {
        const lowAMTime = $(el).find("td").eq(1).text().trim();
        const lowAMHeight = $(el).find("td").eq(2).text().trim();
        const lowPMTime = $(el).find("td").eq(3).text().trim();
        const lowPMHeight = $(el).find("td").eq(4).text().trim();
        const highAMTime = $(el).find("td").eq(5).text().trim();
        const highAMHeight = $(el).find("td").eq(6).text().trim();
        const highPMTime = $(el).find("td").eq(7).text().trim();
        const highPMHeight = $(el).find("td").eq(8).text().trim();

        tideData.push({
          day,
          lowAM: { time: lowAMTime, height: lowAMHeight },
          highAM: { time: highAMTime, height: highAMHeight },
          lowPM: { time: lowPMTime, height: lowPMHeight },
          highPM: { time: highPMTime, height: highPMHeight },
        });
      }
    });

    // Return the scraped data as JSON
    return NextResponse.json({ tideData: tideData });
  } catch (error) {
    console.error("Error scraping tide data:", error);
    return NextResponse.json(
      { error: "Failed to scrape tide data" },
      { status: 500 }
    );
  }
}
