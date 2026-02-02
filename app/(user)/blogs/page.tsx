"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Editor } from "@/components/blocks/editor-00/editor";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
}

interface BlogsResponse {
  blogs: Blog[];
}

const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data: BlogsResponse = await res.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => {
      const bTime = b.id ? new Date(b.id).getTime() : 0;
      const aTime = a.id ? new Date(a.id).getTime() : 0;
      return bTime - aTime;
    });
  }, [blogs]);

  const featuredPost = sortedBlogs[0];
  const secondaryPosts = sortedBlogs.slice(1, 3);
  const remainingPosts = sortedBlogs.slice(3);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl tracking-tight">Loading...</div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-6xl font-light tracking-tight mb-4">
          Nothing Here Yet
        </h2>
        <p className="text-gray-500">Check back soon for new stories</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap");

        :root {
          --font-display: "Playfair Display", serif;
          --font-body: "IBM Plex Sans", sans-serif;
        }

        .font-display {
          font-family: var(--font-display);
        }

        .font-body {
          font-family: var(--font-body);
        }

        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hover-lift:hover {
          transform: translateY(-4px);
        }

        .img-reveal {
          position: relative;
          overflow: hidden;
        }

        .img-reveal img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .img-reveal:hover img {
          transform: scale(1.05);
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }

        .category-badge {
          position: relative;
          overflow: hidden;
        }

        .category-badge::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        .category-badge:hover::before {
          left: 100%;
        }
      `}</style>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-28 lg:pt-16 pb-12">
        <div className="mb-16 fade-in stagger-1">
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4">
            Stories
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-600 max-w-2xl">
            Exploring ideas at the intersection of technology, design, and
            culture
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Link
            href={`/blogs/${encodeURIComponent(
              featuredPost.title.toLowerCase().replace(/\s+/g, "-"),
            )}`}
            className="block"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 fade-in stagger-2 hover-lift">
              <div className="img-reveal rounded-2xl overflow-hidden border border-slate-400 h-[230px] lg:h-[400px] order-2 lg:order-1">
                <img
                  src={`/api/uploads/${featuredPost.image}`}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="category-badge inline-block px-4 py-2 bg-black text-white text-xs font-body font-medium tracking-widest uppercase rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm font-body text-gray-500">
                    {featuredPost.id
                      ? new Date(featuredPost.id).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })
                      : ""}
                  </span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                  {featuredPost.title}
                </h2>
                {featuredPost.content && (
                  <div className="font-body text-lg text-gray-700 mb-8 line-clamp-3">
                    <Editor
                      editorSerializedState={
                        typeof featuredPost.content === "string"
                          ? JSON.parse(featuredPost.content)
                          : featuredPost.content
                      }
                      readOnly
                      clampLines={3}
                      blogPage={false}
                    />
                  </div>
                )}
                <div className="flex items-center gap-3 text-sm font-body">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{featuredPost.author}</span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 font-body font-medium group">
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Secondary Posts */}
        {secondaryPosts.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {secondaryPosts.map((post, idx) => (
              <Link
                key={post.id}
                href={`/blogs/${encodeURIComponent(
                  post.title.toLowerCase().replace(/\s+/g, "-"),
                )}`}
                className={`block fade-in stagger-${idx + 3} hover-lift`}
              >
                <div className="img-reveal rounded-xl overflow-hidden h-[300px] mb-6">
                  <img
                    src={`/api/uploads/${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="category-badge inline-block px-3 py-1 bg-gray-900 text-white text-xs font-body font-medium tracking-wide uppercase rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs font-body text-gray-500">
                    {post.id
                      ? new Date(post.id).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      : ""}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold tracking-tight mb-4 leading-tight">
                  {post.title}
                </h3>
                {post.content && (
                  <div className="font-body text-gray-700 mb-4 line-clamp-2">
                    <Editor
                      editorSerializedState={
                        typeof post.content === "string"
                          ? JSON.parse(post.content)
                          : post.content
                      }
                      readOnly
                      clampLines={2}
                      blogPage={false}
                    />
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm font-body text-gray-600">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* All Posts Section */}
      {remainingPosts.length > 0 && (
        <section className="bg-white py-24">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-12">
              All Articles
            </h2>
            <BlogGrid blogs={remainingPosts} />
          </div>
        </section>
      )}
    </div>
  );
};

/* Blog Grid Component with Category Filter */
const BlogGrid = ({ blogs }: { blogs: Blog[] }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = new Set<string>(["All"]);
    blogs.forEach((blog) => {
      if (blog.category) cats.add(blog.category);
    });
    return Array.from(cats);
  }, [blogs]);

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-full font-body font-medium text-sm transition-all ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${encodeURIComponent(
                blog.title.toLowerCase().replace(/\s+/g, "-"),
              )}`}
              className="block hover-lift"
            >
              <article>
                <div className="img-reveal rounded-xl overflow-hidden h-[250px] mb-5">
                  <img
                    src={`/api/uploads/${blog.image}`}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="category-badge inline-block px-3 py-1 bg-gray-900 text-white text-xs font-body font-medium tracking-wide uppercase rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-xs font-body text-gray-500">
                    {blog.id
                      ? new Date(blog.id).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      : ""}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight mb-3 leading-tight line-clamp-2">
                  {blog.title}
                </h3>
                {blog.content && (
                  <div className="font-body text-gray-700 mb-4 line-clamp-2">
                    <Editor
                      editorSerializedState={
                        typeof blog.content === "string"
                          ? JSON.parse(blog.content)
                          : blog.content
                      }
                      readOnly
                      clampLines={2}
                      blogPage={false}
                    />
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm font-body text-gray-600">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="font-body text-gray-500 text-lg">
            No articles found in this category
          </p>
        </div>
      )}
    </>
  );
};

export default Page;
