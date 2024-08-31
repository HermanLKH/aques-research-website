import fs from "fs/promises";
import path from "path";

export async function getActivityPhotos(id: string): Promise<string[]> {
  const directory = path.join(process.cwd(), "public", "images", id);
  try {
    const files = await fs.readdir(directory);
    return files
      .filter((file) => {
        const fileName = path.parse(file).name.toLowerCase();
        const fileExt = path.parse(file).ext.toLowerCase();
        return fileName !== "profile" && /\.(jpg|jpeg|png|gif)$/i.test(fileExt);
      })
      .map((file) => `/images/${id}/${file}`);
  } catch (error) {
    console.error(`Error reading directory: ${error}`);
    return [];
  }
}
