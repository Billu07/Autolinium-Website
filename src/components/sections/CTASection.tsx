import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImg from "../../assets/wavy-bg4.png"; // adjust the path if needed

const CTASection: React.FC = () => {
  return (
    <section
      id="cta"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#05070B]"
    >
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Wavy background"
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-[1]"
      />

      {/* Optional dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-[2]" />

      {/* Animated Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[5] container mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
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

        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-white/90 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Join hundreds of forward-thinking businesses already automating their
          workflows. Let's build your competitive advantage together.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-bold text-lg border-2 border-white/20 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/40 hover:scale-105 backdrop-blur-sm"
          >
            <span>Start Your Automation Journey</span>
            <i className="fas fa-arrow-right ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            to="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 group backdrop-blur-sm hover:scale-105"
          >
            <i className="fas fa-tag mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span>View Pricing Plans</span>
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
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
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white/90 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 mb-3 backdrop-blur-sm">
                <i className={`${item.icon} text-cyan-300 text-xl`} />
              </div>
              <span className="font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
                {item.text}
              </span>
              <span className="text-sm text-white/70 mt-1">{item.subtext}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade-out at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/60 to-transparent" />
    </section>
  );
};

export default CTASection;
