"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
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
      {/* Carousel Section */}
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

      {/* Research Content Section */}
      <section className="w-11/12 md:w-2/3 mx-auto my-10">
        {/* Using responsive text sizes: text-sm on mobile then text-base on md+; headings adjust similarly */}
        <div className="text-justify text-sm md:text-base leading-relaxed space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            Microplastics Pollution and Bioremediation
          </h2>
          <p>
            Globally, around half of plastic production is used for single-use
            packaging; roughly 10–14 million tonnes of this ends up in the
            oceans each year. As plastic degrades, it forms microplastics that
            can disrupt food webs and stress vital organisms.
          </p>
          <p>
            Accurate measurement of microplastics in water and sediments is
            challenging. In collaboration with partners, we have developed a
            fast and cost-effective method to map microplastic levels and their
            distribution across various ecosystems.
          </p>
          <p>
            We utilize Nile red staining to quantify the dispersion of
            microplastics in Sarawak, while FTIR analysis helps identify the
            types of polymers present. Our focus lies on coastal ecosystems and
            the communities dependent on local freshwater resources.
          </p>
          <p>
            Furthermore, our research investigates the interaction between
            microplastics and microbial communities, including the influence on
            gene expression in plastisphere ecosystems.
          </p>
          <p>
            We also examine microplastic uptake into the food chain and explore
            microbial solutions for biodegradation. This work includes isolating
            and characterizing bacteria and endophytic fungi capable of
            degrading various plastic polymers.
          </p>
        </div>
      </section>
    </>
  );
}
