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
            <h1 className="font-bold text-5xl text-center text-white mb-4">
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
            <div className="w-1/3 flex items-stretch">
              <Image
                src="/images/greenhousegases.jpg"
                width={500} // Fixed width
                height={0} // Dynamic height
                className="h-full object-cover" // Full height, maintain aspect ratio
                alt="Picture of greenhouse gases"
              />
            </div>
            <div className="w-2/3 pl-10">
              <h3 className="text-2xl font-bold">Greenhouse Gas Emissions</h3>
              <p className="font-light text-sm text-cyan-700 mb-4">
                Aquatic Emissions Research | Climate Change Interactions |
                Modelling and Prediction
              </p>
              <p className="mb-4 text-sm">
                Examining the release of greenhouse gases such as carbon
                dioxide, methane, and nitrous oxide from peat-draining rivers,
                wetlands, and estuaries. Understanding how climate change
                influences greenhouse gas emissions from aquatic environments
                and how these emissions, in turn, affect global climate
                patterns. Creating models to predict future emission trends
                under various environmental scenarios, aiding in the development
                of mitigation policies.
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
              <h3 className="text-2xl font-bold">
                Microplastics Pollution and Bioremediation
              </h3>
              <p className="font-light text-sm text-cyan-700 mb-4">
                Investigation of Sources and Distribution | Impact Assessment on
                Ecosystems Interactions | Microbial Bioremediation Solutions
              </p>
              <p className="mb-4 text-sm">
                We study the origins and pathways of microplastics in freshwater
                and marine environments to understand how they enter and move
                through aquatic systems. Evaluating how microplastic pollution
                affects ecosystems like mangroves, coral reefs, including
                potential bioaccumulation in the food chain. At the intersection
                of microplastics and microbiology, we explore the use of
                microorganisms to degrade or remove microplastics from the
                environment. This includes isolating and characterising microbes
                capable of breaking down plastic polymers.
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
            <div className="w-1/3 flex items-stretch">
              <Image
                src="/images/microplastics.jpeg"
                width={500}
                height={0}
                className="h-full object-cover"
                alt="Picture of microplastics"
              />
            </div>
          </div>
        </div>

        {/* Card 3*/}
        <div className="flex justify-center m-20">
          <div className="w-3/5 flex">
            <div className="w-1/3 flex items-stretch">
              <Image
                src="/images/remotesensing.webp"
                width={500}
                height={0}
                className="h-full object-cover"
                alt="Picture of remote sensing"
              />
            </div>
            <div className="w-2/3 pl-10">
              <h3 className="text-2xl font-bold">Environmental Microbiology</h3>
              <p className="font-light text-sm text-cyan-700 mb-4">
                Microbial Diversity Studies | Endophyte Research | Coral
                Microbiome Studies | Biogeochemical Cycles
              </p>
              <p className="mb-4 text-sm">
                Investigating the diversity and function of microorganisms in
                aquatic habitats, including bacteria, archaea, fungi, and
                microalgae. Studying endophytic microorganisms that live within
                plants without causing harm. We focus on their roles in
                enhancing plant health, stress tolerance, and potential
                applications in phytoremediation and sustainable agriculture.
                Exploring the microbial communities associated with corals,
                including symbiotic relationships that contribute to coral
                health, resilience, and resistance to bleaching events.
                Examining how microbial communities contribute to nutrient
                cycling, decomposition, and the natural breakdown of pollutants
                in aquatic environments.
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
