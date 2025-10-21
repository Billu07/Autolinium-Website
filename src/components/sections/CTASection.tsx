import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//import bgPattern from "../../assets/project-bg1.png";
import brain3D from "../../assets/ai-brain.png"; // or .webp / .mp4 loop

const CTASection: React.FC = () => {
  return (
    <section
      id="cta"
      className="relative flex flex-col md:flex-row items-center justify-center overflow-hidden bg-[#05070B] py-20 sm:py-28"
    >
      {/* === Background === */}
      {/*<img
        src={bgPattern}
        alt="tech pattern background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-[1]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-[2]" />

      {/* === Left (3D visual / AI brain) === */}
      <motion.div
        className="relative z-[3] w-full md:w-1/2 flex justify-center items-center px-6 sm:px-10 mb-12 md:mb-0"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <img
            src={brain3D}
            alt="AI brain visualization"
            className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] object-contain drop-shadow-[0_0_50px_rgba(0,212,255,0.3)]"
          />
          {/* soft glowing aura */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl bg-cyan-400/20"
            animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* === Right (text + CTA) === */}
      <motion.div
        className="relative z-[4] w-full md:w-1/2 px-6 sm:px-10 text-center md:text-left"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Accelerating <span className="text-cyan-400">progress</span> in <br />
          artificial intelligence
        </h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-lg md:max-w-none">
          Artificial intelligence is reshaping industries, helping businesses
          automate tasks, make smarter decisions, and achieve unmatched
          efficiency. We provide AI-driven solutions designed to enhance
          productivity, optimize workflows, and unlock new growth opportunities.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-lg font-semibold group transition-all"
        >
          Know More{" "}
          <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
