"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Our Story",
    text: "We started with a simple belief — luxury vehicles deserve expert care, not shortcuts. What began as a passion for precision has evolved into a trusted destination for premium automotive service.",
  },
  {
    title: "Our Philosophy",
    text: "Every decision we make is driven by quality, transparency, and long-term performance. We prioritize precision over speed and craftsmanship over volume.",
  },
  {
    title: "What Sets Us Apart",
    text: "Factory-grade diagnostics, certified technicians, premium parts, and a no-upsell approach. We focus on what your vehicle truly needs — nothing more, nothing less.",
  },
  {
    title: "Expertise & Experience",
    text: "With years of hands-on experience working with high-performance and luxury vehicles, our team brings dealership-level knowledge without the dealership mindset.",
  },
];

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
      <div className="min-h-[70vh] flex items-center px-6 md:px-20">
        <div className="max-w-5xl">
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Driven by Precision.
            <br />
            Defined by Trust.
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Premium automotive service and performance solutions for luxury
            vehicles — built on craftsmanship, integrity, and attention to
            detail.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-yellow-500/70 to-transparent mb-24" />

      {/* Content sections */}
      <div className="space-y-32 px-6 md:px-20 pb-32">
        {sections.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => {
              if (el) sectionRefs.current[idx] = el;
            }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {item.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">{item.text}</p>
          </div>
        ))}

        {/* Stats */}
        <div
          ref={(el) => {
            if (el) sectionRefs.current[sections.length] = el;
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl"
        >
          {[
            { value: "500+", label: "Vehicles Serviced" },
            { value: "10+", label: "Years of Expertise" },
            { value: "100%", label: "Genuine Parts" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-5xl font-bold text-yellow-400 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={(el) => {
            if (el) sectionRefs.current[sections.length + 1] = el;
          }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl font-semibold mb-4">
            Experience the Difference
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Whether it’s routine maintenance or performance optimization, we
            treat every vehicle with the respect it deserves.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded font-medium hover:bg-yellow-300 transition">
            Book a Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
