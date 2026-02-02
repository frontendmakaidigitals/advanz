"use client";

import { useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import gsap from "@/lib/gsap";

interface ParallaxHeroProps {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: ReactNode;
  overlayOpacity?: number; // 0–1
  bgParallax?: number; // px
  textParallax?: number; // px
  heightClass?: string;
}

export default function ParallaxHero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  description,
  cta,
  overlayOpacity = 0.6,
  bgParallax = 120,
  textParallax = 80,
  heightClass = "h-[calc(100vh-5rem)]",
}: ParallaxHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.fromTo(
        bgRef.current,
        { y: 0 },
        {
          y: bgParallax,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Text parallax
      gsap.fromTo(
        textRef.current,
        { y: 0 },
        {
          y: -textParallax,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [bgParallax, textParallax]);

  return (
    <section
      ref={sectionRef}
      className={`relative flex items-end overflow-hidden ${heightClass}`}
    >
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover scale-110"
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div ref={textRef} className="container relative z-10 pb-16">
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-wide text-white">
            {eyebrow}
          </span>
        )}

        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-3 text-white mb-5 max-w-3xl">
          {title}
        </h1>

        {description && (
          <p className="text-slate-100 leading-relaxed max-w-lg mb-8">
            {description}
          </p>
        )}

        {cta}
      </div>
    </section>
  );
}
