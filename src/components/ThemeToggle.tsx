import React from "react";
import { motion } from "framer-motion";

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = React.useState(true);

  React.useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <i
        className={
          isDark ? "fas fa-sun text-yellow-400" : "fas fa-moon text-gray-300"
        }
      ></i>
    </motion.button>
  );
};

export default ThemeToggle;
