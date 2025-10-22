import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./ReviewsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import SlidingTextSection from "./SlidingTextSection";
import OurProjectsSection from "./OurProjectsSection";
import WhyChooseUs from "./WhyChooseUs";
//import StatsSection from "./StatsSection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <OurProjectsSection />
      <TestimonialsSection />
      <WhyChooseUs />
      <SlidingTextSection />
      <CTASection />
      <FAQSection />
    </div>
  );
};

export default Home;
