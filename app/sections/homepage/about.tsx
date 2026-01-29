"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sideImageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const bottomImageContainerRef = useRef<HTMLDivElement>(null);
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
  useEffect(() => {
    const image = imageRef.current;
    const content = contentRef.current;
    const text = textRef.current;
    const sideImage = sideImageRef.current;
    const section = sectionRef.current;
    const bottomImageContainer = bottomImageContainerRef.current;

    if (
      !image ||
      !content ||
      !section ||
      !text ||
      !sideImage ||
      !bottomImageContainer
    )
      return;

    // Parallax effect for the hero image
    gsap.to(image, {
      yPercent: -10,
      ease: "none",
      force3D: true,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    // More noticeable parallax for text
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

    // Strong parallax for side image
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

    // Parallax for bottom image container
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

    // Fade in effect for content
    gsap.from(content, {
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: content,
        start: "top 80%",
        end: "top 60%",
        scrub: 0.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll("#stats-card"),
    ) as HTMLDivElement[];

    // Animate each card from bottom to top with stagger
    gsap.from(cards, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2, // cascade effect
      scrollTrigger: {
        trigger: cards[0].parentElement, // the grid container
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-white">
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
          />
        </div>
        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>
      </div>

      {/* Content Section */}
      <div
        ref={contentRef}
        className="container mx-auto px-6 -mt-32 relative z-10"
      >
        <div className=" gap-16 items-start">
          {/* Text Content */}
          <div ref={textRef} className="space-y-6 will-change-transform">
            <h2 className="text-5xl lg:text-6xl text-center font-bold leading-tight">
              <span className="inline-block text-black ">
                Automotive Car Repair
              </span>
              <br />
              <span className="inline-block  text-black ">Garage in Dubai</span>
              <br />
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              At Advanz Tech, we provide a complete range of professional car
              repair, maintenance, and diagnostic services designed to keep your
              vehicle running safely and smoothly.
            </p>
          </div>
        </div>

        {/* Bottom Image with Parallax */}
        <div className="grid grid-cols-[1.1fr_.8fr] gap-8 mt-10">
          <div
            ref={bottomImageContainerRef}
            className="  relative h-[400px] lg:h-[600px] will-change-transform overflow-hidden rounded shadow-2xl"
          >
            <Image
              src="/brand-images/DSC02019.jpg"
              alt="Luxury car interior"
              className="w-full h-full object-cover "
              fill
              loading="lazy"
            />
          </div>

          <div className="container mx-auto px-6 grid grid-cols-1  gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                id="stats-card"
                className={`bg-white py-6  transition-shadow duration-300 ${idx === stats.length - 1 ? "" : "border-b"}`}
              >
                <h3 className="text-3xl font-bold mb-2 text-gray-900">
                  {stat.title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-2">
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
