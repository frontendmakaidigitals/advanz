"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    label: "Repairs Completed",
    value: 15000,
    suffix: "+",
    icon: "🔧",
  },
  {
    label: "Happy Customers",
    value: 8500,
    suffix: "+",
    icon: "😊",
  },
  {
    label: "Years Experience",
    value: 12,
    suffix: "+",
    icon: "⭐",
  },
  {
    label: "Expert Technicians",
    value: 45,
    suffix: "+",
    icon: "👨‍🔧",
  },
];

const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);
  const stat3Ref = useRef<HTMLSpanElement>(null);
  const stat4Ref = useRef<HTMLSpanElement>(null);

  const statRefs = [stat1Ref, stat2Ref, stat3Ref, stat4Ref];

  useEffect(() => {
    // Animate each stat counter
    statsData.forEach((stat, index) => {
      const ref = statRefs[index];
      if (ref.current) {
        // Set initial value
        ref.current.textContent = "0";

        gsap.to(ref.current, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          textContent: stat.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function () {
            if (ref.current) {
              const currentValue = parseFloat(ref.current.textContent || "0");
              ref.current.textContent =
                Math.ceil(currentValue).toLocaleString();
            }
          },
        });
      }
    });

    // Animate stat cards
    gsap.from(".stat-card", {
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white py-20 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <span className="text-yellow-500 uppercase tracking-wider text-sm font-semibold">
              Our Impact
            </span>
            <div className="w-12 h-[2px] bg-yellow-500"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our commitment to excellence is reflected in every service we
            provide
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              {/* Number */}
              // Replace the Number section (lines 115-133) with this:
              {/* Number */}
              <div className="mb-3 flex items-baseline">
                <span
                  ref={statRefs[idx]}
                  className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                >
                  0
                </span>
                <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent ml-1">
                  {stat.suffix}
                </span>
              </div>
              {/* Label */}
              <p className="text-white/70 uppercase tracking-wider text-sm font-semibold">
                {stat.label}
              </p>
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Stats;
