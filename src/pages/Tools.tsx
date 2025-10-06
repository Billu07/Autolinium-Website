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

const Tools: React.FC = () => {
  const tiltAnimation = useTiltAnimation();
  const { ref, isVisible } = useScrollAnimation();

  const tools = [
    {
      title: "Airtable & Softr",
      description:
        "Build powerful CRMs and databases with no-code solutions that scale with your business.",
      slug: "airtable-softr",
      icon: "fas fa-database",
      useCases: [
        "Custom CRMs",
        "Client Portals",
        "Data Management",
        "Business Intelligence",
      ],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Make, n8n, Zapier",
      description:
        "Automate complex workflows across your favorite tools with powerful integration platforms.",
      slug: "make-n8n-zapier",
      icon: "fas fa-cogs",
      useCases: [
        "Workflow Automation",
        "Data Syncing",
        "Multi-app Integration",
        "Process Optimization",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "React Native & AWS",
      description:
        "Develop scalable mobile apps and backends with cutting-edge cloud technologies.",
      slug: "react-native-aws",
      icon: "fas fa-mobile-alt",
      useCases: [
        "Mobile Applications",
        "Cloud Infrastructure",
        "Real-time Features",
        "Scalable Backends",
      ],
      gradient: "from-green-500 to-teal-400",
    },
  ];

  const technologies = [
    { name: "Airtable", icon: "fas fa-table", category: "Database" },
    { name: "Softr", icon: "fas fa-layer-group", category: "No-Code" },
    { name: "Make", icon: "fas fa-puzzle-piece", category: "Automation" },
    { name: "n8n", icon: "fas fa-code-branch", category: "Workflow" },
    { name: "Zapier", icon: "fas fa-bolt", category: "Integration" },
    { name: "React", icon: "fab fa-react", category: "Frontend" },
    { name: "Node.js", icon: "fab fa-node-js", category: "Backend" },
    { name: "AWS", icon: "fab fa-aws", category: "Cloud" },
    { name: "Python", icon: "fab fa-python", category: "Backend" },
    { name: "Docker", icon: "fab fa-docker", category: "DevOps" },
    { name: "PostgreSQL", icon: "fas fa-database", category: "Database" },
    { name: "Git", icon: "fab fa-git-alt", category: "Version Control" },
  ];

  return (
    <ErrorBoundary>
      <section
        ref={ref}
        className="section section-bg section-bg-tertiary min-h-screen pt-20 flex items-center"
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
              variants={cardVariants}
            >
              We leverage cutting-edge tools and technologies to build robust,
              scalable automation solutions that drive your business forward.
            </motion.p>
          </motion.div>

          {/* Main Tools Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.slug}
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
                  className="card h-full flex flex-col text-center group p-6 sm:p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-colors duration-300"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Icon with gradient background */}
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <i className={`${tool.icon} text-white text-2xl`}></i>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {tool.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-6 leading-relaxed flex-1">
                      {tool.description}
                    </p>

                    {/* Use Cases */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 text-left">
                        Common Use Cases:
                      </h4>
                      <ul className="space-y-2 text-left">
                        {tool.useCases.map((useCase, useCaseIndex) => (
                          <li
                            key={useCaseIndex}
                            className="flex items-center text-[var(--text-secondary)] text-sm"
                          >
                            <i className="fas fa-check-circle text-green-400 mr-3 text-xs"></i>
                            <span>{useCase}</span>
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
                        to={`/tools/${tool.slug}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 w-full group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600"
                      >
                        <span>Explore Tool</span>
                        <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white"
              variants={cardVariants}
            >
              Our Full{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="flex flex-col items-center justify-center p-4 sm:p-6 bg-[var(--tertiary-bg)] rounded-xl border border-[var(--card-border)] hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <i
                    className={`${tech.icon} text-2xl sm:text-3xl text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-200`}
                  ></i>
                  <span className="text-white font-semibold text-sm text-center mb-1">
                    {tech.name}
                  </span>
                  <span className="text-[var(--text-muted)] text-xs text-center">
                    {tech.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center mt-12 sm:mt-16"
          >
            <div className="bg-gradient-to-r from-[var(--secondary-bg)] to-[var(--tertiary-bg)] rounded-xl sm:rounded-2xl border border-[var(--card-border)] p-6 sm:p-8 backdrop-blur-sm max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Ready to Build With Our Tools?
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 sm:mb-6">
                Let's leverage the right technology stack to create your custom
                automation solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <i className="fas fa-tools mr-2 sm:mr-3"></i>
                  Start Your Project
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-sm sm:text-base hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View Services
                  <i className="fas fa-arrow-right ml-2 sm:ml-3"></i>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Tools;
