import React from "react";
import { useParams, Link } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";

// Define proper TypeScript interfaces
interface ServiceFeature {
  name: string;
  description: string;
  icon: string;
}

interface ProcessStep {
  step: string;
  description: string;
}

interface CaseStudy {
  client: string;
  challenge: string;
  solution: string;
  results: string[];
}

interface ServiceData {
  title: string;
  description: string;
  longDescription: string;
  features: ServiceFeature[];
  benefits: string[];
  process: ProcessStep[];
  caseStudies: CaseStudy[];
}

// Service data with proper typing
const serviceData: Record<string, ServiceData> = {
  "ai-automation": {
    title: "AI Automation",
    description:
      "Automate your entire business workflow with AI-powered automation for lead generation, content creation, sales funnels, and more.",
    longDescription:
      "Our AI automation solutions transform how you operate by eliminating manual tasks and introducing intelligent workflows. From automated lead generation to content creation and sales funnel optimization, we build systems that work 24/7 to grow your business.",
    features: [
      {
        name: "Lead Generation & Outreach",
        description:
          "Automated cold email and SMS campaigns with AI-powered personalization",
        icon: "fas fa-bullseye",
      },
      {
        name: "Automated Video Generation",
        description: "AI-driven video creation for marketing and social media",
        icon: "fas fa-video",
      },
      {
        name: "Content Automation",
        description: "Automated social media posting and blog generation",
        icon: "fas fa-share-alt",
      },
      {
        name: "Sales Funnel Automation",
        description:
          "End-to-end automation of customer acquisition and conversion",
        icon: "fas fa-funnel-dollar",
      },
    ],
    benefits: [
      "Reduce manual work by 70-90% across operations",
      "Generate qualified leads 24/7 with AI outreach",
      "Create engaging content automatically at scale",
      "Optimize sales funnels with data-driven automation",
    ],
    process: [
      {
        step: "Workflow Analysis",
        description: "Identify automation opportunities and map processes",
      },
      {
        step: "AI Solution Design",
        description: "Design intelligent automation workflows",
      },
      {
        step: "Development & Training",
        description: "Build systems and train AI models",
      },
      {
        step: "Integration & Testing",
        description: "Connect with existing systems and test",
      },
      {
        step: "Launch & Optimization",
        description: "Go live with continuous monitoring",
      },
    ],
    caseStudies: [
      {
        client: "E-commerce Brand",
        challenge:
          "Manual lead generation consuming 30+ hours weekly with inconsistent results.",
        solution:
          "Implemented AI-powered automation for lead generation and personalized outreach.",
        results: [
          "85% reduction in manual outreach time",
          "3x increase in qualified leads",
          "40% improvement in email open rates",
        ],
      },
    ],
  },
  "ai-agents": {
    title: "AI Agents",
    description:
      "Intelligent AI agents that handle customer interactions, sales, and support across multiple channels 24/7.",
    longDescription:
      "Our AI agents revolutionize customer engagement by providing intelligent, personalized interactions across all communication channels.",
    features: [
      {
        name: "Sales Chatbots",
        description:
          "Intelligent chatbots for WhatsApp, Messenger, and websites",
        icon: "fas fa-robot",
      },
      {
        name: "AI Voice Receptionist",
        description: "Voice agents that answer calls and handle FAQs 24/7",
        icon: "fas fa-phone-alt",
      },
      {
        name: "AI Calling Agents",
        description: "Outbound calling for lead generation and follow-ups",
        icon: "fas fa-phone-volume",
      },
      {
        name: "Multi-Channel Support",
        description: "Unified AI agents across voice, text, and messaging",
        icon: "fas fa-comments",
      },
    ],
    benefits: [
      "Provide 24/7 customer support without additional staff",
      "Handle 80% of common queries automatically",
      "Reduce response time from hours to seconds",
      "Increase lead conversion with instant engagement",
    ],
    process: [
      {
        step: "Use Case Definition",
        description: "Identify key interaction scenarios",
      },
      {
        step: "Conversation Design",
        description: "Design natural conversation flows",
      },
      {
        step: "AI Model Training",
        description: "Train models for your specific domain",
      },
      {
        step: "Integration & Testing",
        description: "Connect with systems and test",
      },
      {
        step: "Launch & Optimization",
        description: "Go live with performance monitoring",
      },
    ],
    caseStudies: [
      {
        client: "Service Business",
        challenge:
          "High call volume overwhelming staff with missed calls and long wait times.",
        solution:
          "Deployed AI voice receptionist handling calls and appointment booking.",
        results: [
          "75% of calls handled automatically",
          "Reduced wait times to instant",
          "24/7 availability",
        ],
      },
    ],
  },
  "ai-web-applications": {
    title: "AI Web Applications",
    description:
      "Custom AI-powered web applications including CRM, ERP, and POS systems tailored to your business needs.",
    longDescription:
      "We build intelligent web applications that leverage AI to transform how you manage your business with actionable insights and automation.",
    features: [
      {
        name: "AI-Powered CRM",
        description: "Intelligent CRM with predictive analytics",
        icon: "fas fa-users",
      },
      {
        name: "Enterprise ERP Systems",
        description: "ERP with AI-driven optimization",
        icon: "fas fa-chart-line",
      },
      {
        name: "Point of Sale (POS)",
        description: "Smart retail systems with analytics",
        icon: "fas fa-cash-register",
      },
      {
        name: "Custom Business Applications",
        description: "Tailored apps with AI capabilities",
        icon: "fas fa-cogs",
      },
    ],
    benefits: [
      "Make data-driven decisions with AI insights",
      "Automate complex business processes",
      "Scale operations with robust systems",
      "Improve customer experience with analytics",
    ],
    process: [
      {
        step: "Requirements Analysis",
        description: "Deep dive into business needs",
      },
      {
        step: "Architecture Design",
        description: "Design scalable application architecture",
      },
      {
        step: "Development & AI Integration",
        description: "Build with integrated AI models",
      },
      {
        step: "Testing & Training",
        description: "Comprehensive testing and user training",
      },
      {
        step: "Deployment & Support",
        description: "Launch with ongoing support",
      },
    ],
    caseStudies: [
      {
        client: "Manufacturing Company",
        challenge:
          "Outdated systems causing inventory mismanagement and production delays.",
        solution:
          "Developed AI-powered ERP with predictive inventory management.",
        results: [
          "30% reduction in inventory costs",
          "25% improvement in production",
          "Real-time operational visibility",
        ],
      },
    ],
  },
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug && serviceData[slug] ? serviceData[slug] : null;

  if (!service) {
    return (
      <ErrorBoundary>
        <section className="min-h-screen bg-[#050810] pt-20 flex items-center justify-center">
          <div className="container text-center px-4">
            <i className="fas fa-cogs text-6xl text-cyan-400 mb-6"></i>
            <h2 className="text-4xl font-bold mb-4 text-white">
              Service Not Found
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              The service you're looking for doesn't exist.
            </p>
            <Link
              to="/services"
              className="px-8 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
            >
              Back to Services
            </Link>
          </div>
        </section>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <section className="min-h-screen bg-[#050810] pt-20 pb-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/services"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Services
            </Link>
          </div>

          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
            <p className="text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
              {service.longDescription}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-cyan-500 text-white rounded-xl font-semibold hover:bg-cyan-400 transition-colors text-lg"
            >
              Start Your {service.title} Project
            </Link>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {service.benefits.map((benefit: string, index: number) => (
              <div
                key={index}
                className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-white"></i>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Features & Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white text-center lg:text-left">
                Key Features
              </h2>
              <div className="space-y-4">
                {service.features.map(
                  (feature: ServiceFeature, index: number) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-[#0f172a] border border-gray-800"
                    >
                      <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className={`${feature.icon} text-white text-sm`}></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {feature.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white text-center lg:text-left">
                Our Process
              </h2>
              <div className="space-y-4">
                {service.process.map((step: ProcessStep, index: number) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-[#0f172a] border border-gray-800"
                  >
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.step}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Success Story
            </h2>
            {service.caseStudies.map((caseStudy: CaseStudy, index: number) => (
              <div
                key={index}
                className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-white text-center">
                  {caseStudy.client}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-400">
                      The Challenge
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-400">
                      Our Solution
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-cyan-400">
                    The Results
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {caseStudy.results.map(
                      (result: string, resultIndex: number) => (
                        <div
                          key={resultIndex}
                          className="flex items-center space-x-3"
                        >
                          <i className="fas fa-check text-green-400 text-sm"></i>
                          <span className="text-gray-300 text-sm">
                            {result}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
              Let's discuss how {service.title} can transform your business
              operations and drive growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center text-blue-200">
                <i className="fas fa-clock mr-2"></i>
                <span className="text-sm">Free consultation</span>
              </div>
              <div className="flex items-center justify-center text-blue-200">
                <i className="fas fa-check-circle mr-2"></i>
                <span className="text-sm">No commitment</span>
              </div>
              <div className="flex items-center justify-center text-blue-200">
                <i className="fas fa-rocket mr-2"></i>
                <span className="text-sm">Quick start</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default ServiceDetail;
