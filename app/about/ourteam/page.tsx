import { FaCheckCircle, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import fs, { readFileSync } from "fs";
import path from "path";
import { Profile } from "@/lib/types";

export default function OurTeam() {
  // Path to the profile data
  const founderFilePath = path.join(
    process.cwd(),
    "database/aquesTeam",
    "founders.json"
  );
  const sResearcherFilePath = path.join(
    process.cwd(),
    "database/aquesTeam",
    "seniorResearchers.json"
  );
  const alumniFilePath = path.join(
    process.cwd(),
    "database/aquesTeam",
    "alumni.json"
  );
  const rStudentFilePath = path.join(
    process.cwd(),
    "database/aquesTeam",
    "researchStudents.json"
  );

  // Load founders data from the json files
  const founderData = fs.readFileSync(founderFilePath, "utf-8");
  const founders: Profile[] = JSON.parse(founderData);

  // Load founders data from the json files
  const sResearcherData = fs.readFileSync(sResearcherFilePath, "utf-8");
  const sResearchers: Profile[] = JSON.parse(sResearcherData);

  // Load alumni data from the json files
  const alumniData = fs.readFileSync(alumniFilePath, "utf-8");
  const alumni: Profile[] = JSON.parse(alumniData);

  // Load research students data from the json files
  const rStudentData = fs.readFileSync(rStudentFilePath, "utf-8");
  const rStudents: Profile[] = JSON.parse(rStudentData);

  return (
    <>
      {/* Section 1: Title & description */}
      <section className="flex flex-col items-center my-20">
        <div className="w-10/12 md:w-3/4 lg:w-3/5">
          <h1 className="font-bold text-5xl text-center">
            The AquES <span className="text-cyan-600">Team</span>
          </h1>
          <p className="text-center font-light mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            architecto, provident magnam earum voluptate perspiciatis non quae
            quo. Culpa quis itaque laudantium placeat, commodi repudiandae aut
            perferendis velit incidunt voluptas..
          </p>
        </div>
      </section>

      {/* Section 2: Founders */}
      <section className="bg-slate-50 py-10 flex justify-center">
        <div className="w-full lg:w-4/5 flex flex-wrap justify-center">
          <h2 className="w-full font-semibold text-3xl text-center mb-5">
            Founders
          </h2>

          {founders.map((founder) => (
            // Founder Profile Card
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4 relative"
              key={founder.name}
            >
              <Image
                src={founder.profile_picture || "/images/elonmusk.jpg"}
                width={500}
                height={200}
                alt="Picture of Elon Musk"
                className="rounded-t-lg w-full h-[200px] object-cover"
              />
              <div className="p-5">
                <h6 className="text-sm text-cyan-600 font-normal">Founder</h6>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {founder.name}
                </h5>
                <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officiis obcaecati cupiditate quia eum quod, ea dolorum optio
                  minima atque culpa fugit quo aliquam quis eaque debitis
                  quaerat porro repellat quas.
                </p>
                <Link href={founder.contact.linkedin}>
                  <FaLinkedin className="absolute bottom-5 left-5 text-3xl hover:-translate-y-1 ease-in duration-100 cursor-pointer" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Senior Researchers */}
      <section className="py-10 flex justify-center">
        <div className="w-full lg:w-4/5 flex flex-wrap justify-center">
          <h2 className="w-full font-semibold text-3xl text-center mb-5">
            Senior Researchers
          </h2>

          {sResearchers.map((sResearcher) => {
            const bioSnippet = sResearcher?.bio
              ? `${sResearcher.bio.slice(0, 200)}${
                  sResearcher.bio.length > 200 ? " ..." : ""
                }`
              : "";

            return (
              <div
                key={sResearcher.name}
                className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4 relative"
              >
                <Image
                  src={sResearcher?.profile_picture || "/images/elonmusk.jpg"}
                  width={500}
                  height={200}
                  alt={`Profile Picture of ${sResearcher.name}`}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
                <div className="p-5">
                  <h6 className="text-sm text-cyan-600 font-normal">
                    Senior Researcher
                  </h6>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {sResearcher.name}
                  </h5>

                  <h6 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Area of Interest
                  </h6>
                  <ul className="mb-6 font-normal text-gray-700 dark:text-gray-400 list-disc list-inside space-y-2">
                    {sResearcher.area_of_interest?.map((interest, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cyan-600 mr-2">
                          <FaCheckCircle />
                        </span>
                        {interest}
                      </li>
                    ))}
                  </ul>
                  {/* <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                    {bioSnippet}
                  </p> */}
                  <Link href={sResearcher?.contact?.linkedin || ""}>
                    <FaLinkedin className="absolute bottom-5 left-5 text-3xl hover:-translate-y-1 ease-in duration-100 cursor-pointer" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4: Research Students */}
      <section className="bg-slate-50 py-12 flex justify-center">
        <Tabs defaultValue="researchstudents">
          <TabsList className="flex space-x-4">
            <TabsTrigger
              value="researchstudents"
              className="font-semibold text-lg w-[600px]"
            >
              Research Students
            </TabsTrigger>
            <TabsTrigger
              value="alumni"
              className="font-semibold text-lg w-[600px]"
            >
              Alumni
            </TabsTrigger>
          </TabsList>

          {/* Research Students */}
          <TabsContent value="researchstudents">
            <ul className="grid grid-cols-3 gap-4">
              {rStudents.map((rStudent) => (
                <li key={rStudent.name}>
                  <Button asChild variant="link" className="text-md">
                    <Link href="/">{rStudent.name}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </TabsContent>

          {/* Alumni */}
          <TabsContent value="alumni">
            <ul className="grid grid-cols-3 gap-4">
              {alumni.map((alumnus) => (
                <li key={alumnus.name}>
                  <Button asChild variant="link" className="text-md">
                    <Link href="/">{alumnus.name}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
