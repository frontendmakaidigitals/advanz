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

 

  return (
    <section
      ref={sectionRef}
      className="relative  flex items-center justify-center overflow-hidden"
    >
      <div
        ref={cardRef}
        className="  overflow-hidden relative  w-full  py-20 text-center will-change-transform"
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
          <h2 className="text-5xl   font-bold tracking-tight text-slate-100 mb-10">
            Service That
            <br />
            Elevates Your Drive
          </h2>

          <Link href="/contact">
            <button
              ref={buttonRef}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-300 hover:text-yellow-950 transition-colors"
            >
              Book an Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GoldScaleCTA;
