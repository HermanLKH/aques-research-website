import getFounders from "@/hooks/getFounders";
import getSResearchers from "@/hooks/getSResearchers";
import { Profile } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // get location id from query param
  const id = params.id;

  // initialize variables
  let profiles: Profile[] = getSResearchers();

  if (!profiles) {
    return NextResponse.json(
      { error: "Failed to fetch profile data" },
      { status: 500 }
    );
  }

  const profile = profiles.find((profile) => profile.id === id);

  if (profile) {
    return NextResponse.json({ profile });
  }

  return NextResponse.json(
    { error: "Failed to fetch profile data" },
    { status: 500 }
  );
}
