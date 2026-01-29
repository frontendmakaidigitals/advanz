"use client";

import React, { useRef, useEffect } from "react";
import { useSplitText } from "@/hooks/useSpliText";
import gsap from "gsap";
const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useSplitText({
    selector: ".split",
    trigger: sectionRef.current!,
    start: "top 75%",
    y: 20,
    stagger: 0.01,
  });

  useEffect(() => {
    if (!sectionRef.current || !videoRef.current || !contentRef.current) return;

    // Parallax effect for video - moves slower (upward)
    const videoParallax = gsap.to(videoRef.current, {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Parallax effect for text content - moves faster (downward)
    const contentParallax = gsap.to(contentRef.current, {
      yPercent: -75,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      videoParallax.kill();
      contentParallax.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute scale-[1.2] inset-0 w-full h-full object-cover"
      >
        <source src="/hero/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

      {/* Content */}
      <div
        ref={contentRef}
        className="absolute flex items-start justify-between container z-20 bottom-20 w-full"
      >
        <div className="max-w-4xl ">
          <h1 className="split text-6xl mainHead text-slate-50 font-[600]">
            Luxury Car Repair & Maintenance Garage in Dubai
          </h1>
          <p className="split mt-3 max-w-3xl text-slate-100">
            Advanz Tech is your trusted place for expert car repair, servicing,
            and care — from everyday maintenance to advanced diagnostics.
          </p>

          <div className="w-full flex gap-4 mt-4  items-center">
            <button className="px-5 text-sm py-2 bg-yellow-600 text-white rounded-full">
              Book appointment Now
            </button>
            <button className="px-5 text-sm py-2 text-slate-100 border hover:bg-yellow-500 hover:text-slate-50 border-slate-400 rounded-full">
              About us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
