import { Profile } from "@/lib/types";
import FounderCard from "./founderCard";
export default function FounderCards({ founders }: { founders: Profile[] }) {
  return (
    <div className="flex flex-wrap justify-around">
      {founders.map((founder) => (
        <FounderCard key={founder.id} founder={founder} />
      ))}
    </div>
  );
}
