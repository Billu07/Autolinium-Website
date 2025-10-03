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

// Enhanced mock data for services
const serviceData: {
  [key: string]: {
    title: string;
    description: string;
    longDescription: string;
    features: { name: string; description: string; icon: string }[];
    benefits: string[];
    process: { step: string; description: string }[];
    caseStudies: {
      client: string;
      challenge: string;
      solution: string;
      results: string[];
    }[];
    tools: string[];
    pricing: { type: string; price: string; features: string[] }[];
  };
} = {
  "custom-crms": {
    title: "Custom CRMs",
    description:
      "Streamline your business with tailored Customer Relationship Management systems that centralize data and enhance efficiency.",
    longDescription:
      "Our custom CRM solutions transform how you manage customer relationships, sales pipelines, and business operations. Built with your specific workflows in mind, we create systems that adapt to your business—not the other way around. Whether you need a simple contact manager or a complex enterprise solution, we deliver CRMs that drive growth and efficiency.",
    features: [
      {
        name: "Centralized Data Management",
        description:
          "Unify customer information, interactions, and history in one secure platform",
        icon: "fas fa-database",
      },
      {
        name: "Custom Dashboards & Reporting",
        description:
          "Real-time insights with customizable reports and visual analytics",
        icon: "fas fa-chart-bar",
      },
      {
        name: "Workflow Automation",
        description:
          "Automate sales processes, follow-ups, and task assignments",
        icon: "fas fa-cogs",
      },
      {
        name: "Multi-Platform Integration",
        description:
          "Seamlessly connect with email, calendar, communication tools, and more",
        icon: "fas fa-plug",
      },
    ],
    benefits: [
      "Increase sales team productivity by 40-60%",
      "Improve customer satisfaction with faster response times",
      "Gain complete visibility into sales pipelines",
      "Reduce manual data entry by up to 80%",
      "Make data-driven decisions with real-time analytics",
    ],
    process: [
      {
        step: "Discovery & Planning",
        description:
          "We analyze your business processes and define CRM requirements",
      },
      {
        step: "Design & Prototyping",
        description: "Create wireframes and prototypes for your approval",
      },
      {
        step: "Development & Integration",
        description:
          "Build your custom CRM and integrate with existing systems",
      },
      {
        step: "Testing & Training",
        description: "Thorough testing and team training for smooth adoption",
      },
      {
        step: "Launch & Support",
        description: "Go live with ongoing support and optimization",
      },
    ],
    caseStudies: [
      {
        client: "Real Estate Agency (USA)",
        challenge:
          "Managing 500+ properties and client communications across multiple platforms was causing missed opportunities and communication gaps.",
        solution:
          "Built a custom CRM integrating Airtable for data management, Make for automation, and a Softr frontend for agent access. Features included automated lead scoring, property matching, and client communication tracking.",
        results: [
          "80% reduction in manual data entry",
          "45% increase in lead conversion rate",
          "30% faster response time to client inquiries",
          "Complete visibility into sales pipeline",
        ],
      },
    ],
    tools: ["Airtable", "Softr", "Make", "React", "Node.js", "PostgreSQL"],
    pricing: [
      {
        type: "Starter CRM",
        price: "From $5,000",
        features: [
          "Basic contact management",
          "Standard reporting",
          "Email integration",
          "3-month support",
        ],
      },
      {
        type: "Business CRM",
        price: "From $15,000",
        features: [
          "Advanced automation",
          "Custom dashboards",
          "API integrations",
          "6-month support",
          "Team training",
        ],
      },
      {
        type: "Enterprise CRM",
        price: "Custom Quote",
        features: [
          "Full customization",
          "Advanced analytics",
          "Dedicated support",
          "Ongoing development",
          "SLA guarantee",
        ],
      },
    ],
  },
  "workflow-automations": {
    title: "Workflow Automations",
    description:
      "Automate repetitive tasks and integrate your favorite tools to save time and reduce errors across your organization.",
    longDescription:
      "Our workflow automation solutions eliminate manual, repetitive tasks that consume valuable time and introduce human error. We design intelligent automation systems that connect your apps and services, creating seamless workflows that operate 24/7. From simple task automation to complex multi-system orchestrations, we help you work smarter, not harder.",
    features: [
      {
        name: "Multi-App Integration",
        description:
          "Connect 1000+ applications with pre-built connectors and custom APIs",
        icon: "fas fa-puzzle-piece",
      },
      {
        name: "Intelligent Triggers",
        description:
          "Automate workflows based on time, events, or custom conditions",
        icon: "fas fa-bolt",
      },
      {
        name: "Error Handling & Logging",
        description:
          "Built-in error detection, retry mechanisms, and detailed activity logs",
        icon: "fas fa-exclamation-triangle",
      },
      {
        name: "Custom Logic & Transformations",
        description:
          "Add complex business rules and data transformations to your workflows",
        icon: "fas fa-code",
      },
    ],
    benefits: [
      "Reduce manual work by 70-90%",
      "Eliminate human error in repetitive tasks",
      "Process data 10x faster than manual methods",
      "Scale operations without adding staff",
      "Gain real-time visibility into business processes",
    ],
    process: [
      {
        step: "Process Analysis",
        description:
          "Identify automation opportunities and map current workflows",
      },
      {
        step: "Automation Design",
        description: "Design optimal automated workflows with error handling",
      },
      {
        step: "Development & Testing",
        description: "Build and thoroughly test automation scenarios",
      },
      {
        step: "Deployment & Monitoring",
        description: "Launch automations with performance monitoring",
      },
      {
        step: "Optimization",
        description: "Continuously improve based on usage and feedback",
      },
    ],
    caseStudies: [
      {
        client: "Financial Services Company",
        challenge:
          "Manual invoice processing was taking 20+ hours weekly and causing payment delays and errors.",
        solution:
          "Implemented automated invoice processing using Make to connect QuickBooks, Gmail, and Slack. The system automatically extracts invoice data, routes for approval, and updates accounting records.",
        results: [
          "90% reduction in manual invoice processing",
          "Eliminated payment delays and late fees",
          "Reduced accounting errors by 95%",
          "Freed up 18 hours weekly for strategic work",
        ],
      },
    ],
    tools: [
      "Make",
      "n8n",
      "Zapier",
      "Python",
      "AWS Lambda",
      "Google Apps Script",
    ],
    pricing: [
      {
        type: "Basic Automation",
        price: "From $2,500",
        features: [
          "Up to 5 workflows",
          "Standard integrations",
          "Basic monitoring",
          "2-month support",
        ],
      },
      {
        type: "Business Automation",
        price: "From $7,500",
        features: [
          "Unlimited workflows",
          "Advanced integrations",
          "Custom logic",
          "4-month support",
        ],
      },
      {
        type: "Enterprise Automation",
        price: "Custom Quote",
        features: [
          "Complex orchestrations",
          "Custom development",
          "24/7 monitoring",
          "Ongoing optimization",
        ],
      },
    ],
  },
  "ai-agents-chatbots": {
    title: "AI-Driven Agents & Chatbots",
    description:
      "Enhance customer engagement with AI-powered agents and chatbots that operate 24/7 across voice, text, and multi-channel platforms.",
    longDescription:
      "Our AI agents and chatbots revolutionize customer interactions by providing instant, intelligent responses 24/7. Powered by advanced language models and custom training, these solutions understand context, handle complex queries, and provide personalized assistance. From simple FAQ bots to sophisticated virtual assistants, we create AI solutions that scale with your business and delight your customers.",
    features: [
      {
        name: "Multi-Channel Deployment",
        description:
          "Deploy across website, mobile apps, messaging platforms, and voice interfaces",
        icon: "fas fa-comments",
      },
      {
        name: "Natural Language Understanding",
        description:
          "Advanced NLP to understand context, intent, and user sentiment",
        icon: "fas fa-brain",
      },
      {
        name: "CRM Integration",
        description:
          "Seamless integration with your existing customer data and systems",
        icon: "fas fa-user-friends",
      },
      {
        name: "Continuous Learning",
        description:
          "AI models that improve over time based on user interactions",
        icon: "fas fa-graduation-cap",
      },
    ],
    benefits: [
      "Provide 24/7 customer support without additional staff",
      "Reduce response time from hours to seconds",
      "Handle 80% of common customer queries automatically",
      "Increase customer satisfaction scores by 30-50%",
      "Gather valuable customer insights from interactions",
    ],
    process: [
      {
        step: "Use Case Definition",
        description: "Identify key interaction scenarios and success metrics",
      },
      {
        step: "Conversation Design",
        description: "Design natural conversation flows and response templates",
      },
      {
        step: "AI Model Training",
        description: "Train and fine-tune AI models for your specific domain",
      },
      {
        step: "Integration & Testing",
        description: "Connect with your systems and conduct extensive testing",
      },
      {
        step: "Launch & Optimization",
        description:
          "Go live with performance monitoring and continuous improvement",
      },
    ],
    caseStudies: [
      {
        client: "Construction Company (Mexico)",
        challenge:
          "Field teams needed to report progress, issues, and safety concerns from remote sites with limited internet access.",
        solution:
          "Developed a Telegram bot with ChatGPT integration for natural language processing and Airtable backend for data storage. Teams could report via text, voice, or photos with offline capability.",
        results: [
          "90% faster incident reporting",
          "Eliminated paper-based reporting entirely",
          "Real-time project visibility for management",
          "Improved safety compliance tracking",
        ],
      },
    ],
    tools: ["ChatGPT", "Botpress", "Vapi", "Python", "AWS", "Telegram API"],
    pricing: [
      {
        type: "Basic Chatbot",
        price: "From $3,500",
        features: [
          "FAQ automation",
          "Basic NLP",
          "Single channel",
          "3-month support",
        ],
      },
      {
        type: "Advanced AI Agent",
        price: "From $12,000",
        features: [
          "Multi-channel",
          "Advanced NLP",
          "CRM integration",
          "6-month support",
        ],
      },
      {
        type: "Enterprise Virtual Assistant",
        price: "Custom Quote",
        features: [
          "Voice capabilities",
          "Custom training",
          "Advanced analytics",
          "Ongoing development",
        ],
      },
    ],
  },
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { ref, isVisible } = useScrollAnimation();
  const service = slug && serviceData[slug] ? serviceData[slug] : null;

  if (!service) {
    return (
      <ErrorBoundary>
        <section className="section bg-[var(--primary-bg)] min-h-screen pt-20">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <i className="fas fa-cogs text-6xl text-[var(--accent-blue)] mb-6"></i>
              <h2 className="text-4xl font-bold mb-4 text-white">
                Service Not Found
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                The service you're looking for doesn't exist in our portfolio.
              </p>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  to="/services"
                  className="button bg-[var(--accent-deep-teal)]"
                >
                  Back to Services
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
              to="/services"
              className="inline-flex items-center text-[var(--accent-blue)] hover:text-[var(--accent-deep-teal)] transition-colors"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Services
            </Link>
          </motion.div>

          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-white">
              {service.title}
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-6 max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
            <p className="text-[var(--text-secondary)] max-w-4xl mx-auto mb-8">
              {service.longDescription}
            </p>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link
                to="/contact"
                className="button bg-[var(--accent-deep-teal)] text-lg"
              >
                Start Your {service.title} Project
              </Link>
            </motion.div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-deep-teal)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-check text-white"></i>
                </div>
                <p className="text-[var(--text-secondary)]">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Features & Process */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">
                Key Features
              </h2>
              <div className="space-y-6">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-[var(--accent-blue)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className={`${feature.icon} text-white`}></i>
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
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">
                Our Process
              </h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-[var(--accent-blue)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.step}
                      </h3>
                      <p className="text-[var(--text-secondary)]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Case Study */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Success Story
            </h2>
            {service.caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                className="card p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {caseStudy.client}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--accent-blue)] mb-3">
                      The Challenge
                    </h4>
                    <p className="text-[var(--text-secondary)]">
                      {caseStudy.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--accent-blue)] mb-3">
                      Our Solution
                    </h4>
                    <p className="text-[var(--text-secondary)]">
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[var(--accent-blue)] mb-4">
                    The Results
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center space-x-3"
                      >
                        <i className="fas fa-check text-green-400"></i>
                        <span className="text-[var(--text-secondary)]">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pricing & CTA */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Pricing */}
            <div className="card p-6">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Pricing Options
              </h3>
              <div className="space-y-4">
                {service.pricing.map((pricing, index) => (
                  <div
                    key={index}
                    className="p-4 border border-[var(--card-border)] rounded-lg hover:border-[var(--accent-blue)] transition-colors"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-white">
                        {pricing.type}
                      </h4>
                      <span className="text-[var(--accent-blue)] font-bold">
                        {pricing.price}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {pricing.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-[var(--text-secondary)]"
                        >
                          <i className="fas fa-check text-green-400 mr-2 text-xs"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              className="card p-8 bg-gradient-to-br from-[var(--accent-deep-teal)] to-[var(--accent-blue)] text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 mb-6">
                Let's discuss how {service.title} can transform your business
                operations and drive growth.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center text-blue-200">
                  <i className="fas fa-clock mr-2"></i>
                  <span>Free 30-minute consultation</span>
                </div>
                <div className="flex items-center justify-center text-blue-200">
                  <i className="fas fa-check-circle mr-2"></i>
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center justify-center text-blue-200">
                  <i className="fas fa-rocket mr-2"></i>
                  <span>Quick project start</span>
                </div>
              </div>

              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  to="/contact"
                  className="button bg-white text-[var(--accent-deep-teal)] hover:bg-gray-100 font-semibold w-full"
                >
                  Start Your Project Today
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default ServiceDetail;
