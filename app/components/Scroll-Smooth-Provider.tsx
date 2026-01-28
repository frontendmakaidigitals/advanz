"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

export default function ScrollSmootherProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 0.8,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
      smoothTouch: false,
    });

    return () => {
      smoother?.kill();
    };
  }, []);

  return null;
}
