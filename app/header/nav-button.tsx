"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

const NavButton = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
    const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

    const button = pathRef.current?.closest("button");
    if (!button || !textRef.current) return;

    // Function to calculate brightness of section background
    const getBrightness = (el: HTMLElement) => {
      const bg = window.getComputedStyle(el).backgroundColor;
      const rgb = bg.match(/\d+/g)?.map(Number) || [255, 255, 255];
      const [r, g, b] = rgb;
      return (r * 299 + g * 587 + b * 114) / 1000;
    };

    const parentSection = button.closest("section") as HTMLElement | null;
    const brightness = parentSection ? getBrightness(parentSection) : 255;
    const textColor = brightness > 128 ? "black" : "white";

    // Set initial text color
    textRef.current.style.color = textColor;

    // GSAP hover animation
    const tl = gsap.timeline({ paused: true });
    tl.to(pathRef.current, {
      morphSVG: start,
      ease: "power2.in",
      duration: 0.5,
    })
      .to(
        pathRef.current,
        { morphSVG: end, ease: "power4.out", duration: 0.5 },
        0,
      )
      .to(
        textRef.current,
        { color: textColor, duration: 0.5, ease: "power2.out" },
        0,
      );

    button.addEventListener("mouseenter", () => tl.play());
    button.addEventListener("mouseleave", () => tl.reverse());
  }, []);

  return (
    <div className="relative inline-block">
      <button className="relative px-5 h-10 text-sm rounded-full cursor-pointer overflow-hidden border border-yellow-900 flex items-center justify-center">
        {/* SVG overlay */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMin slice"
        >
          <defs>
            <linearGradient
              id="grad"
              x1="0"
              y1="0"
              x2="99"
              y2="99"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.2" stopColor="#FFD700" />
              <stop offset="0.7" stopColor="#FFC107" />
            </linearGradient>
          </defs>
          <path
            ref={pathRef}
            stroke="url(#grad)"
            fill="url(#grad)"
            strokeWidth="2"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
        </svg>

        {/* Text always above SVG */}
        <span ref={textRef} className="relative z-10 font-semibold">
          Book Now
        </span>
      </button>
    </div>
  );
};

export default NavButton;
