"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const pageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const carRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  const coverPage = (url: string) => {
    const tl = gsap.timeline({
      onComplete: () => {
        router.push(url);
      },
    });

    // Slide in blocks from left
    tl.to(blocksRef.current, {
      scaleX: 1,
      duration: 0.6,
      ease: "power2.inOut",
      stagger: 0.03,
      transformOrigin: "left",
    });

    // When blocks are filled, animate car and percentage
    tl.fromTo(
      carRef.current,
      {
        left: "-100px",
        opacity: 1,
      },
      {
        left: "100%",
        duration: 0.8,
        ease: "power2.inOut",
      },
      "-=0.2", // Start slightly before blocks finish
    );

    // Animate percentage counter
    tl.fromTo(
      percentageRef.current,
      {
        textContent: "0",
        opacity: 1,
      },
      {
        textContent: "100",
        duration: 0.8,
        ease: "power2.inOut",
        snap: { textContent: 1 },
        onUpdate: function () {
          if (percentageRef.current) {
            percentageRef.current.textContent =
              Math.round(parseFloat(percentageRef.current.textContent || "0")) +
              "%";
          }
        },
      },
      "<", // Start at the same time as car
    );
  };

  const revealPage = () => {
    gsap.set(blocksRef.current, {
      scaleX: 1,
      transformOrigin: "left",
    });

    // Hide car and percentage initially
    gsap.set([carRef.current, percentageRef.current], {
      opacity: 0,
      left: "-100px",
    });

    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.2,
      ease: "power2.inOut",
      stagger: 0.03,
      transformOrigin: "left",
      onComplete: () => {
        isTransitioning.current = false;
        gsap.set(blocksRef.current, { scaleX: 0 });
      },
    });
  };

  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return;

      // Clear only the blocks, not the entire innerHTML
      const existingBlocks = overlayRef.current.querySelectorAll(".block");
      existingBlocks.forEach((block) => block.remove());

      blocksRef.current = [];

      for (let i = 0; i < 20; i++) {
        const block = document.createElement("div");
        block.className = "block";
        overlayRef.current.appendChild(block);
        blocksRef.current.push(block);
      }
    };

    createBlocks();
    gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });
    gsap.set([carRef.current, percentageRef.current], { opacity: 0 });
    revealPage();

    const handleRouteChange = (url: string) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    };

    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).href;
        const url = new URL(href).pathname;
        if (url !== pathname) {
          handleRouteChange(url);
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, [pathname, router]);

  return (
    <>
      <div className="transition-overlay fixed w-screen h-screen inset-0 pointer-events-none z-[99999999]">
        {/* Blocks container */}
        <div ref={overlayRef} className="w-full h-full flex"></div>

        {/* Car Image - separate from blocks */}
        <div
          ref={carRef}
          className="absolute top-1/2 -translate-y-1/2 w-20 h-20 opacity-0"
          style={{ left: "-100px" }}
        >
          <img
            src="/loader/loader.png"
            alt="car"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Percentage Counter - separate from blocks */}
        <div
          ref={percentageRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold opacity-0"
        >
          0%
        </div>
      </div>
      {children}
    </>
  );
};

export default pageTransition;
