"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Star, StarIcon } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Link from "next/link";
interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
}

// Sample Google reviews data
const GOOGLE_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "January 2026",
    text: "Absolutely phenomenal service! The team went above and beyond to ensure our project was completed on time and exceeded expectations. Highly recommend!",
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    date: "December 2025",
    text: "Professional, responsive, and incredibly knowledgeable. They transformed our vision into reality with attention to every detail.",
    avatar: "/avatars/michael.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    date: "November 2025",
    text: "Great experience overall! Communication was excellent and the final product looks amazing. Would definitely work with them again.",
    avatar: "/avatars/emily.jpg",
  },
  {
    id: 4,
    name: "David Kim",
    rating: 5,
    date: "October 2025",
    text: "Outstanding quality and customer service. They handled everything professionally from start to finish. Worth every penny!",
    avatar: "/avatars/david.jpg",
  },
  {
    id: 5,
    name: "Jessica Williams",
    rating: 5,
    date: "September 2025",
    text: "The best decision we made for our business! Their expertise and creativity delivered results beyond what we imagined.",
    avatar: "/avatars/jessica.jpg",
  },
  {
    id: 6,
    name: "Robert Taylor",
    rating: 4,
    date: "August 2025",
    text: "Very satisfied with the outcome. The team was flexible and accommodating throughout the entire process. Great value for money.",
    avatar: "/avatars/robert.jpg",
  },
];

// Helper function to render star ratings
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, i) => (
    <StarIcon
      key={i}
      className={`h-5 w-5 ${
        i < rating ? "text-yellow-400 fill-amber-300" : "text-gray-300"
      }`}
    />
  ));
};

function Testimonial() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // ⏱ 4s

    return () => clearInterval(interval);
  }, [api]);
  return (
    <section className=" bg-black py-24">
      <div className="mb-6 container">
        <h2 className="text-4xl text-white font-semibold font-domine text-center">
          Trusted by our customers
        </h2>
        <div className="flex flex-col items-center lg:flex-row justify-center gap-3 lg:gap-2 mt-4">
          <div className="border-t pt-3 lg:border-r lg:border-t-0 border-slate-300 pr-4 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star className="text-yellow-500 fill-amber-400" key={i} />
              ))}
            </div>
            <span className="text-white">4 star rating out of 50 reviews</span>
          </div>

          <div className="lg:pl-4">
            <Link
              href={
                "https://www.google.com/search?sca_esv=5e99471b1a2d566a&sxsrf=ANbL-n4JxV4ZpB0eDJF2Zt7F0CylW7f1QQ:1770020762859&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZ0y6bqs5taGBfc6JHwKf_7CCsEwoyaZc6txNlIxQJUCwPs1sP5o_enXr_pzEXIuK4rUOB-9d7NAcb8-LHksD7GkTRwu&q=Advanz+Tech+Reviews&sa=X&ved=2ahUKEwiawMKWsbqSAxWvcWwGHb7hDwwQ0bkNegQILxAH&biw=1536&bih=730&dpr=1.25&aic=0#lrd=0x3e5f6994feb5fdf1:0x885a3f7b670c18ef,3,,,,"
              }
            >
              <button className="bg-amber-400 px-3 py-1.5 text-black font-medium ">
                Leave a review
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Carousel
        setApi={setApi} // 👈 THIS is the key
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent className="pl-1">
          {GOOGLE_REVIEWS.map((review) => (
            <CarouselItem
              key={review.id}
              className="md:basis-1/2 lg:basis-1/3 flex"
            >
              <div
                className="
      flex-1            /* make card take full available height */
      flex flex-col      /* keep column layout inside */
      p-6
      bg-white
      rounded-xl
      shadow-sm
      border
    "
              >
                {/* Rating & Date */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 grow">"{review.text}"</p>

                {/* Reviewer Info */}
                <div className="flex items-center mt-auto">
                  {review.avatar ? (
                    <div className="w-12 h-12 mr-3">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                      <span className="text-gray-600 font-medium">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <div className="flex items-center mt-1">
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        Google Review
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:block hidden" />
        <CarouselNext className="md:block hidden" />
      </Carousel>
    </section>
  );
}

export default Testimonial;
