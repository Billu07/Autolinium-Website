import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <section
      id="cta"
      className="relative py-28 bg-[#0077b6] text-white overflow-hidden"
    >
      {/* Premium Leafy Background Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Leaf Blob - Top Right */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 180, 216, 0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
            transform: "rotate(25deg)",
            borderRadius: "60% 40% 70% 30% / 40% 60% 30% 70%",
          }}
        />

        {/* Medium Leaf Blob - Bottom Left */}
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 opacity-8"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(144, 224, 239, 0.06) 0%, transparent 70%)",
            filter: "blur(35px)",
            transform: "rotate(-15deg)",
            borderRadius: "50% 50% 70% 30% / 60% 40% 60% 40%",
          }}
        />

        {/* Small Leaf Blob - Center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.04) 0%, transparent 70%)",
            filter: "blur(30px)",
            transform: "rotate(45deg)",
            borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Automate Your Business with <br />
          <span className="text-[#e0f7ff]">Autolinium?</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-xl text-white/85 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Let's build smarter, faster, and more efficient systems for your
          business. The future of automation starts here.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Primary CTA - Matches Header Button */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#0077b6] rounded-xl font-bold text-lg border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 group"
          >
            <span>Start Your Automation Journey</span>
            <i className="fas fa-arrow-right ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#0077b6] transition-all duration-300 group"
          >
            <i className="fas fa-tag mr-3" />
            <span>View Pricing</span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#00b4d8]" />
    </section>
  );
};

export default CTASection;
