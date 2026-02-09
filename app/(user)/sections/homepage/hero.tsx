"use client";

import { ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useSplitText } from "@/hooks/useSpliText";
import gsap from "gsap";
import useWindowSize from "@/hooks/useWindowSize";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  useSplitText({
    selector: ".split",
    trigger: sectionRef.current!,
    start: "top 75%",
    y: 20,
    stagger: width < 768 ? 0.01 : 0.02,
    type: "chars, lines",
  });

  useSplitText({
    selector: ".split2",
    trigger: sectionRef.current!,
    start: "top 75%",
    y: 20,
    stagger: width < 768 ? 0.002 : 0.004,
    type: "chars, lines",
    delay: 1,
  });

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !contentRef.current) return;

    // Parallax for background image
    const imageParallax = gsap.to(imageRef.current, {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Parallax for content
    const contentParallax = gsap.to(contentRef.current, {
      yPercent: width < 768 ? -30 : -75,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      imageParallax.kill();
      contentParallax.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [width]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      {/* Background Image */}
      <img
        ref={imageRef}
        src="/hero/banner.png"
        alt="Luxury Car Garage"
        className="absolute inset-0 w-full h-full object-cover scale-[1.2]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-transparent" />

      {/* Content */}
      <div
        ref={contentRef}
        className="absolute flex items-start justify-between container z-20 bottom-20 w-full"
      >
        <div className="max-w-4xl">
          <h1 className="split text-5xl lg:text-6xl mainHead text-slate-50 font-[600]">
            Luxury Car Repair & Maintenance Garage in Dubai
          </h1>

          <p className="split2 mt-3 max-w-3xl text-slate-100">
            Advanz Tech is your trusted place for expert car repair, servicing,
            and care — from everyday maintenance to advanced diagnostics.
          </p>

          <div className="flex gap-4 mt-4 items-center">
            <button className="px-5 text-sm py-2 bg-yellow-600 text-white rounded-full">
              Book appointment Now
            </button>

            <Link href="/about">
              <button className="px-5 text-sm py-2 text-slate-100 border border-slate-400 hover:bg-yellow-500 hover:text-slate-50 rounded-full">
                About us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
