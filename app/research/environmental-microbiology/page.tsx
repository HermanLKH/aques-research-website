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
        const response = await fetch("/api/environmental-microbiology-images");
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
        <div className="text-justify text-lg leading-relaxed space-y-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Environmental Microbiology
          </h2>
          <p>
            A key research goal of our group is to understand how microorganisms
            drive processes and control the coupling of essential element cycles
            in aquatic and terrestrial environments. Microorganisms have
            experienced billions of years’ worth of evolution and have formed
            vast and complex communities of bacteria, archaea, protists and
            fungi. These microscopic creatures play vital roles in marine and
            terrestrial ecosystem by mediating geochemical cycles, allowing for
            example for rapid nutrient recycling.
          </p>
          <p>
            The South China Sea is one of the most diverse but also one of the
            most understudied ecosystems. We are assessing the diversity of
            microbial life in the South China Sea and try to understand their
            role in local ecosystems such as coral reefs and rivers (e.g. Sia et
            al. 2019; Song et al. 2018). There are very few published reports
            available about coral- associated microbial communities in Sarawak
            and our group takes a closer look at the bacteria in our local reefs
            and their potential role in coral defence as well as their response
            to changing temperatures (e.g. Kuek et al. 2016).
          </p>
          <p>
            The interaction between various microbes, often competing for space,
            is another area often neglected in ecological studies and the vast
            biodiversity of Sarawak offers intriguing research opportunities in
            this area. Endophytic fungi live their whole life in plants and have
            been shown to play important roles for their survival, especially by
            producing antimicrobial compounds. Our group has been collecting
            samples in remote and undisturbed environments such as the Heart of
            Borneo and Kuching Wetlands National Park. Most of our work focuses
            on the potential use of these highly specialised fungi for
            bioremediation of heavy metals and plastic components (e.g Onn et
            al. 2016; Lii et al. 2017; Wong et al. 2018).
          </p>
        </div>
      </section>
    </>
  );
}
