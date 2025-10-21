import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import collage3D from "/src/assets/auto-logo.png";
import heroBgPng from "/src/assets/hero-bg.png";
import heroBgWebp from "/src/assets/hero-bg-optimized.webp";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 overflow-hidden font-[Poppins] bg-[#050810]">
      {/* ===== Background Image with WebP + PNG Fallback ===== */}
      <picture>
        <source srcSet={heroBgWebp} type="image/webp" />
        <img
          src={heroBgPng}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-[1]"
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* ===== Main Content ===== */}
      <div className="relative z-[5] w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* === Left Content === */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h3
              className="text-4xl sm:text-6xl md:text-7xl font-regular leading-tight mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <span className="block">
                Using <span className="text-cyan-400">Ai</span> to
              </span>
              <span className="block">
                Improve <span className="text-cyan-400">Your Business</span>
              </span>
              <motion.span
                className="block mt-2 text-xl sm:text-2xl md:text-3xl font-light tracking-wider text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Work Less, Let Ai Do the Rest{" "}
              </motion.span>
            </motion.h3>

            {/* === CTA Buttons === */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-bold text-white bg-cyan-600 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
              >
                Explore Our Services
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/5 hover:scale-105 backdrop-blur-sm transition-all duration-300"
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Book Demo
              </Link>
            </motion.div>

            {/* === Stats === */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-16 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              {[
                { number: "50%", label: "Cost Reduction" },
                { number: "24/7", label: "AI Support" },
                { number: "99%", label: "Accuracy" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/20 transition-all duration-300"
                >
                  <div className="text-xl font-bold text-cyan-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* === Right Image (3D Collage) === */}
          <motion.div
            className="hidden lg:flex items-center justify-center flex-1"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <motion.img
              src={collage3D}
              alt="AI Automation Tools Collage"
              className="w-full h-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] scale-[1.2] drop-shadow-[0_0_100px_rgba(34,211,238,0.5)]"
              animate={{
                rotate: [0, 1.5, -1.5, 0],
                scale: [1.2, 1.23, 1.2],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
