import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function Research() {
  return (
    <>
      {/* Section 1: Cover, title, description */}
      <section>
        <div
          className="w-full flex justify-center relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/wavebg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh", // Set the desired height here
          }}
        >
          {/* Container for background overlay */}
          <div className="bg-black bg-opacity-50 p-10 w-full flex flex-col items-center justify-center">
            {/* Title */}
            <h1 className="font-bold text-5xl  text-center text-white mb-4">
              Our <span className="text-cyan-300">Research</span>
            </h1>
            <p className="text-center text-white font-light">
              At AQUES, our research is dedicated to studying various aspects of
              the Anthropocene, a defining period characterized by significant
              human impact on the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Explore Research */}
      <section className="my-20">
        {/* Title */}
        <h2 className="font-medium text-3xl text-center">
          Our focus of investigations
        </h2>

        {/* Card 1*/}
        <div className="flex justify-center m-20">
          <div className="w-3/5 flex">
            <div className="w-1/3">
              <Image
                src="/images/greenhousegases.jpg"
                width={500}
                height={500}
                alt="Picture of greenhouse gases"
              />
            </div>
            <div className="w-2/3 pl-10">
              <h3 className="text-2xl font-bold mb-4">Greenhouse Gases</h3>
              <p className="mb-4">
                Investigating the emission, sequestration, and impact of
                greenhouse gases in aquatic ecosystems, contributing to the
                understanding of climate change and its effects on our
                environment.
              </p>
              <Separator />
              <Button
                asChild
                variant="link"
                className="mt-5 text-md text-cyan-700"
              >
                <Link href="/">
                  Learn more
                  <HiArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Card 2*/}
        <div className="flex justify-center m-20">
          <div className="w-3/5 flex">
            <div className="w-2/3 pr-10">
              <h3 className="text-2xl font-bold mb-4">Microplastics</h3>
              <p className="mb-4">
                Examining the presence and effects of microplastics in aquatic
                environments, addressing the growing concern of plastic
                pollution.
              </p>
              <Separator />
              <Button
                asChild
                variant="link"
                className="mt-5 text-md text-cyan-700"
              >
                <Link href="/">
                  Learn more
                  <HiArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="w-1/3">
              <Image
                src="/images/microplastics.jpeg"
                width={500}
                height={500}
                alt="Picture of microplastics"
              />
            </div>
          </div>
        </div>

        {/* Card 3*/}
        <div className="flex justify-center m-20">
          <div className="w-3/5 flex">
            <div className="w-1/3">
              <Image
                src="/images/remotesensing.webp"
                width={500}
                height={500}
                alt="Picture of microplastics"
              />
            </div>
            <div className="w-2/3 pl-10">
              <h3 className="text-2xl font-bold mb-4">Remote Sensing</h3>
              <p className="mb-4">
                Utilising remote sensing technology to monitor and understand
                environmental changes, aiding in informed decision-making.
              </p>
              <Separator />
              <Button
                asChild
                variant="link"
                className="mt-5 text-md text-cyan-700"
              >
                <Link href="/">
                  Learn more
                  <HiArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* View more link */}
        <div className="flex justify-center m-20">
          <Button
            variant="link"
            className="text-cyan-700 text-md animate-bounce"
          >
            More Research Focus
            <HiArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
