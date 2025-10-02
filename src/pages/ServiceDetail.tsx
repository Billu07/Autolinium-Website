// src/pages/ServiceDetail.tsx
import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";

// Mock data (replace with API or real data)
const servicesData = {
  "smart-chat-helpers": {
    title: "Smart Chat Helpers",
    description: "Detailed info on engaging customers 24/7 with AI chatbots.",
    features: ["24/7 Availability", "Custom Tailoring", "Integration with CRM"],
    videoSrc: "/assets/chatbot-demo.mp4",
  },
  // Add for other services...
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) return <p>Service not found.</p>;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 container mx-auto px-4 bg-gray-900 min-h-screen"
    >
      <h2
        className="text-4xl md:text-5xl font-orbitron text-center mb-12 glitch"
        data-text={service.title}
      >
        {service.title}
      </h2>
      <p className="text-lg font-sans max-w-3xl mx-auto mb-8 text-gray-300">
        {service.description}
      </p>
      <ul className="list-disc max-w-3xl mx-auto mb-8 text-gray-300">
        {service.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <video
        src={service.videoSrc}
        autoPlay
        loop
        muted
        className="w-full max-w-3xl mx-auto h-96 object-cover rounded mb-8"
        aria-label={`Demo video for ${service.title}`}
      />
      <Link
        to="/contact"
        className="block max-w-xs mx-auto bg-[var(--neon-teal)] px-6 py-3 rounded-lg text-lg text-center hover:bg-teal-300 transition"
      >
        Get Started
      </Link>
    </motion.section>
  );
};

export default ServiceDetail;
