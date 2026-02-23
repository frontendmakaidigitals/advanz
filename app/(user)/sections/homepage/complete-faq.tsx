"use client";
import gsap from "gsap";
import FAQ from "@/app/(user)/components/faq";
import Link from "next/link";
import { useRef, useEffect } from "react";
const faqData = [
  {
    question: "What services does your luxury auto workshop offer?",
    answer:
      "We provide comprehensive services including scheduled maintenance, advanced diagnostics, engine and transmission repair, brake and suspension work, electrical troubleshooting, and performance tuning for premium vehicles.",
  },
  {
    question: "Do you specialize in specific luxury car brands?",
    answer:
      "Yes. Our technicians are highly experienced with BMW, Mercedes-Benz, Audi, Porsche, Range Rover, Bentley, and other high-end vehicles, using manufacturer-grade diagnostic tools and procedures.",
  },
  {
    question: "How long does a typical luxury car service take?",
    answer:
      "A standard maintenance service usually takes 2–4 hours. Complex diagnostics or repairs may require additional time, which will always be communicated clearly before work begins.",
  },
  {
    question: "Do you use genuine or OEM parts?",
    answer:
      "Absolutely. We use genuine or OEM-approved parts to ensure optimal performance, reliability, and to maintain your vehicle’s warranty standards.",
  },
  {
    question: "Is an appointment required?",
    answer:
      "Appointments are recommended to ensure priority service and minimal waiting time, although we do accommodate urgent walk-ins whenever possible.",
  },
  {
    question: "Do you provide warranty on repairs?",
    answer:
      "Yes, all repairs and replacement parts are covered by a service warranty. The duration varies depending on the service or components involved.",
  },
  {
    question: "Will I receive updates during the service process?",
    answer:
      "Yes. We provide transparent progress updates via phone or WhatsApp, including diagnostics reports and approval before major repairs.",
  },
];
const FAQE = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bgRef.current && containerRef.current) {
        gsap.fromTo(
          bgRef.current,
          { y: "-15%" },
          {
            y: "15%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax for the text container
      gsap.to(textRef.current, {
        y: -20, // adjust how much it moves
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // smooth parallax
        },
      });
    }, textRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center "
    >
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 scale-110 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ireland-chauffeur.com/wp-content/uploads/2018/11/black-mercedes-benz-in-the-darkness-52170-1920x1200.jpg')",
        }}
      />
      <div className="absolute inset-0 w-full h-full bg-black/50 z-10" />
      <div className="grid grid-cols-1 max-w-6xl mt-20 relative z-10 container lg:grid-cols-2 gap-16">
        <div ref={textRef} className="">
          <div className="mb-5 space-y-3">
            <h2 className="text-5xl font-bold text-slate-50">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-100">
              Even more questions? click to contact us{" "}
            </p>
          </div>
          <Link href={"/contact"}>
            <button className="bg-black text-white px-4 py-2 rounded-full">
              Contact Us
            </button>
          </Link>
        </div>
        <FAQ faq={faqData} />
      </div>
    </section>
  );
};

export default FAQE;
