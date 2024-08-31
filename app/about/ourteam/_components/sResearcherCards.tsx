import { Profile } from "@/lib/types";
import SResearcherCard from "./sResearcherCard";

export default function SResearcherCards({
  researchers,
}: {
  researchers: Profile[];
}) {
  return (
    <div className="flex flex-wrap justify-center -mx-4">
      {researchers.map((researcher) => (
        <SResearcherCard key={researcher.id} sResearcher={researcher} />
      ))}
    </div>
  );
}
