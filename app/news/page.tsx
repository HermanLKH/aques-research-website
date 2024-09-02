"use client";
import React from "react";

// News Component
export default function News() {
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

      {/* Section 2: Facebook */}
      <section className="bg-slate-50 py-10 flex justify-center">
        <div className="w-full lg:w-4/5 flex flex-col items-center">
          {/* subheader */}
          <h2 className="font-semibold text-3xl text-center mb-5">
            Visit Our Facebook Page
          </h2>
        </div>
      </section>
    </>
  );
}
