"use client";

import { useEffect, useRef, useState } from "react";
import { pages, servicesList } from "./header";
import gsap from "gsap";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { ArrowDown } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const line1 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !line1.current || !line2.current) return;

    tl.current = gsap.timeline({ paused: true });

    // hamburger → X
    tl.current
      .to(
        line1.current,
        {
          y: 4,
          x: 1.5,
          rotate: 45,
          duration: 0.25,
          ease: "power2.out",
        },
        0,
      )
      .to(
        line2.current,
        {
          x: 1,
          y: -3,
          rotate: -45,
          duration: 0.25,
          ease: "power2.out",
        },
        0,
      );

    // overlay + sliding panel + menu
    tl.current
      // show overlay
      .to(
        overlayRef.current,
        {
          autoAlpha: 1,
          duration: 0.3,
          ease: "power2.out",
          pointerEvents: "auto",
        },
        0.1,
      )

      // slide panel from left → right
      .fromTo(
        panelRef.current,
        { x: "-100%" },
        {
          x: "0%",
          duration: 0.45,
          ease: "power3.out",
        },
        0.1,
      )

      // menu items
      .from(
        itemsRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.2",
      );
  }, []);

  useEffect(() => {
    if (!tl.current) return;

    if (open) {
      tl.current.play();
      document.body.style.overflow = "hidden";

      // Pause ScrollSmoother
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("pauseScrollSmoother"));
      }
    } else {
      tl.current.reverse();
      document.body.style.overflow = "";

      // Resume ScrollSmoother
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("resumeScrollSmoother"));
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <style jsx global>{`
        .nav-item {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-item:hover {
          padding-left: 1.75rem;
          background-color: #fef08a; /* yellow-200 */
        }

        /* Remove default accordion button styling */
        .accordion-trigger-custom {
          all: unset;
          display: block;
          width: 100%;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .accordion-trigger-custom:hover {
          padding-left: 1.75rem;
          background-color: #fef08a;
        }

        /* Style the chevron */
        .accordion-trigger-custom svg {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .accordion-trigger-custom[data-state="open"] svg {
          transform: rotate(180deg);
        }
      `}</style>

      <div className="">
        {/* Toggle Button */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="bg-white shadow hover:bg-slate-100 cursor-pointer size-10 flex flex-col items-center justify-center rounded-full relative z-[60]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <div
            ref={line1}
            className="w-6 h-0.5 bg-slate-950"
            style={{ transformOrigin: "center" }}
          />
          <div
            ref={line2}
            className="w-6 h-0.5 bg-slate-950 mt-1"
            style={{ transformOrigin: "center" }}
          />
        </button>

        {/* Overlay */}
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 h-screen w-screen opacity-0 pointer-events-none"
          onClick={() => setOpen(false)}
        >
          <div
            ref={panelRef}
            className="bg-white max-w-md relative w-full h-full will-change-transform shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white h-28 absolute w-[95%] z-10" />
            <div className=" overflow-auto  pt-28 h-full container w-full ">
              {/* Navigation Items */}
              <div>
                <nav className="space-y-3 text-4xl lg:text-5xl w-full font-semibold">
                  {pages.map((page, idx) => {
                    // SERVICES → ACCORDION
                    if (page.key === "services") {
                      return (
                        <div
                          key={idx}
                          ref={(el) => {
                            if (el) itemsRef.current[idx] = el;
                          }}
                          className="overflow-hidden w-full"
                        >
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                          >
                            <AccordionItem
                              value="services"
                              className="border-none py-2"
                            >
                              <AccordionTrigger className=" text-4xl lg:text-5xl rounded-none! font-[600] hover:bg-yellow-200 pr-3 hover:pl-7 flex items-center">
                                <span className="capitalize">{page.label}</span>
                              </AccordionTrigger>

                              <AccordionContent className="pt-2 pb-4 space-y-1">
                                {servicesList.map((service, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={service.href}
                                    onClick={() => setOpen(false)}
                                    className="block w-full text-xl lg:text-2xl text-slate-900 font-[500] capitalize pl-3 py-2 hover:pl-12 transition-all duration-300 hover:bg-yellow-100 "
                                  >
                                    {service.label}
                                  </Link>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      );
                    }

                    // NORMAL LINKS
                    if (!page.href) return null;

                    return (
                      <div
                        key={idx}
                        ref={(el) => {
                          if (el) itemsRef.current[idx] = el;
                        }}
                        className="overflow-hidden w-full"
                      >
                        <Link
                          href={page.href}
                          onClick={() => setOpen(false)}
                          className="nav-item block w-full text-slate-900 leading-[5rem] capitalize tracking-tight"
                        >
                          {page.label}
                        </Link>
                      </div>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
