"use client";
import React from "react";
import {
  BadgeCheck,
  Snowflake,
  Award,
  Clock,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSplitText } from "@/hooks/useSpliText";
import Image from "next/image";
import Link from "next/link";
import gsap from "@/lib/gsap";
// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Snowflake,
  Award,
  Clock,
  ArrowRight,
  BadgeCheck,
};

interface ServiceSectionProps {
  badge: {
    icon: string;
    text: string;
  };
  title: string;
  highlightedWord: string;
  description: string;
  services: string[];
  cta: {
    text: string;
    icon?: string;
  };
  image: {
    src: string;
    alt: string;
  };

  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
  variant?: "dark" | "light";
  imagePosition?: "left" | "right"; // New prop for image position
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  badge,
  title,
  highlightedWord,
  description,
  services,
  cta,
  image,

  theme = {
    primaryColor: "amber-400",
    secondaryColor: "yellow-500",
  },
  variant = "dark",
  imagePosition = "left",
}) => {
  const BadgeIcon = iconMap[badge.icon];
  const CtaIcon = cta.icon ? iconMap[cta.icon] : undefined;
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef1 = useRef<HTMLHeadingElement>(null);
  const titleRef2 = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isDark = variant === "dark";
  const bgColor = isDark ? "bg-black" : "bg-slate-50";
  const cardBg = isDark ? "bg-slate-900" : "bg-white";
  const textColor = isDark ? "text-white" : "text-slate-900";
  const descriptionColor = isDark ? "text-slate-400" : "text-slate-600";
  const serviceBg = isDark ? "bg-slate-800/50" : "bg-slate-50";
  const serviceBorder = isDark ? "border-slate-700" : "border-slate-200";
  const serviceText = isDark ? "text-slate-300" : "text-slate-700";
  const servicesRef = useRef<HTMLDivElement>(null);
  useSplitText({
    textRef: titleRef1,
    triggerRef: sectionRef,
    stagger: 0.02,
    duration: 0.6,
    type: "words, lines",
    delay: 0.1,
    y: 20,
  });
  useSplitText({
    textRef: titleRef2,
    triggerRef: sectionRef,
    stagger: 0.01,
    duration: 0.6,
    type: "words, lines",
    delay: 0.1,
    y: 20,
  });
  useEffect(() => {
    if (!servicesRef.current || !sectionRef.current) return;
    const items = servicesRef.current.children;
    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,

        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          once: true,
        },
      });
    }, servicesRef);

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    if (!imageRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: -60 },
        {
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`${bgColor}  py-12 lg:py-16`}>
      <div className="container">
        {/* Main Card Container */}
        <div
          className={`${cardBg} rounded-3xl overflow-hidden shadow-2xl ${isDark ? "border border-slate-800" : "border border-slate-200"}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* IMAGE */}
            <div
              className={`relative h-[300px] overflow-hidden lg:h-auto order-1 ${
                imagePosition === "right" ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <Image
                fill
                ref={imageRef}
                src={image.src}
                alt={image.alt}
                className=" w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* CONTENT */}
            <div
              className={`p-8 lg:p-12 order-2 ${
                imagePosition === "right" ? "lg:order-1" : "lg:order-2"
              }`}
            >
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 bg-${theme.primaryColor}/10 border border-${theme.primaryColor}/30 text-${theme.primaryColor} px-4 py-2 rounded-full mb-6`}
              >
                {BadgeIcon && <BadgeIcon size={14} />}
                <span className="text-[.6rem] font-semibold uppercase tracking-wider">
                  {badge.text}
                </span>
              </div>

              {/* Title */}
              <h2
                ref={titleRef1}
                className={`text-3xl  lg:text-4xl font-bold ${textColor} mb-4 leading-tight`}
              >
                {title} <span className={``}>{highlightedWord}</span>
              </h2>

              {/* Description */}
              <p
                ref={titleRef2}
                className={`${descriptionColor} mb-6 leading-relaxed`}
              >
                {description}
              </p>

              {/* Services Grid - Compact */}
              <div
                ref={servicesRef}
                className="grid will-change-transform grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-2 mb-6"
              >
                {services.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 rounded-lg border ${serviceBorder} ${serviceBg} p-2.5`}
                  >
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full  flex items-center justify-center`}
                    >
                      <BadgeCheck
                        className={`fill-green-500 ${variant === "dark" ? "stroke-slate-900" : "stroke-slate-50"}`}
                        size={18}
                      />
                    </div>
                    <span className={` ${serviceText} font-medium`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* View All Services Link */}

              {/* CTA */}
              <Link href={"/contact"}>
                <button
                  className={`inline-flex items-center justify-center gap-2 bg-${theme.secondaryColor} hover:bg-${theme.secondaryColor}/90 text-black font-bold px-4 py-2 transition-all duration-300 hover:scale-105 shadow-lg`}
                >
                  <span>{cta.text}</span>
                  {CtaIcon && <CtaIcon size={18} />}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
