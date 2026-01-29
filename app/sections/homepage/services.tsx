"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLDivElement[]>([]);

  const services = [
    {
      label: "Workshop Services",
      img: "workshop.jpg",
      desc: "Comprehensive mechanical diagnostics and repairs carried out by certified technicians using advanced tools and manufacturer-approved processes.",
      features: [
        "Computerized diagnostics",
        "Engine & transmission repair",
        "Routine servicing & inspections",
        "Manufacturer-approved tools",
      ],
    },
    {
      label: "Body Shop Services",
      img: "body-shop-repair.webp",
      desc: "Precision body repair and paint refinement restoring your vehicle's structure, finish, and original factory standards.",
      features: [
        "Accident & collision repair",
        "Factory-grade paint booth",
        "Computerized color matching",
        "Insurance-approved repairs",
      ],
    },
    {
      label: "Spare Parts",
      img: "spare-parts.jpg",
      desc: "Genuine and OEM-grade spare parts ensuring perfect fitment, long-term reliability, and uncompromised performance.",
      features: [
        "Genuine & OEM components",
        "Guaranteed fitment",
        "Warranty-backed parts",
        "Luxury brand availability",
      ],
    },
    {
      label: "Car Programming",
      img: "car-programming.webp",
      desc: "Advanced vehicle coding, module programming, and software calibration tailored to modern automotive systems.",
      features: [
        "ECU & module coding",
        "Software updates & calibration",
        "Feature activation",
        "Fault code resolution",
      ],
    },
    {
      label: "Recovery & Assistance",
      img: "car-tow.jpg",
      desc: "24/7 roadside recovery and emergency assistance delivering fast, secure transport and complete peace of mind.",
      features: [
        "24/7 roadside assistance",
        "Flatbed towing",
        "Secure vehicle transport",
        "Emergency breakdown support",
      ],
    },
  ];

  useEffect(() => {
    // Parallax effect for images
    imagesRef.current.forEach((image, idx) => {
      if (!image) return;

      gsap.to(image, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: cardsRef.current[idx],
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    // Fade in text content on scroll
    textRef.current.forEach((text, idx) => {
      if (!text) return;

      gsap.fromTo(
        text.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black pb-32 transition-colors overflow-hidden"
    >
      {/* Header */}
      <div className="container pt-24 pb-20">
        <div className="text-center space-y-4">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-medium">
            Premium Care
          </p>
          <h2 className="text-5xl md:text-7xl text-slate-50 font-bold tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-0">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <div
              key={idx}
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center relative group"
            >
              {/* Text block - appears first on even indices */}
              {isEven && (
                <div
                  ref={(el) => {
                    if (el) textRef.current[idx] = el;
                  }}
                  className="w-full bg-black text-white p-12 lg:p-20 xl:p-24 space-y-8 flex flex-col justify-center min-h-[600px] relative z-10"
                >
                  {/* Service number badge */}
                  <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
                    <span className="text-7xl lg:text-8xl font-bold text-white/20">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-[2px] bg-yellow-500"></div>
                      <span className="text-yellow-500 uppercase tracking-wider text-xs font-semibold">
                        Service
                      </span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      {service.label}
                    </h3>
                  </div>

                  <p className="text-white/60 leading-relaxed text-base lg:text-lg max-w-xl">
                    {service.desc}
                  </p>

                  <ul className="space-y-4 text-sm lg:text-base">
                    {service.features.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-white/80 hover:text-white transition-colors group/item"
                      >
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-yellow-500 group-hover/item:scale-125 transition-transform flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 rounded-full text-sm font-semibold text-black uppercase tracking-wider w-fit shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-105 transform">
                    Book Now →
                  </button>
                </div>
              )}

              {/* Image block */}
              <div className="relative w-full h-[600px] lg:h-screen overflow-hidden">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div
                  ref={(el) => {
                    if (el) imagesRef.current[idx] = el;
                  }}
                  className="absolute inset-0 h-[120%] w-full will-change-transform"
                >
                  <Image
                    fill
                    src={`/service/${service.img}`}
                    alt={`Service image ${service.label}`}
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text block - appears second on odd indices */}
              {!isEven && (
                <div
                  ref={(el) => {
                    if (el) textRef.current[idx] = el;
                  }}
                  className="w-full bg-black text-white p-12 lg:p-20 xl:p-24 space-y-8 flex flex-col justify-center min-h-[600px] relative z-10"
                >
                  {/* Service number badge */}
                  <div className="absolute top-8 right-8 lg:top-12 lg:right-12">
                    <span className="text-7xl lg:text-8xl font-bold text-white/20">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-[2px] bg-yellow-500"></div>
                      <span className="text-yellow-500 uppercase tracking-wider text-xs font-semibold">
                        Service
                      </span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      {service.label}
                    </h3>
                  </div>

                  <p className="text-white/60 leading-relaxed text-base lg:text-lg max-w-xl">
                    {service.desc}
                  </p>

                  <ul className="space-y-4 text-sm lg:text-base">
                    {service.features.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-white/80 hover:text-white transition-colors group/item"
                      >
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-yellow-500 group-hover/item:scale-125 transition-transform flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 rounded-full text-sm font-semibold text-black uppercase tracking-wider w-fit shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-105 transform">
                    Book Now →
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
