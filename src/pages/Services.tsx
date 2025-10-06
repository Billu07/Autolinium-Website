import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  staggerContainer,
  cardVariants,
  buttonVariants,
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
      icon: "fas fa-database",
      features: [
        "Centralized Data Management",
        "Custom Dashboards",
        "API Integration",
        "Real-time Analytics",
      ],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Workflow Automations",
      description:
        "Integrate Slack, Gmail, Stripe, and more with Make, n8n, Zapier.",
      slug: "workflow-automations",
      icon: "fas fa-cogs",
      features: [
        "Multi-platform Integration",
        "Real-time Data Sync",
        "90% Time Reduction",
        "Error-free Processing",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "AI-Driven Agents & Chatbots",
      description:
        "Voice, text, multi-channel bots with ChatGPT, Botpress, Vapi.",
      slug: "ai-agents-chatbots",
      icon: "fas fa-robot",
      features: [
        "24/7 Customer Support",
        "Multi-channel Deployment",
        "Smart Response Handling",
        "Seamless Human Handoff",
      ],
      gradient: "from-green-500 to-teal-400",
    },
  ];

  return (
    <ErrorBoundary>
      <section
        ref={ref}
        className="section section-bg section-bg-primary min-h-screen pt-20 flex items-center"
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
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              variants={cardVariants}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
              variants={cardVariants}
            >
              Discover our AI-powered services designed to transform your
              business operations and drive growth through intelligent
              automation.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                custom={index}
                style={{
                  rotateX: tiltAnimation.rotateX,
                  rotateY: tiltAnimation.rotateY,
                  perspective: 1000,
                }}
                onMouseMove={tiltAnimation.handleMouseMove}
                onMouseLeave={tiltAnimation.handleMouseLeave}
                className="h-full"
              >
                <motion.div
                  className="card h-full flex flex-col text-center group p-6 sm:p-8"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Icon with gradient background */}
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <i className={`${service.icon} text-white text-2xl`}></i>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-6 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-[var(--text-secondary)] text-sm sm:text-base"
                          >
                            <i className="fas fa-check-circle text-green-400 mr-3 text-sm"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      className="mt-auto"
                    >
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500"
                      >
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center mt-12 sm:mt-16"
          >
            <motion.div
              className="inline-flex flex-col sm:flex-row gap-4 items-center bg-[var(--tertiary-bg)]/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[var(--card-border)] max-w-2xl mx-auto"
              variants={cardVariants}
            >
              <div className="text-left flex-1">
                <h4 className="text-white font-semibold text-lg sm:text-xl mb-2">
                  Not Sure Which Service You Need?
                </h4>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base">
                  Get personalized recommendations from our automation experts.
                </p>
              </div>
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 whitespace-nowrap text-sm sm:text-base"
              >
                Get Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Services;
