import React from "react";
import { motion, type Variants } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import "./../App.css";

// Animation variants
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 4px 8px rgba(0, 77, 64, 0.3)",
    transition: { duration: 0.3 },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    },
  },
};

// Mock data for services
const serviceData: {
  [key: string]: {
    title: string;
    description: string;
    features: string[];
    caseStudy: string;
  };
} = {
  "custom-crms": {
    title: "Custom CRMs",
    description:
      "Streamline your business with tailored Customer Relationship Management systems that centralize data and enhance efficiency. Built with Airtable, Softr, or full-code stacks like Postgres, React, and Node.js.",
    features: [
      "Centralized client data management",
      "Custom dashboards and reporting",
      "Integration with existing tools (Slack, Gmail, etc.)",
      "Scalable for small businesses to enterprises",
    ],
    caseStudy:
      "Built a real estate CRM for a USA client, integrating Airtable with Make for automated deal tracking and Slack alerts, reducing manual work by 80%.",
  },
  "workflow-automations": {
    title: "Workflow Automations",
    description:
      "Automate repetitive tasks and integrate your favorite tools to save time and reduce errors. We use Make, n8n, and Zapier to create seamless workflows.",
    features: [
      "Automate email, Slack, and Stripe workflows",
      "Real-time data syncing across platforms",
      "Custom triggers and actions",
      "Up to 90% reduction in manual tasks",
    ],
    caseStudy:
      "Automated invoice processing for a finance client, connecting QuickBooks and Slack via Zapier, saving 10 hours weekly.",
  },
  "ai-agents-chatbots": {
    title: "AI-Driven Agents & Chatbots",
    description:
      "Enhance customer engagement with AI-powered agents and chatbots that operate 24/7 across voice, text, and multi-channel platforms using ChatGPT, Botpress, and Vapi.",
    features: [
      "24/7 customer support automation",
      "Multi-channel (web, mobile, Telegram) bots",
      "Personalized responses with AI",
      "Integration with CRMs and analytics",
    ],
    caseStudy:
      "Developed a Telegram bot for a construction firm in Mexico, enabling real-time reporting with ChatGPT and Airtable integration.",
  },
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug && serviceData[slug] ? serviceData[slug] : null;

  if (!service) {
    return (
      <section className="section bg-[var(--primary-bg)] min-h-screen pt-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Service Not Found
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            The service you're looking for doesn't exist.
          </p>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              to="/services"
              className="button bg-[var(--accent-deep-teal)]"
            >
              Back to Services
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-[var(--primary-bg)] min-h-screen pt-20">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          {service.title}
        </h2>
        <p className="text-lg text-center mb-12 text-[var(--text-secondary)] max-w-3xl mx-auto">
          {service.description}
        </p>
        <div className="card mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Key Features
          </h3>
          <ul className="list-disc max-w-3xl mx-auto text-[var(--text-secondary)] space-y-2">
            {service.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 text-center">Case Study</h3>
          <p className="text-[var(--text-secondary)] text-center max-w-3xl mx-auto">
            {service.caseStudy}
          </p>
        </div>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          className="text-center mt-8"
        >
          <Link to="/contact" className="button bg-[var(--accent-deep-teal)]">
            Get Started with {service.title}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceDetail;
