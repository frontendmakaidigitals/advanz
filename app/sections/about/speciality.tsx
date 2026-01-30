"use client";

import React, { useEffect, useRef } from "react";
import { Cpu, Award, PackageCheck, Handshake } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutFeatureCards = [
  {
    icon: Cpu,
    title: "Factory-Level Diagnostics",
    description:
      "We use dealer-grade diagnostic systems to accurately identify issues at the source — no guesswork, no trial-and-error repairs.",
  },
  {
    icon: Award,
    title: "Certified Expert Technicians",
    description:
      "Our technicians are trained to work exclusively on luxury and high-performance vehicles, ensuring every service meets manufacturer standards.",
  },
  {
    icon: PackageCheck,
    title: "Genuine & OEM Parts",
    description:
      "We use only genuine or OEM-approved parts to protect your vehicle’s performance, reliability, and long-term value.",
  },
  {
    icon: Handshake,
    title: "Transparent & No Upselling",
    description:
      "You’ll receive clear explanations and honest recommendations — we service what your car needs, nothing more.",
  },
];

const Speciality = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1.1, // 👈 key change
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-20">
      <div className="container max-w-7xl">
        <h2 className="text-5xl text-center font-[600]">What sets us apart?</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
          {aboutFeatureCards.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="p-6 border border-slate-400/50 rounded-xl bg-white"
              >
                <div className="p-2 bg-yellow-600 rounded-lg mb-3 w-fit">
                  <Icon className="stroke-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Speciality;
