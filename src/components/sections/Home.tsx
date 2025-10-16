import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./ReviewsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import ProcessSection from "./HowWeHelpSection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;
