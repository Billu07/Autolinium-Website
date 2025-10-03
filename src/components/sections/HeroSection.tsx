import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import VideoCard from "../VideoCard";
import SkeletonCard from "../SkeletonCard";
import { useTiltAnimation } from "../../hooks/useTiltAnimation";

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

const HeroSection: React.FC = () => {
  const tiltAnimation = useTiltAnimation();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const heroCards = [
    {
      src: "/assets/hero-card-img-01.png",
      title: "AI Agents",
      description: "Intelligent agents for 24/7 operations.",
      buttonText: "Explore",
      icon: "fas fa-robot",
    },
    {
      src: "/assets/hero-card-img-02.png",
      title: "Custom CRMs",
      description: "Integrated systems to streamline data.",
      buttonText: "Learn More",
      icon: "fas fa-database",
    },
    {
      src: "/assets/hero-card-img-03.png",
      title: "Automations",
      description: "Reduce manual work by up to 90%.",
      buttonText: "Discover",
      icon: "fas fa-cogs",
    },
    {
      src: "/assets/hero-card-img-04.png",
      title: "Mobile Apps",
      description: "On-the-go solutions for Android & iOS.",
      buttonText: "Try Now",
      icon: "fas fa-mobile-alt",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center hero-section pt-20">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="text-center px-4 max-w-4xl"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome To Autolinium
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-[var(--text-secondary)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI Based Software Agency: We build AI Agents, Custom CRMs,
          Automations, and Mobile Apps that run your business 24/7.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {!imagesLoaded
            ? Array.from({ length: 4 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : heroCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    rotateX: tiltAnimation.rotateX,
                    rotateY: tiltAnimation.rotateY,
                    perspective: 1000,
                  }}
                  onMouseMove={tiltAnimation.handleMouseMove}
                  onMouseLeave={tiltAnimation.handleMouseLeave}
                >
                  <VideoCard
                    src={card.src}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                    color="var(--accent-blue)"
                    icon={card.icon}
                    index={index}
                  />
                </motion.div>
              ))}
        </div>

        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Proven solutions across real estate, finance, consulting, marketing,
          and e-commerce.
        </motion.p>

        <motion.div
          variants={buttonVariants}
          animate="pulse"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/pricing"
            className="button text-lg bg-[var(--accent-deep-teal)] hover:bg-[var(--accent-deep-teal)]"
          >
            Start Your 30-Day Free Trial
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
