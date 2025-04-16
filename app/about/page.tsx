import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Section 1: Title & Description */}
      <section className="flex flex-col items-center my-12 sm:my-16 md:my-20 px-4">
        <div className="w-11/12 md:w-3/4 lg:w-3/5">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
            About <span className="text-cyan-600">AquES</span>
          </h1>
          <p className="text-center font-light mt-2 text-sm md:text-base">
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
        {/* Card 1: Brief Introduction */}
        <div className="flex justify-center my-8 sm:my-12 md:my-16">
          <div className="w-11/12 flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/3 flex items-stretch">
              {/* Use responsive heights: h-64 on mobile, h-80 on sm, h-96 on md+ */}
              <div className="w-full h-64 sm:h-80 md:h-96 relative">
                <Image
                  src="/images/team_photo_3.jpeg"
                  fill
                  className="object-cover"
                  alt="Picture of team"
                />
              </div>
            </div>
            {/* Text Section */}
            <div className="w-full md:w-2/3 md:pl-6 lg:pl-10 mt-4 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold">
                Brief Introduction
              </h3>
              <p className="mb-4 font-light text-xs sm:text-sm md:text-base">
                Malaysian Borneo is experiencing rapid and large-scale
                environmental transformations driven primarily by urban and
                agricultural expansion. These activities significantly alter
                natural habitats, impacting both local biodiversity and global
                environmental processes. Our research group investigates these
                changes by focusing on the dynamics of biogeochemical cycles in
                the Anthropocene, including greenhouse gas production, carbon
                cycling, and the pivotal role of microbial communities in
                ecosystem function. We also employ remote sensing to monitor
                water quality and land-use changes over time.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Team’s Core Values and Culture */}
        <div className="flex justify-center my-8 sm:my-12 md:my-16">
          <div className="w-11/12 flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/3 flex items-stretch">
              {/* Use responsive heights: h-64 on mobile, h-80 on sm, h-96 on md+ */}
              <div className="w-full h-64 sm:h-80 md:h-96 relative">
                <Image
                  src="/images/team_photo_2.jpg"
                  fill
                  className="object-cover"
                  alt="Picture of team"
                />
              </div>
            </div>
            {/* Text Section */}
            <div className="w-full md:w-2/3 md:pl-6 lg:pl-10 mt-4 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold">
                Team’s Core Values and Culture
              </h3>
              <p className="mb-4 font-light text-xs sm:text-sm md:text-base">
                Our research group is founded on flat hierarchies, openness, and
                inclusiveness. We believe every voice matters—regardless of
                background or experience. By fostering a culture of respect,
                collaboration, and shared responsibility, we create a supportive
                environment where everyone can learn, grow, and contribute
                meaningfully. We aim for our group to feel like home for our
                students, empowering them to pursue their research interests,
                take intellectual risks, and develop both academically and
                personally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
