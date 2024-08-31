import { Profile } from "@/lib/types";
import fs from "fs";
import path from "path";

const getSResearchers = () => {
  // Path to the profile data
  const sResearcherFilePath = path.join(
    process.cwd(),
    "database/aquesTeam",
    "seniorResearchers.json"
  );

  // Load senior researchers data from the json files
  const sResearcherData = fs.readFileSync(sResearcherFilePath, "utf-8");
  const SResearchers: Profile[] = JSON.parse(sResearcherData);

  return SResearchers;
};

export default getSResearchers;
