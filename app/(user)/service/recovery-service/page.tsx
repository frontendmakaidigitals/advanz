import ParallaxHero from "../section/hero-section";
import WhyChooseSection from "../section/why-choose";
import ServiceSection from "../section/service";
import CTASection from "../../components/CTA";
import Link from "next/link";
const page = () => {
  const servicesData = [
    {
      id: "car-recovery-towing",
      badge: {
        icon: "Truck",
        text: "24/7 Roadside Assistance",
      },
      title: "Trusted Car Recovery & Towing Services in",
      highlightedWord: "Dubai",
      description:
        "Vehicle breakdowns and roadside emergencies can happen without warning, leaving you stranded and stressed. At Advanz Tech, we provide reliable car recovery and towing services in Dubai to ensure your vehicle is transported safely and efficiently, no matter the situation or location.",
      services: [
        "Emergency car recovery and towing",
        "Roadside assistance support",
        "Accident and collision recovery",
        "Luxury and sports car towing",
        "Flat tire and battery-related recovery",
        "Safe transport to workshop or preferred location",
      ],
      cta: {
        text: "Request Recovery Service",
        icon: "ArrowRight",
      },
      image: {
        src: "/recovery/recovery.jpg",
        alt: "Car recovery and towing service in Dubai",
      },
    },
  ];

  return (
    <>
      <ParallaxHero
        image="/recovery/banner.jpg"
        imageAlt="24/7 car recovery and towing service in Dubai"
        eyebrow="24/7 Car Recovery Services"
        title="Reliable Car Recovery & Towing Services in Dubai"
        description="Breakdowns and roadside emergencies can happen anytime. Advanz Tech provides fast, safe, and professional car recovery and towing services in Dubai, ensuring your vehicle is transported securely from any location, day or night."
        cta={
          <Link href={"/contact"}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-3">
              Request Recovery Now
            </button>
          </Link>
        }
      />

      <WhyChooseSection
        title="Why Choose Advanz Tech for Car Recovery & Towing?"
        description="During roadside emergencies, choosing the right recovery service makes all the difference. Advanz Tech offers dependable car recovery and towing services in Dubai, prioritizing safety, quick response, and professional vehicle handling."
        features={[
          "24/7 emergency car recovery and roadside assistance",
          "Quick response across Dubai and surrounding areas",
          "Safe towing for luxury, sports, and standard vehicles",
          "Experienced recovery operators and secure equipment",
          "Accident and breakdown recovery support",
          "Transparent pricing with no hidden charges",
        ]}
        imagePrimary="/about/about-1.avif"
        imageSecondary="/about/about-2.png"
        cta={
          <Link href={"/contact"}>
            <button className="px-4 py-2 mt-5 bg-yellow-500 font-semibold">
              Call for Recovery
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
      <CTASection />
    </>
  );
};

export default page;
