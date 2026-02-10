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
            <Link href={"/contact"}>
              <button className="gsap-btn relative isolate overflow-hidden px-5  py-2 bg-[#d69016] text-white ">
                <span className="btn-overlay pointer-events-none absolute z-0 top-0 left-0 w-32 h-32 rounded-full bg-white/30 blur-2xl opacity-0" />

                <span className="relative z-10">Book appointment Now</span>
              </button>
            </Link>

            <Link href="/about">
              <button className="px-5 text-sm py-2 text-slate-100 border border-slate-400 hover:bg-[#d69016] hover:text-slate-50 ">
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
