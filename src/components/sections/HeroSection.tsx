import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center, #1C0F25 0%, #0F0A18 100%)",
      }}
    >
      {/* Background gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(142,46,122,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
          <span className="block bg-gradient-to-r from-[#FF7B00] via-[#FF4B6B] to-[#FF2E63] bg-clip-text text-transparent">
            Plug AI Into Your World
          </span>
          <span className="block text-white mt-2">
            Automate. Connect. Grow.
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Build intelligent, automated workflows that connect your data,
          platforms, and people — seamlessly.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-[#FF7B00] to-[#FF4B6B] shadow-lg shadow-[#FF4B6B]/20 hover:scale-105 transition-all duration-300"
          >
            Get Started
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>

          <Link
            to="/learn-more"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* Trusted brands / badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 opacity-80">
          {["Wayfair", "Onfleet", "Seat", "Paddle"].map((brand) => (
            <span
              key={brand}
              className="text-gray-400 text-sm sm:text-base tracking-wide"
            >
              {brand}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
