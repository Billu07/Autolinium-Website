import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import HowWeHelpSection from "./HowWeHelpSection";
import ReviewsSection from "./ReviewsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <HowWeHelpSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;
