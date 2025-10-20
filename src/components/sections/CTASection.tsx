import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImg from "../../assets/wavy-bg4.png";

const CTASection: React.FC = () => {
  return (
    <section
      id="cta"
      className="relative py-20 sm:py-28 overflow-hidden bg-[#05070B]"
    >
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Wavy background"
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-[1]"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-[2]" />

      {/* Motion Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-blue-400/15 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.18, 0.1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[5] container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-6 leading-snug text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your Business with{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
            AI Automation?
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90 mb-10 sm:mb-12 leading-relaxed px-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Join hundreds of forward-thinking businesses already automating their
          workflows. Let’s build your competitive advantage together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-bold text-base sm:text-lg border-2 border-white/20 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 backdrop-blur-sm"
          >
            <span>Start Your Automation Journey</span>
            <i className="fas fa-arrow-right ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            to="/pricing"
            className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 group backdrop-blur-sm hover:scale-105"
          >
            <i className="fas fa-tag mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span>View Pricing Plans</span>
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: "fas fa-shield-alt",
              text: "Enterprise Security",
              subtext: "Bank-level encryption",
            },
            {
              icon: "fas fa-clock",
              text: "24/7 Support",
              subtext: "Always available",
            },
            {
              icon: "fas fa-rocket",
              text: "Fast Deployment",
              subtext: "Days, not months",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-white/90 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 mb-2 sm:mb-3 backdrop-blur-sm">
                <i
                  className={`${item.icon} text-cyan-300 text-lg sm:text-xl`}
                />
              </div>
              <span className="font-semibold text-white text-sm sm:text-base group-hover:text-cyan-100 transition-colors duration-300">
                {item.text}
              </span>
              <span className="text-xs sm:text-sm text-white/70 mt-0.5">
                {item.subtext}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Smooth fade transition */}
      <div className="absolute bottom-0 left-0 w-full h-56 sm:h-72 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/70 to-transparent" />
    </section>
  );
};

export default CTASection;
