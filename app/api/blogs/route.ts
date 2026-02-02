import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const dbPath = path.join(process.cwd(), "data", "db.json");

    if (!fs.existsSync(dbPath)) {
      return NextResponse.json({ blogs: [] });
    }

    const data = fs.readFileSync(dbPath, "utf-8");
    const db = JSON.parse(data);

    return NextResponse.json({ blogs: db.blogs || [] });
  } catch (err) {
    console.error("Error reading blogs:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blogs" },
      { status: 500 },
    );
  }
}
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const metaTitle = formData.get("metaTitle") as string;
    const metaDesc = formData.get("metaDesc") as string;
    const author = formData.get("author") as string;
    const category = formData.get("category") as string;
    const content = formData.get("content") as string;
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file uploaded" },
        { status: 400 },
      );
    }

    // Save image in data/uploads
    const uploadsDir = path.join(process.cwd(), "data", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, file.name);
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    const imageUrl = `${file.name}`;

    const blog = {
      id: Date.now(),
      title,
      metaTitle,
      metaDesc,
      author,
      category,
      content,
      image: imageUrl,
    };

    // Path to db.json
    const dbDir = path.join(process.cwd(), "data");
    const dbPath = path.join(dbDir, "db.json");

    // Ensure data directory exists
    if (!fs.existsSync(dbDir)) {
      fs.mkdirSync(dbDir, { recursive: true });
    }

    // Ensure db.json exists with default structure
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(
        dbPath,
        JSON.stringify({ blogs: [], contacts: [] }, null, 2),
        "utf-8",
      );
    }

    const data = fs.readFileSync(dbPath, "utf-8");
    const db = JSON.parse(data);

    // Make sure blogs exists
    if (!Array.isArray(db.blogs)) {
      db.blogs = [];
    }

    db.blogs.push(blog);

    // Write back to db.json
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), "utf-8");

    return NextResponse.json({ success: true, blog });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Upload failed" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const dbPath = path.join(process.cwd(), "data", "db.json");

    if (!fs.existsSync(dbPath)) {
      return NextResponse.json(
        { success: false, error: "No blogs found" },
        { status: 404 },
      );
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing id" },
        { status: 400 },
      );
    }

    type Blog = {
      id: string;
      title: string;
      metaTitle: string;
      metaDesc: string;
      author: string;
      category: string;
      content: string;
      image: string; // e.g., "/uploads/filename.jpg"
    };

    const data = fs.readFileSync(dbPath, "utf-8");
    const db = JSON.parse(data) as { blogs: Blog[] };
    db.blogs = Array.isArray(db.blogs) ? db.blogs : [];

    const blogToDelete = db.blogs.find((blog) => blog.id == id);
    if (blogToDelete?.image) {
      const imagePath = path.join(
        process.cwd(),
        "data/uploads",
        blogToDelete.image,
      );
      if (fs.existsSync(imagePath)) {
        try {
          fs.unlinkSync(imagePath); // delete image
          console.log(`🗑️ Deleted image: ${imagePath}`);
        } catch (err) {
          console.error("⚠️ Failed to delete image:", err);
        }
      }
    }

    // Filter out the blog
    const filteredBlogs = db.blogs.filter((blog) => blog.id != id);

    // Save updated blogs
    fs.writeFileSync(
      dbPath,
      JSON.stringify({ blogs: filteredBlogs }, null, 2),
      "utf-8",
    );

    return NextResponse.json({ success: true, blogs: filteredBlogs });
  } catch (err) {
    console.error("Error deleting blog:", err);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog" },
      { status: 500 },
    );
  }
}
