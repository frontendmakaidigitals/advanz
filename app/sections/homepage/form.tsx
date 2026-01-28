"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef } from "react";

const services = [
  "Workshop Services",
  "Body Shop Services",
  "Spare Parts",
  "Car Programming",
  "Recovery & Assistance",
];

const ContactFormSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const fieldsRef = useRef<HTMLDivElement[]>([]);

  const handleSelectOpen = (open: boolean) => {
    const smoother = ScrollSmoother.get();
    if (!smoother) return;

    smoother.paused(open);
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white py-28 overflow-hidden">
      <div className="container max-w-5xl grid grid-cols-1 lg:grid-cols-2 items-start relative z-10">
        {/* Left Content */}
        <div
          ref={textRef}
          className="relative flex flex-col justify-end h-full p-6 min-h-[420px]"
        >
          <img
            src="https://images.pexels.com/photos/16510639/pexels-photo-16510639.jpeg"
            alt="Contact"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          <h2 className="text-4xl relative z-10 font-bold tracking-tight text-white mb-3">
            Get in Touch
          </h2>
          <p className="relative z-10 text-gray-200 max-w-sm">
            Have questions or want to book a service? Fill out the form and our
            team will get back to you promptly.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 bg-neutral-50 p-6 border border-slate-200 shadow-sm">
          {["Name", "Email", "Phone", "Service", "Message"].map((label, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) fieldsRef.current[i] = el;
              }}
              className="flex flex-col"
            >
              <label className="mb-2 font-medium text-slate-700">{label}</label>

              {/* Message */}
              {label === "Message" ? (
                <textarea
                  placeholder="Enter message"
                  rows={5}
                  className="px-4 py-2 resize-none rounded-md bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              ) : label === "Service" ? (
                /* Select Service */
                <Select onOpenChange={handleSelectOpen}>
                  <SelectTrigger className="bg-white border border-slate-300 focus:ring-2 focus:ring-yellow-400 w-full h-11!">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                /* Inputs */
                <input
                  type={label === "Phone" ? "tel" : "text"}
                  placeholder={`Enter ${label.toLowerCase()}`}
                  className="px-4 py-2 rounded-md bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 transition rounded-full font-semibold text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
