"use client";

import React from "react";

export default function News() {
  return (
    <>
      {/* Section 1: Title & Description */}
      <section className="flex flex-col items-center my-20">
        <div className="w-10/12 md:w-3/4 lg:w-3/5 mx-auto text-center">
          <h1 className="font-bold text-5xl">
            AquES <span className="text-cyan-600">News</span>
          </h1>
          <p className="font-light mt-2">
            The latest updates on our research, events, and other articles of
            interest about AquES.
          </p>
        </div>
      </section>
      {/* Section 2: Social Media Feeds (Single Column) */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <h2 className="text-xl font-semibold text-center mb-8">
          Stay Connected
        </h2>

        {/* Facebook Feed */}
        <div className="bg-white shadow rounded p-4 mb-10">
          <h3 className="text-lg font-semibold mb-4">Facebook Updates</h3>
          <iframe
            src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25528763"
            width="100%"
            height="1000"
          ></iframe>
        </div>
      </section>
    </>
  );
}
