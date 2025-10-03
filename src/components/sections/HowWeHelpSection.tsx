import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const tickerVariants = {
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

const HowWeHelpSection: React.FC = () => {
  const tickerControls = useAnimationControls();
  const { ref, isVisible } = useScrollAnimation();

  React.useEffect(() => {
    if (isVisible) {
      tickerControls.start("animate");
    }
  }, [isVisible, tickerControls]);

  const helpItems = [
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
  ];

  return (
    <section ref={ref} className="section bg-[var(--primary-bg)]">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
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
                  className="hover:text-[var(--accent-blue)] whitespace-nowrap transition-colors duration-200"
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
  );
};

export default HowWeHelpSection;
