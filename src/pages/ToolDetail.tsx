import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Animation variants
const fadeInVariants = {
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

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 4px 8px rgba(0, 77, 64, 0.3)",
    transition: { duration: 0.3 },
  },
};

// Enhanced mock data for tools
const toolData: {
  [key: string]: {
    title: string;
    description: string;
    longDescription: string;
    features: { name: string; description: string; icon: string }[];
    useCases: { scenario: string; outcome: string }[];
    integration: string[];
    benefits: string[];
    image: string;
  };
} = {
  "airtable-softr": {
    title: "Airtable & Softr",
    description:
      "Build powerful, user-friendly CRMs and databases with Airtable's flexible data management and Softr's no-code frontends for rapid deployment.",
    longDescription:
      "Airtable combines the simplicity of a spreadsheet with the power of a database, while Softr transforms your Airtable bases into powerful web applications without coding. Together, they form the perfect stack for building custom business applications in days, not months.",
    features: [
      {
        name: "Flexible Database",
        description:
          "Create custom database schemas that adapt to your business needs",
        icon: "fas fa-database",
      },
      {
        name: "No-Code Frontend",
        description:
          "Build beautiful user interfaces with drag-and-drop components",
        icon: "fas fa-palette",
      },
      {
        name: "Real-time Collaboration",
        description:
          "Multiple team members can work simultaneously with live updates",
        icon: "fas fa-users",
      },
      {
        name: "API Integration",
        description: "Connect with hundreds of other tools and services",
        icon: "fas fa-plug",
      },
    ],
    useCases: [
      {
        scenario: "Client Portal for Consulting Firm",
        outcome:
          "Created a branded client portal using Airtable for data storage and Softr for the frontend, deployed in just 2 weeks. Clients can now access their project status, documents, and communications in one place.",
      },
      {
        scenario: "Inventory Management System",
        outcome:
          "Built a real-time inventory tracking system that syncs with e-commerce platforms, reducing stockouts by 85% and improving order accuracy.",
      },
    ],
    integration: [
      "Slack",
      "Gmail",
      "Stripe",
      "Google Sheets",
      "Make",
      "Zapier",
    ],
    benefits: [
      "80% faster development time compared to traditional coding",
      "No technical skills required for ongoing maintenance",
      "Scalable from small business to enterprise needs",
      "Cost-effective solution with predictable pricing",
    ],
    image: "/assets/softair.png",
  },
  "make-n8n-zapier": {
    title: "Make, n8n, Zapier",
    description:
      "Automate complex workflows across your favorite tools with Make, n8n, and Zapier, enabling seamless data flow and task automation.",
    longDescription:
      "These automation platforms connect your apps and services to create automated workflows. While Zapier offers simplicity for common tasks, Make provides advanced scenarios, and n8n gives you open-source flexibility for complex enterprise automation.",
    features: [
      {
        name: "Multi-App Integration",
        description:
          "Connect 1000+ apps and services with pre-built connectors",
        icon: "fas fa-puzzle-piece",
      },
      {
        name: "Visual Workflow Builder",
        description: "Create complex automations with drag-and-drop interfaces",
        icon: "fas fa-project-diagram",
      },
      {
        name: "Custom Logic",
        description: "Add conditional logic, filters, and data transformations",
        icon: "fas fa-code",
      },
      {
        name: "Error Handling",
        description: "Built-in error detection and retry mechanisms",
        icon: "fas fa-exclamation-triangle",
      },
    ],
    useCases: [
      {
        scenario: "Lead Management Automation",
        outcome:
          "Automated lead syncing between HubSpot, Slack, and Gmail, reducing manual data entry by 90% and improving response time from hours to minutes.",
      },
      {
        scenario: "E-commerce Order Processing",
        outcome:
          "Created automated order fulfillment workflows connecting Shopify, QuickBooks, and shipping carriers, processing 500+ orders daily without manual intervention.",
      },
    ],
    integration: [
      "All major CRMs",
      "Communication tools",
      "Payment processors",
      "Cloud storage",
      "Social media",
      "Analytics platforms",
    ],
    benefits: [
      "Eliminate repetitive manual tasks",
      "Reduce human error in data processing",
      "Scale operations without adding staff",
      "Gain real-time insights across all systems",
    ],
    image: "/assets/manier.png",
  },
  "react-native-aws": {
    title: "React Native & AWS",
    description:
      "Develop scalable mobile apps for Android and iOS with React Native, backed by AWS for robust, cloud-based infrastructure.",
    longDescription:
      "React Native enables cross-platform mobile development with native performance, while AWS provides the scalable cloud infrastructure needed for modern applications. This combination delivers enterprise-grade mobile solutions with global reach and reliability.",
    features: [
      {
        name: "Cross-Platform Development",
        description:
          "Build once, deploy to both iOS and Android with native performance",
        icon: "fas fa-mobile-alt",
      },
      {
        name: "Scalable Backend",
        description: "AWS services scale automatically with your user base",
        icon: "fas fa-cloud",
      },
      {
        name: "Real-time Features",
        description: "Implement live updates, chat, and collaboration features",
        icon: "fas fa-bolt",
      },
      {
        name: "Enterprise Security",
        description: "Bank-level security with AWS Cognito and encryption",
        icon: "fas fa-shield-alt",
      },
    ],
    useCases: [
      {
        scenario: "Retail Mobile App",
        outcome:
          "Built a feature-rich mobile app for a retail chain using React Native for the frontend and AWS for real-time inventory tracking, launched in 3 months with 50,000+ downloads.",
      },
      {
        scenario: "Field Service Application",
        outcome:
          "Developed a mobile app for field technicians with offline capabilities, GPS tracking, and real-time job updates, improving service efficiency by 40%.",
      },
    ],
    integration: [
      "Push notifications",
      "Payment gateways",
      "Mapping services",
      "Analytics",
      "Machine learning",
      "IoT devices",
    ],
    benefits: [
      "50% faster development than native apps",
      "Automatic scaling to millions of users",
      "99.9% uptime guarantee with AWS",
      "Lower maintenance costs with single codebase",
    ],
    image: "/assets/reaws.png",
  },
};

const ToolDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { ref, isVisible } = useScrollAnimation();
  const tool = slug && toolData[slug] ? toolData[slug] : null;

  if (!tool) {
    return (
      <ErrorBoundary>
        <section className="section bg-[var(--primary-bg)] min-h-screen pt-20">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <i className="fas fa-tools text-6xl text-[var(--accent-blue)] mb-6"></i>
              <h2 className="text-4xl font-bold mb-4 text-white">
                Tool Not Found
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                The tool you're looking for doesn't exist in our portfolio.
              </p>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  to="/tools"
                  className="button bg-[var(--accent-deep-teal)]"
                >
                  Back to Tools
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ErrorBoundary>
    );
  }

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
          className="container max-w-6xl"
        >
          {/* Back Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/tools"
              className="inline-flex items-center text-[var(--accent-blue)] hover:text-[var(--accent-deep-teal)] transition-colors"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Tools
            </Link>
          </motion.div>

          {/* Header Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h1 className="text-4xl font-bold mb-6 text-white">
                {tool.title}
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
                {tool.description}
              </p>
              <p className="text-[var(--text-secondary)] mb-8">
                {tool.longDescription}
              </p>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  to="/contact"
                  className="button bg-[var(--accent-deep-teal)] text-lg"
                >
                  Start Project with {tool.title}
                </Link>
              </motion.div>
            </div>

            <div className="flex justify-center">
              <motion.div
                className="card p-8 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="mx-auto mb-6 h-32 w-32 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/fallback-image.jpg";
                  }}
                />
                <h3 className="text-xl font-semibold text-white mb-4">
                  Perfect For
                </h3>
                <div className="space-y-3">
                  {tool.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center text-[var(--text-secondary)]"
                    >
                      <i className="fas fa-check text-green-400 mr-3"></i>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="card p-6 flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-deep-teal)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className={`${feature.icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Real-World Success Stories
            </h2>
            <div className="space-y-6">
              {tool.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="card p-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[var(--accent-blue)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {useCase.scenario}
                      </h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {useCase.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Integration & CTA */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Integration Partners */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Common Integrations
              </h3>
              <div className="flex flex-wrap gap-3">
                {tool.integration.map((integration, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-700 text-[var(--text-secondary)] rounded-full text-sm hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              className="card p-6 bg-gradient-to-br from-[var(--accent-deep-teal)] to-[var(--accent-blue)] text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 mb-6">
                Let's discuss how {tool.title} can transform your business
                operations.
              </p>
              <div className="space-y-4">
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="/contact"
                    className="button bg-white text-[var(--accent-deep-teal)] hover:bg-gray-100 font-semibold w-full"
                  >
                    Start Your Project
                  </Link>
                </motion.div>
                <p className="text-blue-200 text-sm">
                  Free consultation • No commitment • Expert guidance
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default ToolDetail;
