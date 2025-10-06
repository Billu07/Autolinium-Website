import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { staggerContainer, cardVariants } from "../../utils/animationVariants";
import ROICalculator from "../ROICalculator";

const CTASection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="section section-bg section-bg-secondary py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* ROI Calculator */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <ROICalculator />
          </motion.div>

          {/* CTA Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white"
              variants={cardVariants}
            >
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Scale?
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed"
              variants={cardVariants}
            >
              See how much you could save with our solutions. Then let's build
              the backbone of your business together.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] mb-6 sm:mb-8 leading-relaxed"
              variants={cardVariants}
            >
              Invite Autolinium to your project or message us today – let's
              transform your operations with cutting-edge AI and automation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-10"
              variants={cardVariants}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-paper-plane mr-2 sm:mr-3"></i>
                Get in Touch
              </Link>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold text-sm sm:text-base hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <i className="fas fa-tag mr-2 sm:mr-3"></i>
                View Pricing
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-[var(--text-secondary)]"
              variants={cardVariants}
            >
              <div className="flex items-center gap-2 sm:gap-3 bg-[var(--tertiary-bg)] px-3 sm:px-4 py-2 rounded-lg border border-[var(--card-border)]">
                <i className="fas fa-shield-alt text-green-400 text-sm sm:text-base"></i>
                <span className="text-xs sm:text-sm">30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-[var(--tertiary-bg)] px-3 sm:px-4 py-2 rounded-lg border border-[var(--card-border)]">
                <i className="fas fa-headset text-blue-400 text-sm sm:text-base"></i>
                <span className="text-xs sm:text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-[var(--tertiary-bg)] px-3 sm:px-4 py-2 rounded-lg border border-[var(--card-border)]">
                <i className="fas fa-rocket text-purple-400 text-sm sm:text-base"></i>
                <span className="text-xs sm:text-sm">Quick Setup</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
