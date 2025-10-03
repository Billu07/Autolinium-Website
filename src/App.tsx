import React, { useState, useCallback, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  type Variants,
  useAnimationControls,
} from "framer-motion";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import VideoCard from "./components/VideoCard";
import Contact from "./components/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import ToolDetail from "./pages/ToolDetail";
import Subscribe from "./pages/Subscribe";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Tools from "./pages/Tools";
import "./App.css";

// Fade-in with bounce for sections
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

// Slide-in for review/team cards
const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Staggered animation for cards
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Card tilt animation (disabled on mobile)
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

// Button pulse animation
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

// News ticker animation - optimized for mobile
const tickerVariants: Variants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    },
  },
};

// FAQ answer animation
const faqAnswerVariants: Variants = {
  hidden: { opacity: 0, height: 0, marginTop: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    marginTop: "0.5rem",
    transition: {
      opacity: { duration: 0.3 },
      height: { duration: 0.3, ease: "easeOut" },
      marginTop: { duration: 0.3 },
    },
  },
};

// Mobile menu animation
const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
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

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-[var(--accent-blue)] z-50"
      style={{ width: `${scrollY}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollY}%` }}
      transition={{ duration: 0.2 }}
    />
  );
};

// Custom hook for mouse tilt animation
const useTiltAnimation = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (window.innerWidth >= 640) {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        x.set(mouseX);
        y.set(mouseY);
      }
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
};

// Loading skeleton component
const SkeletonCard: React.FC = () => (
  <div className="card animate-pulse">
    <div className="h-16 bg-gray-600 rounded mx-auto mb-4"></div>
    <div className="h-6 bg-gray-600 rounded mb-2"></div>
    <div className="h-4 bg-gray-600 rounded mb-4"></div>
    <div className="h-10 bg-gray-600 rounded"></div>
  </div>
);

