import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ToolbeltSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const tools = [
    { name: "Airtable", icon: "fas fa-table" },
    { name: "Softr", icon: "fas fa-layer-group" },
    { name: "Make.com", icon: "fas fa-puzzle-piece" },
    { name: "Zapier", icon: "fas fa-bolt" },
    { name: "React Native", icon: "fas fa-mobile" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "Node.js", icon: "fab fa-node-js" },
  ];

  return (
    <section ref={ref} className="section bg-[var(--primary-bg)]">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="container"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Our Toolbelt
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <i
                className={`${tool.icon} text-2xl text-[var(--accent-blue)] mb-2`}
              ></i>
              <span className="text-sm font-medium">{tool.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            We leverage the best tools in the industry to build robust, scalable
            solutions that drive your business forward. Our expertise spans
            across multiple platforms and technologies.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ToolbeltSection;
