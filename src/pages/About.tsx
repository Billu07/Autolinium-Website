import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 4px 8px rgba(0, 77, 64, 0.3)",
    transition: { duration: 0.3 },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    },
  },
};

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <ErrorBoundary>
      <section
        ref={ref}
        className="section bg-[var(--primary-bg)] min-h-screen pt-20"
      >
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="container"
        >
          {/* About Overview */}
          <motion.h2
            className="text-4xl font-bold mb-8 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Autolinium
          </motion.h2>

          <motion.p
            className="text-lg text-center mb-12 text-[var(--text-secondary)] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Autolinium is an AI-based software agency. We build AI Agents,
            Custom CRMs, Automations, and Mobile Apps that run your business
            24/7. Using Airtable, Make, n8n, Zapier, Softr, and custom software
            (React, Node, Python, Golang, Java, Spring Boot), our team replaces
            scattered tools with one integrated system that saves time, cuts
            costs, and scales with you. Our goal is simple: reduce manual work
            by up to 90% while boosting efficiency.
          </motion.p>

          {/* Mission */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="card mb-12 text-center"
          >
            <motion.div variants={cardVariants}>
              <i className="fas fa-bullseye text-4xl text-[var(--accent-blue)] mb-4"></i>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Our Mission
              </h3>
              <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
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
            className="mb-12"
          >
            <motion.h3
              className="text-2xl font-semibold mb-8 text-center text-white"
              variants={cardVariants}
            >
              Our Values
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We leverage cutting-edge AI and automation to deliver forward-thinking solutions.",
                  icon: "fas fa-lightbulb",
                  color: "text-yellow-400",
                },
                {
                  title: "Efficiency",
                  description:
                    "Our systems are designed to minimize manual work and maximize output.",
                  icon: "fas fa-rocket",
                  color: "text-green-400",
                },
                {
                  title: "Scalability",
                  description:
                    "We build solutions that grow with your business, from startups to enterprises.",
                  icon: "fas fa-chart-line",
                  color: "text-blue-400",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="card text-center group hover:transform hover:scale-105 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <i
                    className={`${value.icon} ${value.color} text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  ></i>
                  <h4 className="text-xl font-semibold mb-3 text-white">
                    {value.title}
                  </h4>
                  <p className="text-[var(--text-secondary)]">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              { number: "90%", label: "Manual Work Reduced" },
              { number: "24/7", label: "AI Operations" },
              { number: "50+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center p-6 bg-gray-800 rounded-lg"
              >
                <div className="text-2xl md:text-3xl font-bold text-[var(--accent-blue)] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Approach */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="card mb-12 text-center"
          >
            <motion.div variants={cardVariants}>
              <i className="fas fa-cogs text-4xl text-[var(--accent-blue)] mb-4"></i>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Our Approach
              </h3>
              <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
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
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link
                to="/contact"
                className="button bg-[var(--accent-deep-teal)] text-lg"
              >
                Get in Touch
              </Link>
            </motion.div>

            <p className="text-[var(--text-secondary)] mt-4">
              Ready to transform your business? Let's discuss your project.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default About;
