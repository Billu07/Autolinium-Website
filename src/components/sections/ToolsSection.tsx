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

const ToolsSection: React.FC = () => {
  const tiltAnimation = useTiltAnimation();
  const { ref, isVisible } = useScrollAnimation();

  const tools = [
    {
      title: "Airtable & Softr",
      description:
        "Build custom CRMs and powerful databases with no-code solutions.",
      link: "/tools/airtable-softr",
      icon: "fas fa-database",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Make, n8n, Zapier",
      description: "Create seamless automations across your entire tech stack.",
      link: "/tools/make-n8n-zapier",
      icon: "fas fa-cogs",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "React Native & AWS",
      description: "Scalable mobile apps and robust cloud infrastructure.",
      link: "/tools/react-native-aws",
      icon: "fas fa-cloud",
      gradient: "from-green-500 to-teal-400",
    },
  ];

  return (
    <section
      ref={ref}
      className="section section-bg section-bg-tertiary py-16 sm:py-20 lg:py-24 flex items-center"
    >
      {/* Subtle particles for this section */}
      <div className="section-particles">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="section-particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 6 + 8}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6">
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed px-4"
              variants={cardVariants}
            >
              Powerful tools and platforms we leverage to build robust, scalable
              automation solutions.
            </motion.p>
          </motion.div>

          {/* Tools Grid - Single column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
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
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Icon with gradient background */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <i
                      className={`${tool.icon} text-white text-xl sm:text-2xl`}
                    ></i>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                      {tool.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-1">
                      {tool.description}
                    </p>

                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      className="mt-auto"
                    >
                      <Link
                        to={tool.link}
                        className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 w-full"
                      >
                        <span>Explore Tool</span>
                        <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA - Stack on mobile */}
          <motion.div className="mt-12 sm:mt-16" variants={cardVariants}>
            <motion.div
              className="inline-flex flex-col sm:flex-row gap-4 items-center"
              variants={cardVariants}
            >
              <p className="text-[var(--text-secondary)] text-base sm:text-lg">
                Want to leverage these tools for your business?
              </p>
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-sm sm:text-base hover:bg-cyan-400 hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                Start Building
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
