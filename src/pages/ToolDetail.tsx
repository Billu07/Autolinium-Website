// src/pages/ToolDetail.tsx
import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";

// Mock data
const toolsData = {
  "chatbot-pro": {
    title: "ChatBot Pro",
    description: "Advanced chatbot for 24/7 engagement. Request a demo below.",
    videoSrc: "/assets/chatbot-pro-demo.mp4",
    features: [
      "Real-time Responses",
      "Multi-language Support",
      "Analytics Dashboard",
    ],
  },
  // Add for others...
};

const ToolDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = toolsData[slug as keyof typeof toolsData];

  if (!tool) return <p>Tool not found.</p>;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 container mx-auto px-4 bg-gray-900 min-h-screen"
    >
      <h2
        className="text-4xl md:text-5xl font-orbitron text-center mb-12 glitch"
        data-text={tool.title}
      >
        {tool.title}
      </h2>
      <p className="text-lg font-sans max-w-3xl mx-auto mb-8 text-gray-300">
        {tool.description}
      </p>
      <video
        src={tool.videoSrc}
        autoPlay
        loop
        muted
        playsInline // For seamless mobile playback
        className="w-full max-w-3xl mx-auto h-96 object-cover rounded mb-8 shadow-[var(--border-glow)]"
        aria-label={`Demo video for ${tool.title}`}
        preload="auto" // Seamless loading
      />
      <ul className="list-disc max-w-3xl mx-auto mb-8 text-gray-300">
        {tool.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <Link
        to="/subscribe"
        className="block max-w-xs mx-auto bg-[var(--neon-pink)] px-6 py-3 rounded-lg text-lg text-center hover:bg-pink-300 transition"
      >
        Request Demo
      </Link>
    </motion.section>
  );
};

export default ToolDetail;
