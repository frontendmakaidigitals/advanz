import ParallaxHero from "../section/hero-section";
import WhyChooseSection from "../section/why-choose";
import ServiceSection from "../section/service";
import Link from "next/link";
const page = () => {
  const servicesData = [
    {
      id: "auto-body-repair",
      badge: {
        icon: "Wrench",
        text: "Body Shop Experts",
      },
      title: "Trusted Auto Body Repair & Body Shop Services in",
      highlightedWord: "Dubai",
      description:
        "From minor scratches and dents to accident-related damage, our professional auto body repair services restore your vehicle’s structure, finish, and road presence using advanced tools and precision techniques.",
      services: [
        "Accident and collision damage repair",
        "Dent removal and paint correction",
        "Scratch removal and repainting",
        "Panel repair and replacement",
        "Chassis and frame alignment checks",
        "Rust repair and surface protection",
        "Final quality inspection and detailing",
      ],
      cta: {
        text: "Book Body Repair Now",
        icon: "ArrowRight",
      },
      image: {
        src: "/body-shop/auto-body-repair.jpg",
        alt: "Auto body repair services in Dubai",
      },
    },

    {
      id: "car-seat-repair",
      badge: {
        icon: "Armchair",
        text: "Interior Specialists",
      },
      title: "Trusted Car Seat Repair & Upholstery Services in",
      highlightedWord: "Dubai",
      description:
        "Worn leather, torn fabric, or sagging seats can reduce comfort and interior appeal. Our car seat repair services restore factory-level comfort, support, and premium aesthetics.",
      services: [
        "Seat upholstery repair and replacement",
        "Leather and fabric restoration",
        "Foam padding repair and reshaping",
        "Seat frame and rail inspection",
        "Seat adjustment mechanism repair",
        "Stitching and seam repair",
        "Final comfort and quality check",
      ],
      cta: {
        text: "Book Seat Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/body-shop/car-seat-repair.jpg",
        alt: "Car seat repair and upholstery service in Dubai",
      },
    },

    {
      id: "car-paint-service",
      badge: {
        icon: "Paintbrush",
        text: "Paint Specialists",
      },
      title: "Trusted Car Paint & Repainting Services in",
      highlightedWord: "Dubai",
      description:
        "From faded paint to scratches and full repaints, our expert car paint services restore your vehicle’s shine, color accuracy, and long-lasting protection.",
      services: [
        "Full and partial car repainting",
        "Scratch and paint chip repair",
        "Color matching and blending",
        "Clear coat application",
        "Paint correction and polishing",
        "Rust treatment and surface preparation",
        "Final paint inspection and detailing",
      ],
      cta: {
        text: "Book Paint Service",
        icon: "ArrowRight",
      },
      image: {
        src: "/body-shop/car-paint-service.webp",
        alt: "Car paint and repainting services in Dubai",
      },
    },

    {
      id: "car-glass-repair",
      badge: {
        icon: "GlassWater",
        text: "Glass Repair Experts",
      },
      title: "Trusted Car Glass Repair & Replacement Services in",
      highlightedWord: "Dubai",
      description:
        "Cracked or damaged car glass affects visibility and safety. Our professional car glass repair services restore clarity, strength, and factory-level sealing.",
      services: [
        "Windshield crack and chip repair",
        "Front, side, and rear glass replacement",
        "Power window repair and adjustment",
        "Glass seal and weather strip inspection",
        "Water leak diagnosis and sealing",
        "Sunroof and window mechanism checks",
        "Final safety and visibility inspection",
      ],
      cta: {
        text: "Book Glass Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/body-shop/car-glass-repair.png",
        alt: "Car glass repair and replacement in Dubai",
      },
    },

    {
      id: "car-tyre-repair",
      badge: {
        icon: "CircleDot",
        text: "Tyre Specialists",
      },
      title: "Trusted Car Tyre Repair Services in",
      highlightedWord: "Dubai",
      description:
        "Punctures, uneven wear, or low pressure can compromise safety. Our tyre repair services ensure proper grip, balance, and road stability.",
      services: [
        "Tyre puncture inspection and repair",
        "Tyre replacement and secure mounting",
        "Wheel balancing for smooth driving",
        "Wheel alignment checks",
        "Tyre pressure inspection and adjustment",
        "TPMS inspection",
        "Run-flat tyre repair assessment",
        "Final safety and performance check",
      ],
      cta: {
        text: "Book Tyre Service",
        icon: "ArrowRight",
      },
      image: {
        src: "/body-shop/car-tyre-repair.jpg",
        alt: "Car tyre repair services in Dubai",
      },
    },

    {
      id: "car-chassis-repair",
      badge: {
        icon: "Car",
        text: "Structural Repair",
      },
      title: "Trusted Car Chassis Repair Services in",
      highlightedWord: "Dubai",
      description:
        "Chassis damage affects safety, alignment, and handling. Our expert chassis repair services restore structural integrity using advanced measuring and straightening systems.",
      services: [
        "Chassis and frame damage inspection",
        "Frame straightening and alignment correction",
        "Structural welding and reinforcement",
        "Suspension and underbody alignment checks",
        "Rust damage repair and prevention",
        "Subframe and crossmember repair",
        "Final structural safety inspection",
      ],
      cta: {
        text: "Book Chassis Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/body-shop/car-chassis-repair.avif",
        alt: "Car chassis repair services in Dubai",
      },
    },

    {
      id: "car-window-repair",
      badge: {
        icon: "Square",
        text: "Window Repair",
      },
      title: "Professional Car Window Repair & Replacement in",
      highlightedWord: "Dubai",
      description:
        "Stuck, slow, or broken windows affect safety and comfort. Our car window repair services restore smooth operation and secure sealing.",
      services: [
        "Car window glass repair or replacement",
        "Window regulator repair and replacement",
        "Power window motor repair",
        "Window switch repair",
        "Broken or jammed window repair",
        "Window alignment and calibration",
        "Seal repair and replacement",
        "Final operational and safety check",
      ],
      cta: {
        text: "Book Window Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/body-shop/car-window-repair.jpeg",
        alt: "Car window repair services in Dubai",
      },
    },

    {
      id: "car-accident-repair",
      badge: {
        icon: "AlertTriangle",
        text: "Accident Repair",
      },
      title: "Trusted Car Accident Repair & Collision Services in",
      highlightedWord: "Dubai",
      description:
        "From minor dents to major collision damage, our professional accident repair services restore safety, performance, and appearance to manufacturer standards.",
      services: [
        "Collision damage assessment and diagnostics",
        "Body panel repair and replacement",
        "Frame straightening and alignment",
        "Paintwork repair and color matching",
        "Bumper, headlight, and taillight repair",
        "Suspension and steering inspection",
        "Final safety and quality inspection",
      ],
      cta: {
        text: "Book Accident Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/body-shop/car-accident-repair.jpg",
        alt: "Car accident repair services in Dubai",
      },
    },
  ];

  return (
    <>
      <ParallaxHero
        image="/body-shop/banner.jpg"
        imageAlt="Trusted car workshop and repair services in Dubai"
        eyebrow="Complete Auto Care Under One Roof"
        title="Expert Car Repair & Workshop Services in Dubai"
        description="From accident repairs, bodywork, paint, glass, tyres, and chassis repairs to interior restoration and windshield replacement — our advanced car workshop in Dubai delivers precision repairs, genuine parts, and uncompromised safety for every vehicle."
        cta={
          <Link href={"/contact"}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3">
              Book Inspection Today
            </button>
          </Link>
        }
      />
      <WhyChooseSection
        title="Why Choose Our Car Workshop in Dubai?"
        description="Your vehicle deserves expert care, precision repairs, and complete transparency. We combine certified technicians, advanced repair technology, and genuine parts to deliver safe, reliable, and long-lasting automotive solutions."
        features={[
          "Certified technicians for body, paint, glass, and mechanical repairs",
          "Advanced diagnostics, frame alignment, and repair equipment",
          "Genuine OEM and warranty-backed spare parts",
          "Accident, collision, and structural repair specialists",
          "Transparent pricing with clear repair estimates",
          "Quality checks and service warranty on all repairs",
        ]}
        imagePrimary="/body-shop/about-1.webp"
        imageSecondary="/body-shop/about-2.jpg"
        cta={
          <Link href={"/contact"}>
            <button className="px-5 py-2.5 mt-5 bg-yellow-500 font-semibold text-black">
              Get a Free Inspection
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
