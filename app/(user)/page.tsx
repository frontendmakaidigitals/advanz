import Hero from "./sections/homepage/hero";
import Marquee from "./sections/homepage/marquee";
import About from "./sections/homepage/about";
import Services from "./sections/homepage/services";
import FAQE from "./sections/homepage/complete-faq";
import ContactFormSection from "./sections/homepage/form";
import CTASection from "./components/CTA";
import Testimonial from "./components/testimonial";
import Blogs from "./components/blogs";
const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <FAQE />
      <Testimonial />
      <ContactFormSection />
      <Blogs />
      <CTASection />
    </>
  );
};

export default Home;
