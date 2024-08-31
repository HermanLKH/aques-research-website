import { Profile } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import fs, { readFileSync } from "fs";
import path from "path";

const getAlumni = () => {
  // Path to the profile data
  const alumniFilePath = path.join(
    process.cwd(),
    "database/aquesTeam",
    "alumni.json"
  );

  // Load alumni data from the json files
  const alumniData = fs.readFileSync(alumniFilePath, "utf-8");
  const alumni: Profile[] = JSON.parse(alumniData);

  return alumni;
};

export default getAlumni;
