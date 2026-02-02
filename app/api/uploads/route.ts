import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const uploadsDir = path.join(process.cwd(), "data", "uploads");

    if (!fs.existsSync(uploadsDir)) {
      return NextResponse.json({ message: "Uploads folder not found", images: [] });
    }

    const files = fs.readdirSync(uploadsDir).filter(file =>
      /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
    );

    return NextResponse.json({ images: files });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
