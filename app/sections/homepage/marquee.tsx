"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { logo: "BMW.png", name: "BMW" },
  { logo: "LandRover.png", name: "Land Rover" },
  { logo: "Mercedes.png", name: "Mercedes" },
  { logo: "Bugatti.png", name: "Bugatti" },
  { logo: "ferrari.png", name: "Ferrari" },
  { logo: "mclaren.png", name: "McLaren" },
  { logo: "lamborghini.png", name: "Lamborghini" },
  { logo: "rolls_royce.png", name: "Rolls Royce" },
  { logo: "JAGUAR.png", name: "Jaguar" },
  { logo: "maybach.png", name: "Maybach" },
  { logo: "Volkswagen-Logo.png", name: "Volkswagen" },
  { logo: "PAGANI.png", name: "Pagani" },
  { logo: "aston-martin.png", name: "Aston Martin" },
  { logo: "mini-logo.png", name: "Mini" },
];

const Marquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const boxes = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!boxes.length || !boxesRef.current) return;

    // Calculate dimensions with gap
    const gap = 64; // 4rem gap between items
    const boxWidth = 160 + gap; // box width + gap
    const wrapWidth = boxes.length * boxWidth;

    // Set initial positions
    gsap.set(boxes, {
      x: (i) => i * boxWidth,
    });

    // Animation variables
    const additionalX = { val: 0 };
    let offset = 0;
    let additionalXAnim: gsap.core.Tween | null = null;

    // Wrap function for seamless looping
    function wrap(value: number, min: number, max: number) {
      const v = value - min;
      const r = max - min;
      return ((r + (v % r)) % r) + min;
    }

    // Create infinite scroll animation for each box
    const timelines: gsap.core.Tween[] = [];

    boxes.forEach((item) => {
      const tl = gsap.to(item, {
        x: `-=${wrapWidth}`,
        duration: 40,
        repeat: -1,
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize((x) => {
            offset += additionalX.val;
            const parsedX = parseFloat(x as string) + offset;
            return wrap(parsedX, 0, wrapWidth);
          }),
        },
      });
      timelines.push(tl);
    });

    // ScrollTrigger for velocity-based speed
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: function (self) {
        const velocity = self.getVelocity();

        if (Math.abs(velocity) > 0) {
          if (additionalXAnim) additionalXAnim.kill();

          // Adjust speed based on scroll velocity
          additionalX.val = -velocity / 500;
          additionalXAnim = gsap.to(additionalX, {
            val: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        }
      },
    });

    return () => {
      scrollTrigger.kill();
      timelines.forEach((tl) => tl.kill());
      if (additionalXAnim) additionalXAnim.kill();
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
          <div className="overflow-hidden relative flex-1 h-24">
            <div ref={boxesRef} className="relative h-full">
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  className="absolute left-0 w-40 h-24 flex items-center justify-center will-change-transform"
                  style={{ top: 0 }}
                >
                  <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <Image
                      width={160}
                      height={96}
                      src={`/brand-logos/${brand.logo}`}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
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
