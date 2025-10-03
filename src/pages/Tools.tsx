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

const Tools: React.FC = () => {
  // Debug log to confirm component mounts
  useEffect(() => {
    console.log("Tools component mounted successfully");
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
            Our Tools
          </h2>
          <p className="text-lg text-center mb-12 text-text-secondary">
            Explore our AI-powered tools to enhance your productivity.
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Airtable & Softr",
                description: "For custom CRMs and databases.",
                slug: "airtable-softr",
                icon: "/assets/tool-logo-placeholder.png",
              },
              {
                title: "Make, n8n, Zapier",
                description: "For seamless automations.",
                slug: "make-n8n-zapier",
                icon: "/assets/tool-logo-placeholder.png",
              },
              {
                title: "React Native & AWS",
                description: "For mobile apps and scalable backends.",
                slug: "react-native-aws",
                icon: "/assets/tool-logo-placeholder.png",
              },
            ].map((tool, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                style={{ rotateX, rotateY, perspective: 1000 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="card text-center border-2 border-accent-pink"
              >
                <img
                  src={tool.icon}
                  alt={tool.title}
                  className="mx-auto mb-4 h-16"
                  onError={() => console.error(`Failed to load ${tool.icon}`)}
                />
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-text-secondary mb-4">{tool.description}</p>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to={`/tools/${tool.slug}`}
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

export default Tools;
