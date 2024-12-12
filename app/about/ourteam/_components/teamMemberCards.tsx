import { Profile } from "@/lib/types";
import TeamMemberCard from "./teamMemberCard";

export default function TeamMemberCards({
  researchers,
}: {
  researchers: Profile[];
}) {
  return (
    <div className="flex flex-wrap justify-center -mx-4">
      {researchers.map((researcher) => (
        <TeamMemberCard key={researcher.id} sResearcher={researcher} />
      ))}
    </div>
  );
}
