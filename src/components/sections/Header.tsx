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
    <header className="fixed top-0 w-full bg-gray-50/90 backdrop-blur-xl border-b-2 border-gray-200 z-50">
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
              <div className="text-[#0077b6] font-bold text-lg hidden">AL</div>
              <span className="text-xl font-bold text-[#0077b6] group-hover:text-[#00b4d8] transition-colors duration-300">
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
                    ? "text-[#0077b6]"
                    : "text-gray-600 hover:text-[#0077b6]"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0077b6]"
                    layoutId="navbar-indicator"
                  />
                )}
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#0077b6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
                className="px-6 py-2.5 bg-[#0077b6] text-white rounded-lg text-sm font-semibold border-2 border-[#0077b6] hover:bg-white hover:text-[#0077b6] transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white border-2 border-gray-300"
              onClick={toggleNav}
              aria-label={isNavOpen ? "Close menu" : "Open menu"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute top-1/2 left-0 w-6 h-0.5 bg-gray-600 rounded-full"
                  animate={{
                    rotate: isNavOpen ? 45 : 0,
                    top: isNavOpen ? "50%" : "25%",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-1/2 left-0 w-6 h-0.5 bg-gray-600 rounded-full"
                  animate={{
                    opacity: isNavOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-1/2 left-0 w-6 h-0.5 bg-gray-600 rounded-full"
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

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-gray-50/95 backdrop-blur-xl border-b-2 border-gray-200 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile CTA */}
              <motion.div
                className="mb-6 p-4 rounded-xl bg-[#0077b6]/5 border-2 border-[#0077b6]/20"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-[#0077b6] text-sm font-semibold mb-2">
                  Ready to automate?
                </p>
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 bg-[#0077b6] text-white rounded-lg text-center font-semibold border-2 border-[#0077b6] hover:bg-white hover:text-[#0077b6] transition-all duration-300"
                  onClick={() => setIsNavOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>

              {/* Navigation Links */}
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 group ${
                        location.pathname === item.path
                          ? "bg-[#0077b6] text-white border-2 border-[#0077b6]"
                          : "text-gray-600 hover:bg-white hover:text-[#0077b6] border-2 border-transparent"
                      }`}
                      onClick={() => setIsNavOpen(false)}
                    >
                      <i
                        className={`${item.icon} w-5 text-center ${
                          location.pathname === item.path
                            ? "text-white"
                            : "text-gray-400 group-hover:text-[#0077b6]"
                        }`}
                      ></i>
                      <span>{item.name}</span>
                      {location.pathname === item.path && (
                        <motion.div
                          className="ml-auto w-2 h-2 rounded-full bg-white"
                          layoutId="mobile-nav-indicator"
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Contact Info */}
              <motion.div
                className="mt-8 pt-6 border-t-2 border-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center justify-center space-x-6 text-gray-500">
                  <a
                    href="mailto:hello@autolinium.com"
                    className="hover:text-[#0077b6] transition-colors duration-300"
                  >
                    <i className="fas fa-envelope text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#0077b6] transition-colors duration-300"
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#0077b6] transition-colors duration-300"
                  >
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                </div>
                <p className="text-center text-gray-500 text-sm mt-4 font-medium">
                  AI-powered automation solutions
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
