import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInVariants, buttonVariants } from "../utils/animationVariants";

import ErrorBoundary from "../components/ErrorBoundary";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Subscribe: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    plan: "starter",
    name: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: 69,
      description: "Perfect for individuals and small teams",
      features: ["Basic AI Tools", "5 Templates", "Email Support"],
    },
    {
      id: "business",
      name: "Business",
      price: 99,
      description: "For growing teams and businesses",
      features: ["Advanced AI", "20+ Templates", "Priority Support"],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 299,
      description: "For large organizations",
      features: ["Full AI Suite", "Custom Development", "24/7 Support"],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert(
      `Thank you for subscribing to the ${
        plans.find((p) => p.id === formData.plan)?.name
      } plan! We'll contact you shortly.`
    );
    setFormData({ email: "", plan: "starter", name: "", company: "" });
    setIsSubmitting(false);
  };

  const selectedPlan = plans.find((plan) => plan.id === formData.plan);

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
          className="container max-w-4xl"
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-white">
              Start Your Journey
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations
              with our AI-powered solutions. Start with a free trial and see the
              difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Subscription Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Subscribe Now
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[var(--text-secondary)] mb-2 text-sm font-medium"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-3 rounded bg-gray-800 text-white border border-[var(--card-border)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[var(--text-secondary)] mb-2 text-sm font-medium"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full p-3 rounded bg-gray-800 text-white border border-[var(--card-border)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[var(--text-secondary)] mb-2 text-sm font-medium"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 rounded bg-gray-800 text-white border border-[var(--card-border)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Plan Selection */}
                  <div>
                    <label className="block text-[var(--text-secondary)] mb-4 text-sm font-medium">
                      Choose Your Plan
                    </label>
                    <div className="space-y-3">
                      {plans.map((plan) => (
                        <label
                          key={plan.id}
                          className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.plan === plan.id
                              ? "border-[var(--accent-blue)] bg-blue-900 bg-opacity-20"
                              : "border-[var(--card-border)] hover:border-[var(--accent-blue)]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="plan"
                            value={plan.id}
                            checked={formData.plan === plan.id}
                            onChange={(e) =>
                              setFormData({ ...formData, plan: e.target.value })
                            }
                            className="hidden"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold text-white">
                                {plan.name}
                              </span>
                              <span className="text-[var(--accent-blue)] font-bold">
                                ${plan.price}/mo
                              </span>
                            </div>
                            <p className="text-sm text-[var(--text-secondary)] mb-2">
                              {plan.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {plan.features.map((feature, index) => (
                                <span
                                  key={index}
                                  className="text-xs bg-gray-700 text-[var(--text-secondary)] px-2 py-1 rounded"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    className="w-full p-4 rounded bg-[var(--accent-deep-teal)] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-[var(--accent-blue)]"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Processing...
                      </span>
                    ) : (
                      `Start ${selectedPlan?.name} Plan - $${selectedPlan?.price}/month`
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-[var(--text-secondary)]">
                    By subscribing, you agree to our{" "}
                    <Link
                      to="/terms"
                      className="text-[var(--accent-blue)] hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-[var(--accent-blue)] hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Benefits Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Selected Plan Summary */}
              {selectedPlan && (
                <motion.div
                  className="card p-6 bg-gradient-to-br from-[var(--accent-deep-teal)] to-[var(--accent-blue)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Your {selectedPlan.name} Plan Includes:
                  </h3>
                  <ul className="space-y-3">
                    {selectedPlan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-blue-100"
                      >
                        <i className="fas fa-check-circle mr-3"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg">
                    <p className="text-white font-semibold text-center">
                      ${selectedPlan.price}/month
                      <span className="block text-blue-200 text-sm font-normal">
                        billed monthly
                      </span>
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Benefits */}
              <motion.div
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Why Choose Autolinium?
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: "fas fa-rocket",
                      title: "Quick Setup",
                      description:
                        "Get started in minutes with our easy onboarding process",
                    },
                    {
                      icon: "fas fa-shield-alt",
                      title: "Secure & Reliable",
                      description:
                        "Enterprise-grade security with 99.9% uptime guarantee",
                    },
                    {
                      icon: "fas fa-chart-line",
                      title: "Proven Results",
                      description:
                        "Average 90% reduction in manual work for our clients",
                    },
                    {
                      icon: "fas fa-headset",
                      title: "Expert Support",
                      description:
                        "24/7 customer support from our automation specialists",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[var(--accent-blue)] rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${benefit.icon} text-white`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  Trusted By Businesses Worldwide
                </h3>
                <div className="grid grid-cols-3 gap-4 text-[var(--text-secondary)]">
                  <div>
                    <div className="text-2xl font-bold text-[var(--accent-blue)]">
                      500+
                    </div>
                    <div className="text-xs">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--accent-blue)]">
                      99%
                    </div>
                    <div className="text-xs">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--accent-blue)]">
                      24/7
                    </div>
                    <div className="text-xs">Support</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default Subscribe;
