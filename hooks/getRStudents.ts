import { Profile } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import fs, { readFileSync } from "fs";
import path from "path";

const getRStudents = () => {
  // Path to the profile data
  const rStudentFilePath = path.join(
    process.cwd(),
    "database/aquesTeam",
    "researchStudents.json"
  );

  // Load research students data from the json files
  const rStudentData = fs.readFileSync(rStudentFilePath, "utf-8");
  const rStudents: Profile[] = JSON.parse(rStudentData);

  return rStudents;
};

export default getRStudents;
