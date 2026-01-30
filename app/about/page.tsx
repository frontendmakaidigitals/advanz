"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import About from "../sections/about/about";
import { Circle } from "lucide-react";
import Stats from "../sections/about/stats";
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero heading
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
      );

      // Section reveals
      sectionRefs.current.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="text-black">
      {/* Hero */}
      <div className="min-h-[85vh] relative text-white flex items-end pb-16 px-6 md:px-20">
        <Image
          src={
            "https://images.pexels.com/photos/6872595/pexels-photo-6872595.jpeg"
          }
          alt={""}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 w-full h-full bg-black/50" />
        <div className="max-w-5xl relative z-10">
          <span className="text-white flex items-center gap-1 mb-1">
            <Circle fill="white" stroke={"white"} className="size-2" />
            About us
          </span>
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Driven by Precision.
            <br />
            Defined by Trust.
          </h1>
          <p className="text-slate-100  text-lg max-w-2xl">
            Premium automotive service and performance solutions for luxury
            vehicles — built on craftsmanship, integrity, and attention to
            detail.
          </p>
          <button className="px-5 py-2 rounded-lg bg-yellow-500 text-black mt-3">
            Book a service now
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-yellow-500/70 to-transparent mb-24" />

      <About />
      <Stats />
    </section>
  );
};

export default AboutUs;
