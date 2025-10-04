import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInVariants, buttonVariants } from "../../utils/animationVariants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ROICalculator from "../ROICalculator";

const CTASection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section bg-[var(--primary-bg)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ROI Calculator */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <ROICalculator />
          </motion.div>

          {/* CTA Content */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Ready to Scale?
            </h2>

            <p className="text-lg mb-6 text-[var(--text-secondary)]">
              See how much you could save with our solutions. Then let's build
              the backbone of your business together.
            </p>

            <p className="text-lg mb-8 text-[var(--text-secondary)]">
              Invite Autolinium to your job or message us today – let's
              transform your operations with cutting-edge AI and automation.
            </p>

            <motion.div
              variants={buttonVariants}
              animate="pulse"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="button bg-[var(--accent-deep-teal)] text-lg hover:bg-[var(--accent-blue)] transition-colors duration-200"
              >
                Get in Touch
              </Link>

              <Link
                to="/pricing"
                className="button bg-transparent border-2 border-[var(--accent-blue)] text-lg hover:bg-[var(--accent-blue)] transition-colors duration-200"
              >
                View Pricing
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-[var(--text-secondary)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-alt text-green-400"></i>
                <span>30-Day Money Back</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-headset text-blue-400"></i>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-rocket text-purple-400"></i>
                <span>Quick Setup</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
