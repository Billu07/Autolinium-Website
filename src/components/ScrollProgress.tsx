import React from "react";
import { motion } from "framer-motion";

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

export default ScrollProgress;
