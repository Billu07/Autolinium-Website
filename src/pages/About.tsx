import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  staggerContainer,
  cardVariants,
  buttonVariants,
} from "../utils/animationVariants";
import ErrorBoundary from "../components/ErrorBoundary";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <ErrorBoundary>
      <section
        ref={ref}
        className="section section-bg section-bg-secondary min-h-screen pt-20 flex items-center"
      >
        {/* Background Particles */}
        <div className="section-particles">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="section-particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${Math.random() * 8 + 12}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          {/* About Overview */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white"
              variants={cardVariants}
            >
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Autolinium
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
              variants={cardVariants}
            >
              Autolinium is an AI-based software agency. We build AI Agents,
              Custom CRMs, Automations, and Mobile Apps that run your business
              24/7. Using Airtable, Make, n8n, Zapier, Softr, and custom
              software (React, Node, Python, Golang, Java, Spring Boot), our
              team replaces scattered tools with one integrated system that
              saves time, cuts costs, and scales with you.
            </motion.p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-12 sm:mb-16"
          >
            <motion.div
              className="card text-center p-6 sm:p-8 max-w-4xl mx-auto"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                <i className="fas fa-bullseye text-white text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-white">
                Our Mission
              </h3>
              <p className="text-[var(--text-secondary)] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                To empower businesses with AI-driven solutions that streamline
                operations, enhance productivity, and drive growth through
                seamless automation and custom software.
              </p>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-12 sm:mb-16"
          >
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12 text-center text-white"
              variants={cardVariants}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Values
              </span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Innovation",
                  description:
                    "We leverage cutting-edge AI and automation to deliver forward-thinking solutions.",
                  icon: "fas fa-lightbulb",
                  gradient: "from-yellow-500 to-orange-400",
                },
                {
                  title: "Efficiency",
                  description:
                    "Our systems are designed to minimize manual work and maximize output.",
                  icon: "fas fa-rocket",
                  gradient: "from-green-500 to-teal-400",
                },
                {
                  title: "Scalability",
                  description:
                    "We build solutions that grow with your business, from startups to enterprises.",
                  icon: "fas fa-chart-line",
                  gradient: "from-blue-500 to-cyan-400",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="card text-center p-6 sm:p-8 group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <i
                      className={`${value.icon} text-white text-xl sm:text-2xl`}
                    ></i>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                    {value.title}
                  </h4>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-12 sm:mb-16"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {[
                { number: "90%", label: "Manual Work Reduced" },
                { number: "24/7", label: "AI Operations" },
                { number: "50+", label: "Projects Delivered" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="text-center p-4 sm:p-6 bg-[var(--tertiary-bg)] rounded-xl border border-[var(--card-border)] hover:border-blue-400/50 transition-colors duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--text-muted)]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-12 sm:mb-16"
          >
            <motion.div
              className="card text-center p-6 sm:p-8 max-w-4xl mx-auto"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center shadow-lg">
                <i className="fas fa-cogs text-white text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-white">
                Our Approach
              </h3>
              <p className="text-[var(--text-secondary)] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                We start by understanding your business needs, then design
                integrated systems using no-code tools like Airtable and Zapier
                or custom stacks like React and AWS. Our iterative process
                ensures rapid deployment, continuous improvement, and long-term
                success.
              </p>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.div
              className="bg-gradient-to-r from-[var(--secondary-bg)] to-[var(--tertiary-bg)] rounded-xl sm:rounded-2xl border border-[var(--card-border)] p-6 sm:p-8 backdrop-blur-sm max-w-2xl mx-auto"
              variants={cardVariants}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 sm:mb-6">
                Let's discuss how our AI-powered automation solutions can
                streamline your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <i className="fas fa-paper-plane mr-2 sm:mr-3"></i>
                    Get in Touch
                  </Link>
                </motion.div>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold text-sm sm:text-base hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Explore Services
                  <i className="fas fa-arrow-right ml-2 sm:ml-3"></i>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default About;
