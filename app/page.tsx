import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function Home() {
  // Get the current year and month
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-based index

  return (
    <>
      {/* Section 1: Cover, title, description & learn more button */}
      <section>
        <div
          className="w-full flex justify-center relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/beachbg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
          }}
        >
          {/* Container for background overlay */}
          <div className="bg-black bg-opacity-50 p-10 w-full flex flex-col items-center justify-center">
            {/* Title */}
            <h1 className="font-bold text-5xl text-center text-white mb-4">
              <span className="text-cyan-300">Aqu</span>atic and{" "}
              <span className="text-cyan-300">E</span>nvironmental
              <span className="text-cyan-300">S</span>ciences
            </h1>
            {/* Description */}
            <p className="text-center text-white font-light text-base">
              AquES is a multidisciplinary research group dedicated to
              investigating and resolving environmental challenges.
            </p>
            {/* Learn More Button */}
            <Button
              asChild
              variant="ghost"
              className=" text-white mt-5 text-md underline"
            >
              <Link href="/">
                Learn more about AquES
                <HiArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Live Display of AquaWatch loggers & camera images */}
      <section>
        <p>Live Display of AquaWatch loggers & camera images</p>
      </section>

      {/* Section 3: Live display of AERONET data */}
      <section className="text-center my-8">
        <p>Live display of AERONET data</p>
        <div className="flex justify-center gap-8">
          <Image
            src={`https://aeronet.gsfc.nasa.gov/cgi-bin/draw_data_chart_v3?site=GSFC&year=${currentYear}&aero_water=0&level=1&if_day=0&if_err=0`}
            width={500}
            height={500}
            alt="graph 1"
            className="border border-gray-300 rounded-lg"
          ></Image>
          <Image
            src={`https://aeronet.gsfc.nasa.gov/cgi-bin/draw_data_chart_v3?site=GSFC&year=${currentYear}&month=${currentMonth}&aero_water=0&level=1&if_day=0&if_err=0`}
            width={500}
            height={500}
            alt="graph 2"
            className="border border-gray-300 rounded-lg"
          ></Image>
        </div>
      </section>

      {/* Section 4: Discover our Live Camera here */}
      <section>
        <p>Discover our live camera here</p>
      </section>
    </>
  );
}
