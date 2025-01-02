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
        const response = await fetch("/api/greenhouse-gas-emissions-images");
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
            Greenhouse Gas Emissions
          </h2>
          <p>
            Rivers provide water and power and support freshwater fisheries,
            offer natural flood protection for cities, and sediment flows that
            keep the world’s deltas above the rising sea levels. Knowledge about
            rivers and coastal waters is, however, severely limited in tropical
            regions. This is particularly true for SEA where over 80% of the
            population live along coasts and rivers.
          </p>
          <p>
            A relative unknown and not well constrained source of greenhouse gas
            emissions (GHG) are rivers which connect land and ocean, and as such
            ‘pass on’ events from land (e.g. land clearing) to the aquatic
            ecosystems. Our group addresses severe knowledge gaps regarding GHG
            release from peat-draining rivers in SEA in close collaboration with
            colleagues from Germany, the UK, China, Singapore, and Australia.
            Together with colleagues from Germany we identified sources and
            sinks of riverine greenhouse gas emissions. In several studies (e.g.
            Müller et al. 2015, 2016a,b; Bange et al. 2018; see publications) we
            laid the groundwork for a regional assessment of carbon dioxide
            (CO2) emissions and observed some of the highest ever reported
            dissolved organic carbon (DOC) levels in rivers worldwide. We showed
            that Southeast Asia is not the river outgassing hotspot as
            previously assumed. River outgassing fluxes are in fact three times
            smaller compared to previous (computer model based) estimates which
            changes the view on the magnitude of river outgassing in Southeast
            Asia and thereby the budgeting of the global carbon cycle (Wit et
            al. 2015; see publications).
          </p>
          <p>
            One explanation is the low pH in these river systems, which hinders
            microbial decomposition and thus curbs CO₂ production. However,
            human-mediated inputs of carbonate minerals — through deforestation
            of river catchments, liming in plantations, or the deliberate
            application of enhanced weathering — can counter this pH limitation
            and promote higher CO₂ fluxes from rivers (Klemme et al. 2022; see
            publications). These disturbances lead not only to high carbon
            dioxide (CO₂) emissions from peat soils but also to greater leaching
            of peat-derived carbon into rivers and, ultimately, coastal waters.
          </p>
          <p>
            Funding awarded under the Australian Academy of Sciences Regional
            Collaborations Programme allowed us to intensify the use of remote
            sensing in our research to enable more long-term and spatially wider
            studies. We have since developed localised algorithms and semi-
            analytical models for dissolved organic carbon and suspended solids
            in complex coastal waters (Sim et al. 2020; Cherukuru et al. 2021;
            see publications) which are now being used to assess the long-term
            impact of landuse changes on riverine and coastal waters. Satellite
            observations from northwestern Borneo revealed that dissolved
            organic carbon (DOC) concentrations in coastal waters have risen
            substantially since 2002, driven in part by a ≥30% increase in
            terrigenous DOC linked to the conversion of regional peatland area
            to non-forest land cover (Sanwlani et al. 2022). This influx of DOC
            also increases underwater light absorption, potentially altering
            marine productivity.
          </p>
        </div>
      </section>
    </>
  );
}
