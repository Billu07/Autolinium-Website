import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ThemeToggle";
import { mobileMenuVariants } from "../../utils/animationVariants";

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
    { name: "Home", path: "/", icon: "fas fa-home" },
    { name: "About", path: "/about", icon: "fas fa-info-circle" },
    { name: "Services", path: "/services", icon: "fas fa-cogs" },
    { name: "Tools", path: "/tools", icon: "fas fa-tools" },
    { name: "Pricing", path: "/pricing", icon: "fas fa-tag" },
    { name: "Blog", path: "/blog", icon: "fas fa-blog" },
    { name: "Contact", path: "/contact", icon: "fas fa-envelope" },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#0A0F1A]/90 backdrop-blur-xl border-b border-white/10 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/assets/autolinium-logo.png"
                alt="Autolinium"
                className="w-10 h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const nextEl = e.currentTarget
                    .nextSibling as HTMLElement | null;
                  if (nextEl) nextEl.style.display = "block";
                }}
              />
              {/* Fallback if logo doesn't load */}
              <div className="text-cyan-400 font-bold text-lg hidden">AL</div>
              <span className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                Autolinium
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                  location.pathname === item.path
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"
                    layoutId="navbar-indicator"
                  />
                )}
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* Right Section - Theme Toggle & CTA */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl text-sm font-semibold border border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </motion.div>

            <ThemeToggle />

            {/* Premium Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-cyan-400/30 backdrop-blur-sm"
              onClick={toggleNav}
              aria-label={isNavOpen ? "Close menu" : "Open menu"}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute top-1/2 left-0 w-6 h-0.5 bg-cyan-400 rounded-full"
                  animate={{
                    rotate: isNavOpen ? 45 : 0,
                    top: isNavOpen ? "50%" : "25%",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-1/2 left-0 w-6 h-0.5 bg-cyan-400 rounded-full"
                  animate={{
                    opacity: isNavOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-1/2 left-0 w-6 h-0.5 bg-cyan-400 rounded-full"
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

      {/* Premium Mobile Navigation Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-[#0A0F1A]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5 pointer-events-none" />

            <div className="container mx-auto px-4 py-6 relative z-10">
              {/* Premium Mobile CTA */}
              <motion.div
                className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-cyan-400/30 backdrop-blur-lg"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              >
                <p className="text-cyan-400 text-sm font-semibold mb-2 flex items-center">
                  <i className="fas fa-bolt mr-2 text-cyan-400"></i>
                  Ready to automate?
                </p>
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl text-center font-semibold border border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                  onClick={() => setIsNavOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>

              {/* Premium Navigation Links */}
              <ul className="space-y-3">
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
                      className={`flex items-center space-x-4 px-4 py-4 rounded-2xl text-base font-semibold transition-all duration-300 group border ${
                        location.pathname === item.path
                          ? "bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-cyan-400 border-cyan-400/40 shadow-lg shadow-cyan-500/10"
                          : "text-gray-300 hover:text-cyan-400 hover:bg-white/5 border-white/10 hover:border-cyan-400/30"
                      }`}
                      onClick={() => setIsNavOpen(false)}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          location.pathname === item.path
                            ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                            : "bg-white/5 group-hover:bg-cyan-400/10"
                        } transition-all duration-300`}
                      >
                        <i
                          className={`${item.icon} ${
                            location.pathname === item.path
                              ? "text-white"
                              : "text-gray-400 group-hover:text-cyan-400"
                          } transition-colors duration-300`}
                        ></i>
                      </div>
                      <span className="flex-1">{item.name}</span>
                      {location.pathname === item.path && (
                        <motion.div
                          className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
                          layoutId="mobile-nav-indicator"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Premium Contact Info */}
              <motion.div
                className="mt-8 pt-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center justify-center space-x-8 text-gray-400">
                  <motion.a
                    href="mailto:hello@autolinium.com"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-envelope text-lg"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-twitter text-lg"></i>
                  </motion.a>
                </div>
                <motion.p
                  className="text-center text-gray-400 text-sm mt-4 font-medium flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <i className="fas fa-robot mr-2 text-cyan-400"></i>
                  AI-powered automation solutions
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
