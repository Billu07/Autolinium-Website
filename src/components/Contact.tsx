import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
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
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Get in Touch
        </h2>
        <p className="text-lg text-center mb-12 text-[var(--text-secondary)] max-w-3xl mx-auto">
          Have a question or want to start a project? Fill out the form below,
          and we'll get back to you soon!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-[var(--text-secondary)] mb-2"
              >
                Name *
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-3 rounded bg-gray-800 text-white border-2 border-[var(--card-border)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
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
                className="block text-[var(--text-secondary)] mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded bg-gray-800 text-white border-2 border-[var(--card-border)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[var(--text-secondary)] mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                className="w-full p-3 rounded bg-gray-800 text-white border-2 border-[var(--card-border)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors resize-none"
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
            </div>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="w-full p-4 rounded bg-[var(--accent-deep-teal)] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--accent-blue)]">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-[var(--accent-blue)]"></i>
                  <span className="text-[var(--text-secondary)]">
                    hello@autolinium.com
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <i className="fas fa-clock text-[var(--accent-blue)]"></i>
                  <span className="text-[var(--text-secondary)]">
                    Response time: 24 hours
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <i className="fas fa-globe text-[var(--accent-blue)]"></i>
                  <span className="text-[var(--text-secondary)]">
                    Worldwide service
                  </span>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--accent-blue)]">
                Why Choose Us?
              </h3>

              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-400"></i>
                  <span>30-day money-back guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-400"></i>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-400"></i>
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-green-400"></i>
                  <span>Quick project turnaround</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
