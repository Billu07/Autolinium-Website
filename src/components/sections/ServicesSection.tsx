import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 4px 8px rgba(0, 77, 64, 0.3)",
    transition: { duration: 0.3 },
  },
};

const ServicesSection: React.FC = () => {
  const tiltAnimation = useTiltAnimation();
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      img: "/assets/crm.png",
      title: "Custom CRMs",
      description:
        "Built with Airtable, Softr, or full-code stacks like Postgres/React/Node.",
      link: "/services/custom-crms",
    },
    {
      img: "/assets/process.png",
      title: "Workflow Automations",
      description:
        "Integrate Slack, Gmail, Stripe, and more with Make, n8n, Zapier.",
      link: "/services/workflow-automations",
    },
    {
      img: "/assets/robot.png",
      title: "AI-Driven Agents & Chatbots",
      description:
        "Voice, text, multi-channel bots with ChatGPT, Botpress, Vapi.",
      link: "/services/ai-agents-chatbots",
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
          Our Services
        </motion.h2>

        <motion.p
          className="text-lg text-center mb-12 text-[var(--text-secondary)]"
          variants={cardVariants}
        >
          Discover our AI-powered services to transform your business.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                  src={service.img}
                  alt={service.title}
                  className="mx-auto mb-4 h-16"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  {service.description}
                </p>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to={service.link}
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

export default ServicesSection;
