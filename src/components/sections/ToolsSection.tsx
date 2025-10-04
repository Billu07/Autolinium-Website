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
      img: "/assets/softair.png",
      title: "Airtable & Softr",
      description: "For custom CRMs and databases.",
      link: "/tools/airtable-softr",
    },
    {
      img: "/assets/manier.png",
      title: "Make, n8n, Zapier",
      description: "For seamless automations.",
      link: "/tools/make-n8n-zapier",
    },
    {
      img: "/assets/reaws.png",
      title: "React Native & AWS",
      description: "For mobile apps and scalable backends.",
      link: "/tools/react-native-aws",
    },
  ];

  return (
    <section ref={ref} className="section bg-[var(--primary-bg)]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="container"
      >
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-white"
          variants={cardVariants}
        >
          Our Tools
        </motion.h2>

        <motion.p
          className="text-lg text-center mb-12 text-[var(--text-secondary)]"
          variants={cardVariants}
        >
          Explore our AI-powered tools to enhance your productivity.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <motion.div
              key={tool.title}
              variants={cardVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <motion.div
                className="card text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={tool.img}
                  alt={tool.title}
                  className="mx-auto mb-4 h-16"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  {tool.description}
                </p>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to={tool.link}
                    className="button bg-[var(--accent-deep-teal)]"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ToolsSection;
