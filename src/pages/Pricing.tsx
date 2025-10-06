import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  staggerContainer,
  cardVariants,
  buttonVariants,
} from "../utils/animationVariants";
import ErrorBoundary from "../components/ErrorBoundary";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ROICalculator from "../components/ROICalculator";

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly"
  );
  const { ref, isVisible } = useScrollAnimation();

  const plans = [
    {
      name: "Starter",
      description:
        "Perfect for freelancers and startups automating workflows on a budget.",
      monthlyPrice: 69,
      annualPrice: 690,
      features: [
        "Basic AI Tools & Templates",
        "Limited API Access (1000 calls/mo)",
        "5 Prebuilt Workflow Templates",
        "Email Support (48h response)",
        "Basic Analytics Dashboard",
        "Single User License",
      ],
      notIncluded: [
        "Custom Development",
        "Priority Support",
        "Advanced AI Models",
        "White-label Solutions",
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-700",
      icon: "fas fa-rocket",
    },
    {
      name: "Business",
      description:
        "For growing teams needing advanced AI automation and custom solutions.",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Advanced AI Tools & Models",
        "Unlimited API Access",
        "20+ Prebuilt Templates",
        "Priority Support (24h response)",
        "Advanced Analytics & Reporting",
        "Up to 5 Team Members",
        "Custom Integration Support",
        "Basic Custom Development",
      ],
      notIncluded: [
        "Enterprise Security",
        "Dedicated Account Manager",
        "Full Custom Development",
      ],
      popular: true,
      gradient: "from-blue-500 to-cyan-400",
      icon: "fas fa-chart-line",
    },
    {
      name: "Enterprise",
      description:
        "For large organizations requiring custom solutions and dedicated support.",
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        "Full AI Suite Access",
        "Unlimited Everything",
        "Custom Template Development",
        "24/7 Priority Support",
        "Advanced Security & Compliance",
        "Unlimited Team Members",
        "Dedicated Account Manager",
        "Full Custom Development",
        "White-label Solutions",
        "SLA Guarantee",
      ],
      notIncluded: [],
      popular: false,
      gradient: "from-purple-500 to-pink-500",
      icon: "fas fa-crown",
    },
  ];

  const getPrice = (plan: (typeof plans)[0]) => {
    return billingPeriod === "annual" ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: (typeof plans)[0]) => {
    const monthlyTotal = plan.monthlyPrice * 12;
    return monthlyTotal - plan.annualPrice;
  };

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
              Flexible{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
              variants={cardVariants}
            >
              Choose the plan that fits your business needs. All plans include
              our core features with scalable options.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              className="inline-flex items-center bg-[var(--tertiary-bg)] rounded-xl p-1 border border-[var(--card-border)] mt-6 sm:mt-8"
              variants={cardVariants}
            >
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                  billingPeriod === "monthly"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25"
                    : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                  billingPeriod === "annual"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25"
                    : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                Annual{" "}
                <span className="text-green-400 text-xs sm:text-sm ml-1">
                  (Save 16%)
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                custom={index}
                className={`relative ${
                  plan.popular ? "lg:scale-105 lg:z-10" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-1 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <motion.div
                  className={`card h-full flex flex-col p-6 sm:p-8 group ${
                    plan.popular
                      ? "border-2 border-blue-400 shadow-2xl shadow-blue-500/25"
                      : "hover:border-blue-400/50"
                  }`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Plan Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <i
                        className={`${plan.icon} text-white text-xl sm:text-2xl`}
                      ></i>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl sm:text-4xl font-bold text-white">
                        ${getPrice(plan)}
                      </span>
                      <span className="text-[var(--text-muted)] ml-2 text-sm sm:text-base">
                        /{billingPeriod === "annual" ? "year" : "month"}
                      </span>
                    </div>
                    {billingPeriod === "annual" && (
                      <p className="text-green-400 text-sm">
                        Save ${getSavings(plan)} annually
                      </p>
                    )}
                    <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-3 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-6 sm:mb-8">
                    <h4 className="font-semibold text-white mb-4 text-lg">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <i className="fas fa-check text-green-400 mt-1 mr-3 flex-shrink-0 text-sm"></i>
                          <span className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold text-white mb-4 mt-6 text-lg">
                          Not Included:
                        </h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <i className="fas fa-times text-red-400 mt-1 mr-3 flex-shrink-0 text-sm"></i>
                              <span className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  {/* CTA Button - Fixed to link to Subscribe page */}
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    className="mt-auto"
                  >
                    <Link
                      to="/subscribe"
                      className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-blue-500/25"
                          : "border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                      }`}
                    >
                      {plan.name === "Enterprise" ? (
                        <>
                          <i className="fas fa-headset mr-2 sm:mr-3"></i>
                          Contact Sales
                        </>
                      ) : (
                        <>
                          <i className="fas fa-rocket mr-2 sm:mr-3"></i>
                          Get Started
                        </>
                      )}
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* ROI Calculator Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white"
              variants={cardVariants}
            >
              Calculate Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Potential Savings
              </span>
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={cardVariants}
            >
              See how much time and money you can save with our automation
              solutions. Most businesses see ROI within the first 3 months.
            </motion.p>
            <motion.div variants={cardVariants}>
              <ROICalculator />
            </motion.div>
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
                  question: "Can I change plans later?",
                  answer:
                    "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
                  icon: "fas fa-sync",
                },
                {
                  question: "Is there a free trial?",
                  answer:
                    "We offer a 14-day free trial on all plans. No credit card required to start.",
                  icon: "fas fa-gift",
                },
                {
                  question: "What support do you offer?",
                  answer:
                    "All plans include email support. Business and Enterprise plans include priority support with faster response times.",
                  icon: "fas fa-headset",
                },
                {
                  question: "Do you offer custom solutions?",
                  answer:
                    "Yes! Our Enterprise plan includes custom development, and we offer standalone custom projects for specific needs.",
                  icon: "fas fa-cogs",
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
