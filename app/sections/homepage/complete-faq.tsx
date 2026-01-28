"use client";
import gsap from "gsap";
import FAQ from "@/app/components/faq";
import Link from "next/link";
import { useRef, useEffect } from "react";
const faqData = [
  {
    question: "What services does your automotive garage offer?",
    answer:
      "We provide complete automotive services including routine maintenance, engine diagnostics, brake repair, suspension work, electrical troubleshooting, and performance upgrades for luxury and standard vehicles.",
  },
  {
    question: "Do you specialize in luxury or high-performance cars?",
    answer:
      "Yes, we specialize in servicing luxury and high-performance brands such as BMW, Mercedes-Benz, Audi, Porsche, Land Rover, and other premium vehicles using manufacturer-recommended tools and procedures.",
  },
  {
    question: "How long does a typical car service take?",
    answer:
      "A standard service usually takes between 2 to 4 hours. Complex repairs or diagnostics may require additional time, which will always be communicated to you in advance.",
  },
  {
    question: "Do you use genuine spare parts?",
    answer:
      "Absolutely. We use only genuine or OEM-approved spare parts to ensure performance, reliability, and warranty compliance for your vehicle.",
  },
  {
    question: "Is prior appointment required for servicing?",
    answer:
      "While walk-ins are welcome, we highly recommend booking an appointment to minimize waiting time and allow our technicians to prepare for your vehicle in advance.",
  },
  {
    question: "Do you provide warranty on repairs?",
    answer:
      "Yes, all our repairs and replacement parts come with a service warranty. Warranty duration depends on the type of service or component replaced.",
  },
  {
    question: "Can I track the status of my car service?",
    answer:
      "Yes, our team keeps you informed at every stage of the service process via phone or WhatsApp updates, ensuring full transparency.",
  },
];
const FAQE = () => {
  const textRef = useRef<HTMLDivElement>(null);

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl container py-20">
      <div ref={textRef} className="">
        <div className="mb-5 space-y-3">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p>Even more questions? click to contact us </p>
        </div>
        <Link href={"/contact"}>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Contact Us
          </button>
        </Link>
      </div>
      <FAQ faq={faqData} />
    </div>
  );
};

export default FAQE;
