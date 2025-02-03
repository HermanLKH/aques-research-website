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
          <div className="w-4/5 flex">
            <div className="w-1/3 flex items-stretch">
              <div className="w-full h-128 relative">
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
                Malaysian Borneo is experiencing rapid and large-scale
                environmental transformations, driven primarily by urban and
                agricultural expansion. These activities significantly alter
                natural habitats, impacting both local biodiversity and global
                environmental processes. Our research group investigates these
                changes by focusing on the dynamics of biogeochemical cycles in
                the Anthropocene, including the production and fluxes of
                greenhouse gases, the cycling of dissolved organic and inorganic
                carbon, and the pivotal role of microbial communities in shaping
                ecosystem function. In addition, we employ remote sensing
                techniques to monitor water quality and land-use changes over
                time, providing valuable spatial data for assessing the extent
                and impact of development. We are also exploring the emergence
                of microplastics as a critical environmental threat, examining
                their distribution, transport, and potential effects on
                ecological and human health. By integrating expertise in
                biogeochemistry, microbiology, geospatial analysis, and
                pollution research, our aim is to generate holistic insights
                that can guide sustainable environmental management and policy
                decisions in Malaysian Borneo and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex justify-center m-20">
          <div className="w-4/5 flex">
            <div className="w-2/3 pr-10">
              <h3 className="text-2xl font-bold">
                Team’s core values and culture
              </h3>
              <p className="mb-4 font-light">
                Our research group is founded on the principles of flat
                hierarchies, openness, and inclusiveness. We believe that every
                voice matters—regardless of background or experience—and we
                welcome individuals from all walks of life. By encouraging a
                culture of respect, collaboration, and shared responsibility, we
                foster a creative and supportive environment where everyone has
                the opportunity to learn, grow, and contribute meaningfully. We
                strive to make our group feel like home for our students, a
                place where they feel comfortable pursuing their research
                interests, taking intellectual risks, and developing both
                academically and personally. Our ultimate goal is for our work
                to make a genuine difference in the lives of our
                students—providing them with the skills, confidence, and
                inspiration to thrive in their future endeavours.
              </p>
            </div>
            <div className="w-1/3 flex items-stretch">
              <div className="w-full h-128 relative">
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
