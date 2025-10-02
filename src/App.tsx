import React from "react";
import { motion, Variants } from "framer-motion";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import VideoCard from "./components/VideoCard";
import Contact from "./components/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import ToolDetail from "./pages/ToolDetail";
import Subscribe from "./pages/Subscribe";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import "./App.css";

// Error Boundary for debugging
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
        <h1 className="text-white text-center mt-20">
          Something went wrong. Check console for errors.
        </h1>
      );
    }
    return this.props.children;
  }
}

// Staggered letter animation variant
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Floating button variant
const buttonVariants: Variants = {
  hover: { scale: 1.1, rotate: 2, boxShadow: "0 0 15px var(--neon-teal)" },
  float: {
    y: [-10, 10, -10],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

// Nav item variants
const navItemVariants: Variants = {
  hover: {
    scale: 1.1,
    color: "var(--neon-teal)",
    transition: { duration: 0.3 },
  },
};

// Particle variants
const particleVariants: Variants = {
  animate: {
    x: [0, 50, 0],
    y: [0, 50, 0],
    opacity: [0.3, 0.8, 0.3],
    scale: [0.5, 1, 0.5],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Scroll progress component
const ScrollProgress: React.FC = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollY(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-[var(--neon-teal)] z-20"
      style={{ width: `${scrollY}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollY}%` }}
      transition={{ duration: 0.2 }}
    />
  );
};

// Extracted Components
const Home: React.FC = () => (
  <div>
    {/* Hero Section */}
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-teal-900 pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center px-4"
      >
        <h2
          className="text-4xl md:text-6xl font-orbitron glitch mb-4"
          data-text="Unlock the Future of Automation"
        >
          {"Unlock the Future of Automation".split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
        <p className="text-lg md:text-xl mb-6 font-sans max-w-2xl mx-auto">
          Friendly AI solutions that save time, boost productivity, and make
          your business shine.
        </p>
        <motion.div
          variants={buttonVariants}
          animate="float"
          whileHover="hover"
          className="inline-block"
        >
          <Link
            to="/services"
            className="bg-[var(--neon-teal)] px-6 py-3 rounded-lg text-lg hover:bg-teal-300 transition duration-300"
          >
            Explore Services
          </Link>
        </motion.div>
      </motion.div>
    </section>

    {/* Services Section */}
    <section id="services" className="py-20 container mx-auto px-4 bg-gray-900">
      <h2
        className="text-4xl md:text-5xl font-orbitron text-center mb-12 glitch"
        data-text="Our Services"
      >
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <VideoCard
          src="/assets/chatbot-demo.mp4"
          title="Smart Chat Helpers"
          description="Engage customers 24/7 with AI chatbots tailored for your business."
          buttonText="Learn More"
          color="var(--neon-teal)"
          icon="fa-comments"
          index={0}
        />
        <VideoCard
          src="/assets/assistant-demo.mp4"
          title="Your Personal AI Sidekick"
          description="Text or voice assistants to manage your daily tasks effortlessly."
          buttonText="Learn More"
          color="var(--neon-pink)"
          icon="fa-user-robot"
          index={1}
        />
        <VideoCard
          src="/assets/automation-demo.mp4"
          title="Workflow Wizards"
          description="Automate processes with smart agents for maximum efficiency."
          buttonText="Learn More"
          color="var(--neon-purple)"
          icon="fa-magic-wand-sparkles"
          index={2}
        />
      </div>
    </section>

    {/* Tools Section */}
    <section id="tools" className="py-20 container mx-auto px-4">
      <h2
        className="text-4xl md:text-5xl font-orbitron text-center mb-12 glitch"
        data-text="Ready-to-Use Tools"
      >
        Ready-to-Use Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <VideoCard
          src="/assets/chatbot-pro-demo.mp4"
          title="ChatBot Pro"
          description="Advanced chatbot solution for 24/7 customer engagement."
          buttonText="Request Demo"
          color="var(--neon-teal)"
          icon="fa-robot"
          index={0}
        />
        <VideoCard
          src="/assets/ai-assistant-plus-demo.mp4"
          title="AI Assistant Plus"
          description="Personalized AI to manage your schedule and tasks."
          buttonText="Request Demo"
          color="var(--neon-pink)"
          icon="fa-user-gear"
          index={1}
        />
        <VideoCard
          src="/assets/autoflow-demo.mp4"
          title="AutoFlow"
          description="Automate complex workflows with ease."
          buttonText="Request Demo"
          color="var(--neon-purple)"
          icon="fa-cogs"
          index={2}
        />
      </div>
    </section>

    {/* Contact Section */}
    <Contact />
  </div>
);

const Services: React.FC = () => (
  <section
    id="services"
    className="py-20 container mx-auto px-4 bg-gray-900 min-h-screen"
  >
    <h2
      className="text-4xl md:text-5xl font-orbitron text-center mb-12 glitch"
      data-text="Our Services"
    >
      Our Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <VideoCard
        src="/assets/chatbot-demo.mp4"
        title="Smart Chat Helpers"
        description="Engage customers 24/7 with AI chatbots tailored for your business."
        buttonText="Learn More"
        color="var(--neon-teal)"
        icon="fa-comments"
        index={0}
      />
      <VideoCard
        src="/assets/assistant-demo.mp4"
        title="Your Personal AI Sidekick"
        description="Text or voice assistants to manage your daily tasks effortlessly."
        buttonText="Learn More"
        color="var(--neon-pink)"
        icon="fa-user-robot"
        index={1}
      />
      <VideoCard
        src="/assets/automation-demo.mp4"
        title="Workflow Wizards"
        description="Automate processes with smart agents for maximum efficiency."
        buttonText="Learn More"
        color="var(--neon-purple)"
        icon="fa-magic-wand-sparkles"
        index={2}
      />
    </div>
  </section>
);

const Tools: React.FC = () => (
  <section id="tools" className="py-20 container mx-auto px-4 min-h-screen">
    <h2
      className="text-4xl md:text-5xl font-orbitron text-center mb-12 glitch"
      data-text="Ready-to-Use Tools"
    >
      Ready-to-Use Tools
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <VideoCard
        src="/assets/chatbot-pro-demo.mp4"
        title="ChatBot Pro"
        description="Advanced chatbot solution for 24/7 customer engagement."
        buttonText="Request Demo"
        color="var(--neon-teal)"
        icon="fa-robot"
        index={0}
      />
      <VideoCard
        src="/assets/ai-assistant-plus-demo.mp4"
        title="AI Assistant Plus"
        description="Personalized AI to manage your schedule and tasks."
        buttonText="Request Demo"
        color="var(--neon-pink)"
        icon="fa-user-gear"
        index={1}
      />
      <VideoCard
        src="/assets/autoflow-demo.mp4"
        title="AutoFlow"
        description="Automate complex workflows with ease."
        buttonText="Request Demo"
        color="var(--neon-purple)"
        icon="fa-cogs"
        index={2}
      />
    </div>
  </section>
);

const App: React.FC = () => {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <div className="bg-black text-white font-orbitron relative overflow-hidden">
        {/* Dynamic Particle Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[var(--neon-teal)] rounded-full particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              custom={i}
              animate="animate"
              variants={particleVariants}
              transition={{ delay: Math.random() * 2 }}
            />
          ))}
        </div>

        {/* Header */}
        <header className="fixed top-0 w-full bg-black bg-opacity-90 p-4 z-10 shadow-[0_0_10px_rgba(0,255,255,0.5)]">
          <ScrollProgress />
          <nav className="container mx-auto flex justify-between items-center">
            <motion.div
              className="flex items-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <img
                src="/src/assets/autolinium-logo.png"
                alt="Autolinium Logo"
                className="h-10 mr-2 drop-shadow-lg"
              />
              <h1
                className="text-2xl md:text-3xl font-orbitron glitch"
                data-text="Autolinium"
              >
                Autolinium
              </h1>
            </motion.div>
            <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base">
              {["Home", "Services", "Tools", "Blog", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  variants={navItemVariants}
                  whileHover="hover"
                  className="relative"
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-[var(--neon-teal)]"
                    aria-current={
                      location.pathname ===
                      (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                        ? "page"
                        : undefined
                    }
                  >
                    {item}
                  </Link>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-[var(--neon-teal)]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Page Content with Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="pt-20"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/tools/:slug" element={<ToolDetail />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <footer className="bg-gray-900 p-6 text-center mt-20">
          <p className="mb-4">&copy; 2025 Autolinium. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-[var(--neon-teal)] hover:text-teal-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-[var(--neon-pink)] hover:text-pink-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-[var(--neon-purple)] hover:text-purple-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <Link
            to="/subscribe"
            className="mt-4 inline-block bg-[var(--neon-teal)] px-4 py-2 rounded hover:bg-teal-300 transition"
          >
            Book a Free Consultation
          </Link>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default App;
