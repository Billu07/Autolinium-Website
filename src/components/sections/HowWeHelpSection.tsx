import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { staggerContainer, cardVariants } from "../../utils/animationVariants";

const HowWeHelpSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const transformations = [
    {
      problem: {
        title: "Manual Data Entry & Repetitive Tasks",
        description: "Teams spending hours on routine administrative work",
        painPoints: [
          "Time-consuming processes",
          "Human error risks",
          "Low employee satisfaction",
          "Scalability limitations",
        ],
        icon: "fas fa-keyboard",
        color: "from-gray-500 to-gray-600",
      },
      solution: {
        title: "AI-Powered Workflow Automation",
        description: "Intelligent systems that handle routine tasks 24/7",
        benefits: [
          "90% time reduction",
          "99.9% accuracy",
          "Instant scalability",
          "Real-time monitoring",
        ],
        icon: "fas fa-robot",
        color: "from-blue-500 to-cyan-400",
        metrics: "Saves 20+ hours/week per team",
      },
    },
    {
      problem: {
        title: "Customer Service Overload",
        description: "Overwhelmed support teams and slow response times",
        painPoints: [
          "Long wait times",
          "Inconsistent responses",
          "High support costs",
          "Missed opportunities",
        ],
        icon: "fas fa-headset",
        color: "from-gray-500 to-gray-600",
      },
      solution: {
        title: "24/7 AI Conversational Agents",
        description:
          "Intelligent chatbots that provide instant, accurate support",
        benefits: [
          "Instant responses",
          "24/7 availability",
          "Multilingual support",
          "Seamless human handoff",
        ],
        icon: "fas fa-comments",
        color: "from-purple-500 to-pink-500",
        metrics: "Resolves 80% queries instantly",
      },
    },
    {
      problem: {
        title: "Disconnected Business Data",
        description: "Information trapped in silos across multiple platforms",
        painPoints: [
          "Incomplete customer view",
          "Manual data reconciliation",
          "Delayed insights",
          "Decision-making bottlenecks",
        ],
        icon: "fas fa-database",
        color: "from-gray-500 to-gray-600",
      },
      solution: {
        title: "Unified Custom CRM Platform",
        description: "Centralized data hub with automated sync and insights",
        benefits: [
          "360° customer view",
          "Real-time analytics",
          "Automated reporting",
          "Cross-platform integration",
        ],
        icon: "fas fa-chart-network",
        color: "from-green-500 to-teal-400",
        metrics: "Unifies 10+ data sources",
      },
    },
    {
      problem: {
        title: "Inefficient Sales Processes",
        description: "Manual lead management and inconsistent follow-ups",
        painPoints: [
          "Lost leads",
          "Inconsistent messaging",
          "Slow response times",
          "Poor conversion rates",
        ],
        icon: "fas fa-bullseye",
        color: "from-gray-500 to-gray-600",
      },
      solution: {
        title: "Automated Sales Acceleration",
        description: "AI-driven lead scoring and automated engagement",
        benefits: [
          "Instant lead response",
          "Personalized follow-ups",
          "Pipeline automation",
          "Performance analytics",
        ],
        icon: "fas fa-bolt",
        color: "from-orange-500 to-red-400",
        metrics: "Increases conversions by 3x",
      },
    },
    {
      problem: {
        title: "Manual Reporting & Analytics",
        description:
          "Time-consuming data compilation and manual report generation",
        painPoints: [
          "Delayed insights",
          "Inconsistent reporting",
          "Human errors",
          "Reactive decision-making",
        ],
        icon: "fas fa-chart-bar",
        color: "from-gray-500 to-gray-600",
      },
      solution: {
        title: "Automated Business Intelligence",
        description: "Real-time dashboards and automated insights delivery",
        benefits: [
          "Live data visualization",
          "Automated reporting",
          "Predictive analytics",
          "Actionable insights",
        ],
        icon: "fas fa-chart-line",
        color: "from-indigo-500 to-purple-400",
        metrics: "Real-time decision making",
      },
    },
    {
      problem: {
        title: "Limited Mobile Capabilities",
        description: "Business operations tied to desktop environments",
        painPoints: [
          "Reduced productivity",
          "Delayed approvals",
          "Limited remote work",
          "Poor customer experience",
        ],
        icon: "fas fa-mobile-alt",
        color: "from-gray-500 to-gray-600",
      },
      solution: {
        title: "Mobile-First Automation Solutions",
        description: "Cross-platform apps that enable business from anywhere",
        benefits: [
          "Anywhere access",
          "Push notifications",
          "Offline capabilities",
          "Seamless sync",
        ],
        icon: "fas fa-mobile",
        color: "from-cyan-500 to-blue-400",
        metrics: "Enables true remote work",
      },
    },
  ];

  const currentTransformation = transformations[activeIndex];

  return (
    <section
      ref={ref}
      className="section section-bg section-bg-secondary py-16 sm:py-20 lg:py-24 flex items-center relative overflow-hidden"
    >
      {/* Background Elements - Reduced on mobile */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4"
            variants={cardVariants}
          >
            From{" "}
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              Challenge
            </span>{" "}
            to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solution
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed px-4"
            variants={cardVariants}
          >
            See how we transform business obstacles into automated opportunities
            with measurable results.
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Navigation Tabs - Scrollable on mobile with 6 options */}
          <motion.div
            className="flex overflow-x-auto pb-4 mb-8 sm:mb-12 gap-3 sm:gap-4 scrollbar-hide px-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {transformations.map((item, index) => (
              <motion.button
                key={index}
                variants={cardVariants}
                onClick={() => setActiveIndex(index)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25"
                    : "bg-[var(--tertiary-bg)] text-[var(--text-secondary)] hover:text-white hover:bg-[var(--secondary-bg)] border border-[var(--card-border)]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i
                  className={`${item.problem.icon} mr-2 text-xs sm:text-sm`}
                ></i>
                {item.problem.title.split(" ")[0]}
              </motion.button>
            ))}
          </motion.div>

          {/* Transformation Card - Stack on mobile */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 px-4 sm:px-0"
            >
              {/* Problem Side */}
              <motion.div
                className="card group relative overflow-hidden p-6 sm:p-8"
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center shadow-lg">
                    <i className="fas fa-exclamation-triangle text-white text-sm sm:text-xl"></i>
                  </div>
                </div>

                <div className="pt-14 sm:pt-16">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                    <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                      The Challenge
                    </span>
                  </h3>

                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                    {currentTransformation.problem.title}
                  </h4>

                  <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 sm:mb-6">
                    {currentTransformation.problem.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    {currentTransformation.problem.painPoints.map(
                      (point, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-[var(--text-muted)] text-xs sm:text-sm"
                        >
                          <i className="fas fa-times text-red-400 mr-2 sm:mr-3 text-xs"></i>
                          <span>{point}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Solution Side */}
              <motion.div
                className="card group relative overflow-hidden border-2 border-blue-400/20 hover:border-blue-400/40 p-6 sm:p-8"
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${currentTransformation.solution.color} flex items-center justify-center shadow-lg`}
                  >
                    <i
                      className={`${currentTransformation.solution.icon} text-white text-sm sm:text-xl`}
                    ></i>
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                  <div className="bg-green-500/20 border border-green-400/30 text-green-300 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                    {currentTransformation.solution.metrics}
                  </div>
                </div>

                <div className="pt-14 sm:pt-16">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                    <span
                      className={`bg-gradient-to-r ${currentTransformation.solution.color
                        .replace("from-", "from-")
                        .replace("to-", "to-")} bg-clip-text text-transparent`}
                    >
                      Our Solution
                    </span>
                  </h3>

                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                    {currentTransformation.solution.title}
                  </h4>

                  <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 sm:mb-6">
                    {currentTransformation.solution.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    {currentTransformation.solution.benefits.map(
                      (benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-[var(--text-secondary)] text-xs sm:text-sm"
                        >
                          <i className="fas fa-check-circle text-green-400 mr-2 sm:mr-3 text-xs"></i>
                          <span className="font-medium">{benefit}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Shine effect on hover - hidden on mobile */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 hidden sm:block" />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* CTA Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center px-4 sm:px-0"
          >
            <div className="bg-gradient-to-r from-[var(--secondary-bg)] to-[var(--tertiary-bg)] rounded-xl sm:rounded-2xl border border-[var(--card-border)] p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
                Let's identify your biggest operational challenges and build
                custom automation solutions that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <i className="fas fa-calendar-check mr-2 sm:mr-3"></i>
                  Book Free Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold text-sm sm:text-base hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Explore All Services
                  <i className="fas fa-arrow-right ml-2 sm:ml-3"></i>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
