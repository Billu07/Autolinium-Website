import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ThemeToggle";
import { mobileMenuVariants } from "../../utils/animationVariants";

const Header: React.FC = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

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

  return (
    // ✨ Fully transparent header (no bg, no border, no container)
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="px-5 sm:px-8 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand (unchanged content) */}
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
              <div className="text-cyan-400 font-bold text-lg hidden">AL</div>
              <span className="text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">
                Autolinium
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation (no container, transparent) */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 group
                ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
                {/* active underline only, no bg */}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/80"
                    layoutId="navbar-indicator"
                  />
                )}
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-white/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* Right: Theme + CTA + Mobile toggle (transparent) */}
          <div className="flex items-center space-x-4">
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="px-6 py-2.5 text-sm font-semibold rounded-xl border border-white/30 text-white/90 hover:text-white hover:border-white transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>

            <ThemeToggle />

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/20 backdrop-blur-sm"
              onClick={toggleNav}
              aria-label={isNavOpen ? "Close menu" : "Open menu"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute top-1/2 left-0 w-6 h-0.5 bg-white rounded-full"
                  animate={{
                    rotate: isNavOpen ? 45 : 0,
                    top: isNavOpen ? "50%" : "25%",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-1/2 left-0 w-6 h-0.5 bg-white rounded-full"
                  animate={{ opacity: isNavOpen ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-1/2 left-0 w-6 h-0.5 bg-white rounded-full"
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

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            // keep overlay slightly dark for readability, but header itself stays transparent
            className="md:hidden absolute top-full left-0 w-full bg-black/70 backdrop-blur-lg"
          >
            <div className="px-5 py-6 relative z-10">
              <motion.div
                className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              >
                <p className="text-white/80 text-sm font-semibold mb-2 flex items-center">
                  <i className="fas fa-bolt mr-2"></i>
                  Ready to automate?
                </p>
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 text-white rounded-xl text-center font-semibold border border-white/20 hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsNavOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>

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
                      className={`flex items-center space-x-4 px-4 py-4 rounded-2xl text-base font-semibold transition-colors duration-300 border border-white/10 ${
                        location.pathname === item.path
                          ? "text-white bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setIsNavOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5">
                        <i className={`${item.icon} text-white/70`} />
                      </div>
                      <span className="flex-1">{item.name}</span>
                      {location.pathname === item.path && (
                        <motion.div
                          className="w-2 h-2 rounded-full bg-white"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
