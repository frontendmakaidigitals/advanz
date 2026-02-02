import type { Metadata } from "next";
import ScrollSmootherProvider from "./components/Scroll-Smooth-Provider";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./footer/footer";
import FloatingWhatsappIcon from "./components/FloatingWhatsappIcon";
import Header from "./header/header";
import PageTransition from "./loader/pageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advanz Tech",
  description: " Your one stop shop for all your car repair needs",
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
