import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Profile } from "@/lib/types";
import getFounders from "@/hooks/getFounders";
import getRStudents from "@/hooks/getRStudents";
import getSResearchers from "@/hooks/getSResearchers";
import getAlumni from "@/hooks/getAlumni";
import TeamMemberCards from "./_components/teamMemberCards";

export default function OurTeam() {
  // Load all members profile data
  const founders: Profile[] = getFounders();
  const sResearchers: Profile[] = getSResearchers();
  const alumni: Profile[] = getAlumni();
  const rStudents: Profile[] = getRStudents();

  return (
    <>
      {/* Section 1: Title & description */}
      <section className="flex flex-col items-center my-16 px-4">
        <div className="w-11/12 md:w-3/4 lg:w-3/5">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
            The AquES <span className="text-cyan-600">Team</span>
          </h1>
          <p className="text-center font-light mt-2 text-sm md:text-base">
            The Aquatic &amp; Environmental Sciences (AquES) Team at Swinburne
            Sarawak is dedicated to advancing research in aquatic ecosystems,
            water quality, and environmental sustainability. Our diverse team of
            experts collaborates on innovative projects aimed at solving
            critical environmental challenges and providing practical solutions
            for healthy aquatic environments.
          </p>
        </div>
      </section>

      {/* Section 2: Founders */}
      <section className="bg-slate-50 py-10 flex justify-center px-4">
        <div className="w-full lg:w-4/5 flex flex-wrap justify-center">
          <h1 className="w-full font-semibold text-3xl sm:text-4xl text-center mb-5">
            Founders
          </h1>
          <TeamMemberCards researchers={founders} />
        </div>
      </section>

      {/* Section 3: Senior Researchers */}
      <section className="py-10 flex justify-center px-4">
        <div className="w-full lg:w-4/5 flex flex-wrap justify-center">
          <h2 className="w-full font-semibold text-3xl sm:text-4xl text-center mb-5">
            Senior Researchers
          </h2>
          <TeamMemberCards researchers={sResearchers} />
        </div>
      </section>

      {/* Section 4: Research Students and Alumni */}
      <section className="bg-slate-50 py-12 flex justify-center px-4">
        <Tabs defaultValue="researchstudents" className="w-full max-w-lg">
          <TabsList className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-6">
            <TabsTrigger
              value="researchstudents"
              className="font-semibold text-base sm:text-lg w-full sm:w-auto px-4 py-2"
            >
              Research Students
            </TabsTrigger>
            <TabsTrigger
              value="alumni"
              className="font-semibold text-base sm:text-lg w-full sm:w-auto px-4 py-2"
            >
              Alumni
            </TabsTrigger>
          </TabsList>

          {/* Research Students */}
          <TabsContent value="researchstudents">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {rStudents.map((rStudent) => (
                <li key={rStudent.name}>
                  <Button
                    asChild
                    variant="link"
                    className="text-sm sm:text-base"
                  >
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
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {alumni.map((alumnus) => (
                <li key={alumnus.name}>
                  {alumnus?.contact?.linkedin ? (
                    <Button
                      asChild
                      variant="link"
                      className="text-sm sm:text-base"
                    >
                      <Link href={alumnus.contact.linkedin}>
                        {alumnus.name}
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="ghost"
                      className="text-sm sm:text-base"
                    >
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
