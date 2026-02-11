"use client";
import BlogCards from "./blogsCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "How Regular Car Servicing Saves You Money",
      desc: "Routine maintenance not only improves performance but also prevents costly repairs in the long run. Here’s why regular servicing matters.",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
      author: "Faheem Khan",
      tag: "Maintenance",
      time: "5 min read",
    },
    {
      id: 2,
      title: "Top 10 Signs Your Car Needs Immediate Attention",
      desc: "Ignoring warning signs can lead to serious damage. Learn the most common indicators that your car needs professional inspection.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      author: "Auto Expert Team",
      tag: "Safety",
      time: "6 min read",
    },
    {
      id: 3,
      title: "Petrol vs Diesel: Which Engine Is Right for You?",
      desc: "Choosing between petrol and diesel depends on your driving habits, budget, and maintenance expectations. Let’s break it down.",
      image:
        "https://images.unsplash.com/photo-1654334036171-e01e52b2ce8e?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Rohit Sharma",
      tag: "Guide",
      time: "7 min read",
    },
    {
      id: 4,
      title: "Essential Car Care Tips for Long Road Trips",
      desc: "Planning a long drive? These essential car care tips will help ensure a smooth, safe, and stress-free journey.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      author: "Service Advisor",
      tag: "Travel",
      time: "4 min read",
    },
  ];

  return (
    <div className="bg-black mb-20 py-10">
      <div className="container">
        <h2 className="text-4xl  font-bold text-white text-center ">Insights & Stories</h2>

        <Carousel className="w-full mt-6">
          <CarouselContent>
            {blogs.map((blog) => (
              <CarouselItem key={blog.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <BlogCards blog={blog} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:block hidden" />
          <CarouselNext className="md:block hidden" />
        </Carousel>
      </div>
    </div>
  );
};

export default Blogs;
