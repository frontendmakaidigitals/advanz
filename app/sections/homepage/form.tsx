"use client";
import { useEffect } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const ContactFormSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const handleSelectOpen = (open: boolean) => {
    const smoother = ScrollSmoother.get();
    if (!smoother) return;

    smoother.paused(open);
  };
  useEffect(() => {
    if (!imageRef.current || !sectionRef.current) return;

    // Create parallax effect for the image
    const parallaxTl = gsap.to(imageRef.current, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", // When section top hits viewport bottom
        end: "bottom top", // When section bottom hits viewport top
        scrub: 1, // Smooth scrubbing effect
      },
    });

    return () => {
      parallaxTl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-white py-20"
    >
      <div className="container max-w-7xl grid !px-0 grid-cols-1 lg:grid-cols-2 overflow-hidden items-stretch relative z-10">
        {/* Left Content - Image */}
        <div className="  flex flex-col justify-end h-full ">
          <Image
            ref={imageRef}
            src="https://images.pexels.com/photos/16510639/pexels-photo-16510639.jpeg"
            alt="Contact"
            fill
            className=" w-full h-full object-cover scale-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10" />
        </div>

        {/* Right Content - Form */}
        <div className="bg-white/90 backdrop-blur-lg relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
          {/* Header */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-md">
              Have questions or need assistance? Reach out to our team — we're
              here to help you find the right solutions quickly and easily.
            </p>

            {/* Form Fields */}
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full py-3 px-1 text-gray-900 placeholder:text-gray-400 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="phone"
                  placeholder="+97 1235 6789"
                  className="w-full py-3 px-1 text-gray-900 placeholder:text-gray-400 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="temptemtemp@gmail.com"
                  className="w-full py-3 px-1 text-gray-900 placeholder:text-gray-400 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Your question"
                  rows={1}
                  className="w-full py-3 px-1 text-gray-900 placeholder:text-gray-400 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-6 px-8 py-3 bg-yellow-500 text-white hover:bg-yellow-600 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Footer - Social & Contact Info */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            {/* Social Links */}
            <div className="flex gap-6 mb-6">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
              >
                Twitter
              </a>
            </div>

            {/* Contact Details */}
            <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 text-sm text-gray-600">
              <span>Call: 963-578-3457</span>

              <span>advanz@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
