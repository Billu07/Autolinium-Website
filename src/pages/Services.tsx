import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  fadeInVariants,
  cardVariants,
  buttonVariants,
  staggerContainer,
} from "../utils/animationVariants";

import ErrorBoundary from "../components/ErrorBoundary";
import { useTiltAnimation } from "../hooks/useTiltAnimation";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Services: React.FC = () => {
  const tiltAnimation = useTiltAnimation();
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      title: "Custom CRMs",
      description:
        "Built with Airtable, Softr, or full-code stacks like Postgres/React/Node.",
      slug: "custom-crms",
      icon: "/assets/crm.png",
      features: ["Centralized Data", "Custom Dashboards", "API Integration"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Workflow Automations",
      description:
        "Integrate Slack, Gmail, Stripe, and more with Make, n8n, Zapier.",
      slug: "workflow-automations",
      icon: "/assets/process.png",
      features: ["Multi-platform", "Real-time Sync", "90% Time Save"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "AI-Driven Agents & Chatbots",
      description:
        "Voice, text, multi-channel bots with ChatGPT, Botpress, Vapi.",
      slug: "ai-agents-chatbots",
      icon: "/assets/robot.png",
      features: ["24/7 Support", "Multi-channel", "Smart Responses"],
      color: "from-green-500 to-teal-500",
    },
  ];

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
          <motion.h2
            className="text-4xl font-bold mb-8 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>

          <motion.p
            className="text-lg text-center mb-12 text-[var(--text-secondary)] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our AI-powered services designed to transform your business
            operations and drive growth through intelligent automation.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                style={{
                  rotateX: tiltAnimation.rotateX,
                  rotateY: tiltAnimation.rotateY,
                  perspective: 1000,
                }}
                onMouseMove={tiltAnimation.handleMouseMove}
                onMouseLeave={tiltAnimation.handleMouseLeave}
                className="group"
              >
                <motion.div
                  className="card text-center h-full flex flex-col relative overflow-hidden"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="mb-4">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="mx-auto mb-4 h-16 w-16 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "/assets/fallback-image.jpg";
                        }}
                      />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[var(--accent-blue)] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-[var(--text-secondary)] mb-6 flex-1">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-[var(--text-secondary)]"
                          >
                            <i className="fas fa-check text-green-400 mr-2 text-xs"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <motion.div variants={buttonVariants} whileHover="hover">
                        <Link
                          to={`/services/${service.slug}`}
                          className="button bg-[var(--accent-deep-teal)] w-full hover:bg-[var(--accent-blue)] transition-colors"
                        >
                          <span className="flex items-center justify-center">
                            Learn More
                            <i className="fas fa-arrow-right ml-2"></i>
                          </span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-[var(--text-secondary)] mb-6">
              Not sure which service is right for you?
            </p>
            <Link
              to="/contact"
              className="button bg-transparent border-2 border-[var(--accent-pink)] text-[var(--accent-red)] hover:bg-[var(--accent-red)] hover:text-white transition-colors"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default Services;
