"use client";

import React, { useEffect, useState } from "react";
import { deduplicateBy } from "@/lib/helper";

interface Article {
  title: string;
  link: string;
  citation_id?: string;
  authors?: string;
  publication?: string;
  cited_by?: {
    value: number;
    link: string;
    serpapi_link: string;
    cites_id: string;
  };
  year?: string;
}

export default function PublicationsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string>("");

  // Scholar Profiles (fallback if we can’t fetch data)
  const scholarProfiles = [
    {
      name: "Moritz Müller",
      specialised: ["Biogeochemistry"],
      link: "https://scholar.google.com.my/citations?user=taXOvK8AAAAJ&hl=en",
    },
    {
      name: "Aazani Mujahid",
      specialised: [
        "Physical Operational Oceanography",
        "Shelf Seas",
        "Coral Reefs",
        "Climate Change Adaptation",
      ],
      link: "https://scholar.google.com.my/citations?user=q2Sg9akAAAAJ&hl=en",
    },
    {
      name: "Changi Wong",
      specialised: [
        "Endophytes",
        "Natural Products",
        "Plant Tissue Culture",
        "Microplastic",
        "Biogeochemistry",
      ],
      link: "https://scholar.google.com.my/citations?hl=en&user=OgAndckAAAAJ",
    },
    {
      name: "Jenny Choo",
      specialised: [
        "Remote Sensing",
        "Earth Observation",
        "Water Quality",
        "Land Changes",
        "Biogeochemistry",
      ],
      link: "https://scholar.google.com/citations?user=gUqutgMAAAAJ&hl=en",
    },
  ];

  useEffect(() => {
    fetch("/api/serpapi-proxy")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error fetching data: ${res.status}`);
        }
        return res.json() as Promise<Article[]>;
      })
      .then((fetchedArticles) => {
        console.log("Raw fetched articles:", fetchedArticles);
        const beforeCount = fetchedArticles.length;
        const uniqueArticles = deduplicateBy(fetchedArticles, "title");
        console.log("Articles count before deduplication:", beforeCount);
        console.log(
          "Articles count after deduplication:",
          uniqueArticles.length
        );
        setArticles(uniqueArticles);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setError(err.message);
      });
  }, []);

  return (
    <section className="flex flex-col items-center my-20">
      <div className="w-11/12 md:w-3/4 lg:w-3/5">
        <h1 className="font-bold text-4xl md:text-5xl text-center mb-5">
          Research <span className="text-cyan-600">Publications</span>
        </h1>
        <p className="text-center font-light text-sm md:text-base mb-10">
          Explore the extensive work published by our team.
        </p>

        {/* If there's an error fetching, show the 4 Scholar profile links */}
        {error ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scholarProfiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border rounded-lg p-4 md:p-5 hover:bg-cyan-50 transition"
                >
                  <h2 className="text-base md:text-lg font-semibold">
                    {profile.name}
                  </h2>
                  <p className="font-light text-xs md:text-sm text-cyan-700 mb-2">
                    {profile.specialised.join(" | ")}
                  </p>
                  <p className="text-xs md:text-sm font-light text-gray-700">
                    Visit Google Scholar Profile
                  </p>
                </a>
              ))}
            </div>
          </div>
        ) : !articles.length ? (
          <p className="text-center text-sm md:text-base">Loading...</p>
        ) : (
          // Otherwise, show the scraped publications, with numbering
          articles.map((article, idx) => (
            <div key={article.citation_id || idx} className="pb-3">
              <strong className="mr-2">{idx + 1}.</strong>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:underline text-xs md:text-sm"
              >
                {article.title}
              </a>
              <div className="text-xs md:text-sm text-gray-600">
                {article.authors && <div>Authors: {article.authors}</div>}
                {article.year && <div>Year: {article.year}</div>}
                {article.cited_by?.value && (
                  <div>Cited by: {article.cited_by.value}</div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
