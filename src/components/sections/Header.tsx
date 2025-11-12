import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import ThemeToggle from "../ThemeToggle";
import { mobileMenuVariants } from "../../utils/animationVariants";

// Import logo using Vite/React import
import logo from "/assets/logo.webp";

const Header: React.FC = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { scrollY } = useScroll();

  // === Hide header on scroll down, show on scroll up ===
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const isScrollingDown = current > prevScrollY && current > 100;

      setShowHeader(!isScrollingDown);
      setPrevScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  // === Logo size animation ===
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.85], {
    clamp: false,
  });
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleDirection = () => {
      const current = window.scrollY;
      setIsScrollingUp(current < prevScrollY && current > 100);
    };
    window.addEventListener("scroll", handleDirection);
    return () => window.removeEventListener("scroll", handleDirection);
  }, [prevScrollY]);

  const toggleNav = useCallback(() => setIsNavOpen((v) => !v), []);
  useEffect(() => setIsNavOpen(false), [location]);

  const navItems = [
    { name: "Home", path: "/", icon: "fas fa-home" },
    { name: "About", path: "/about", icon: "fas fa-info-circle" },
    { name: "Services", path: "/services", icon: "fas fa-cogs" },
    { name: "Tools", path: "/tools", icon: "fas fa-tools" },
    { name: "Pricing", path: "/pricing", icon: "fas fa-tag" },
    { name: "Blog", path: "/blog", icon: "fas fa-blog" },
    { name: "Contact", path: "/contact", icon: "fas fa-envelope" },
  ];

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNavOpen]);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: showHeader ? 1 : 0 }}
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

      <nav className="relative px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          {/* === Logo - Imported, No Box, Grows on Scroll Up === */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              aria-label="Autolinium Home"
            >
              <motion.div
                style={{
                  scale: isScrollingUp ? 1.2 : logoScale,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <img
                  src={logo}
                  alt="Autolinium Logo"
                  className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-lg"
                  loading="eager"
                />
                {/* Fallback text (only if image fails to load) */}
                <div className="hidden items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full text-white font-bold text-xl">
                  AL
                </div>
              </motion.div>

              <span className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Autolinium
              </span>
            </Link>
          </motion.div>

          {/* === Desktop Nav === */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 lg:px-4 py-2 text-sm font-semibold transition-colors duration-300 group whitespace-nowrap
                  ${
                    location.pathname === item.path
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                    layoutId="navbar-indicator"
                  />
                )}
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* === Right: CTA + Theme + Mobile Toggle === */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="px-4 lg:px-6 py-2 lg:py-2.5 text-sm font-semibold rounded-xl border border-white/30 text-white/90 hover:text-white hover:border-cyan-400 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>

            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm"
              onClick={toggleNav}
              aria-label={isNavOpen ? "Close menu" : "Open menu"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-5 h-5">
                <motion.span
                  className="absolute top-1/2 left-0 w-5 h-0.5 bg-white rounded-full"
                  animate={{
                    rotate: isNavOpen ? 45 : 0,
                    top: isNavOpen ? "50%" : "25%",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-1/2 left-0 w-5 h-0.5 bg-white rounded-full"
                  animate={{ opacity: isNavOpen ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-1/2 left-0 w-5 h-0.5 bg-white rounded-full"
                  animate={{
                    rotate: isNavOpen ? -45 : 0,
                    top: isNavOpen ? "50%" : "75%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* === Mobile Menu (Unchanged) === */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl pt-16"
          >
            <div className="h-full overflow-y-auto pb-8">
              <div className="px-4 py-6">
                <motion.div
                  className="mb-6 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                >
                  <p className="text-white/90 text-sm font-semibold mb-3 text-center">
                    Ready to automate?
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full px-4 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl text-center font-semibold"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Get Started Now
                  </Link>
                </motion.div>

                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-4 px-4 py-4 rounded-2xl text-base font-semibold border border-white/10 min-h-[60px] ${
                          location.pathname === item.path
                            ? "text-white bg-white/15 border-cyan-400"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                        onClick={() => setIsNavOpen(false)}
                      >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10">
                          <i className={`${item.icon} text-white/80 text-sm`} />
                        </div>
                        <span className="flex-1">{item.name}</span>
                        {location.pathname === item.path && (
                          <motion.div
                            className="w-2 h-2 rounded-full bg-cyan-400"
                            layoutId="mobile-nav-indicator"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mt-8 pt-6 border-t border-white/10 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-white/60 text-sm">
                    Need help?{" "}
                    <a
                      href="mailto:help@autolinium.com"
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      Contact support
                    </a>
                  </p>
                </motion.div>
              </div>
            </div>
            <div
              className="absolute inset-0 -z-10"
              onClick={() => setIsNavOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
