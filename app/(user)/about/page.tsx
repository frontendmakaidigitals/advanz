"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import About from "../sections/about/about";
import { Circle } from "lucide-react";
import Stats from "../sections/about/stats";
import Speciality from "../sections/about/speciality";
import ContactFormSection from "../sections/homepage/form";
import Link from "next/link";
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

  useEffect(() => {
    const buttons = gsap.utils.toArray<HTMLButtonElement>(".gsap-btn");

    buttons.forEach((btn) => {
      const overlay = btn.querySelector<HTMLSpanElement>(".btn-overlay");
      if (!overlay) return;

      gsap.set(overlay, {
        xPercent: -50,
        yPercent: -50,
        scale: 0,
      });

      const xTo = gsap.quickTo(overlay, "x", {
        duration: 0.3,
        ease: "power3.out",
      });

      const yTo = gsap.quickTo(overlay, "y", {
        duration: 0.3,
        ease: "power3.out",
      });

      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        xTo(e.clientX - rect.left);
        yTo(e.clientY - rect.top);
      };

      const enter = () => {
        gsap.to(overlay, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.to(overlay, {
          scale: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power3.out",
        });
      };

      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseenter", enter);
      btn.addEventListener("mouseleave", leave);
    });
  }, []);
  return (
    <section className="text-slate-50">
      {/* Hero */}
      <div className="min-h-[85vh] relative text-white flex items-end pb-16 px-6 md:px-20">
        <Image
          src={"/about/banner.png"}
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
          <Link href={"/contact"} className="">
            <button className="gsap-btn mt-5 relative isolate overflow-hidden px-5  py-2 bg-[#d69016] text-white ">
              <span className="btn-overlay pointer-events-none absolute z-0 top-0 left-0 w-32 h-32 rounded-full bg-white/30 blur-2xl opacity-0" />

              <span className="relative z-10">Book appointment Now</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-yellow-500/70 to-transparent mb-24" />

      <About />
      <Stats />
      <Speciality />
      <ContactFormSection />
    </section>
  );
};

export default AboutUs;
