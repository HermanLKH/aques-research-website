import Image from "next/image";

export default function OurTeam() {
  return (
    <>
      {/* Section 1: Title & description */}
      <section className="flex flex-col items-center my-20">
        <div className="w-5/6 md:w-3/4 lg:w-3/5">
          <h1 className="font-bold text-5xl text-center">
            About <span className="text-cyan-600">AquES</span>
          </h1>
          <p className="text-center font-light mt-2">
            The Aquatic and Environmental Sciences (AquES) Research Group is a
            dedicated team of researchers and scholars committed to advancing
            the understanding of aquatic ecosystems and environmental processes
            in Borneo. AquES focuses on interdisciplinary research to address
            critical environmental challenges.
          </p>
        </div>
      </section>

      {/* Section 2: About AquES */}
      <section>
        {/* Card 1 */}
        <div className="flex justify-center m-20">
          <div className="w-3/5 flex">
            <div className="w-1/3 flex items-stretch">
              <div className="w-full h-48 relative">
                <Image
                  src="/images/team_photo_3.jpeg"
                  fill
                  className="object-cover"
                  alt="Picture of team"
                />
              </div>
            </div>
            <div className="w-2/3 pl-10">
              <h3 className="text-2xl font-bold">Brief Introduction</h3>
              <p className="mb-4 font-light">
                Malaysian Borneo is undergoing rapid large-scale conversions
                including clearing of wetlands to develop aquaculture and
                urbanisation. Our research focuses on biogeochemical cycles in
                the Anthropocene, mainly greenhouse gases, dissolved organic and
                inorganic carbon, environmental microbiology, and recently
                remote sensing and microplastics.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex justify-center m-20">
          <div className="w-3/5 flex">
            <div className="w-2/3 pr-10">
              <h3 className="text-2xl font-bold">
                Team’s core values and culture
              </h3>
              <p className="mb-4 font-light">
                Flat hierarchies, openness and inclusiveness. We value
                everyone’s opinion and like characters from all sorts of life!
                We hope that our group feels like home to our students and that
                our research makes a difference in their lives!
              </p>
            </div>
            <div className="w-1/3 flex items-stretch">
              <div className="w-full h-48 relative">
                <Image
                  src="/images/team_photo_2.jpg"
                  fill
                  className="object-cover"
                  alt="Picture of team"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
