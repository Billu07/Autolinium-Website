import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import "./../App.css";

// Animation variants
const fadeInVariants: Variants = {
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, rotate: 0 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 4px 8px rgba(0, 77, 64, 0.3)",
    transition: { duration: 0.3 },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    },
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

const Services: React.FC = () => {
  // Debug log to confirm component mounts
  useEffect(() => {
    console.log("Services component mounted successfully");
  }, []);

  // Mouse-based tilt for cards
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
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
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Our Services
          </h2>
          <p className="text-lg text-center mb-12 text-text-secondary">
            Discover our AI-powered services to transform your business.
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Custom CRMs",
                description:
                  "Built with Airtable, Softr, or full-code stacks like Postgres/React/Node.",
                slug: "custom-crms",
                icon: "/assets/service-logo-placeholder.png",
              },
              {
                title: "Workflow Automations",
                description:
                  "Integrate Slack, Gmail, Stripe, and more with Make, n8n, Zapier.",
                slug: "workflow-automations",
                icon: "/assets/service-logo-placeholder.png",
              },
              {
                title: "AI-Driven Agents & Chatbots",
                description:
                  "Voice, text, multi-channel bots with ChatGPT, Botpress, Vapi.",
                slug: "ai-agents-chatbots",
                icon: "/assets/service-logo-placeholder.png",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                style={{ rotateX, rotateY, perspective: 1000 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="card text-center border-2 border-accent-pink"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto mb-4 h-16"
                  onError={() =>
                    console.error(`Failed to load ${service.icon}`)
                  }
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-text-secondary mb-4">
                  {service.description}
                </p>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to={`/services/${service.slug}`}
                    className="button bg-accent-deep-teal"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default Services;
