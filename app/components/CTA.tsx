"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const GoldScaleCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scale the container (NOT the text)
      gsap.fromTo(
        cardRef.current,
        {
          scale: 0.92,
          opacity: 0.85,
        },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 40%",
            scrub: true,
          },
        },
      );

      // Button reveal (subtle)
      gsap.fromTo(
        buttonRef.current,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mb-12 flex items-center justify-center overflow-hidden"
    >
      <div
        ref={cardRef}
        className="container overflow-hidden relative max-w-6xl rounded-2xl py-20 text-center will-change-transform"
      >
        <div className="absolute inset-0 w-full h-full bg-black/40 z-10" />
        <img
          src={
            "https://images.pexels.com/photos/7012891/pexels-photo-7012891.jpeg"
          }
          alt={""}
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="relative z-10 ">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 mb-10">
            Service That
            <br />
            Elevates Your Drive
          </h2>

          <Link href="/contact">
            <button
              ref={buttonRef}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-300 transition-colors"
            >
              Book an Appointment
              <span className="text-xl">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GoldScaleCTA;
