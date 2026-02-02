import { Metadata } from "next";
import BlogClient from "./BlogClient";

type Blog = {
  id: string;
  title: string;
  author?: string;
  category?: string;
  content?: string;
  metaTitle?: string;
  metaDesc?: string;
  imageURL?: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/—/g, "-")
    .replace(/[^\w\s-]/g, "") // remove punctuation
    .replace(/\s+/g, "-");
}

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/"}/api/blogs`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch blogs");
  const data = await res.json();
  return data.blogs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blogs = await getBlogs();

  const blog = blogs.find(
    (b) => slugify(b.title) === slugify(decodeURIComponent(slug)),
  );

  return {
    title: blog?.metaTitle || blog?.title || "Blog",
    description: blog?.metaDesc || "",
    openGraph: {
      title: blog?.metaTitle || blog?.title,
      description: blog?.metaDesc || "",
      images: blog?.imageURL ? [blog.imageURL] : [],
      url: `https://www.milestonepm.co//${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog?.metaTitle || blog?.title,
      description: blog?.metaDesc || "",
      images: blog?.imageURL ? [blog.imageURL] : [],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find(
    (b) => slugify(b.title) === slugify(decodeURIComponent(slug)),
  );

  if (!blog) {
    return <div className="p-8 text-center text-gray-500">Blog not found</div>;
  }

  return <BlogClient blog={blog} />;
}
