"use client";

import Image from "next/image";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

const brands = [
  { logo: "BMW.png", name: "BMW" },
  { logo: "LandRover.png", name: "Land Rover" },
  { logo: "Mercedes.png", name: "Mercedes" },
  { logo: "Bugatti.png", name: "Bugatti" },
  { logo: "ferrari.png", name: "Ferrari" },
  { logo: "mclaren.png", name: "McLaren" },
  { logo: "lamborghini.png", name: "Lamborghini" },
  { logo: "rolls_royce.png", name: "Rolls Royce" },
  { logo: "JAGUAR.png", name: "Jaguar" },
  { logo: "maybach.png", name: "Maybach" },
  { logo: "Volkswagen-Logo.png", name: "Volkswagen" },
  { logo: "PAGANI.png", name: "Pagani" },
  { logo: "aston-martin.png", name: "Aston Martin" },
  { logo: "mini-logo.png", name: "Mini" },
];

export default function Marquee() {
  return (
    <section className="w-full bg-neutral-900 py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Title */}
          <h2 className="text-5xl font-bold text-white whitespace-nowrap">
            Brands we <br /> work with
          </h2>

          {/* Marquee */}
          <ScrollVelocityContainer className="flex-1 overflow-hidden">
            <ScrollVelocityRow
              baseVelocity={3}
              direction={1}
              className="flex items-center py-4"
            >
              {brands.concat(brands).map((brand, i) => (
                <div
                  key={`${brand.name}-${i}`}
                  className="px-8 w-40 h-24 flex items-center justify-center shrink-0"
                >
                  <Image
                    src={`/brand-logos/${brand.logo}`}
                    alt={brand.name}
                    width={160}
                    height={96}
                    className="object-contain opacity-70 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
      </div>
    </section>
  );
}
