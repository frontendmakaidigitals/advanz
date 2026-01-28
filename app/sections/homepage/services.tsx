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
          { label: "Workshop Services", img: "DSC02024.jpg", desc: "" },
          { label: "Body Shop Services", img: "DSC02013.jpg", desc: "" },
          { label: "Spare Parts", img: "DSC02035.jpg", desc: "" },
          { label: "Car Programming ", img: "DSC02043.jpg", desc: "" },
          { label: "Recovery & Assistance", img: "DSC02082.jpg", desc: "" },
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, reprehenderit. Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
