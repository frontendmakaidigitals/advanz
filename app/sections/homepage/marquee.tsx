"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { logo: "BMW.png", name: "", link: "" },
  { logo: "LandRover.png", name: "", link: "" },
  { logo: "Mercedes.png", name: "", link: "" },
  { logo: "Bugatti.png", name: "", link: "" },
  { logo: "ferrari.png", name: "", link: "" },
  { logo: "mclaren.png", name: "", link: "" },
  { logo: "lamborghini.png", name: "", link: "" },
  { logo: "rolls_royce.png", name: "", link: "" },
  { logo: "JAGUAR.png", name: "", link: "" },
  { logo: "maybach.png", name: "", link: "" },

  { logo: "Volkswagen-Logo.png", name: "", link: "" },
  { logo: "PAGANI.png", name: "", link: "" },
  { logo: "aston-martin.png", name: "", link: "" },
  { logo: "mini-logo.png", name: "", link: "" },
];

const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Duplicate logos for seamless looping
    marquee.innerHTML += marquee.innerHTML;

    // GSAP animation for horizontal marquee
    const marqueeAnim = gsap.to(marquee, {
      xPercent: -50,
      ease: "none",
      duration: 7,
      repeat: -1,
      paused: true, // start paused, will play on ScrollTrigger
    });

    // ScrollTrigger to play/pause based on visibility
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom", // when the top of the container hits bottom of viewport
      end: "bottom top", // when bottom of container leaves top of viewport
      onEnter: () => marqueeAnim.play(),
      onEnterBack: () => marqueeAnim.play(),
      onLeave: () => marqueeAnim.pause(),
      onLeaveBack: () => marqueeAnim.pause(),
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      marqueeAnim.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="overflow-hidden w-full relative bg-neutral-900 py-16"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-16">
          {/* Title */}
          <h2 className="text-5xl font-bold text-white whitespace-nowrap flex-shrink-0">
            Brands we <br />
            work with
          </h2>

          {/* Marquee Container */}
          <div className="overflow-hidden relative flex-1">
            <div
              ref={marqueeRef}
              className="flex whitespace-nowrap items-center gap-16"
            >
              {brands.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    width={120}
                    height={40}
                    src={`/brand-logos/${logo.logo}`}
                    alt={logo.name}
                    className="w-full h-full object-contain "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
