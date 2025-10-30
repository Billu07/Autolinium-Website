import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { fadeInVariants, buttonVariants } from "../utils/animationVariants";

import ErrorBoundary from "../components/ErrorBoundary";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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
  "ai-automation": {
    title: "AI Automation",
    description:
      "Automate your entire business workflow with AI-powered automation for lead generation, content creation, sales funnels, and more.",
    longDescription:
      "Our AI automation solutions transform how you operate by eliminating manual tasks and introducing intelligent workflows. From automated lead generation to content creation and sales funnel optimization, we build systems that work 24/7 to grow your business. Using cutting-edge AI technologies, we create automation that adapts, learns, and scales with your needs.",
    features: [
      {
        name: "Lead Generation & Outreach",
        description:
          "Automated cold email and SMS campaigns with AI-powered personalization and follow-up sequences",
        icon: "fas fa-bullseye",
      },
      {
        name: "Automated Video Generation",
        description:
          "AI-driven video creation for marketing, training, and social media with personalized content",
        icon: "fas fa-video",
      },
      {
        name: "Content Automation",
        description:
          "Automated social media posting, blog generation, and content scheduling across platforms",
        icon: "fas fa-share-alt",
      },
      {
        name: "Sales Funnel Automation",
        description:
          "End-to-end automation of customer acquisition, nurturing, and conversion processes",
        icon: "fas fa-funnel-dollar",
      },
    ],
    benefits: [
      "Reduce manual work by 70-90% across business operations",
      "Generate qualified leads 24/7 with AI-powered outreach",
      "Create engaging content automatically at scale",
      "Optimize sales funnels with data-driven automation",
      "Scale operations without proportional staff increases",
    ],
    process: [
      {
        step: "Workflow Analysis",
        description:
          "Identify automation opportunities and map current business processes",
      },
      {
        step: "AI Solution Design",
        description:
          "Design intelligent automation workflows with AI integration",
      },
      {
        step: "Development & Training",
        description:
          "Build automation systems and train AI models on your specific data",
      },
      {
        step: "Integration & Testing",
        description:
          "Connect with existing systems and conduct comprehensive testing",
      },
      {
        step: "Launch & Optimization",
        description:
          "Go live with continuous monitoring and AI model improvement",
      },
    ],
    caseStudies: [
      {
        client: "E-commerce Brand",
        challenge:
          "Manual lead generation and customer outreach was consuming 30+ hours weekly with inconsistent results and high human error rate.",
        solution:
          "Implemented AI-powered automation for lead generation, personalized email sequences, and social media content creation using Make, ChatGPT, and custom AI models.",
        results: [
          "85% reduction in manual outreach time",
          "3x increase in qualified lead generation",
          "40% improvement in email open rates",
          "24/7 automated content creation",
        ],
      },
    ],
    tools: ["Make", "n8n", "ChatGPT API", "Python", "AWS", "Custom AI Models"],
    pricing: [
      {
        type: "Basic Automation",
        price: "From $3,500",
        features: [
          "Single workflow automation",
          "Basic AI integration",
          "Standard reporting",
          "3-month support",
        ],
      },
      {
        type: "Business Automation",
        price: "From $12,000",
        features: [
          "Multiple workflow automations",
          "Advanced AI capabilities",
          "Custom dashboards",
          "6-month support",
          "Team training",
        ],
      },
      {
        type: "Enterprise Automation",
        price: "Custom Quote",
        features: [
          "Full business process automation",
          "Custom AI model training",
          "Advanced analytics",
          "Dedicated support",
          "Ongoing optimization",
        ],
      },
    ],
  },
  "ai-agents": {
    title: "AI Agents",
    description:
      "Intelligent AI agents that handle customer interactions, sales, and support across multiple channels 24/7.",
    longDescription:
      "Our AI agents revolutionize customer engagement by providing intelligent, personalized interactions across all your communication channels. From sales chatbots that convert visitors into customers, to voice receptionists that handle calls professionally, these AI solutions work tirelessly to enhance customer experience while reducing operational costs. Built with advanced natural language processing and custom training, our agents understand context and provide human-like interactions.",
    features: [
      {
        name: "Sales Chatbots",
        description:
          "Intelligent chatbots for WhatsApp, Messenger, Telegram, and websites that handle sales and support",
        icon: "fas fa-robot",
      },
      {
        name: "AI Voice Receptionist",
        description:
          "Voice agents that answer calls, handle FAQs, book appointments, and create support tickets 24/7",
        icon: "fas fa-phone-alt",
      },
      {
        name: "AI Calling Agents",
        description:
          "Outbound calling agents for lead generation, follow-ups, and customer outreach campaigns",
        icon: "fas fa-phone-volume",
      },
      {
        name: "Multi-Channel Support",
        description:
          "Unified AI agents that maintain context across voice, text, and messaging platforms",
        icon: "fas fa-comments",
      },
    ],
    benefits: [
      "Provide 24/7 customer support without additional staff",
      "Handle 80% of common customer queries automatically",
      "Reduce response time from hours to seconds",
      "Increase lead conversion with instant engagement",
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
        client: "Service Business",
        challenge:
          "High call volume was overwhelming staff, leading to missed calls, long wait times, and poor customer experience during peak hours.",
        solution:
          "Deployed AI voice receptionist with Vapi integration, handling initial call screening, appointment booking, and FAQ responses with seamless human handoff when needed.",
        results: [
          "75% of calls handled automatically by AI",
          "Reduced wait times from 5+ minutes to instant",
          "24/7 availability for customer inquiries",
          "40% reduction in staff workload",
        ],
      },
    ],
    tools: ["Vapi", "ChatGPT", "Botpress", "Python", "Twilio", "WhatsApp API"],
    pricing: [
      {
        type: "Basic Chatbot",
        price: "From $4,000",
        features: [
          "Single channel deployment",
          "Basic NLP capabilities",
          "Standard integration",
          "3-month support",
        ],
      },
      {
        type: "Advanced AI Agent",
        price: "From $15,000",
        features: [
          "Multi-channel deployment",
          "Advanced NLP and voice",
          "CRM integration",
          "6-month support",
          "Custom training",
        ],
      },
      {
        type: "Enterprise AI Suite",
        price: "Custom Quote",
        features: [
          "Omnichannel AI agents",
          "Custom AI model development",
          "Advanced analytics",
          "Dedicated support",
          "Ongoing optimization",
        ],
      },
    ],
  },
  "ai-web-applications": {
    title: "AI Web Applications",
    description:
      "Custom AI-powered web applications including CRM, ERP, and POS systems tailored to your business needs.",
    longDescription:
      "We build intelligent web applications that leverage AI to transform how you manage your business. From AI-powered CRMs that predict customer behavior, to ERP systems that optimize operations, and POS systems that enhance retail experiences - our applications are built with intelligence at their core. Using modern technologies and AI integration, we create solutions that not only manage data but provide actionable insights and automation.",
    features: [
      {
        name: "AI-Powered CRM",
        description:
          "Intelligent customer relationship management with predictive analytics and automated workflows",
        icon: "fas fa-users",
      },
      {
        name: "Enterprise ERP Systems",
        description:
          "Comprehensive enterprise resource planning with AI-driven optimization and forecasting",
        icon: "fas fa-chart-line",
      },
      {
        name: "Point of Sale (POS)",
        description:
          "Smart retail systems with inventory management, sales analytics, and customer insights",
        icon: "fas fa-cash-register",
      },
      {
        name: "Custom Business Applications",
        description:
          "Tailored applications for specific business needs with integrated AI capabilities",
        icon: "fas fa-cogs",
      },
    ],
    benefits: [
      "Make data-driven decisions with AI-powered insights",
      "Automate complex business processes intelligently",
      "Scale operations with robust, AI-enhanced systems",
      "Improve customer experience with predictive analytics",
      "Reduce operational costs through optimization",
    ],
    process: [
      {
        step: "Requirements Analysis",
        description:
          "Deep dive into business needs and AI integration opportunities",
      },
      {
        step: "Architecture Design",
        description:
          "Design scalable application architecture with AI components",
      },
      {
        step: "Development & AI Integration",
        description: "Build application with integrated AI models and features",
      },
      {
        step: "Testing & Training",
        description:
          "Comprehensive testing and user training for smooth adoption",
      },
      {
        step: "Deployment & Support",
        description: "Launch with ongoing support and AI model refinement",
      },
    ],
    caseStudies: [
      {
        client: "Manufacturing Company",
        challenge:
          "Outdated systems were causing inventory mismanagement, production delays, and lack of real-time insights into operations.",
        solution:
          "Developed custom AI-powered ERP system with predictive inventory management, production optimization, and real-time analytics dashboard using React, Node.js, and machine learning models.",
        results: [
          "30% reduction in inventory costs",
          "25% improvement in production efficiency",
          "Real-time operational visibility",
          "Automated supply chain optimization",
        ],
      },
    ],
    tools: ["React", "Node.js", "PostgreSQL", "Python", "TensorFlow", "AWS"],
    pricing: [
      {
        type: "Standard Application",
        price: "From $8,000",
        features: [
          "Basic AI features",
          "Standard functionality",
          "Basic reporting",
          "4-month support",
        ],
      },
      {
        type: "Advanced AI Application",
        price: "From $25,000",
        features: [
          "Advanced AI capabilities",
          "Custom features",
          "Advanced analytics",
          "6-month support",
          "Team training",
        ],
      },
      {
        type: "Enterprise Solution",
        price: "Custom Quote",
        features: [
          "Full AI integration",
          "Enterprise scalability",
          "Custom AI models",
          "Dedicated support",
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
