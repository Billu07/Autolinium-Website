import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "AutoCRM", path: "/products/autocrm" },
        { name: "BotFlow", path: "/products/botflow" },
        { name: "DataSync", path: "/products/datasync" },
        { name: "CloudAI", path: "/products/cloudai" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Pricing", path: "/pricing" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", path: "/docs" },
        { name: "Blog", path: "/blog" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Support", path: "/support" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Security", path: "/security" },
        { name: "Compliance", path: "/compliance" },
      ],
    },
  ];

  const socialLinks = [
    { icon: "fab fa-linkedin-in", url: "#", label: "LinkedIn" },
    { icon: "fab fa-twitter", url: "#", label: "Twitter" },
    { icon: "fab fa-github", url: "#", label: "GitHub" },
    { icon: "fab fa-discord", url: "#", label: "Discord" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12">
          {/* Brand Section - Full width on mobile */}
          <motion.div
            className="sm:col-span-2 lg:col-span-2 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1">
                  <img
                    src="/assets/autolinium-logo.png"
                    alt="Autolinium"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Autolinium
                </span>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base max-w-md mx-auto sm:mx-0">
              Building intelligent automation solutions that transform
              businesses. AI-powered tools for the modern enterprise.
            </p>

            {/* Social Links - Centered on mobile */}
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <i className={`${social.icon} text-sm sm:text-base`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links Sections - 2 columns on mobile */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: sectionIndex * 0.1 + linkIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm font-medium block py-1"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section - Stacked on mobile */}
        <motion.div
          className="mt-12 sm:mt-16 pt-8 border-t border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left flex-1">
              <h3 className="text-white font-semibold text-lg mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm max-w-md">
                Get the latest news and updates about our AI automation
                platform.
              </p>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/80 transition-all duration-300 text-sm"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center sm:text-left">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar - Stacked on mobile */}
      <div className="border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <motion.p
              className="text-gray-500 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              &copy; {currentYear} Autolinium. All rights reserved.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-500 text-xs sm:text-sm text-center sm:text-left order-1 sm:order-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="hidden sm:block">
                Building the future of business automation
              </span>
              <div className="flex items-center space-x-1 text-green-400">
                <i className="fas fa-circle text-xs"></i>
                <span className="text-xs">All systems operational</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
