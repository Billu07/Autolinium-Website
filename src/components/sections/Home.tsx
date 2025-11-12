import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./ReviewsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import OurProjectsSection from "./OurProjectsSection";
import WhyChooseUs from "./WhyChooseUs";
import HireOnUpworkCTA from "./HireUs";
//import StatsSection from "./StatsSection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <OurProjectsSection />
      <TestimonialsSection />
      <HireOnUpworkCTA />
      <WhyChooseUs />
      <CTASection />
      <FAQSection />
    </div>
  );
};

export default Home;
