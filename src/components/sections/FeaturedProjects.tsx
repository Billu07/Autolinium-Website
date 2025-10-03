import React from "react";
import { motion } from "framer-motion";
import { useTiltAnimation } from "../../hooks/useTiltAnimation";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
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

const FeaturedProjects: React.FC = () => {
  const tiltAnimation = useTiltAnimation();
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      img: "/assets/project-placeholder.png",
      title: "Real Estate CRM (USA)",
      description:
        "Deal pipeline with Slack alerts + call logging. Tools: Airtable, Make.",
    },
    {
      img: "/assets/project-placeholder.png",
      title: "Investor Deal Flow (USA)",
      description:
        "Multi-stage CRM with DocuSign & Calendly. Tools: Airtable, Make.",
    },
    {
      img: "/assets/project-placeholder.png",
      title: "Construction Site Bot (Mexico)",
      description:
        "Telegram bot for photo, voice & text reporting into CRM. Tools: Airtable, Make, ChatGPT.",
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
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                  src={project.img}
                  alt={project.title}
                  className="mx-auto mb-4 h-16"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[var(--text-secondary)]">
                  {project.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;
