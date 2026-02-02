import ParallaxHero from "../section/hero-section";
import WhyChooseSection from "../section/why-choose";
import ServiceSection from "../section/service";
import Link from "next/link";
const page = () => {
  const servicesData = [
    {
      id: "auto-spare-parts",
      badge: {
        icon: "PackageCheck",
        text: "Genuine Parts Supply",
      },
      title: "Genuine Auto Spare Parts Supply in",
      highlightedWord: "Dubai",
      description:
        "Using the right spare parts is essential for your vehicle’s performance, safety, and long-term reliability. At Advanz Tech, we supply genuine auto spare parts in Dubai that perfectly match your vehicle’s specifications, ensuring durability, compatibility, and peace of mind with every replacement.",
      services: [
        "Genuine OEM spare parts supply",
        "Engine, brake, and suspension components",
        "Electrical and electronic spare parts",
        "Body and interior replacement parts",
        "Compatibility check and part verification",
        "Warranty-backed genuine parts",
      ],
      cta: {
        text: "Request Genuine Parts",
        icon: "ArrowRight",
      },
      image: {
        src: "/spare-parts/auto-spare-parts.jpg",
        alt: "Genuine auto spare parts supply in Dubai",
      },
    },
  ];

  return (
    <>
      <ParallaxHero
        image="/spare-parts/banner.jpg"
        imageAlt="Genuine auto spare parts supply in Dubai"
        eyebrow="Genuine Auto Spare Parts"
        title="Trusted Genuine Auto Spare Parts Supply in Dubai"
        description="Ensure your vehicle performs at its best with OEM and genuine auto spare parts in Dubai. Advanz Tech supplies high-quality, warranty-backed parts that match your vehicle’s exact specifications for safety, durability, and long-term reliability."
        cta={
          <Link href={"/contact"}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-3">
              Request Genuine Parts
            </button>
          </Link>
        }
      />
      <WhyChooseSection
        title="Why Choose Advanz Tech for Auto Spare Parts?"
        description="Using incorrect or low-quality spare parts can impact vehicle safety and performance. At Advanz Tech, we provide genuine, vehicle-specific auto spare parts in Dubai, ensuring perfect fitment, reliable performance, and complete peace of mind."
        features={[
          "Genuine OEM and manufacturer-approved spare parts",
          "Accurate compatibility and part verification",
          "Wide range of mechanical, electrical & body parts",
          "Warranty-backed genuine components",
          "Transparent pricing with no counterfeit risks",
          "Expert guidance to select the right parts",
        ]}
        imagePrimary="/about/about-1.avif"
        imageSecondary="/about/about-2.png"
        cta={
          <Link href={"/contact"}>
            <button className="px-4 py-2 mt-5 bg-yellow-500 font-semibold">
              Get Genuine Parts
            </button>
          </Link>
        }
      />

      {servicesData.map((service, index) => (
        <ServiceSection
          key={service.id}
          imagePosition={index % 2 === 0 ? "left" : "right"}
          variant={index % 2 === 0 ? "dark" : "light"}
          {...service}
        />
      ))}
    </>
  );
};

export default page;
