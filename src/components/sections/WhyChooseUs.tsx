import React from "react";
import { motion } from "framer-motion";
import globe2D from "/src/assets/globe.png";
import { Link } from "react-router-dom";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen overflow-hidden bg-[#000719] text-white px-6 sm:px-10 lg:px-20 py-16 sm:py-24 lg:py-32 font-[Poppins]">
      {/* === Background Gradient === */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070B] via-[#0A0F2A] to-[#050810]" />
      </div>

      {/* === Left Content === */}
      <motion.div
        className="relative z-[3] w-full lg:w-1/2 max-w-2xl text-center lg:text-left space-y-6 sm:space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto lg:mx-0 mb-4 sm:mb-6" />

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          What Makes <span className="text-cyan-400">Us</span> Stand Out
          Globally?
        </h2>

        <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl">
          At <span className="text-cyan-400 font-semibold">Autolinium</span>, we
          build intelligent, scalable, and AI-driven solutions that transform
          how businesses operate. From automation to digital transformation, we
          craft systems that evolve with your growth.
        </p>

        <ul className="space-y-3 sm:space-y-4 text-left text-gray-300 text-sm sm:text-base lg:text-lg">
          {[
            {
              title: "AI-Powered Efficiency",
              desc: "Boost productivity and accuracy through intelligent workflows.",
            },
            {
              title: "Process Automation",
              desc: "Reduce manual work and streamline your operations end-to-end.",
            },
            {
              title: "Data-Driven Insights",
              desc: "Gain clarity and make better decisions with analytics automation.",
            },
            {
              title: "Expert Consultation",
              desc: "Strategic guidance to scale with confidence.",
            },
          ].map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
              <div>
                <span className="text-cyan-400 font-semibold">
                  {item.title}
                </span>{" "}
                – {item.desc}
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="pt-6 sm:pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 active:scale-95"
          >
            <i className="fas fa-arrow-right text-sm" />
            Let's Connect!
          </Link>
        </motion.div>
      </motion.div>

      {/* === Right Visual — Floating Globe === */}
      <motion.div
        className="relative z-[3] w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={globe2D}
            alt="Floating 2D Globe"
            className="w-[380px] sm:w-[480px] md:w-[580px] lg:w-[680px] xl:w-[760px] object-contain drop-shadow-[0_0_80px_rgba(34,211,238,0.35)]"
            loading="lazy"
          />
          {/* Soft Glow Pulse */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl bg-cyan-400/20"
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      {/* === Background Glow Accents === */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default WhyChooseUs;
