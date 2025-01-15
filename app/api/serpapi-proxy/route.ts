// app/api/serpapi-proxy/route.ts (App Router)
import { NextRequest, NextResponse } from "next/server";

/** Helper to fetch *all* articles for a single author, using pagination. */
async function fetchAllArticlesForAuthor(authorId: string, apiKey: string) {
  let allArticles: any[] = [];
  let currentStart = 0;
  let hasNext = true;

  while (hasNext) {
    // Build the query URL with the current 'start' offset
    const serpApiUrl = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&start=${currentStart}&api_key=${apiKey}`;

    const response = await fetch(serpApiUrl);
    if (!response.ok) {
      throw new Error(`SerpApi request failed for ${authorId}: ${response.statusText}`);
    }

    const data = await response.json();

    const articles = data.articles || [];
    allArticles.push(...articles);

    // Check if there's a next page
    const nextLink = data.serpapi_pagination?.next_link;
    if (nextLink) {
      // Increase 'currentStart' by however many articles we just got
      currentStart += articles.length;
    } else {
      // No next link => no more pages
      hasNext = false;
    }
  }

  return allArticles;
}

export async function GET(req: NextRequest) {
  try {
    // Your 4 SerpApi Author IDs
    const authorIds = [
      "taXOvK8AAAAJ", 
      "q2Sg9akAAAAJ", 
      "OgAndckAAAAJ",
      "gUqutgMAAAAJ"
    ];

    const apiKey = process.env.SERPAPI_API_KEY || "";
    let allCombinedArticles: any[] = [];

    // Fetch *all* pages for each author, then combine
    for (const authorId of authorIds) {
      const allArticlesForOneAuthor = await fetchAllArticlesForAuthor(authorId, apiKey);
      allCombinedArticles.push(...allArticlesForOneAuthor);
    }

    // (Optional) Sort combined articles by year descending
    allCombinedArticles.sort((a, b) => {
      const yearA = parseInt(a.year ?? "0", 10);
      const yearB = parseInt(b.year ?? "0", 10);
      return yearB - yearA;
    });

    return NextResponse.json(allCombinedArticles, { status: 200 });
  } catch (error: any) {
    console.error("SerpApi Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
