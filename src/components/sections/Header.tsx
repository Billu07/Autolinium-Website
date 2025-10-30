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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNavOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo / Brand - Optimized for mobile */}
          <motion.div
            className="flex items-center space-x-2 md:space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="flex items-center space-x-2 md:space-x-3 group"
              aria-label="Autolinium Home"
            >
              <img
                src="/assets/autolinium-logo.webp"
                alt="Autolinium"
                className="w-4 h-6 md:w-10 md:h-10 object-contain"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const nextEl = e.currentTarget
                    .nextSibling as HTMLElement | null;
                  if (nextEl) nextEl.style.display = "block";
                }}
              />
              <div className="text-cyan-400 font-bold text-base md:text-lg hidden">
                AL
              </div>
              <span className="text-lg md:text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                Autolinium
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
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
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/80"
                    layoutId="navbar-indicator"
                  />
                )}
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-white/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* Right: Theme + CTA + Mobile toggle */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Desktop CTA - Hidden on mobile to save space */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="px-4 lg:px-6 py-2 lg:py-2.5 text-sm font-semibold rounded-xl border border-white/30 text-white/90 hover:text-white hover:border-white transition-all duration-300 whitespace-nowrap"
              >
                Get Started
              </Link>
            </motion.div>

            <ThemeToggle />

            {/* Mobile menu button - Optimized touch target */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/20 backdrop-blur-sm touch-manipulation"
              onClick={toggleNav}
              aria-label={isNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={isNavOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-5 h-5 md:w-6 md:h-6">
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

      {/* Mobile Navigation - Full screen for better mobile experience */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-lg pt-16"
          >
            <div className="h-full overflow-y-auto pb-8">
              <div className="px-4 py-6 relative z-10">
                {/* Mobile CTA - Prominent placement */}
                <motion.div
                  className="mb-6 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                >
                  <p className="text-white/90 text-sm font-semibold mb-3 flex items-center justify-center text-center">
                    <i className="fas fa-bolt mr-2 text-cyan-400"></i>
                    Ready to automate?
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full px-4 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl text-center font-semibold transition-all duration-300 active:scale-95 touch-manipulation"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Get Started Now
                  </Link>
                </motion.div>

                {/* Navigation Items - Larger touch targets */}
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
                        className={`flex items-center space-x-4 px-4 py-4 rounded-2xl text-base font-semibold transition-all duration-300 border border-white/10 active:scale-98 touch-manipulation min-h-[60px] ${
                          location.pathname === item.path
                            ? "text-white bg-white/15 border-white/30"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                        onClick={() => setIsNavOpen(false)}
                      >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 flex-shrink-0">
                          <i className={`${item.icon} text-white/80 text-sm`} />
                        </div>
                        <span className="flex-1 text-base">{item.name}</span>
                        {location.pathname === item.path && (
                          <motion.div
                            className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0"
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

                {/* Additional mobile-friendly footer */}
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

            {/* Close on outside tap - Better mobile UX */}
            <div
              className="absolute inset-0 -z-10"
              onClick={() => setIsNavOpen(false)}
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
