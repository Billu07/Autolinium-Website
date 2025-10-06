import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  cardVariants,
  buttonVariants,
} from "../utils/animationVariants";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    projectType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Message sent! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      projectType: "general",
    });
    setIsSubmitting(false);
  };

  const projectTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "crm", label: "Custom CRM Development" },
    { value: "automation", label: "Workflow Automation" },
    { value: "ai", label: "AI Agents & Chatbots" },
    { value: "mobile", label: "Mobile App Development" },
    { value: "other", label: "Other Project" },
  ];

  return (
    <section
      ref={ref}
      className="section section-bg section-bg-primary min-h-screen pt-20 flex items-center"
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
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white"
            variants={cardVariants}
          >
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            Have a question or want to start a project? Fill out the form below,
            and we'll get back to you within 24 hours!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              className="card p-6 sm:p-8"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-[var(--text-secondary)] mb-2 text-sm font-medium"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    className="w-full p-3 rounded-lg bg-[var(--tertiary-bg)] text-white border border-[var(--card-border)] focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                  >
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[var(--text-secondary)] mb-2 text-sm font-medium"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-3 rounded-lg bg-[var(--tertiary-bg)] text-white border border-[var(--card-border)] focus:border-blue-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                  ></textarea>
                </div>

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
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-paper-plane mr-2 sm:mr-3"></i>
                      Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info & Benefits */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Information */}
            <motion.div
              className="card p-6 sm:p-8"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-4 p-3 sm:p-4 bg-[var(--tertiary-bg)] rounded-lg border border-[var(--card-border)]">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-blue-400 text-sm"></i>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Email
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm">
                      hello@autolinium.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 sm:p-4 bg-[var(--tertiary-bg)] rounded-lg border border-[var(--card-border)]">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-green-400 text-sm"></i>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Response Time
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 sm:p-4 bg-[var(--tertiary-bg)] rounded-lg border border-[var(--card-border)]">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-globe text-purple-400 text-sm"></i>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Service Area
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm">
                      Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              className="card p-6 sm:p-8"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
                Why Choose Autolinium?
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: "fas fa-shield-check",
                    title: "30-Day Guarantee",
                    description: "Money-back guarantee on all projects",
                    color: "text-green-400",
                  },
                  {
                    icon: "fas fa-headset",
                    title: "24/7 Support",
                    description: "Round-the-clock customer support",
                    color: "text-blue-400",
                  },
                  {
                    icon: "fas fa-comments",
                    title: "Free Consultation",
                    description: "No-cost initial project assessment",
                    color: "text-cyan-400",
                  },
                  {
                    icon: "fas fa-bolt",
                    title: "Quick Turnaround",
                    description: "Rapid project delivery and deployment",
                    color: "text-yellow-400",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200">
                      <i
                        className={`${benefit.icon} ${benefit.color} text-sm`}
                      ></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm sm:text-base mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-[var(--text-secondary)] text-xs sm:text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="card p-6 sm:p-8 text-center"
              variants={cardVariants}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">
                Quick Links
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/pricing"
                  className="px-4 py-2 bg-[var(--tertiary-bg)] text-[var(--text-secondary)] rounded-lg hover:text-white hover:bg-blue-500/20 transition-all duration-300 text-sm"
                >
                  View Pricing
                </a>
                <a
                  href="/services"
                  className="px-4 py-2 bg-[var(--tertiary-bg)] text-[var(--text-secondary)] rounded-lg hover:text-white hover:bg-blue-500/20 transition-all duration-300 text-sm"
                >
                  Our Services
                </a>
                <a
                  href="/tools"
                  className="px-4 py-2 bg-[var(--tertiary-bg)] text-[var(--text-secondary)] rounded-lg hover:text-white hover:bg-blue-500/20 transition-all duration-300 text-sm"
                >
                  Tech Stack
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
