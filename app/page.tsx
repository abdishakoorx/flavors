import React from "react";
import Hero from "./_components/Hero";
import Nav from "./_components/Nav";
import FAQSection from "./_components/FAQSection";
import OfferingSection from "./_components/OfferingSection";
import HowItWorks from "./_components/HowItWorks";
import Pricing from "./_components/Pricing";
import { Testimonial } from "./_components/Testimonial";
import CTASection from "./_components/CTASection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="space-y-20">
      <main className="md:px-8 lg:px-12 space-y-20">
        <Nav />
        <Hero />
        <OfferingSection />
        <HowItWorks />
        <Pricing />
        <FAQSection />
        <Testimonial />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
