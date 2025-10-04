import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  fadeInVariants,
  cardVariants,
  buttonVariants,
  staggerContainer,
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
      color: "from-gray-600 to-gray-700",
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
      color: "from-[var(--accent-deep-teal)] to-[var(--accent-blue)]",
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
      color: "from-purple-600 to-pink-600",
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
        className="section bg-[var(--primary-bg)] min-h-screen pt-20"
      >
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="container"
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-white">
              Flexible Pricing Plans
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
              Choose the plan that fits your business needs. All plans include
              our core features with scalable options.
            </p>

            {/* Billing Toggle */}
            <motion.div
              className="inline-flex items-center bg-gray-800 rounded-lg p-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  billingPeriod === "monthly"
                    ? "bg-[var(--accent-blue)] text-white"
                    : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  billingPeriod === "annual"
                    ? "bg-[var(--accent-blue)] text-white"
                    : "text-[var(--text-secondary)] hover:text-white"
                }`}
              >
                Annual{" "}
                <span className="text-green-400 text-sm ml-1">(Save 16%)</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                className={`relative ${plan.popular ? "scale-105 z-10" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[var(--accent-deep-teal)] to-[var(--accent-blue)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <motion.div
                  className={`card h-full flex flex-col ${
                    plan.popular ? "border-2 border-[var(--accent-blue)]" : ""
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Plan Header */}
                  <div
                    className={`bg-gradient-to-r ${plan.color} p-6 rounded-t-lg -mx-6 -mt-6 mb-6`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl font-bold text-white">
                        ${getPrice(plan)}
                      </span>
                      <span className="text-blue-100 ml-2">
                        /{billingPeriod === "annual" ? "year" : "month"}
                      </span>
                    </div>
                    {billingPeriod === "annual" && (
                      <p className="text-green-300 text-sm">
                        Save ${getSavings(plan)} annually
                      </p>
                    )}
                    <p className="text-blue-100 text-sm mt-2">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-6">
                    <h4 className="font-semibold text-white mb-4">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <i className="fas fa-check text-green-400 mt-1 mr-3 flex-shrink-0"></i>
                          <span className="text-[var(--text-secondary)] text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold text-white mb-4 mt-6">
                          Not Included:
                        </h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <i className="fas fa-times text-red-400 mt-1 mr-3 flex-shrink-0"></i>
                              <span className="text-[var(--text-secondary)] text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    className="mt-auto"
                  >
                    <Link
                      to="/contact"
                      className={`button w-full text-center ${
                        plan.popular
                          ? "bg-[var(--accent-blue)] hover:bg-[var(--accent-deep-teal)]"
                          : "bg-[var(--accent-deep-teal)] hover:bg-[var(--accent-blue)]"
                      }`}
                    >
                      {plan.name === "Enterprise"
                        ? "Contact Sales"
                        : "Get Started"}
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* ROI Calculator Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Calculate Your Potential Savings
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              See how much time and money you can save with our automation
              solutions. Most businesses see ROI within the first 3 months.
            </p>
            <ROICalculator />
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Can I change plans later?",
                  answer:
                    "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
                },
                {
                  question: "Is there a free trial?",
                  answer:
                    "We offer a 14-day free trial on all plans. No credit card required to start.",
                },
                {
                  question: "What support do you offer?",
                  answer:
                    "All plans include email support. Business and Enterprise plans include priority support with faster response times.",
                },
                {
                  question: "Do you offer custom solutions?",
                  answer:
                    "Yes! Our Enterprise plan includes custom development, and we offer standalone custom projects for specific needs.",
                },
              ].map((faq, index) => (
                <div key={index} className="text-left">
                  <h3 className="font-semibold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default Pricing;
