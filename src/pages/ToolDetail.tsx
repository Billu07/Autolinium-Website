import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  staggerContainer,
  cardVariants,
  buttonVariants,
} from "../utils/animationVariants";
import ErrorBoundary from "../components/ErrorBoundary";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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
    gradient: string;
    icon: string;
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
    gradient: "from-blue-500 to-cyan-400",
    icon: "fas fa-database",
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
    gradient: "from-purple-500 to-pink-500",
    icon: "fas fa-cogs",
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
    gradient: "from-green-500 to-teal-400",
    icon: "fas fa-mobile-alt",
  },
};

const ToolDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { ref, isVisible } = useScrollAnimation();
  const tool = slug && toolData[slug] ? toolData[slug] : null;

  if (!tool) {
    return (
      <ErrorBoundary>
        <section className="section section-bg section-bg-primary min-h-screen pt-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                <i className="fas fa-tools text-white text-3xl"></i>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Tool Not Found
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
                The tool you're looking for doesn't exist in our portfolio.
              </p>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  to="/tools"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <i className="fas fa-arrow-left mr-2 sm:mr-3"></i>
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
        className="section section-bg section-bg-tertiary min-h-screen pt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Back Button */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/tools"
              className="inline-flex items-center text-[var(--accent-blue)] hover:text-cyan-400 transition-colors text-sm sm:text-base"
            >
              <i className="fas fa-arrow-left mr-2 sm:mr-3"></i>
              Back to All Tools
            </Link>
          </motion.div>

          {/* Header Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 items-start"
          >
            <div>
              <motion.div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-lg mb-6`}
                variants={cardVariants}
              >
                <i
                  className={`${tool.icon} text-white text-2xl sm:text-3xl`}
                ></i>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white"
                variants={cardVariants}
              >
                {tool.title}
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed"
                variants={cardVariants}
              >
                {tool.description}
              </motion.p>

              <motion.p
                className="text-[var(--text-secondary)] mb-6 sm:mb-8 leading-relaxed"
                variants={cardVariants}
              >
                {tool.longDescription}
              </motion.p>

              <motion.div variants={cardVariants}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  <i className="fas fa-rocket mr-2 sm:mr-3"></i>
                  Start Project with {tool.title}
                </Link>
              </motion.div>
            </div>

            {/* Benefits Card */}
            <motion.div
              className="card p-6 sm:p-8"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
                Key Benefits
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {tool.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start text-[var(--text-secondary)] text-sm sm:text-base"
                  >
                    <i className="fas fa-check-circle text-green-400 mr-3 mt-0.5 text-sm sm:text-base flex-shrink-0"></i>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-white"
              variants={cardVariants}
            >
              Key Features
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {tool.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="card p-6 sm:p-8 flex items-start space-x-4 sm:space-x-6 group hover:border-cyan-400/40 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <i
                      className={`${feature.icon} text-white text-lg sm:text-xl`}
                    ></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                      {feature.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-white"
              variants={cardVariants}
            >
              Real-World Success Stories
            </motion.h2>

            <div className="space-y-6 sm:space-y-8">
              {tool.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="card p-6 sm:p-8"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm sm:text-base">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
                        {useCase.scenario}
                      </h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
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
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          >
            {/* Integration Partners */}
            <motion.div className="card p-6 sm:p-8" variants={cardVariants}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">
                Common Integrations
              </h3>
              <div className="flex flex-wrap gap-3">
                {tool.integration.map((integration, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-2 bg-[var(--tertiary-bg)] text-[var(--text-secondary)] rounded-lg text-xs sm:text-sm border border-[var(--card-border)] hover:border-cyan-400/50 transition-colors cursor-pointer"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              className="card p-6 sm:p-8 bg-gradient-to-br from-cyan-500 to-blue-500 text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                Ready to Get Started?
              </h3>
              <p className="text-cyan-100 mb-6 text-sm sm:text-base">
                Let's discuss how {tool.title} can transform your business
                operations.
              </p>
              <div className="space-y-4">
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 w-full text-sm sm:text-base"
                  >
                    <i className="fas fa-calendar-check mr-2 sm:mr-3"></i>
                    Start Your Project
                  </Link>
                </motion.div>
                <p className="text-cyan-200 text-xs sm:text-sm">
                  Free consultation • No commitment • Expert guidance
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default ToolDetail;
