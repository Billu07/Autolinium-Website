import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import ToolsSection from "./ToolsSection";
import HowWeHelpSection from "./HowWeHelpSection";
import ReviewsSection from "./ReviewsSection";
import FAQSection from "./FAQSection";
import TeamSection from "./TeamSection";
import ToolbeltSection from "./ToolbeltSection";
import CTASection from "./CTASection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ToolsSection />
      <HowWeHelpSection />
      <ReviewsSection />
      <FAQSection />
      <TeamSection />
      <ToolbeltSection />
      <CTASection />
    </div>
  );
};

export default Home;
