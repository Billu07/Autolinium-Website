import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Short Generator", path: "/products/autocrm" },
        { name: "Business Chatbot", path: "/products/botflow" },
        { name: "AI Voice Assistant", path: "/products/datasync" },
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
    <footer className="bg-gray-50 border-t-2 border-gray-200">
      {/* Premium Leafy Background Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Leaf Blob - Bottom Left */}
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 opacity-5"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 119, 182, 0.02) 0%, transparent 70%)",
            filter: "blur(20px)",
            transform: "rotate(-15deg)",
            borderRadius: "60% 40% 70% 30% / 40% 60% 30% 70%",
          }}
        />

        {/* Leaf Blob - Bottom Right */}
        <div
          className="absolute -bottom-16 -right-16 w-56 h-56 opacity-4"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 180, 216, 0.015) 0%, transparent 70%)",
            filter: "blur(18px)",
            transform: "rotate(25deg)",
            borderRadius: "50% 50% 70% 30% / 60% 40% 60% 40%",
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block mb-6 group">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-[#0077b6] flex items-center justify-center group-hover:bg-[#00b4d8] transition-colors duration-300">
                  <img
                    src="/assets/autolinium-logo.png"
                    alt="Autolinium"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-[#0077b6] group-hover:text-[#00b4d8] transition-colors duration-300">
                  Autolinium
                </span>
              </div>
            </Link>

            <p className="text-gray-600 mb-8 leading-relaxed text-base max-w-md mx-auto md:mx-0">
              Building intelligent automation solutions that transform
              businesses. AI-powered tools for the modern enterprise.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  className="w-10 h-10 rounded-lg bg-white border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#0077b6] hover:border-[#0077b6] hover:bg-[#0077b6]/5 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <i className={`${social.icon} text-base`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-gray-900 font-bold mb-6 text-lg border-b-2 border-[#0077b6] pb-2 inline-block">
                {section.title}
              </h3>
              <ul className="space-y-3 mt-4">
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
                      className="text-gray-600 hover:text-[#0077b6] transition-colors duration-300 text-base font-medium block py-1 hover:translate-x-1 transition-transform duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-16 pt-12 border-t-2 border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left flex-1">
              <h3 className="text-gray-900 font-bold text-xl mb-3">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-base max-w-md">
                Get the latest news and updates about our AI automation
                platform.
              </p>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0077b6] focus:bg-white transition-all duration-300 text-base"
                />
                <motion.button
                  className="px-8 py-3 bg-[#0077b6] text-white rounded-lg font-bold hover:bg-[#00b4d8] transition-all duration-300 flex items-center justify-center gap-2 group border-2 border-[#0077b6] hover:border-[#00b4d8]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Subscribe</span>
                  <i className="fas fa-paper-plane transform group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
              <p className="text-gray-500 text-sm mt-3 text-center sm:text-left">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-gray-200 bg-white">
        <div className="container mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              className="text-gray-600 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              &copy; {currentYear} Autolinium. All rights reserved.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-gray-600 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="hidden md:block font-medium">
                Building the future of business automation
              </span>
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full border-2 border-green-200">
                <i className="fas fa-circle text-xs"></i>
                <span className="text-sm font-medium">
                  All systems operational
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="w-full h-2 bg-[#0077b6]" />
    </footer>
  );
};

export default Footer;
