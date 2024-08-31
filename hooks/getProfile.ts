import { Profile } from "@/lib/types";
import axios from "axios";
import getSResearchers from "./getSResearchers";
import getFounders from "./getFounders";

export async function getProfile(id: string): Promise<Profile | null> {
  if (id.startsWith("fdr")) {
    const profiles: Profile[] = getFounders();
    return profiles.find((profile) => profile.id === id) || null;
  } else if (id.startsWith("sr")) {
    const profiles: Profile[] = getSResearchers();
    return profiles.find((profile) => profile.id === id) || null;
  } else {
    return null;
  }
}
