import React from "react";
import { motion } from "framer-motion";
import {
  fadeInVariants,
  cardVariants,
  buttonVariants,
  staggerContainer,
} from "../utils/animationVariants";

import { Link } from "react-router-dom";
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
      icon: "/assets/softair.png",
      useCases: ["Custom CRMs", "Client Portals", "Data Management"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Make, n8n, Zapier",
      description:
        "Automate complex workflows across your favorite tools with powerful integration platforms.",
      slug: "make-n8n-zapier",
      icon: "/assets/manier.png",
      useCases: [
        "Workflow Automation",
        "Data Syncing",
        "Multi-app Integration",
      ],
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "React Native & AWS",
      description:
        "Develop scalable mobile apps and backends with cutting-edge technologies.",
      slug: "react-native-aws",
      icon: "/assets/reaws.png",
      useCases: ["Mobile Apps", "Cloud Backends", "Real-time Features"],
      color: "from-purple-500 to-pink-500",
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
            Our Tools & Technologies
          </motion.h2>

          <motion.p
            className="text-lg text-center mb-12 text-[var(--text-secondary)] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We leverage the best tools in the industry to build robust, scalable
            solutions that drive your business forward.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tools.map((tool, index) => (
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
                    className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="mb-4">
                      <img
                        src={tool.icon}
                        alt={tool.title}
                        className="mx-auto mb-4 h-16 w-16 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "/assets/fallback-image.jpg";
                        }}
                      />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[var(--accent-blue)] transition-colors">
                      {tool.title}
                    </h3>

                    <p className="text-[var(--text-secondary)] mb-6 flex-1">
                      {tool.description}
                    </p>

                    {/* Use Cases */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[var(--accent-blue)] mb-3">
                        Common Use Cases:
                      </h4>
                      <ul className="space-y-2">
                        {tool.useCases.map((useCase, useCaseIndex) => (
                          <li
                            key={useCaseIndex}
                            className="text-sm text-[var(--text-secondary)]"
                          >
                            • {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <motion.div variants={buttonVariants} whileHover="hover">
                        <Link
                          to={`/tools/${tool.slug}`}
                          className="button bg-[var(--accent-deep-teal)] w-full hover:bg-[var(--accent-blue)] transition-colors"
                        >
                          <span className="flex items-center justify-center">
                            Explore Tool
                            <i className="fas fa-external-link-alt ml-2"></i>
                          </span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Tools Grid */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">
              Our Full Toolbelt
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Airtable", icon: "fas fa-table" },
                { name: "Softr", icon: "fas fa-layer-group" },
                { name: "Make", icon: "fas fa-puzzle-piece" },
                { name: "n8n", icon: "fas fa-code-branch" },
                { name: "Zapier", icon: "fas fa-bolt" },
                { name: "React", icon: "fab fa-react" },
                { name: "Node.js", icon: "fab fa-node-js" },
                { name: "AWS", icon: "fab fa-aws" },
                { name: "Python", icon: "fab fa-python" },
                { name: "Docker", icon: "fab fa-docker" },
                { name: "PostgreSQL", icon: "fas fa-database" },
                { name: "Git", icon: "fab fa-git-alt" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <i
                    className={`${tech.icon} text-2xl text-[var(--accent-blue)] mb-2 group-hover:scale-110 transition-transform`}
                  ></i>
                  <span className="text-xs text-center text-[var(--text-secondary)] group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default Tools;
