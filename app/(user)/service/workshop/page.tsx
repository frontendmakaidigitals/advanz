import ParallaxHero from "../section/hero-section";
import WhyChooseSection from "../section/why-choose";
import ServiceSection from "../section/service";
import Link from "next/link";
const page = () => {
  const servicesData = [
    {
      id: "car-ac-repair",
      badge: {
        icon: "Snowflake",
        text: "Car AC Specialists",
      },
      title: "Professional Car Air Conditioner Repair in",
      highlightedWord: "Dubai",
      description:
        "Dubai's extreme heat demands a perfectly working air conditioning system. Our expert technicians deliver reliable car AC repair using advanced diagnostics to restore cooling performance, comfort, and long-term reliability.",
      services: [
        "Complete car AC diagnostics",
        "AC gas refill & refrigerant recharge",
        "Compressor repair or replacement",
        "AC leak detection & repair",
        "Condenser & evaporator service",
        "Cabin & AC filter cleaning",
        "Electrical & HVAC system repair",
        "Full AC performance check",
      ],
      cta: {
        text: "Book AC Service Now",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/ac-repair.png",
        alt: "Car AC repair service in Dubai",
      },
    },
    {
      id: "engine-oil-change",
      badge: {
        icon: "Droplet",
        text: "Oil Change Experts",
      },
      title: "Professional Engine Oil Change Service in",
      highlightedWord: "Dubai",
      description:
        "Regular oil changes are one of the most important parts of keeping your car running smoothly. At Advanz Tech, we provide reliable car oil change service in Dubai to protect your engine, improve performance, and extend the life of your vehicle.",
      services: [
        "Complete engine oil drain and refill",
        "Oil filter replacement",
        "Premium engine oil (synthetic/semi-synthetic)",
        "Fluid level checks and top-ups",
        "Belts, hoses inspection",
        "Multi-point vehicle inspection",
        "Oil change reminder reset",
      ],
      cta: {
        text: "Book Oil Change",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/car-oil-change.jpg",
        alt: "Engine oil change service in Dubai",
      },
    },
    {
      id: "engine-repair",
      badge: {
        icon: "Wrench",
        text: "Engine Specialists",
      },
      title: "Expert Car Engine Repair in",
      highlightedWord: "Dubai",
      description:
        "Your car's engine is its most important component. At Advanz Tech, we provide professional car engine repair in Dubai to restore performance, reliability, and driving confidence for luxury and high-performance vehicles.",
      services: [
        "Advanced engine diagnostics",
        "Engine oil leak repair",
        "Engine misfire repair",
        "Timing belt/chain replacement",
        "Cylinder head & gasket repair",
        "Engine mount replacement",
        "Engine rebuild/overhaul",
        "Engine replacement services",
      ],
      cta: {
        text: "Book Engine Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/car-engine.png",
        alt: "Car engine repair service in Dubai",
      },
    },
    {
      id: "brake-repair",
      badge: {
        icon: "Disc",
        text: "Brake Specialists",
      },
      title: "Reliable Car Brake Repair in",
      highlightedWord: "Dubai",
      description:
        "Your car's braking system is critical for safety. At Advanz Tech, we provide professional car brake repair in Dubai to ensure your vehicle stops smoothly, quickly, and safely in all driving conditions.",
      services: [
        "Brake pad replacement",
        "Brake disc & rotor inspection",
        "Rotor resurfacing/replacement",
        "Brake fluid replacement",
        "Brake caliper repair",
        "Brake system diagnostics",
        "Noise & vibration checks",
      ],
      cta: {
        text: "Book Brake Service",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/brake-repair.png",
        alt: "Car brake repair service in Dubai",
      },
    },
    {
      id: "battery-repair",
      badge: {
        icon: "Battery",
        text: "Battery Experts",
      },
      title: "Trusted Car Battery Repair Service in",
      highlightedWord: "Dubai",
      description:
        "Your car battery powers everything from the engine to electronics. At Advanz Tech, we provide professional car battery repair service in Dubai using advanced diagnostics to determine whether repair, reconditioning, or replacement is best.",
      services: [
        "Battery health diagnostics",
        "Battery charging & restoration",
        "Sulfation removal",
        "Battery reconditioning",
        "Electrical system inspection",
        "12V lithium-ion support",
        "48V mild-hybrid diagnostics",
        "Replacement advice when needed",
      ],
      cta: {
        text: "Book Battery Service",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/battery-repair.png",
        alt: "Car battery repair service in Dubai",
      },
    },
    {
      id: "gearbox-repair",
      badge: {
        icon: "Settings",
        text: "Gearbox Specialists",
      },
      title: "Trusted Car Gearbox Repair in",
      highlightedWord: "Dubai",
      description:
        "Your car's gearbox transfers engine power to the wheels. At Advanz Tech, we provide expert car gearbox repair in Dubai to restore smooth shifting, improve driving comfort, and protect your transmission system.",
      services: [
        "Gearbox & transmission diagnostics",
        "Gear shifting issue repair",
        "Gearbox oil leak repair",
        "Transmission fluid replacement",
        "Gearbox rebuild & overhaul",
        "Automatic & manual repair",
        "Torque converter repair",
        "Gearbox replacement",
      ],
      cta: {
        text: "Book Gearbox Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/car-gearbox.png",
        alt: "Car gearbox repair service in Dubai",
      },
    },
    {
      id: "radiator-repair",
      badge: {
        icon: "Thermometer",
        text: "Cooling Specialists",
      },
      title: "Reliable Car Radiator Repair in",
      highlightedWord: "Dubai",
      description:
        "Your car's radiator keeps the engine cool and prevents overheating. At Advanz Tech, we provide professional car radiator repair in Dubai to ensure your engine operates at the right temperature in all driving conditions.",
      services: [
        "Radiator inspection & leak detection",
        "Coolant level check & top-up",
        "Radiator hose inspection",
        "Radiator flushing & cleaning",
        "Cooling fan inspection",
        "Water pump inspection",
        "Radiator repair/replacement",
        "Cooling system pressure testing",
      ],
      cta: {
        text: "Book Radiator Service",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/car-radiator.jpeg",
        alt: "Car radiator repair service in Dubai",
      },
    },
    {
      id: "comfort-system-repair",
      badge: {
        icon: "Armchair",
        text: "Comfort Experts",
      },
      title: "Professional Car Comfort System Repair in",
      highlightedWord: "Dubai",
      description:
        "Your car's comfort system makes every drive smooth and enjoyable. At Advanz Tech, we offer expert car comfort system repair in Dubai to ensure your vehicle's interior remains comfortable, functional, and easy to use.",
      services: [
        "Heating & climate control repair",
        "AC performance checks",
        "Power seat adjustment repair",
        "Lumbar support repair",
        "Power window & mirror repair",
        "Electrical component checks",
        "System calibration",
      ],
      cta: {
        text: "Book Comfort Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/car-comfort.jpg",
        alt: "Car comfort system repair in Dubai",
      },
    },
    {
      id: "wheel-alignment",
      badge: {
        icon: "Gauge",
        text: "Alignment Specialists",
      },
      title: "Expert Car Wheel Alignment in",
      highlightedWord: "Dubai",
      description:
        "Wheel alignment affects handling, steering, and stability. At Advanz Tech, we provide professional car wheel alignment in Dubai to improve driving comfort, extend tyre life, and keep your vehicle safe.",
      services: [
        "Computerised wheel alignment",
        "Front & rear alignment",
        "Steering angle inspection",
        "Suspension inspection",
        "Wheel balancing",
        "Tyre wear inspection",
        "Factory spec alignment",
        "Road stability check",
      ],
      cta: {
        text: "Book Alignment",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/brake-repair.png",
        alt: "Car wheel alignment service in Dubai",
      },
    },
    {
      id: "speed-control-repair",
      badge: {
        icon: "Gauge",
        text: "Speed Control Experts",
      },
      title: "Reliable Car Speed Control Unit Repair in",
      highlightedWord: "Dubai",
      description:
        "The speed control unit (cruise control) maintains steady driving speed and reduces fatigue. At Advanz Tech, we provide expert car speed control unit repair in Dubai to keep your system performing safely and reliably.",
      services: [
        "Cruise control diagnostics",
        "Speed sensor inspection",
        "ECU checks",
        "Steering control inspection",
        "Wiring & connector testing",
        "Fault code scanning",
        "System reset",
        "Performance testing",
      ],
      cta: {
        text: "Book Speed Control Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/car-speed-control.jpg",
        alt: "Car speed control repair in Dubai",
      },
    },
    {
      id: "battery-replacement",
      badge: {
        icon: "BatteryCharging",
        text: "Battery Replacement",
      },
      title: "Reliable Car Battery Replacement in",
      highlightedWord: "Dubai",
      description:
        "A healthy battery is critical for smooth performance. At Advanz Tech, we provide professional car battery replacement in Dubai with manufacturer-approved units, ensuring compatibility, safety, and long-term reliability.",
      services: [
        "Battery health & load testing",
        "Charging system check",
        "Safe battery removal",
        "OEM-approved battery installation",
        "Battery coding & reset",
        "Terminal cleaning",
        "Final electrical check",
      ],
      cta: {
        text: "Book Battery Replacement",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/battery-repair.png",
        alt: "Car battery replacement in Dubai",
      },
    },
    {
      id: "suspension-repair",
      badge: {
        icon: "Move",
        text: "Suspension Experts",
      },
      title: "Reliable Car Suspension Repair in",
      highlightedWord: "Dubai",
      description:
        "Your suspension keeps your ride smooth and stable. At Advanz Tech, we provide expert car suspension repair in Dubai to restore comfort, balance, and driving safety for luxury and performance vehicles.",
      services: [
        "Complete suspension inspection",
        "Shock absorber repair/replacement",
        "Suspension bush checks",
        "Ball joint inspection",
        "Ride height assessment",
        "Noise & vibration diagnosis",
        "OEM-quality parts",
        "Road testing after repair",
      ],
      cta: {
        text: "Book Suspension Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/car-suspension.png",
        alt: "Car suspension repair in Dubai",
      },
    },
    {
      id: "steering-repair",
      badge: {
        icon: "Navigation",
        text: "Steering Specialists",
      },
      title: "Reliable Car Steering Wheel Repair in",
      highlightedWord: "Dubai",
      description:
        "The steering wheel is your direct connection to the road. At Advanz Tech, we provide professional car steering wheel repair in Dubai to ensure precise handling and confident driving at all speeds.",
      services: [
        "Steering system diagnostics",
        "Power steering leak checks",
        "Steering rack inspection",
        "Steering column inspection",
        "Wheel alignment & calibration",
        "Loose/stiff steering repair",
        "Noise & vibration diagnosis",
        "Road testing for safety",
      ],
      cta: {
        text: "Book Steering Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/car-steering.jpg",
        alt: "Car steering repair in Dubai",
      },
    },
    {
      id: "fuel-injector-cleaning",
      badge: {
        icon: "Fuel",
        text: "Fuel System Experts",
      },
      title: "Professional Fuel Injector Cleaning in",
      highlightedWord: "Dubai",
      description:
        "Clean fuel injectors ensure smooth combustion and strong performance. At Advanz Tech, we provide expert car fuel injector cleaning in Dubai to restore optimal engine performance and fuel efficiency.",
      services: [
        "Fuel injector diagnostics",
        "Professional injector cleaning",
        "Fuel pressure checks",
        "Spray pattern checks",
        "Engine performance testing",
        "Emission assessment",
        "Fault code scanning",
        "Performance verification",
      ],
      cta: {
        text: "Book Injector Cleaning",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/car-fuel-injector.jpeg",
        alt: "Fuel injector cleaning in Dubai",
      },
    },
    {
      id: "transmission-repair",
      badge: {
        icon: "Cog",
        text: "Transmission Experts",
      },
      title: "Trusted Car Transmission Repair in",
      highlightedWord: "Dubai",
      description:
        "The transmission transfers power to the wheels for smooth gear shifts. At Advanz Tech, we provide expert car transmission repair in Dubai to keep your vehicle performing at its best.",
      services: [
        "Complete transmission diagnostics",
        "Automatic & manual inspection",
        "Transmission leak repair",
        "Gear shifting testing",
        "Transmission fluid checks",
        "Fault code scanning",
        "System calibration",
        "Road testing after repair",
      ],
      cta: {
        text: "Book Transmission Repair",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/car-transmission.jpeg",
        alt: "Car transmission repair in Dubai",
      },
    },
    {
      id: "pre-purchase-inspection",
      badge: {
        icon: "ClipboardCheck",
        text: "Inspection Experts",
      },
      title: "Trusted Pre Purchase Car Inspection in",
      highlightedWord: "Dubai",
      description:
        "Buying a used car is a big decision. At Advanz Tech, we offer professional pre-purchase car inspection in Dubai to help you understand the vehicle's true condition before you commit.",
      services: [
        "Complete vehicle health check",
        "Engine & transmission inspection",
        "Suspension & brake evaluation",
        "Electrical system testing",
        "Exterior & interior assessment",
        "Accident damage identification",
        "Detailed inspection report",
      ],
      cta: {
        text: "Book Inspection",
        icon: "ArrowRight",
      },
      image: {
        src: "/workshop/pre-purchase-inspection.jpeg",
        alt: "Pre purchase car inspection in Dubai",
      },
    },
  ];

  return (
    <>
      <ParallaxHero
        image="/workshop/banner.jpg"
        imageAlt="Trusted Car Workshop Service in Dubai"
        eyebrow="Professional Workshop Services"
        title="Trusted Car Workshop Service in Dubai"
        description="From routine maintenance to complex mechanical repairs, our fully equipped car workshop in Dubai ensures reliable, high-quality service for all vehicle types."
        cta={
          <Link href={"/contact"}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-3">
              Book Workshop Appointment
            </button>
          </Link>
        }
      />
      <WhyChooseSection
        title="Why Choose Our Car Workshop?"
        description="Choosing the right car workshop is essential for your vehicle’s performance, safety, and longevity. We combine expert craftsmanship with advanced technology to deliver reliable automotive services."
        features={[
          "Certified and experienced technicians",
          "Modern diagnostic equipment",
          "Genuine spare parts",
          "Transparent pricing",
          "Fast turnaround time",
          "Service warranty on repairs",
        ]}
        imagePrimary="/workshop/about-2.jpg"
        imageSecondary="/workshop/about-1.jpg"
        cta={
          <Link href={"/contact"}>
            <button className="px-4 py-2 mt-5 bg-yellow-500 font-semibold">
              Book a service now
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
