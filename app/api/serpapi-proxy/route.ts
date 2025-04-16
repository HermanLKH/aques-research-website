// app/api/serpapi-proxy/route.ts (App Router)
import { NextRequest, NextResponse } from "next/server";

/** Helper to fetch *all* articles for a single author, using pagination. */
async function fetchAllArticlesForAuthor(authorId: string, apiKey: string) {
  let allArticles: any[] = [];
  let currentStart = 0;
  let hasNext = true;

  while (hasNext) {
    const serpApiUrl = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&start=${currentStart}&api_key=${apiKey}`;
    console.log(`Fetching for author ${authorId} at start=${currentStart}: ${serpApiUrl}`);

    const response = await fetch(serpApiUrl);
    if (!response.ok) {
      throw new Error(`SerpApi request failed for ${authorId}: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(`Data received for author ${authorId}:`, data);

    const articles = data.articles || [];
    console.log(`Fetched ${articles.length} articles for author ${authorId} from start index ${currentStart}`);
    allArticles.push(...articles);

    const nextLink = data.serpapi_pagination?.next_link;
    console.log(`Pagination next_link for author ${authorId}:`, nextLink);
    if (nextLink) {
      currentStart += articles.length;
    } else {
      hasNext = false;
    }
  }
  return allArticles;
}

export async function GET(req: NextRequest) {
  try {
    const authorIds = [
      "taXOvK8AAAAJ", 
      "q2Sg9akAAAAJ", 
      "OgAndckAAAAJ",
      "gUqutgMAAAAJ"
    ];
    const apiKey = process.env.SERPAPI_API_KEY || "";
    let allCombinedArticles: any[] = [];

    for (const authorId of authorIds) {
      const articlesForOneAuthor = await fetchAllArticlesForAuthor(authorId, apiKey);
      console.log(`Total articles fetched for author ${authorId}:`, articlesForOneAuthor.length);
      allCombinedArticles.push(...articlesForOneAuthor);
    }

    console.log("Combined articles count before processing:", allCombinedArticles.length);

    // Process articles: if year is empty, assign a numeric default of -1 for sorting purposes and display as "NA"
    const processedArticles = allCombinedArticles.map((article) => {
      // Check if "year" is empty or consists solely of whitespace
      if (!article.year || article.year.trim() === "") {
        return {
          ...article,
          sortYear: -1, // Use a numeric value that will sort at the bottom
          year: "NA",   // Change empty string to "NA" for display
        };
      }
      // Otherwise, parse the year for numeric sorting
      return {
        ...article,
        sortYear: parseInt(article.year, 10)
      };
    });

    // Sort descending by sortYear so that higher years come first and any articles with -1 are at the end
    processedArticles.sort((a, b) => b.sortYear - a.sortYear);

    // (Optional) Cleanup: remove the temporary sortYear field if you don't want it in the final output
    processedArticles.forEach((article) => {
      delete article.sortYear;
    });

    console.log("Sending processed and sorted articles.");
    return NextResponse.json(processedArticles, { status: 200 });
  } catch (error: any) {
    console.error("SerpApi Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
