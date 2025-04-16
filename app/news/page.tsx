"use client";

import React from "react";

export default function News() {
  return (
    <>
      {/* Section 1: Title & Description */}
      <section className="flex flex-col items-center my-12 sm:my-16 px-4">
        <div className="w-11/12 md:w-3/4 lg:w-3/5 mx-auto text-center">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">
            AquES <span className="text-cyan-600">News</span>
          </h1>
          <p className="font-light mt-2 text-sm sm:text-base md:text-lg">
            The latest updates on our research, events, and other articles of
            interest about AquES.
          </p>
        </div>
      </section>

      {/* Section 2: Social Media Feeds (Single Column) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8">
          Stay Connected
        </h2>

        {/* Facebook Feed */}
        <div className="bg-white shadow rounded p-3 sm:p-4 mb-8 sm:mb-10">
          <h3 className="text-base sm:text-lg font-semibold mb-4">
            Facebook Updates
          </h3>
          <iframe
            src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25528763"
            width="100%"
            className="w-full h-[500px] sm:h-[700px] md:h-[1000px]"
          ></iframe>
        </div>
      </section>
    </>
  );
}
