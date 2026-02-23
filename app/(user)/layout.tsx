import type { Metadata } from "next";
import ScrollSmootherProvider from "./components/Scroll-Smooth-Provider";
import Footer from "./footer/footer";
import FloatingWhatsappIcon from "./components/FloatingWhatsappIcon";
import Header from "./header/header";
import PageTransition from "./loader/pageTransition";

export const metadata: Metadata = {
  title: "Luxury Car Repair & Service Specialists | Advanz Tech",
  description:
    "Expert repair and maintenance for luxury and premium cars. Certified technicians, genuine parts, diagnostics, and complete care for BMW, Mercedes, Audi, and more at Advanz Tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTransition>
      <Header />
      <FloatingWhatsappIcon />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ScrollSmootherProvider />
          {children}
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}