// Updated Home component with performance optimizations
const Home: React.FC = () => {
  const tiltAnimation = useTiltAnimation();
  const tickerControls = useAnimationControls();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Start ticker animation on component mount
  React.useEffect(() => {
    tickerControls.start("animate");

    // Simulate image loading
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [tickerControls]);

  // How We Help data with funny content
  const helpItems = React.useMemo(
    () => [
      {
        text: "Zap repetitive tasks faster than you can say 'coffee break'!",
        icon: "fas fa-magic",
        link: "/services/workflow-automations",
      },
      {
        text: "Turn leads into fans with AI that chats quicker than your auntie!",
        icon: "fas fa-heart",
        link: "/services/ai-agents-chatbots",
      },
      {
        text: "No more oopsies—our systems keep your data tighter than a drum!",
        icon: "fas fa-lock",
        link: "/services/custom-crms",
      },
      {
        text: "Scale your biz like a rocket without the crash landing!",
        icon: "fas fa-rocket",
        link: "/services/workflow-automations",
      },
      {
        text: "Dashboards so clear, you'll feel like a data wizard!",
        icon: "fas fa-hat-wizard",
        link: "/services/custom-crms",
      },
      {
        text: "Mobile apps that let you run your empire from the beach!",
        icon: "fas fa-umbrella-beach",
        link: "/services/mobile-apps",
      },
    ],
    []
  );

  // FAQ data
  const faqItems = React.useMemo(
    () => [
      {
        question: "Will your AI steal my job?",
        answer:
          "Nah, it'll just make you look like a superstar by handling the boring stuff while you sip coffee!",
      },
      {
        question: "How fast can you build my custom CRM?",
        answer:
          "Faster than you can say 'spreadsheet nightmare'—usually in weeks, depending on your needs!",
      },
      {
        question: "Can your chatbots handle my sassy customers?",
        answer:
          "Oh, they're sass-proof! Our AI chats quicker and wittier than your wittiest team member.",
      },
      {
        question: "What if I'm not tech-savvy?",
        answer:
          "No tech degree needed! We make it so easy, even your grandma could run your biz from her phone.",
      },
      {
        question: "Are your solutions affordable for small businesses?",
        answer:
          "Yup, we've got plans that won't break the bank—think rocket fuel prices, not rocket ship!",
      },
      {
        question: "Can you integrate with my existing tools?",
        answer:
          "Like peanut butter and jelly! We'll hook up Slack, Gmail, or whatever you're using in a snap.",
      },
    ],
    []
  );

  // State for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = useCallback(
    (index: number) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
    },
    [openFaqIndex]
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center hero-section pt-20">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="text-center px-4 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Welcome To Autolinium
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[var(--text-secondary)]">
            AI Based Software Agency: We build AI Agents, Custom CRMs,
            Automations, and Mobile Apps that run your business 24/7.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {!imagesLoaded ? (
              // Show skeleton loaders while images load
              Array.from({ length: 4 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            ) : (
              // Actual cards
              <>
                <motion.div
                  variants={cardVariants}
                  style={{
                    rotateX: tiltAnimation.rotateX,
                    rotateY: tiltAnimation.rotateY,
                    perspective: 1000,
                  }}
                  onMouseMove={tiltAnimation.handleMouseMove}
                  onMouseLeave={tiltAnimation.handleMouseLeave}
                >
                  <VideoCard
                    src="/assets/hero-card-img-01.png"
                    title="AI Agents"
                    description="Intelligent agents for 24/7 operations."
                    buttonText="Explore"
                    color="var(--accent-blue)"
                    icon="fas fa-robot"
                    index={0}
                  />
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  style={{
                    rotateX: tiltAnimation.rotateX,
                    rotateY: tiltAnimation.rotateY,
                    perspective: 1000,
                  }}
                  onMouseMove={tiltAnimation.handleMouseMove}
                  onMouseLeave={tiltAnimation.handleMouseLeave}
                >
                  <VideoCard
                    src="/assets/hero-card-img-02.png"
                    title="Custom CRMs"
                    description="Integrated systems to streamline data."
                    buttonText="Learn More"
                    color="var(--accent-blue)"
                    icon="fas fa-database"
                    index={1}
                  />
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  style={{
                    rotateX: tiltAnimation.rotateX,
                    rotateY: tiltAnimation.rotateY,
                    perspective: 1000,
                  }}
                  onMouseMove={tiltAnimation.handleMouseMove}
                  onMouseLeave={tiltAnimation.handleMouseLeave}
                >
                  <VideoCard
                    src="/assets/hero-card-img-03.png"
                    title="Automations"
                    description="Reduce manual work by up to 90%."
                    buttonText="Discover"
                    color="var(--accent-blue)"
                    icon="fas fa-cogs"
                    index={2}
                  />
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  style={{
                    rotateX: tiltAnimation.rotateX,
                    rotateY: tiltAnimation.rotateY,
                    perspective: 1000,
                  }}
                  onMouseMove={tiltAnimation.handleMouseMove}
                  onMouseLeave={tiltAnimation.handleMouseLeave}
                >
                  <VideoCard
                    src="/assets/hero-card-img-04.png"
                    title="Mobile Apps"
                    description="On-the-go solutions for Android & iOS."
                    buttonText="Try Now"
                    color="var(--accent-blue)"
                    icon="fas fa-mobile-alt"
                    index={3}
                  />
                </motion.div>
              </>
            )}
          </div>
          <p className="text-2xl mb-8">
            Proven solutions across real estate, finance, consulting, marketing,
            and e-commerce.
          </p>
          <motion.div variants={buttonVariants} animate="pulse">
            <Link
              to="/pricing"
              className="button text-lg bg-[var(--accent-deep-teal)] hover:bg-[var(--accent-deep-teal)]"
            >
              Start Your 30-Day Free Trial
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section bg-[var(--primary-bg)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Our Services
          </h2>
          <p className="text-lg text-center mb-12 text-[var(--text-secondary)]">
            Discover our AI-powered services to transform your business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              variants={cardVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <motion.div variants={cardVariants} className="card text-center">
                <img
                  src="/assets/crm.png"
                  alt="Service Logo"
                  className="mx-auto mb-4 h-16"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">Custom CRMs</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Built with Airtable, Softr, or full-code stacks like
                  Postgres/React/Node.
                </p>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="/services/custom-crms"
                    className="button bg-[var(--accent-deep-teal)]"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <motion.div variants={cardVariants} className="card text-center">
                <img
                  src="/assets/process.png"
                  alt="Service Logo"
                  className="mx-auto mb-4 h-16"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Workflow Automations
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Integrate Slack, Gmail, Stripe, and more with Make, n8n,
                  Zapier.
                </p>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="/services/workflow-automations"
                    className="button bg-[var(--accent-deep-teal)]"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <motion.div variants={cardVariants} className="card text-center">
                <img
                  src="/assets/robot.png"
                  alt="Service Logo"
                  className="mx-auto mb-4 h-16"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">
                  AI-Driven Agents & Chatbots
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Voice, text, multi-channel bots with ChatGPT, Botpress, Vapi.
                </p>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="/services/ai-agents-chatbots"
                    className="button bg-[var(--accent-deep-teal)]"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tools Section */}
      <section className="section bg-[var(--primary-bg)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Our Tools
          </h2>
          <p className="text-lg text-center mb-12 text-[var(--text-secondary)]">
            Explore our AI-powered tools to enhance your productivity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              variants={cardVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <motion.div variants={cardVariants} className="card text-center">
                <img
                  src="/assets/softair.png"
                  alt="Tool Logo"
                  className="mx-auto mb-4 h-16"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">Airtable & Softr</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  For custom CRMs and databases.
                </p>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="/tools/airtable-softr"
                    className="button bg-[var(--accent-deep-teal)]"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <motion.div variants={cardVariants} className="card text-center">
                <img
                  src="/assets/manier.png"
                  alt="Tool Logo"
                  className="mx-auto mb-4 h-16"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Make, n8n, Zapier
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  For seamless automations.
                </p>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="/tools/make-n8n-zapier"
                    className="button bg-[var(--accent-deep-teal)]"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <motion.div variants={cardVariants} className="card text-center">
                <img
                  src="/assets/reaws.png"
                  alt="Tool Logo"
                  className="mx-auto mb-4 h-16"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">
                  React Native & AWS
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  For mobile apps and scalable backends.
                </p>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="/tools/react-native-aws"
                    className="button bg-[var(--accent-deep-teal)]"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How We Help Section */}
      <section className="section bg-[var(--primary-bg)]">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            How We Help
          </h2>
          <div
            className="relative overflow-hidden ticker-container"
            role="region"
            aria-label="How We Help ticker"
          >
            <motion.div
              className="flex whitespace-nowrap"
              variants={tickerVariants}
              animate={tickerControls}
              onHoverStart={() => tickerControls.stop()}
              onHoverEnd={() => tickerControls.start("animate")}
            >
              {helpItems.concat(helpItems).map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center mx-4 text-[var(--text-secondary)] text-sm sm:text-base ticker-item"
                >
                  <i
                    className={`${item.icon} text-lg sm:text-xl text-[var(--accent-blue)] mr-2`}
                    aria-hidden="true"
                  ></i>
                  <Link
                    to={item.link}
                    className="hover:text-[var(--accent-blue)] whitespace-nowrap"
                    aria-label={item.text}
                  >
                    {item.text}
                  </Link>
                  {index < helpItems.length * 2 - 1 && (
                    <span className="mx-4">•</span>
                  )}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-[var(--primary-bg)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={cardVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <motion.div variants={cardVariants} className="card">
                <img
                  src="/assets/project-placeholder.png"
                  alt="Project Logo"
                  className="mx-auto mb-4 h-16"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Real Estate CRM (USA)
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Deal pipeline with Slack alerts + call logging. Tools:
                  Airtable, Make.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <motion.div variants={cardVariants} className="card">
                <img
                  src="/assets/project-placeholder.png"
                  alt="Project Logo"
                  className="mx-auto mb-4 h-16"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Investor Deal Flow (USA)
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Multi-stage CRM with DocuSign & Calendly. Tools: Airtable,
                  Make.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <motion.div variants={cardVariants} className="card">
                <img
                  src="/assets/project-placeholder.png"
                  alt="Project Logo"
                  className="mx-auto mb-4 h-16"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Construction Site Bot (Mexico)
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Telegram bot for photo, voice & text reporting into CRM.
                  Tools: Airtable, Make, ChatGPT.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Reviews Section (Why Clients Choose Us) */}
      <section className="section bg-[var(--primary-bg)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Client Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={slideInVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <div className="review-card">
                <div className="star-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-[var(--text-secondary)] mb-4">
                  "Autolinium transformed our workflow with a custom CRM that
                  cut our manual work by 80%. Their team was responsive and
                  delivered beyond expectations."
                </p>
                <p className="font-semibold">Jane D., Real Estate CEO</p>
              </div>
            </motion.div>
            <motion.div
              variants={slideInVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <div className="review-card">
                <div className="star-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <p className="text-[var(--text-secondary)] mb-4">
                  "The AI chatbot they built for us handles customer queries
                  24/7, boosting our conversions. Highly recommend their
                  expertise!"
                </p>
                <p className="font-semibold">Mark S., E-commerce Manager</p>
              </div>
            </motion.div>
            <motion.div
              variants={slideInVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <div className="review-card">
                <div className="star-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-[var(--text-secondary)] mb-4">
                  "Their automation setup with Make and Airtable saved us hours
                  weekly. Professional, reliable, and worth every penny."
                </p>
                <p className="font-semibold">Sarah L., Finance Director</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-[var(--primary-bg)]">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Frequently Asked Questions
          </h2>
          <div
            className="faq-container"
            role="region"
            aria-label="Frequently Asked Questions"
          >
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="faq-item border-b border-[var(--card-border)]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="faq-question w-full text-left py-4 text-[var(--accent-blue)] text-lg sm:text-xl font-semibold flex justify-between items-center"
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{item.question}</span>
                  <i
                    className={`fas ${
                      openFaqIndex === index
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    } text-[var(--accent-blue)]`}
                  ></i>
                </button>
                <motion.div
                  id={`faq-answer-${index}`}
                  variants={faqAnswerVariants}
                  initial="hidden"
                  animate={openFaqIndex === index ? "visible" : "hidden"}
                  className="faq-answer text-[var(--text-secondary)] text-sm sm:text-base"
                >
                  <p>{item.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Meet the Team Section */}
      <section className="section bg-[var(--primary-bg)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={slideInVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <div className="team-card">
                <img
                  src="/assets/business.png"
                  alt="Minhaz Uddin Fahim"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Minhaz Uddin Fahim
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Founder & AI/Automation Specialist
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-[var(--accent-blue)] hover:text-[var(--card-border)]"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="text-[var(--accent-blue)] hover:text-[var(--card-border)]"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={slideInVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <div className="team-card">
                <img
                  src="/assets/nerd.png"
                  alt="Masum Billah Tuhin"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Masum Billah Tuhin
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Softr, Airtable & n8n Specialist
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-[var(--accent-blue)] hover:text-[var(--card-border)]"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="text-[var(--accent-blue)] hover:text-[var(--card-border)]"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={slideInVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <div className="team-card">
                <img
                  src="/assets/coding.png"
                  alt="Rohit Roy"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">Rohit Roy</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Backend & Mobile/AI Developer
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-[var(--accent-blue)] hover:text-[var(--card-border)]"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="text-[var(--accent-blue)] hover:text-[var(--card-border)]"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={slideInVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <div className="team-card">
                <img
                  src="/assets/coding.png"
                  alt="Md. Zahidul Hasan"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Md. Zahidul Hasan
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Full-Stack & Mobile Engineer
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-[var(--accent-blue)] hover:text-[var(--card-border)]"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="text-[var(--accent-blue)] hover:text-[var(--card-border)]"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Toolbelt */}
      <section className="section bg-[var(--primary-bg)]">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Our Toolbelt
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center">
              <i className="fas fa-tools mr-2"></i> Airtable
            </div>
            <div className="flex items-center justify-center">
              <i className="fas fa-tools mr-2"></i> Softr
            </div>
            <div className="flex items-center justify-center">
              <i className="fas fa-tools mr-2"></i> Make.com
            </div>
            <div className="flex items-center justify-center">
              <i className="fas fa-tools mr-2"></i> Zapier
            </div>
            <div className="flex items-center justify-center">
              <i className="fas fa-tools mr-2"></i> React Native
            </div>
            <div className="flex items-center justify-center">
              <i className="fas fa-tools mr-2"></i> AWS
            </div>
            <div className="flex items-center justify-center">
              <i className="fas fa-tools mr-2"></i> Docker
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="section bg-[var(--primary-bg)]">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="container text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Ready to Scale?
          </h2>
          <p className="text-lg mb-8 text-[var(--text-secondary)]">
            Invite Autolinium to your job or message us today – let's build the
            backbone of your business.
          </p>
          <motion.div variants={buttonVariants} animate="pulse">
            <Link
              to="/contact"
              className="button bg-[var(--accent-deep-teal)] text-lg"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

const App: React.FC = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = useCallback(() => {
    setIsNavOpen(!isNavOpen);
  }, [isNavOpen]);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  return (
    <div className="bg-[var(--primary-bg)] text-[var(--text-primary)] font-inter relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[var(--primary-bg)] bg-opacity-95 p-4 z-40 shadow-[var(--shadow)]">
        <ScrollProgress />
        <nav className="container mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <img
              src="/assets/autolinium-logo.png"
              alt="Autolinium Logo"
              className="h-10 mr-2 drop-shadow-lg"
              onError={() => console.error("Logo failed to load")}
            />
            <h1 className="text-2xl md:text-3xl font-bold">Autolinium</h1>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="hamburger md:hidden z-50 relative w-8 h-8 flex items-center justify-center"
            onClick={toggleNav}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
          >
            <i
              className={
                isNavOpen ? "fas fa-times text-xl" : "fas fa-bars text-xl"
              }
            ></i>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4 md:space-x-6 text-sm md:text-base">
            {[
              "Home",
              "About",
              "Services",
              "Tools",
              "Pricing",
              "Blog",
              "Contact",
            ].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-[var(--accent-blue)] transition-colors duration-200"
                  aria-current={
                    location.pathname ===
                    (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                      ? "page"
                      : undefined
                  }
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Menu */}
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate={isNavOpen ? "open" : "closed"}
          className="md:hidden absolute top-full left-0 w-full bg-[var(--primary-bg)] bg-opacity-95 backdrop-blur-sm shadow-lg z-30 overflow-hidden"
        >
          <ul className="flex flex-col space-y-4 p-6">
            {[
              "Home",
              "About",
              "Services",
              "Tools",
              "Pricing",
              "Blog",
              "Contact",
            ].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                className="border-b border-[var(--card-border)] pb-2 last:border-b-0"
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block py-2 text-lg font-semibold hover:text-[var(--accent-blue)] transition-colors duration-200"
                  aria-current={
                    location.pathname ===
                    (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                      ? "page"
                      : undefined
                  }
                  onClick={() => setIsNavOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
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
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/tools/:slug" element={<ToolDetail />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-800 p-6 text-center">
        <p className="mb-4">&copy; 2025 Autolinium. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="#"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)]"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)]"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)]"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <motion.div variants={buttonVariants} animate="pulse">
          <Link to="/contact" className="button">
            Drop A Line
          </Link>
        </motion.div>
      </footer>
    </div>
  );
};

export default App;
