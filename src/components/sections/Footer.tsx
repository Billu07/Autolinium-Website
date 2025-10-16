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
    <footer className="bg-gray-50/90 backdrop-blur-xl border-t-2 border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section - Matches Header Logo */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/"
              className="flex items-center space-x-3 group justify-center md:justify-start mb-6"
            >
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

            <p className="text-gray-600 mb-8 leading-relaxed text-base max-w-md mx-auto md:mx-0">
              Building intelligent automation solutions that transform
              businesses. AI-powered tools for the modern enterprise.
            </p>

            {/* Social Links - Matches Header Style */}
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  className="w-10 h-10 rounded-lg bg-white border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#0077b6] hover:border-[#0077b6] transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.05 }}
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

          {/* Footer Links Sections - Matches Navigation Style */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-gray-900 font-semibold mb-6 text-base">
                {section.title}
              </h3>
              <ul className="space-y-3">
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
                      className="text-gray-600 hover:text-[#0077b6] transition-colors duration-300 text-sm font-semibold block py-1 relative group"
                    >
                      {link.name}
                      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#0077b6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section - Matches Header CTA */}
        <motion.div
          className="mt-16 pt-12 border-t-2 border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left flex-1">
              <h3 className="text-gray-900 font-semibold text-lg mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-sm max-w-md">
                Get the latest news and updates about our AI automation
                platform.
              </p>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0077b6] transition-all duration-300 text-sm"
                />
                <motion.button
                  className="px-6 py-2.5 bg-[#0077b6] text-white rounded-lg text-sm font-semibold border-2 border-[#0077b6] hover:bg-white hover:text-[#0077b6] transition-all duration-300 whitespace-nowrap"
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

      {/* Bottom Bar - Matches Header Border */}
      <div className="border-t-2 border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
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
              className="flex items-center gap-4 text-gray-600 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="hidden md:block font-semibold">
                AI-powered automation solutions
              </span>
              <div className="flex items-center gap-2 text-green-600">
                <i className="fas fa-circle text-xs"></i>
                <span className="text-sm font-semibold">
                  All systems operational
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
