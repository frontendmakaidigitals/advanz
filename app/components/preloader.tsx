"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 150);

    // Check when all resources are loaded
    const handleLoad = () => {
      setProgress(100);

      // Animate out after a brief delay
      setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setIsLoaded(true);
            document.body.style.overflow = "auto";
          },
        });

        // Animate the counter and bar out
        tl.to(".preloader-counter", {
          y: -20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        })
          .to(
            ".preloader-bar",
            {
              scaleX: 0,
              transformOrigin: "right",
              duration: 0.6,
              ease: "power2.inOut",
            },
            "-=0.3",
          )
          .to(".preloader-logo", {
            scale: 1.5,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in",
          })
          .to(
            ".preloader-overlay-top",
            {
              yPercent: -100,
              duration: 0.8,
              ease: "power4.inOut",
            },
            "-=0.4",
          )
          .to(
            ".preloader-overlay-bottom",
            {
              yPercent: 100,
              duration: 0.8,
              ease: "power4.inOut",
            },
            "-=0.8",
          );
      }, 500);
    };

    // Wait for window load
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }

    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (isLoaded) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Top overlay */}
      <div className="preloader-overlay-top absolute top-0 left-0 right-0 h-1/2 bg-black" />

      {/* Bottom overlay */}
      <div className="preloader-overlay-bottom absolute bottom-0 left-0 right-0 h-1/2 bg-black" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
        {/* Logo */}
        <div className="preloader-logo mb-12">
          <div className="text-6xl font-bold text-white tracking-wider">
            ADVANZ
            <span className="text-yellow-500">TECH</span>
          </div>
        </div>

        {/* Progress bar container */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="preloader-bar h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-300 ease-out origin-left"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Counter */}
        <div className="preloader-counter mt-6 text-white/60 text-sm font-mono">
          {Math.floor(Math.min(progress, 100))}%
        </div>

        {/* Animated dots */}
        <div className="flex gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
