"use client";
import React, { useEffect, useRef } from "react";
import gsap from "@/lib/gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sideImageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const bottomImageContainerRef = useRef<HTMLImageElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      title: "500+ Projects",
      description:
        "We have successfully completed over 500 projects for our clients across the globe.",
    },
    {
      title: "200+ Clients",
      description:
        "Trusted by over 200 clients from various industries who love our work.",
    },
    {
      title: "10 Awards",
      description:
        "Recognized internationally for excellence in design, innovation, and service.",
    },
    {
      title: "24/7 Support",
      description:
        "Our team is available round-the-clock to help you with any project needs.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const image = imageRef.current;
      const content = contentRef.current;
      const text = textRef.current;
      const sideImage = sideImageRef.current;
      const section = sectionRef.current;
      const bottomImageContainer = bottomImageContainerRef.current;
      const statsContainer = statsContainerRef.current;

      if (!image || !content || !section || !text || !bottomImageContainer)
        return;

      // Hero parallax
      gsap.to(image, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Text parallax
      gsap.to(text, {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: content,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Side image
      if (sideImage) {
        gsap.to(sideImage, {
          y: -250,
          ease: "none",
          scrollTrigger: {
            trigger: content,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }

      // Bottom image
      gsap.to(bottomImageContainer, {
        y: -140,
        ease: "none",
        scrollTrigger: {
          trigger: bottomImageContainer,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Fade in content
      gsap.from(content, {
        opacity: 0,
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          end: "top 60%",
          scrub: 0.5,
        },
      });

      // Stats cards
      if (statsContainer) {
        const cards = statsContainer.querySelectorAll(".stats-card");

        gsap.from(cards, {
          opacity: 0,
          y: 50,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsContainer,
            start: "top 85%",
          },
        });
      }

      ScrollTrigger.refresh();
    });

    return () => ctx.revert(); // 💯 clean unmount on route change
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-[#0a0a0a]">
      {/* Hero Image with Parallax */}
      <div className="relative h-screen overflow-hidden">
        <div
          ref={imageRef}
          className="absolute -top-2 inset-x-0 h-[145%] w-full will-change-transform"
          style={{ transform: "translateZ(0)" }}
        >
          <Image
            fill
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083"
            alt="Road background"
            className="w-full h-full object-cover scale-[1.02]"
            loading="eager"
            priority
          />
        </div>
        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
      </div>

      {/* Content Section */}
      <div ref={contentRef} className="container -mt-32 relative z-10">
        <div className="">
          {/* Text Content */}
          <div ref={textRef} className="space-y-6 will-change-transform">
            <h2 className="text-5xl lg:text-6xl tracking-tighter text-center font-bold leading-tight">
              <span className="inline-block text-slate-50 ">
                Automotive Repair Garage
              </span>
              <br />
              <span className="inline-block  text-slate-50 "> in Dubai</span>
            </h2>
            <p className="text-lg text-gray-100 leading-relaxed text-center max-w-3xl mx-auto">
              At Advanz Tech, we provide a complete range of professional car
              repair, maintenance, and diagnostic services designed to keep your
              vehicle running safely and smoothly.
            </p>
          </div>
        </div>

        {/* Bottom Image with Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_.8fr] gap-8 mt-10">
          <div className="relative h-[400px] lg:h-[600px] will-change-transform overflow-hidden shadow-2xl">
            <Image
              ref={bottomImageContainerRef}
              src="/hero/bmw-repair-img.webp"
              alt="Luxury car interior"
              className="w-full h-full object-cover scale-[1.5]"
              fill
              loading="lazy"
            />
          </div>

          <div
            ref={statsContainerRef}
            className="container mx-auto px-6 grid grid-cols-1 gap-8"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`stats-card bg-slate-900 px-5 py-6 transition-shadow duration-300 ${
                  idx === stats.length - 1 ? "" : "border-b"
                }`}
              >
                <h3 className="text-3xl font-bold mb-2 text-gray-50">
                  {stat.title}
                </h3>
                <p className="text-gray-100 leading-relaxed line-clamp-2">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-10" />
    </div>
  );
};

export default About;
