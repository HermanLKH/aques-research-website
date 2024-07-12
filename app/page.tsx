import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function Home() {
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
              className="animate-bounce text-white mt-5 text-md underline"
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
      <section>
        <p>Live display of AERONET data</p>
      </section>

      {/* Section 4: Discover our Live Camera here */}
      <section>
        <p>Discover our live camera here</p>
      </section>
    </>
  );
}
