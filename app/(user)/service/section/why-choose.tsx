"use client";

import { useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import gsap from "@/lib/gsap";
import { BadgeCheck, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface WhyChooseSectionProps {
  title: string;
  description: string;
  features: string[];

  imagePrimary: string;
  imageSecondary: string;
  cta?: ReactNode;
  trustText?: string;
  greenParallax?: number;
  redParallax?: number;
}

export default function WhyChooseSection({
  title,
  description,
  features,

  imagePrimary,
  imageSecondary,
  cta,
  trustText = "Trusted by 1,000+ Customers",
  greenParallax = 80,
  redParallax = 50,
}: WhyChooseSectionProps) {
  const greenDivRef = useRef<HTMLDivElement>(null);
  const redDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (greenDivRef.current) {
        gsap.to(greenDivRef.current, {
          y: -greenParallax,
          ease: "none",
          scrollTrigger: {
            trigger: greenDivRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (redDivRef.current) {
        gsap.to(redDivRef.current, {
          y: -redParallax,
          ease: "none",
          scrollTrigger: {
            trigger: redDivRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [greenParallax, redParallax]);

  return (
    <section className="py-24">
      <div className="container max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <h2 className="text-5xl text-slate-50 font-bold mb-6">{title}</h2>

          <p className="text-slate-100 leading-relaxed mb-8 max-w-xl">
            {description}
          </p>

          <ul className="grid grid-cols-2 gap-y-4 text-slate-300 mb-6">
            {features.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <BadgeCheck className="size-4 fill-green-500 stroke-white" />
                {item}
              </li>
            ))}
          </ul>

          {cta}
        </div>

        {/* Visual */}
        <div className="relative flex justify-end">
          {/* Floating image */}
          <div
            ref={greenDivRef}
            className="absolute hidden lg:block left-10 -top-8 z-10 w-56 aspect-square shadow-md"
          >
            <Image
              src={imagePrimary}
              alt="about"
              fill
              className="object-cover"
            />
          </div>

          {/* Trust badge */}
          <div className="absolute -bottom-5 -right-4 z-10 rounded shadow-xl bg-white px-8 py-5 border">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-green to-emerald-600 border-2 border-white"
                  />
                ))}
              </div>

              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
            </div>

            <p className="text-sm font-bold text-slate-900">{trustText}</p>
            <p className="text-xs text-slate-200 mt-1">
              Reliable • Transparent • Professional
            </p>
          </div>

          {/* Main image */}
          <div
            ref={redDivRef}
            className="w-full lg:w-3/4 h-[250px] lg:h-[500px] relative"
          >
            <Image
              src={imageSecondary}
              alt="about"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
