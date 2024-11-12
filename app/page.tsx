import React from "react";
import Hero from "./_components/Hero";
import Nav from "./_components/Nav";
import FAQSection from "./_components/FAQSection";
import OfferingSection from "./_components/OfferingSection";
import HowItWorks from "./_components/HowItWorks";

export default function Home() {
  return (
    <div className="md:px-8 lg:px-12 space-y-20">
      <Nav />
      <Hero/>
      <OfferingSection/>
      <HowItWorks/>
      <FAQSection/>
    </div>
  );
}
