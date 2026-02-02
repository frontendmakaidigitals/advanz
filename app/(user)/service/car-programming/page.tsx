import ParallaxHero from "../section/hero-section";
import WhyChooseSection from "../section/why-choose";
import ServiceSection from "../section/service";
import Link from "next/link";
const page = () => {
  const servicesData = [
    {
      id: "car-key-programming",
      badge: {
        icon: "Key",
        text: "Vehicle Security Experts",
      },
      title: "Trusted Car Key Programming Services in",
      highlightedWord: "Dubai",
      description:
        "Modern vehicles rely on smart keys, transponders, and immobilizer systems for security. When keys are lost, damaged, or unresponsive, professional car key programming is essential. At Advanz Tech, we provide reliable car key programming in Dubai to restore access, ignition control, and complete peace of mind.",
      services: [
        "Smart key and key fob programming",
        "Transponder key coding and reprogramming",
        "Lost or stolen key replacement programming",
        "Spare key addition and synchronization",
        "Immobilizer and security system pairing",
        "System testing after programming",
      ],
      cta: {
        text: "Program Car Key",
        icon: "ArrowRight",
      },
      image: {
        src: "/car-programming/car-key-programming.webp",
        alt: "Car key programming service in Dubai",
      },
    },

    {
      id: "car-navigation-system",
      badge: {
        icon: "Map",
        text: "Infotainment Specialists",
      },
      title: "Trusted Car Navigation System Updates & Installation in",
      highlightedWord: "Dubai",
      description:
        "Outdated navigation systems and slow infotainment software can affect driving convenience and safety. Advanz Tech offers professional car navigation system updates and installations in Dubai, ensuring accurate maps, smooth performance, and seamless connectivity.",
      services: [
        "Navigation software and firmware updates",
        "GPS map updates and accuracy improvements",
        "Navigation system diagnostics and fault checks",
        "Touchscreen and interface optimization",
        "GPS signal and connectivity troubleshooting",
        "Navigation system installation or replacement",
      ],
      cta: {
        text: "Update Navigation System",
        icon: "ArrowRight",
      },
      image: {
        src: "/car-programming/car-navigation.webp",
        alt: "Car navigation system update service in Dubai",
      },
    },

    {
      id: "car-coding-programming",
      badge: {
        icon: "Cpu",
        text: "Advanced Vehicle Coding",
      },
      title: "Trusted Car Coding & Programming Services in",
      highlightedWord: "Dubai",
      description:
        "Modern vehicles use advanced electronic systems to control performance, comfort, and safety features. Advanz Tech provides professional car coding and programming services in Dubai, helping unlock hidden features, update modules, and optimize vehicle behavior safely.",
      services: [
        "ECU coding and system configuration",
        "Module programming and software updates",
        "Feature activation and customization",
        "Diagnostic coding and fault code clearing",
        "Immobilizer and security system programming",
        "Key and control module synchronization",
      ],
      cta: {
        text: "Book Coding Service",
        icon: "ArrowRight",
      },
      image: {
        src: "/car-programming/car-programming.png",
        alt: "Car coding and programming service in Dubai",
      },
    },

    {
      id: "camera-radar-calibration",
      badge: {
        icon: "Radar",
        text: "ADAS Calibration Experts",
      },
      title: "Trusted Car Camera & Radar Calibration Services in",
      highlightedWord: "Dubai",
      description:
        "Advanced Driver Assistance Systems (ADAS) rely on precise camera and radar calibration to function safely. Advanz Tech provides professional camera and radar calibration services in Dubai to ensure accurate detection, collision prevention, and driving confidence.",
      services: [
        "ADAS camera calibration",
        "Radar sensor alignment and adjustment",
        "Calibration after windshield or bumper replacement",
        "Post-accident sensor recalibration",
        "System diagnostics and error correction",
        "Final testing to manufacturer specifications",
      ],
      cta: {
        text: "Calibrate ADAS Systems",
        icon: "ArrowRight",
      },
      image: {
        src: "/car-programming/car-camera.png",
        alt: "Car camera and radar calibration service in Dubai",
      },
    },

    {
      id: "retrofit-headlights",
      badge: {
        icon: "Lightbulb",
        text: "Vehicle Upgrades",
      },
      title: "Trusted Retrofit Headlight & Vehicle Upgrade Services in",
      highlightedWord: "Dubai",
      description:
        "Vehicle retrofits allow you to upgrade lighting and technology features beyond factory specifications. Advanz Tech provides professional retrofit headlight services in Dubai, enhancing visibility, safety, and vehicle aesthetics with OEM-compatible upgrades.",
      services: [
        "Headlight retrofit to LED or xenon systems",
        "Adaptive and intelligent lighting upgrades",
        "OEM-compatible component installation",
        "Wiring integration and system coding",
        "Beam alignment and calibration",
        "Performance and safety testing after retrofit",
      ],
      cta: {
        text: "Upgrade Headlights",
        icon: "ArrowRight",
      },
      image: {
        src: "/car-programming/retrofit-headlight.webp",
        alt: "Retrofit headlight service in Dubai",
      },
    },

    {
      id: "ecu-repair",
      badge: {
        icon: "Cpu",
        text: "ECU Repair Specialists",
      },
      title: "Trusted Engine Control Unit (ECU) Repair Services in",
      highlightedWord: "Dubai",
      description:
        "The Engine Control Unit (ECU) manages critical engine functions and overall vehicle performance. Advanz Tech provides professional ECU repair services in Dubai, diagnosing faults accurately and restoring engine reliability without unnecessary replacements.",
      services: [
        "ECU diagnostics and fault code analysis",
        "Engine performance and sensor data evaluation",
        "ECU repair or reprogramming where applicable",
        "Electrical connection and wiring checks",
        "System reset and calibration",
        "Post-repair testing for optimal performance",
      ],
      cta: {
        text: "Book ECU Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/car-programming/ecu-repair.jpg",
        alt: "Engine control unit repair service in Dubai",
      },
    },
  ];

  return (
    <>
      <ParallaxHero
        image="/car-programming/banner.webp"
        imageAlt="Advanced car programming and electronic services in Dubai"
        eyebrow="Advanced Vehicle Electronics"
        title="Expert Car Programming & Electronic Services in Dubai"
        description="From car key programming and ECU repair to ADAS calibration and navigation system upgrades, Advanz Tech delivers precision-driven automotive electronic solutions using advanced diagnostics and OEM-level tools."
        cta={
          <Link href={"/contact"}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-3">
              Book Electronic Service
            </button>
          </Link>
        }
      />
      <WhyChooseSection
        title="Why Choose Advanz Tech for Car Programming Services?"
        description="Vehicle electronics require precision, expertise, and the right technology. At Advanz Tech, we specialize in advanced car programming and calibration services that restore functionality, enhance safety, and protect your vehicle’s electronic systems."
        features={[
          "Specialists in car key programming, ECU repair & ADAS calibration",
          "OEM-level diagnostic and programming tools",
          "Experienced technicians for modern vehicle electronics",
          "Safe coding without voiding manufacturer settings",
          "Accurate calibration to factory specifications",
          "Transparent pricing with reliable service support",
        ]}
        imagePrimary="/about/about-1.avif"
        imageSecondary="/about/about-2.png"
        cta={
          <Link href={"/contact"}>
            <button className="px-4 py-2 mt-5 bg-yellow-500 font-semibold">
              Schedule a Service
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
