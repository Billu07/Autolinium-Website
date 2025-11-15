import React from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  cardVariants,
  buttonVariants,
} from "../utils/animationVariants";
import ErrorBoundary from "../components/ErrorBoundary";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ROICalculator from "../components/ROICalculator";

const Pricing: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const serviceTiers = [
    {
      name: "Essential Automation",
      description:
        "Streamline key processes with targeted automation solutions that deliver immediate efficiency gains.",
      idealFor:
        "Small to medium businesses looking to optimize specific workflows",
      features: [
        "Process Analysis & Optimization",
        "Targeted Automation Implementation",
        "Basic Integration Setup",
        "Team Training & Documentation",
        "Standard Support Package",
        "Performance Monitoring",
      ],
      outcomes: [
        "Reduced manual workload",
        "Improved process accuracy",
        "Faster task completion",
        "Scalable foundation for growth",
        "Quick implementation timeline",
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-700",
      icon: "fas fa-cog",
    },
    {
      name: "Business Transformation",
      description:
        "Comprehensive automation solutions that transform your operations and drive significant business value.",
      idealFor:
        "Growing companies ready to scale efficiency across departments",
      features: [
        "End-to-End Process Transformation",
        "Custom AI & Automation Solutions",
        "Multi-System Integration",
        "Advanced Analytics & Reporting",
        "Dedicated Project Management",
        "Change Management Support",
        "Extended Support & Maintenance",
        "Continuous Optimization",
      ],
      outcomes: [
        "Cross-department efficiency",
        "Data-driven decision making",
        "Enhanced customer experience",
        "Competitive advantage",
        "Measurable ROI",
      ],
      popular: true,
      gradient: "from-blue-500 to-cyan-400",
      icon: "fas fa-chart-line",
    },
    {
      name: "Enterprise Innovation",
      description:
        "Strategic partnership delivering cutting-edge automation solutions tailored to your enterprise needs.",
      idealFor:
        "Large organizations seeking digital transformation and innovation leadership",
      features: [
        "Enterprise-Wide Digital Strategy",
        "Custom AI/ML Development",
        "Legacy System Modernization",
        "Real-Time Business Intelligence",
        "Dedicated Innovation Team",
        "24/7 Enterprise Support",
        "SLA Guarantees",
        "Quarterly Strategy Reviews",
        "White-label Solutions",
        "Ongoing Innovation Pipeline",
      ],
      outcomes: [
        "Market leadership position",
        "Future-proof technology infrastructure",
        "Maximum operational efficiency",
        "Innovation culture adoption",
        "Long-term strategic partnership",
      ],
      popular: false,
      gradient: "from-purple-500 to-pink-500",
      icon: "fas fa-crown",
    },
  ];

  const engagementModels = [
    {
      name: "Project Partnership",
      description:
        "Fixed-scope engagements with clear deliverables and timelines, perfect for well-defined objectives.",
      bestFor: "Specific automation goals with defined requirements",
      icon: "fas fa-bullseye",
    },
    {
      name: "Ongoing Collaboration",
      description:
        "Continuous partnership with dedicated resources for evolving needs and long-term optimization.",
      bestFor: "Businesses wanting continuous improvement and innovation",
      icon: "fas fa-handshake",
    },
    {
      name: "Hybrid Approach",
      description:
        "Combination of project-based work and ongoing support for maximum flexibility and results.",
      bestFor: "Companies balancing immediate needs with long-term strategy",
      icon: "fas fa-balance-scale",
    },
  ];

  const scheduleUrl =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3v0Cxd1W2gXjgVn_2Ez7VsJQ6QP-v_uzjMcDeYWKzReNKE0w2zL5_9b1UT_0snquWu9lVLPBTd";

  return (
    <ErrorBoundary>
      <section
        ref={ref}
        className="section section-bg section-bg-primary min-h-screen pt-20 flex items-center"
      >
        {/* Background Particles */}
        <div className="section-particles">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="section-particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${Math.random() * 8 + 12}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white"
              variants={cardVariants}
            >
              Tailored{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              for Your Business
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed"
              variants={cardVariants}
            >
              Every business is unique. We create custom automation solutions
              designed specifically for your challenges, goals, and budget.
              Let's build exactly what you need.
            </motion.p>
          </motion.div>

          {/* Service Tiers */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16 sm:mb-20"
          >
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                variants={cardVariants}
                custom={index}
                className={`relative ${
                  tier.popular ? "lg:scale-105 lg:z-10" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-1 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <motion.div
                  className={`card h-full flex flex-col p-6 sm:p-8 group ${
                    tier.popular
                      ? "border-2 border-blue-400 shadow-2xl shadow-blue-500/25"
                      : "hover:border-blue-400/50"
                  }`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Tier Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <i
                        className={`${tier.icon} text-white text-xl sm:text-2xl`}
                      ></i>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {tier.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                      {tier.description}
                    </p>
                    <div className="mt-4 p-3 bg-[var(--tertiary-bg)] rounded-lg">
                      <p className="text-blue-400 text-sm font-semibold">
                        <i className="fas fa-users mr-2"></i>
                        Ideal for: {tier.idealFor}
                      </p>
                    </div>
                  </div>

                  {/* Features & Outcomes */}
                  <div className="flex-1 space-y-6 sm:space-y-8">
                    <div>
                      <h4 className="font-semibold text-white mb-4 text-lg flex items-center">
                        <i className="fas fa-check-circle text-green-400 mr-2"></i>
                        What We Deliver:
                      </h4>
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <i className="fas fa-check text-green-400 mt-1 mr-3 flex-shrink-0 text-sm"></i>
                            <span className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-4 text-lg flex items-center">
                        <i className="fas fa-chart-bar text-blue-400 mr-2"></i>
                        Business Outcomes:
                      </h4>
                      <ul className="space-y-3">
                        {tier.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start">
                            <i className="fas fa-arrow-right text-cyan-400 mt-1 mr-3 flex-shrink-0 text-sm"></i>
                            <span className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                              {outcome}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    className="mt-8"
                  >
                    <a
                      href={scheduleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                        tier.popular
                          ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-blue-500/25"
                          : "border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                      }`}
                    >
                      <i className="fas fa-comments mr-2 sm:mr-3"></i>
                      Discuss Your Needs
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Engagement Models */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center mb-16 sm:mb-20"
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-white"
              variants={cardVariants}
            >
              Flexible{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Engagement Options
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {engagementModels.map((model, index) => (
                <motion.div
                  key={model.name}
                  variants={cardVariants}
                  custom={index}
                  className="card p-6 sm:p-8 text-center hover:border-blue-400/50 transition-colors duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <i className={`${model.icon} text-blue-400 text-xl`}></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {model.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {model.description}
                  </p>
                  <div className="bg-[var(--tertiary-bg)] rounded-lg p-3">
                    <p className="text-cyan-400 text-sm font-semibold">
                      <i className="fas fa-lightbulb mr-2"></i>
                      Best for: {model.bestFor}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Custom Solution CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="card p-8 sm:p-12 text-center bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border-blue-400/30 mb-16 sm:mb-20"
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white"
              variants={cardVariants}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={cardVariants}
            >
              Let's discuss your specific challenges and create a tailored
              solution that delivers real business value. No obligation, just a
              conversation about what's possible.
            </motion.p>
            <motion.div
              variants={cardVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href={scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-lg"
              >
                <i className="fas fa-calendar-check mr-3"></i>
                Schedule Free Consultation
              </a>
              <div className="text-[var(--text-secondary)]">
                <i className="fas fa-clock mr-2"></i>
                No commitment required
              </div>
            </motion.div>
          </motion.div>

          {/* Value Demonstration */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center mb-16 sm:mb-20"
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white"
              variants={cardVariants}
            >
              Discover Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Automation Potential
              </span>
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={cardVariants}
            >
              See how automation can impact your efficiency and bottom line.
              Understand the potential before we even discuss numbers.
            </motion.p>
            <motion.div variants={cardVariants}>
              <ROICalculator />
            </motion.div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="card p-6 sm:p-8 mb-16 sm:mb-20"
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white"
              variants={cardVariants}
            >
              Our Collaborative Process
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  step: "Discovery",
                  description:
                    "We deeply understand your business challenges and goals",
                  icon: "fas fa-search",
                },
                {
                  step: "Strategy",
                  description:
                    "We design a customized solution tailored to your needs",
                  icon: "fas fa-chess",
                },
                {
                  step: "Proposal",
                  description:
                    "We present a detailed plan with clear deliverables and investment",
                  icon: "fas fa-file-alt",
                },
                {
                  step: "Partnership",
                  description:
                    "We implement and optimize together for maximum results",
                  icon: "fas fa-handshake",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <i className={`${process.icon} text-blue-400 text-xl`}></i>
                  </div>
                  <div className="bg-blue-500/10 rounded-full w-8 h-8 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-3 text-lg">
                    {process.step}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="card p-6 sm:p-8"
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-white"
              variants={cardVariants}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  question:
                    "How do you determine the right solution for my business?",
                  answer:
                    "We start with a comprehensive discovery process to understand your unique challenges, goals, and constraints before recommending any solution.",
                  icon: "fas fa-search",
                },
                {
                  question: "What's included in the free consultation?",
                  answer:
                    "We'll discuss your business needs, explore potential solutions, and outline how we can help—all without any obligation or commitment.",
                  icon: "fas fa-comments",
                },
                {
                  question: "How long does a typical engagement last?",
                  answer:
                    "It varies based on complexity. Some projects take weeks, others months. We'll provide a timeline after understanding your specific needs.",
                  icon: "fas fa-clock",
                },
                {
                  question: "Can we start with a small project and scale?",
                  answer:
                    "Absolutely! We often begin with pilot projects to demonstrate value, then scale based on results and your comfort level.",
                  icon: "fas fa-expand",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  className="bg-[var(--tertiary-bg)] rounded-xl p-4 sm:p-6 border border-[var(--card-border)] hover:border-blue-400/50 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <i className={`${faq.icon} text-blue-400 text-sm`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2 text-lg">
                        {faq.question}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Pricing;
