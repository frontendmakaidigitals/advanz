"use client";

import { useEffect, useRef, useState } from "react";
import { pages } from "./header";
import gsap from "gsap";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const line1 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !line1.current || !line2.current) return;

    tl.current = gsap.timeline({ paused: true });

    // hamburger → X
    tl.current
      .to(
        line1.current,
        {
          y: 4,
          x: 1.5,
          rotate: 45,
          duration: 0.25,
          ease: "power2.out",
        },
        0,
      )
      .to(
        line2.current,
        {
          x: 1,
          y: -3,
          rotate: -45,
          duration: 0.25,
          ease: "power2.out",
        },
        0,
      );

    // overlay + menu
    tl.current
      .to(
        overlayRef.current,
        {
          autoAlpha: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        0.1,
      )
      .from(
        itemsRef.current,
        {
          y: 60,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.2",
      );
  }, []);

  useEffect(() => {
    if (!tl.current) return;

    open ? tl.current.play() : tl.current.reverse();
  }, [open]);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="bg-slate-300 hover:bg-slate-400 cursor-pointer size-10 flex flex-col items-center justify-center rounded-full relative z-60"
      >
        <div
          ref={line1}
          className="w-6 h-0.5 bg-black"
          style={{ transformOrigin: "center" }}
        />
        <div
          ref={line2}
          className="w-6 h-0.5 bg-black mt-1"
          style={{ transformOrigin: "center" }}
        />
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-white z-50 h-screen w-scrreen  py-16 opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        <div className="container flex justify-between h-full w-full items-end">
          <div className="space-y-6 text-7xl font-[600]">
            {pages.map((page, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) itemsRef.current[idx] = el;
                }}
                className="overflow-hidden capitalize tracking-tight"
              >
                {page.label}
              </div>
            ))}
          </div>
          <div>
            <button className="bg-black text-slate-50 px-4 py-1.5 rounded">
              Book now
            </button>
            <div className="mt-7 space-y-5">
              <p className="text-5xl">Insight</p>
              <p className="text-5xl">Contact</p>
              <p className="text-lg">Privacy policy</p>
              <p className="text-lg">Legal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
