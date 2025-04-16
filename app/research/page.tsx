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
      {/* Section 1: Cover, Title, Description & Carousel */}
      <section className="w-11/12 lg:w-2/3 mx-auto mt-12 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section: Title and Description */}
        <div className="p-6 lg:p-10 flex-1 lg:mr-4 flex flex-col items-center lg:items-start justify-center">
          <h1 className="font-bold text-3xl lg:text-5xl text-center lg:text-left text-black mb-4">
            Our <span className="text-cyan-700">Research</span>
          </h1>
          <p className="text-center lg:text-left text-black font-light leading-relaxed text-sm lg:text-base">
            At AQUES, our research explores critical aspects of the
            Anthropocene— the era of significant human impact on nature—while
            developing innovative strategies for environmental sustainability.
          </p>
        </div>

        {/* Right Section: Carousel */}
        <div className="embla flex-1 lg:ml-4 w-full">
          <div className="embla__viewport h-80 lg:h-96 border" ref={emblaRef}>
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
        <h2 className="font-semibold text-2xl lg:text-3xl text-center">
          Our Focus of Investigations
        </h2>

        {/* Card 1: Greenhouse Gas Emissions */}
        <div className="flex justify-center m-8 lg:m-20">
          <div className="w-full lg:w-3/5 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 flex items-stretch">
              <Image
                src="/images/greenhousegases.jpg"
                width={500}
                height={0}
                className="h-full object-cover"
                alt="Greenhouse Gases"
              />
            </div>
            <div className="w-full lg:w-2/3 lg:pl-10 mt-4 lg:mt-0">
              <h3 className="text-xl lg:text-2xl font-bold">
                Greenhouse Gas Emissions
              </h3>
              <p className="font-light text-xs lg:text-sm text-cyan-700 mb-4">
                Aquatic Emissions Research | Climate Change Interactions |
                Modelling and Prediction
              </p>
              <p className="mb-4 text-xs lg:text-sm">
                We analyze the release of greenhouse gases—carbon dioxide,
                methane, and nitrous oxide—from peat-draining rivers, wetlands,
                and estuaries. Our models predict future emission trends under
                varying environmental scenarios, guiding effective mitigation
                strategies.
              </p>
              <Separator />
              <Button
                asChild
                variant="link"
                className="mt-5 text-xs lg:text-md text-cyan-700"
              >
                <Link href="/research/greenhouse-gas-emissions">
                  Learn more <HiArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Card 2: Microplastics Pollution and Bioremediation */}
        <div className="flex justify-center m-8 lg:m-20">
          <div className="w-full lg:w-3/5 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 flex items-stretch mt-4 lg:mt-0">
              <Image
                src="/images/microplastics.jpeg"
                width={500}
                height={0}
                className="h-full object-cover"
                alt="Microplastics"
              />
            </div>
            <div className="w-full lg:w-2/3 lg:pl-10 mt-4 lg:mt-0">
              <h3 className="text-xl lg:text-2xl font-bold">
                Microplastics Pollution and Bioremediation
              </h3>
              <p className="font-light text-xs lg:text-sm text-cyan-700 mb-4">
                Investigation of Sources and Distribution | Impact Assessment |
                Microbial Solutions
              </p>
              <p className="mb-4 text-xs lg:text-sm">
                We explore the origins and pathways of microplastics in aquatic
                systems and evaluate their ecological impacts. Our research also
                investigates the potential of microorganisms to biodegrade or
                remove microplastics, improving remediation efforts.
              </p>
              <Separator />
              <Button
                asChild
                variant="link"
                className="mt-5 text-xs lg:text-md text-cyan-700"
              >
                <Link href="/research/microplastics-pollution">
                  Learn more <HiArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Card 3: Environmental Microbiology */}
        <div className="flex justify-center m-8 lg:m-20">
          <div className="w-full lg:w-3/5 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 flex items-stretch">
              <Image
                src="/images/environmental_microbiology.jpg"
                width={500}
                height={0}
                className="h-full object-cover"
                alt="Environmental Microbiology"
              />
            </div>
            <div className="w-full lg:w-2/3 lg:pl-10 mt-4 lg:mt-0">
              <h3 className="text-xl lg:text-2xl font-bold">
                Environmental Microbiology
              </h3>
              <p className="font-light text-xs lg:text-sm text-cyan-700 mb-4">
                Microbial Diversity, Endophyte Research, Coral Microbiome &
                Biogeochemical Cycles
              </p>
              <p className="mb-4 text-xs lg:text-sm">
                Our studies investigate microbial communities in aquatic
                habitats— from bacteria and fungi to microalgae. We examine
                their roles in nutrient cycling, pollutant decomposition, and
                symbiotic relationships with plants and corals, contributing to
                ecosystem health and resilience.
              </p>
              <Separator />
              <Button
                asChild
                variant="link"
                className="mt-5 text-xs lg:text-md text-cyan-700"
              >
                <Link href="/research/environmental-microbiology">
                  Learn more <HiArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
