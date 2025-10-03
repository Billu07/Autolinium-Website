import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./../App.css";

// Animation variants
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
  pulse: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Something went wrong</h2>
          <p className="text-lg text-text-secondary">Please try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    console.log("Contact component mounted successfully");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Mocked for demo)");
    // Add backend integration here (e.g., Vercel serverless function)
  };

  return (
    <ErrorBoundary>
      <section className="section bg-[var(--primary-bg)] min-h-screen pt-20">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white font-inter">
            Get in Touch
          </h2>
          <p className="text-lg text-center mb-12 text-text-secondary max-w-3xl mx-auto">
            Have a question or want to start a project? Fill out the form below,
            and we'll get back to you soon!
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-text-secondary mb-2 font-inter"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-3 rounded bg-primary-bg text-white border-2 border-accent-pink focus:border-accent-pink focus:outline-none"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-text-secondary mb-2 font-inter"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded bg-primary-bg text-white border-2 border-accent-pink focus:border-accent-pink focus:outline-none"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-text-secondary mb-2 font-inter"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 rounded bg-primary-bg text-white border-2 border-accent-pink focus:border-accent-pink focus:outline-none"
                rows={5}
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
              className="w-full p-3 rounded bg-accent-deep-teal text-white font-inter"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default Contact;
