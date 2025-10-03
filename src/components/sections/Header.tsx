import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeToggle from "../ThemeToggle";

const Header: React.FC = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = useCallback(() => {
    setIsNavOpen(!isNavOpen);
  }, [isNavOpen]);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Tools",
    "Pricing",
    "Blog",
    "Contact",
  ];

  const mobileMenuVariants = {
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

  return (
    <header className="fixed top-0 w-full bg-[var(--primary-bg)] bg-opacity-95 p-4 z-40 shadow-[var(--shadow)] backdrop-blur-sm">
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

        <div className="flex items-center space-x-4">
          <ThemeToggle />

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
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 md:space-x-6 text-sm md:text-base">
          {navItems.map((item) => (
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
          {navItems.map((item) => (
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
  );
};

export default Header;
