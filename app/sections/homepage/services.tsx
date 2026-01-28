"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, idx) => {
      if (!card) return;

      // Card floating effect
      gsap.to(card, {
        y: idx % 2 === 0 ? -60 : -40,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Image parallax effect
      const image = imagesRef.current[idx];
      if (!image) return;

      gsap.to(image, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="bg-black relative py-32">
      <div className="container mx-auto space-y-32 max-w-6xl">
        {[
          {
            label: "Workshop Services",
            img: "DSC02024.jpg",
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
            img: "DSC02013.jpg",
            desc: "Precision body repair and paint refinement restoring your vehicle’s structure, finish, and original factory standards.",
            features: [
              "Accident & collision repair",
              "Factory-grade paint booth",
              "Computerized color matching",
              "Insurance-approved repairs",
            ],
          },
          {
            label: "Spare Parts",
            img: "DSC02035.jpg",
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
            img: "DSC02043.jpg",
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
            img: "DSC02082.jpg",
            desc: "24/7 roadside recovery and emergency assistance delivering fast, secure transport and complete peace of mind.",
            features: [
              "24/7 roadside assistance",
              "Flatbed towing",
              "Secure vehicle transport",
              "Emergency breakdown support",
            ],
          },
        ].map((service, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              className={`flex flex-col lg:flex-row items-center gap-24 ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image block */}
              <div className="relative z-10 w-full lg:w-1/2 h-[420px] overflow-hidden bg-white/90">
                <div
                  ref={(el) => {
                    if (el) imagesRef.current[idx] = el;
                  }}
                  className="absolute inset-0 h-[120%] w-full will-change-transform"
                >
                  <Image
                    fill
                    src={`/brand-images/${service.img}`}
                    alt={`Service image ${service}`}
                    className="object-cover scale-[1.05]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text block */}
              <div className="w-full lg:w-1/2 text-white space-y-6">
                <h3 className="text-4xl font-bold">{service.label}</h3>
                <p className="text-white/70 leading-relaxed max-w-md">
                  {service.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-white/80">
                  {service.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-4 py-2 bg-yellow-600 rounded-full text-sm">
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
