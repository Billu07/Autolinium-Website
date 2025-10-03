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

// Mock data for tools
const toolData: {
  [key: string]: {
    title: string;
    description: string;
    features: string[];
    useCase: string;
  };
} = {
  "airtable-softr": {
    title: "Airtable & Softr",
    description:
      "Build powerful, user-friendly CRMs and databases with Airtable’s flexible data management and Softr’s no-code frontends for rapid deployment.",
    features: [
      "Customizable database schemas",
      "User-friendly interfaces with Softr",
      "Real-time data collaboration",
      "Integration with automation tools",
    ],
    useCase:
      "Created a client portal for a consulting firm, using Airtable for data storage and Softr for a branded frontend, deployed in 2 weeks.",
  },
  "make-n8n-zapier": {
    title: "Make, n8n, Zapier",
    description:
      "Automate complex workflows across your favorite tools with Make, n8n, and Zapier, enabling seamless data flow and task automation.",
    features: [
      "Connect 100+ apps with no-code/low-code",
      "Custom logic for advanced workflows",
      "Real-time triggers and actions",
      "Scalable automation for any business size",
    ],
    useCase:
      "Automated lead syncing for a marketing agency, connecting HubSpot, Slack, and Gmail via n8n, reducing manual updates by 90%.",
  },
  "react-native-aws": {
    title: "React Native & AWS",
    description:
      "Develop scalable mobile apps for Android and iOS with React Native, backed by AWS for robust, cloud-based infrastructure.",
    features: [
      "Cross-platform mobile apps",
      "Scalable backends with AWS Lambda, S3",
      "Real-time data with AWS AppSync",
      "Secure authentication with AWS Cognito",
    ],
    useCase:
      "Built a mobile app for a retail client, using React Native for the frontend and AWS for real-time inventory tracking, launched in 3 months.",
  },
};

const ToolDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug && toolData[slug] ? toolData[slug] : null;

  if (!tool) {
    return (
      <section className="section bg-[var(--primary-bg)] min-h-screen pt-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Tool Not Found</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            The tool you're looking for doesn't exist.
          </p>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link to="/tools" className="button bg-[var(--accent-deep-teal)]">
              Back to Tools
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
          {tool.title}
        </h2>
        <p className="text-lg text-center mb-12 text-[var(--text-secondary)] max-w-3xl mx-auto">
          {tool.description}
        </p>
        <div className="card mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Key Features
          </h3>
          <ul className="list-disc max-w-3xl mx-auto text-[var(--text-secondary)] space-y-2">
            {tool.features.map((feature, index) => (
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
          <h3 className="text-xl font-semibold mb-4 text-center">Use Case</h3>
          <p className="text-[var(--text-secondary)] text-center max-w-3xl mx-auto">
            {tool.useCase}
          </p>
        </div>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          className="text-center mt-8"
        >
          <Link to="/contact" className="button bg-[var(--accent-deep-teal)]">
            Get Started with {tool.title}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ToolDetail;
