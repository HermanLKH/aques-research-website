import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const directoryPath = path.join(process.cwd(), "public/images/greenhouse-gas-emissions");

  try {
    const files = fs.readdirSync(directoryPath);
    const images = files
      .filter((file) => /\.(png|jpe?g|gif|webp)$/.test(file)) // Filter for image files
      .map((file) => `/images/greenhouse-gas-emissions/${file}`); // Add relative path

    return NextResponse.json(images);
  } catch (error) {
    console.error("Error reading directory:", error);
    return NextResponse.json({ error: "Failed to read image directory" }, { status: 500 });
  }
}
