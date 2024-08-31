import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Profile } from "@/lib/types";
import getFounders from "@/hooks/getFounders";
import getRStudents from "@/hooks/getRStudents";
import getSResearchers from "@/hooks/getSResearchers";
import getAlumni from "@/hooks/getAlumni";
import SResearcherCards from "./_components/sResearcherCards";
import FounderCards from "./_components/founderCards";

export default function OurTeam() {
  // Load all members profile data
  const founders: Profile[] = getFounders();
  const sResearchers: Profile[] = getSResearchers();
  const alumni: Profile[] = getAlumni();
  const rStudents: Profile[] = getRStudents();

  return (
    <>
      {/* Section 1: Title & description */}
      <section className="flex flex-col items-center my-20">
        <div className="w-5/6 md:w-3/4 lg:w-3/5">
          <h1 className="font-bold text-5xl text-center">
            The AquES <span className="text-cyan-600">Team</span>
          </h1>
          <p className="text-center font-light mt-2">
            The Aquatic & Environmental Sciences (AquES) Team at Swinburne
            Sarawak is dedicated to advancing research in aquatic ecosystems,
            water quality, and environmental sustainability. Our diverse team of
            experts collaborates on innovative projects aimed at solving
            critical environmental challenges, contributing to both scientific
            knowledge and practical solutions that support healthy aquatic
            environments.
          </p>
        </div>
      </section>

      {/* Section 2: Founders */}
      <section className="bg-slate-50 py-10 flex justify-center">
        <div className="w-full lg:w-4/5 flex flex-wrap justify-center">
          <h1 className="w-full font-semibold text-3xl text-center mb-5">
            Founders
          </h1>

          <FounderCards founders={founders} />
        </div>
      </section>

      {/* Section 3: Senior Researchers */}
      <section className="py-10 flex justify-center">
        <div className="w-full lg:w-4/5 flex flex-wrap justify-center">
          <h2 className="w-full font-semibold text-3xl text-center mb-5">
            Senior Researchers
          </h2>

          <SResearcherCards researchers={sResearchers} />
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
                    <Link href={rStudent?.contact?.linkedin || ""}>
                      {rStudent.name}
                    </Link>
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
                  {alumnus?.contact?.linkedin && (
                    <Button asChild variant="link" className="text-md">
                      <Link href={alumnus.contact.linkedin}>
                        {alumnus.name}
                      </Link>
                    </Button>
                  )}
                  {!alumnus?.contact?.linkedin && (
                    <Button asChild variant="ghost" className="text-md">
                      <p className="cursor-default">{alumnus.name}</p>
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
