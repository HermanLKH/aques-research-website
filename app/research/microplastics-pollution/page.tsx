"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function MicroplasticsPollutionCarousel() {
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
      <section>
        <div className="embla mx-auto mt-12 w-11/12 md:w-2/3">
          {/* Use a smaller height on mobile (h-72) and increase on md+ (h-96) */}
          <div className="embla__viewport h-72 md:h-96 border" ref={emblaRef}>
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
                    width={800}
                    height={400}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Research content */}
      <section className="w-11/12 md:w-2/3 mx-auto my-10">
        {/* Using responsive text sizes: text-sm on mobile then text-base on md+; headings adjust similarly */}
        <div className="text-justify text-sm md:text-base leading-relaxed space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            Microplastics Pollution and Bioremediation
          </h2>
          <p>
            Globally, around half of the plastic production is used for
            single-use packaging; around 10-14 million tonnes of this ends up in
            the oceans every year. Plastic gradually breaks down to produce
            smaller microplastics, which are eaten by and cause stress to a wide
            variety of organisms that are vital parts of food webs.
          </p>
          <p>
            Counting microplastics in water and sediments is a challenging
            undertaking. Through collaborative work, a cheap and quick
            methodology has been developed to map microplastic levels and
            distribution across a range of habitats and ecosystems. You can find
            out more about it on our{" "}
            <a
              href="https://www.youtube.com/channel/UCLkxWImT8LOt5iyAEBgPBkg"
              className="text-cyan-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube channel
            </a>
            .
          </p>
          <p>
            We use Nile red to quantify the distribution of microplastics across
            Sarawak. FTIR is used to identify the types of polymers we find. A
            particular focus of our work lies on coastal ecosystems and local
            communities who often rely on collecting water via rain collection
            or freshwater springs. We assess the drinking water for these
            vulnerable communities to ensure they get access to clean and safe
            drinking water.
          </p>
          <p>
            One of the key issues surrounding (micro)plastics is the potential
            impact on the environment, food chains, and ultimately us humans. A
            lot of our work focuses on the interaction of microplastics with
            microbes, for example the impact of microplastics on gene
            expressions in microbial plastisphere communities (e.g. Rahman et
            al. 2021; see our publications).
          </p>
          <p>
            We also investigate the issue of uptake of microplastics into the
            food chain (e.g. Jang et al. 2022; see our publications).
            Importantly, we try to understand the potential use of microbes as a
            solution to the microplastic problem. We isolate bacteria and
            endophytic fungi that can degrade various plastic polymers and
            assess their genomics.
          </p>
        </div>
      </section>
    </>
  );
}
