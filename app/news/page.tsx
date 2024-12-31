"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type FacebookPost = {
  id: string;
  message?: string;
  attachments?: {
    data: {
      media: {
        image?: { src: string; height: number; width: number };
        source?: string;
      };
      type: string;
    }[];
  };
};

export default function News() {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  console.log(posts);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://graph.facebook.com/v21.0/349924188215337/feed?fields=message,attachments{media,video_url, type}&access_token=EAAHmZCN3kGl0BO8rgA2kwwHnKtDJRhaXUkiMYbDZADnRgvuQfpSneldXIfmAY9m94vYxjZAW6ZCTcrm24qLIKB47hET9pKPngNVMT5ZAVNON58NJNFrNjjzZCHNLgL2u2eCIgrkaJ0tdD6m2atYE2U4hyGO3tLSxGvvmEbdCZBjbebbB1Prh1ifIdgZBGXkSYe20"
        );
        const data = await response.json();
        setPosts(data.data.slice(0, 5)); // Fetch the latest 5 posts
      } catch (error) {
        console.error("Error fetching Facebook posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      {/* Section 1: Title & description */}
      <section className="flex flex-col items-center my-20">
        <div className="w-10/12 md:w-3/4 lg:w-3/5">
          <h1 className="font-bold text-5xl text-center">
            AquES <span className="text-cyan-600">News</span>
          </h1>
          <p className="text-center font-light mt-2">
            The latest updates on our research, events, and other articles of
            interest about AquES.
          </p>
        </div>
      </section>

      {/* Section 2: Facebook Posts */}
      <section className="bg-slate-50 py-10 flex justify-center">
        <div className="w-full lg:w-4/5 flex flex-col items-center">
          <h2 className="font-semibold text-3xl text-center mb-5">
            Latest Updates from Facebook
          </h2>
          <div className="space-y-8 w-full px-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start"
              >
                {post.message && (
                  <p className="text-gray-800 text-lg mb-4">
                    {post.message
                      .split("\n") // Split the message by line breaks
                      .map((line, lineIndex) => (
                        <span key={lineIndex}>
                          {line.split(" ").map((word, wordIndex) => {
                            // Check if the word starts with a '#'
                            if (word.startsWith("#")) {
                              return (
                                <span
                                  key={wordIndex}
                                  className="inline-block bg-cyan-600 text-white text-sm font-semibold py-1 px-3 rounded-full mr-2 mb-2"
                                >
                                  {word}
                                </span>
                              );
                            }
                            // If it's not a hashtag, render it as plain text with space
                            return <span key={wordIndex}>{word} </span>;
                          })}
                          <br /> {/* Add line break after each line */}
                        </span>
                      ))}
                  </p>
                )}

                {post.attachments?.data.map(
                  (attachment: { media: any; type: any }, i: number) => (
                    <div key={i} className="mt-4 flex justify-center mx-auto">
                      {attachment.type.includes("video") ? (
                        <video
                          controls
                          className="rounded-md"
                          width={attachment.media.image?.width || 640} // Default width if not present
                          height={attachment.media.image?.height || 360} // Default height if not present
                        >
                          <source
                            src={attachment.media.source}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <Image
                          src={attachment.media.image?.src || ""}
                          alt="Facebook post media"
                          width={attachment.media.image?.width || 640} // Default width if not present
                          height={attachment.media.image?.height || 360} // Default height if not present
                          className="rounded-md"
                        />
                      )}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: X Page */}
      <section className="py-10 flex justify-center">
        <div className="w-full lg:w-4/5 flex flex-col items-center">
          <h2 className="font-semibold text-3xl text-center mb-5">
            Visit Our X Page
          </h2>
        </div>
      </section>
    </>
  );
}
