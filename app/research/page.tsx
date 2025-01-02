"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export default function Research() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Fetch images from the API
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/microplastics-pollution-images");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      {/* Section 1: Cover, title, description */}
      <section className="w-11/12 md:w-2/3 mx-auto mt-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Title and Description */}
        <div className="p-10 flex-1 md:mr-4 flex flex-col items-center md:items-start justify-center">
          {/* Title */}
          <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left text-black mb-4">
            Our <span className="text-cyan-700">Research</span>
          </h1>
          {/* Description */}
          <p className="text-center md:text-left text-black font-light leading-relaxed">
            At AQUES, our research is dedicated to studying various aspects of
            the Anthropocene, a defining period characterized by significant
            human impact on the environment.
          </p>
        </div>

        {/* Right Section: Carousel */}
        <div className="embla flex-1 md:ml-4">
          <div className="embla__viewport h-96 border" ref={emblaRef}>
            <div className="embla__container h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="embla__slide flex items-center justify-center"
                >
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="h-full w-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Explore Research */}
      <section className="mt-10 py-10 bg-slate-50">
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
                <Link href="/research/greenhouse-gas-emissions">
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
                <Link href="/research/microplastics-pollution">
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
                <Link href="/research/environmental-microbiology">
                  Learn more
                  <HiArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
