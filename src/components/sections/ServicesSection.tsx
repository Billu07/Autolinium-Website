import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTiltAnimation } from "../../hooks/useTiltAnimation";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  staggerContainer,
  cardVariants,
  buttonVariants,
} from "../../utils/animationVariants";

const ServicesSection: React.FC = () => {
  const tiltAnimation = useTiltAnimation();
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      title: "Custom CRMs",
      description:
        "Built with Airtable, Softr, or full-code stacks like Postgres/React/Node.",
      link: "/services/custom-crms",
      icon: "fas fa-database",
      gradient: "from-blue-500 to-cyan-400",
      tech: ["Airtable", "Softr", "Postgres", "React", "Node"],
    },
    {
      title: "Workflow Automations",
      description:
        "Integrate Slack, Gmail, Stripe, and more with Make, n8n, Zapier.",
      link: "/services/workflow-automations",
      icon: "fas fa-cogs",
      gradient: "from-purple-500 to-pink-500",
      tech: ["Slack", "Gmail", "Stripe", "Make", "n8n", "Zapier"],
    },
    {
      title: "AI-Driven Agents & Chatbots",
      description:
        "Voice, text, multi-channel bots with ChatGPT, Botpress, Vapi.",
      link: "/services/ai-agents-chatbots",
      icon: "fas fa-robot",
      gradient: "from-green-500 to-teal-400",
      tech: ["ChatGPT", "Botpress", "Vapi", "Voice", "Text"],
    },
  ];

  // Neural Network Connections
  const NeuralConnections = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" className="opacity-20">
        {/* Connection paths between service nodes */}
        <motion.path
          d="M20% 50% Q 35% 30%, 50% 50% Q 65% 70%, 80% 50%"
          stroke="url(#neuralGradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  // Floating Binary Particles
  const FloatingBinary = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs text-cyan-400/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      ))}
    </div>
  );

  return (
    <section
      ref={ref}
      className="section section-bg section-bg-primary py-16 sm:py-20 lg:py-24 flex items-center relative overflow-hidden bg-gray-900"
    >
      {/* Background Elements */}
      <NeuralConnections />
      <FloatingBinary />

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Section Header */}
          <motion.div className="mb-12 sm:mb-16" variants={cardVariants}>
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
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
              variants={cardVariants}
            >
              AI-powered solutions that transform your business operations and
              drive growth through intelligent automation.
            </motion.p>
          </motion.div>

          {/* Services Grid - Enhanced with Digital Theme */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto relative">
            {/* Animated Connection Dots */}
            <motion.div
              className="hidden md:block absolute top-1/2 left-1/3 w-2 h-2 bg-cyan-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="hidden md:block absolute top-1/2 left-2/3 w-2 h-2 bg-blue-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />

            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                  className="card h-full flex flex-col text-center group p-6 sm:p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Animated Icon Container */}
                  <motion.div
                    className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg relative overflow-hidden`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Pulsing glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-current opacity-20"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <i
                      className={`${service.icon} text-white text-xl sm:text-2xl relative z-10`}
                    ></i>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {service.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded-md border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Animated CTA */}
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      className="mt-auto"
                    >
                      <Link
                        to={service.link}
                        className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 w-full group/btn relative overflow-hidden"
                      >
                        {/* Button shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "200%" }}
                          transition={{ duration: 0.8 }}
                        />
                        <span className="relative">Learn More</span>
                        <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover/btn:translate-x-1 relative"></i>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Bottom CTA */}
          <motion.div className="mt-12 sm:mt-16" variants={cardVariants}>
            <motion.div
              className="inline-flex flex-col sm:flex-row gap-4 items-center backdrop-blur-sm bg-white/5 rounded-2xl px-6 py-4 border border-white/10"
              variants={cardVariants}
            >
              <p className="text-gray-300 text-base sm:text-lg">
                Ready to transform your business?
              </p>
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold text-sm sm:text-base hover:bg-blue-400 hover:text-white transition-all duration-300 whitespace-nowrap hover:shadow-lg hover:shadow-blue-400/25"
              >
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
