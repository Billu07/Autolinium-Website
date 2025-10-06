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
      description:
        "Perfect for individuals and small teams getting started with automation",
      features: [
        "Basic AI Tools Access",
        "5 Custom Templates",
        "Email Support",
        "Community Access",
      ],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: "business",
      name: "Business",
      price: 99,
      description: "For growing teams and established businesses",
      features: [
        "Advanced AI Features",
        "20+ Premium Templates",
        "Priority Support",
        "Custom Workflows",
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 299,
      description: "For large organizations with complex needs",
      features: [
        "Full AI Suite Access",
        "Custom Development",
        "24/7 Dedicated Support",
        "SLA Guarantee",
      ],
      gradient: "from-green-500 to-teal-400",
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
        className="section section-bg section-bg-secondary min-h-screen pt-20 flex items-center"
      >
        {/* Background Particles */}
        <div className="section-particles">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="section-particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 6 + 8}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
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
              Start Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Automation Journey
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
              variants={cardVariants}
            >
              Join hundreds of businesses that have transformed their operations
              with our AI-powered solutions. Start with the perfect plan for
              your needs.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Subscription Form */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.div
                className="card p-6 sm:p-8"
                variants={cardVariants}
                whileHover={{ y: -2 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                  Get Started Today
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
                        className="w-full p-3 rounded-lg bg-[var(--tertiary-bg)] text-white border border-[var(--card-border)] focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base"
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
                        className="w-full p-3 rounded-lg bg-[var(--tertiary-bg)] text-white border border-[var(--card-border)] focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base"
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
                      className="w-full p-3 rounded-lg bg-[var(--tertiary-bg)] text-white border border-[var(--card-border)] focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base"
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
                    <div className="space-y-4">
                      {plans.map((plan) => (
                        <label
                          key={plan.id}
                          className={`block p-4 sm:p-6 border-2 rounded-xl cursor-pointer transition-all group ${
                            formData.plan === plan.id
                              ? `border-blue-400 bg-blue-500/10 shadow-lg shadow-blue-500/25`
                              : "border-[var(--card-border)] hover:border-blue-400/50 hover:bg-[var(--tertiary-bg)]"
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
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="font-semibold text-white text-lg">
                                  {plan.name}
                                </span>
                                {plan.popular && (
                                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30">
                                    Most Popular
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-[var(--text-secondary)] mb-3">
                                {plan.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {plan.features.map((feature, index) => (
                                  <span
                                    key={index}
                                    className="text-xs bg-[var(--secondary-bg)] text-[var(--text-muted)] px-2 py-1 rounded-lg border border-[var(--card-border)]"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">
                                ${plan.price}
                                <span className="text-sm text-[var(--text-muted)] font-normal">
                                  /mo
                                </span>
                              </div>
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
                    className="w-full p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-spinner fa-spin mr-2 sm:mr-3"></i>
                        Processing Subscription...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-rocket mr-2 sm:mr-3"></i>
                        Start {selectedPlan?.name} Plan - ${selectedPlan?.price}
                        /month
                      </span>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-[var(--text-secondary)]">
                    By subscribing, you agree to our{" "}
                    <Link to="/terms" className="text-blue-400 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-blue-400 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </motion.div>
            </motion.div>

            {/* Benefits Sidebar */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="space-y-6 sm:space-y-8"
            >
              {/* Selected Plan Summary */}
              {selectedPlan && (
                <motion.div
                  className="card p-6 sm:p-8 bg-gradient-to-br from-blue-500 to-cyan-400 text-white"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                    Your {selectedPlan.name} Plan Includes:
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 mb-6">
                    {selectedPlan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-blue-100 text-sm sm:text-base"
                      >
                        <i className="fas fa-check-circle mr-3 text-lg"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                    <p className="text-white font-bold text-center text-lg sm:text-xl">
                      ${selectedPlan.price}/month
                      <span className="block text-blue-100 text-sm font-normal mt-1">
                        No long-term commitment • Cancel anytime
                      </span>
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Benefits */}
              <motion.div className="card p-6 sm:p-8" variants={cardVariants}>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Why Choose Autolinium?
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      icon: "fas fa-rocket",
                      title: "Quick Setup",
                      description:
                        "Get started in minutes with our streamlined onboarding process",
                    },
                    {
                      icon: "fas fa-shield-alt",
                      title: "Enterprise Security",
                      description:
                        "Bank-level security with 99.9% uptime guarantee",
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
                        "24/7 customer support from automation specialists",
                    },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <i
                          className={`${benefit.icon} text-white text-sm sm:text-base`}
                        ></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                          {benefit.title}
                        </h4>
                        <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
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
                variants={cardVariants}
              >
                <h3 className="text-lg font-semibold text-white mb-4 sm:mb-6">
                  Trusted By Businesses Worldwide
                </h3>
                <div className="grid grid-cols-3 gap-4 text-[var(--text-secondary)]">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                      99%
                    </div>
                    <div className="text-xs sm:text-sm">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm">Support</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Subscribe;
