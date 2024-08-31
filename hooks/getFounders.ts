import { Profile } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import fs, { readFileSync } from "fs";
import path from "path";

const getFounders = () => {
  // Path to the profile data
  const founderFilePath = path.join(
    process.cwd(),
    "database/aquesTeam",
    "founders.json"
  );

  // Load founders data from the json files
  const founderData = fs.readFileSync(founderFilePath, "utf-8");
  const founders: Profile[] = JSON.parse(founderData);

  return founders;
};

export default getFounders;
