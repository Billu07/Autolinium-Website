import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Simplified image imports - only what we actually need
import collage3D from "/src/assets/auto-logo.webp";
import heroBg from "/src/assets/hero-bg-optimized.webp";

const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the hero background image
    const img = new Image();
    img.src = heroBg;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden font-[Poppins] bg-[#050810] pt-20 sm:pt-24">
      {/* ===== Simplified Background ===== */}
      <img
        src={heroBg}
        alt="Hero background showcasing AI automation technology"
        className={`absolute inset-0 w-full h-full object-cover opacity-80 z-[1] transition-opacity duration-500 ${
          imageLoaded ? "opacity-80" : "opacity-0"
        }`}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        width={1920}
        height={1080}
      />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050810]/80 z-[2]" />

      {/* ===== Main Content ===== */}
      <div className="relative z-[5] w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 min-h-[calc(100vh-5rem)]">
        {/* === Left Content === */}
        <motion.div
          className="flex-1 text-center lg:text-left max-w-2xl w-full px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-regular leading-tight mb-4 sm:mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="block text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-[1.1]">
              Using <span className="text-cyan-400">AI</span> to
            </span>
            <span className="block text-[2rem] xs:text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.1] mt-2">
              Improve <span className="text-cyan-400">Your Business</span>
            </span>
            <motion.span
              className="block mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide sm:tracking-wider text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Work Less, Let AI Do the Rest
            </motion.span>
          </motion.h1>

          {/* === CTA Buttons === */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-bold text-white bg-cyan-600 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 touch-manipulation"
              aria-label="Explore our AI automation services"
            >
              Explore Our Services
              <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/5 hover:scale-105 backdrop-blur-sm transition-all duration-300 touch-manipulation"
              aria-label="Book a demo of our AI solutions"
            >
              <i className="fas fa-calendar-alt mr-2" aria-hidden="true"></i>
              Book Demo
            </Link>
          </motion.div>
        </motion.div>

        {/* === Mobile Image (Visible Only on Small Devices) === */}
        <motion.div
          className="flex lg:hidden items-center justify-center w-full mt-8 sm:mt-12 max-w-[90%] sm:max-w-sm mx-auto"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <motion.img
            src={collage3D}
            alt="AI Automation Tools including CRM, workflow automation, and mobile app development"
            className="w-full h-auto drop-shadow-[0_0_50px_rgba(34,211,238,0.4)]"
            loading="lazy"
            width={500}
            height={500}
            animate={{
              rotate: [0, 1.5, -1.5, 0],
              scale: [1, 1.05, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* === Desktop Image (Hidden on Mobile) === */}
        <motion.div
          className="hidden lg:flex items-center justify-center flex-1"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <motion.img
            src={collage3D}
            alt="Comprehensive AI Automation Tools Suite - CRM, Workflow Automation, Mobile Apps"
            className="w-full h-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] scale-[1.2] drop-shadow-[0_0_100px_rgba(34,211,238,0.5)]"
            loading="lazy"
            width={1200}
            height={1200}
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

      {/* === Scroll Indicator (Hidden on XS) === */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center text-white/60 z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll down to explore more"
      >
        <span className="text-xs mb-2">Scroll to explore</span>
        <motion.div
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
