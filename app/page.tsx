import { useState, useEffect } from "react";
import Quiz from "@/components/quiz";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { getQuizQuestions } from "@/hooks/getQuizQuestions";
import { QuizQuestion } from "@/lib/types";
import AquaWatchData from "./_components/AquawatchData";

export default function Home() {
  // Get the current year and month
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-based index

  const quizQuestions: QuizQuestion[] = getQuizQuestions();

  return (
    <>
      {/* Section 1: Cover, title, description & learn more button */}
      <section>
        <div
          className="w-full flex justify-center relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/team_photo.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
          }}
        >
          {/* Container for background overlay */}
          <div className="bg-black bg-opacity-50 p-6 sm:p-10 w-full flex flex-col items-center justify-center">
            {/* Title */}
            <h1 className="font-bold text-3xl sm:text-5xl text-center text-white mb-3">
              <span className="text-cyan-300">Aqu</span>atic and{" "}
              <span className="text-cyan-300">E</span>nvironmental
              <span className="text-cyan-300">S</span>ciences
            </h1>
            {/* Description */}
            <p className="text-center text-white font-light text-sm sm:text-base">
              AquES is a multidisciplinary research group dedicated to
              investigating and resolving environmental challenges.
            </p>
            {/* Learn More Button */}
            <Button
              asChild
              variant="ghost"
              className="text-white mt-4 text-sm sm:text-md underline"
            >
              <Link href="/about">
                Learn more about AquES
                <HiArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Live display of AquaWatch data */}
      <AquaWatchData />

      {/* Section 3: Video Embed Below AquaWatch Data */}
      <section className="w-11/12 md:w-2/3 mx-auto my-8">
        {/* Responsive container using aspect-video */}
        <div className="relative w-full aspect-video border border-gray-300 rounded-lg shadow-lg">
          <iframe
            src="https://drive.google.com/file/d/1EUfmDnnF_Z5jj9RZdrim60cn6MmOvh2a/preview"
            allow="autoplay"
            frameBorder="0"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </section>

      {/* Section 4: Live display of AERONET data */}
      <section className="w-11/12 md:w-2/3 mx-auto text-center my-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">AERONET</h1>
        <p className="text-sm sm:text-md leading-relaxed mb-4">
          AERONET (Aerosol Robotic Network) is a global, ground-based remote
          sensing network of sun- and sky-scanning radiometers designed to
          provide long-term, continuous, and readily accessible observations of
          atmospheric aerosol characteristics. Operated under the oversight of
          NASA, in collaboration with various international agencies and
          research institutions, AERONET focuses on measuring how much sunlight
          is scattered or absorbed by airborne particles such as dust, smoke,
          pollution, and sea salt.
        </p>
        <p className="text-base sm:text-lg font-medium mb-6">
          Live display of AERONET data
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-8">
          <div className="w-full md:w-[300px] lg:w-[500px]">
            <Image
              src={`https://aeronet.gsfc.nasa.gov/cgi-bin/draw_data_chart_v3?site=GSFC&year=${currentYear}&aero_water=0&level=1&if_day=0&if_err=0`}
              width={500}
              height={500}
              alt="graph 1"
              className="border border-gray-300 rounded-lg w-full h-auto"
            />
          </div>
          <div className="w-full md:w-[300px] lg:w-[500px]">
            <Image
              src={`https://aeronet.gsfc.nasa.gov/cgi-bin/draw_data_chart_v3?site=GSFC&year=${currentYear}&month=${currentMonth}&aero_water=0&level=1&if_day=0&if_err=0`}
              width={500}
              height={500}
              alt="graph 2"
              className="border border-gray-300 rounded-lg w-full h-auto"
            />
          </div>
        </div>
        <p className="mt-6 text-center text-xs sm:text-sm text-gray-500">
          AERONET data sourced from{" "}
          <a
            href="https://aeronet.gsfc.nasa.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Aerosol Robotic Network (AERONET)
          </a>
        </p>
      </section>

      {/* Section 5: Quiz section */}
      <section className="bg-slate-50 py-8">
        <div className="w-11/12 sm:w-2/3 mx-auto flex flex-col justify-center">
          <Quiz questions={quizQuestions} />
        </div>
      </section>
    </>
  );
}
