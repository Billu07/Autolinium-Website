import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
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

const About: React.FC = () => {
  // Debug log to confirm component mounts
  useEffect(() => {
    console.log("About component mounted successfully");
  }, []);

  return (
    <ErrorBoundary>
      <section className="section bg-[var(--primary-bg)] min-h-screen pt-20">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="container"
        >
          {/* About Overview */}
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            About Autolinium
          </h2>
          <p className="text-lg text-center mb-12 text-text-secondary max-w-3xl mx-auto">
            Autolinium is an AI-based software agency. We build AI Agents,
            Custom CRMs, Automations, and Mobile Apps that run your business
            24/7. Using Airtable, Make, n8n, Zapier, Softr, and custom software
            (React, Node, Python, Golang, Java, Spring Boot), our team replaces
            scattered tools with one integrated system that saves time, cuts
            costs, and scales with you. Our goal is simple: reduce manual work
            by up to 90% while boosting efficiency.
          </p>

          {/* Mission */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="card mb-12 border-2 border-accent-pink"
          >
            <motion.div variants={cardVariants}>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-text-secondary text-center max-w-3xl mx-auto">
                To empower businesses with AI-driven solutions that streamline
                operations, enhance productivity, and drive growth through
                seamless automation and custom software.
              </p>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <h3 className="text-xl font-semibold mb-4 text-center text-white">
              Our Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "We leverage cutting-edge AI and automation to deliver forward-thinking solutions.",
                },
                {
                  title: "Efficiency",
                  description:
                    "Our systems are designed to minimize manual work and maximize output.",
                },
                {
                  title: "Scalability",
                  description:
                    "We build solutions that grow with your business, from startups to enterprises.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="card text-center border-2 border-accent-pink"
                >
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-text-secondary">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="card mb-12 border-2 border-accent-pink"
          >
            <motion.div variants={cardVariants}>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Our Approach
              </h3>
              <p className="text-text-secondary text-center max-w-3xl mx-auto">
                We start by understanding your business needs, then design
                integrated systems using no-code tools like Airtable and Zapier
                or custom stacks like React and AWS. Our iterative process
                ensures rapid deployment, continuous improvement, and long-term
                success.
              </p>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            className="text-center"
          >
            <Link to="/contact" className="button bg-accent-deep-teal">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default About;
