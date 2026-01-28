import Hero from "./sections/homepage/hero";
import Marquee from "./sections/homepage/marquee";
import About from "./sections/homepage/about";
import Services from "./sections/homepage/services";
import FAQE from "./sections/homepage/complete-faq";
import ContactFormSection from "./sections/homepage/form";
import CTASection from "./components/CTA";
const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <FAQE />
      <ContactFormSection />
      <CTASection />
    </>
  );
};

export default Home;
