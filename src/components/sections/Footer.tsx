import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bgImg from "/src/assets/pro-bg.webp";
import logo from "/src/assets/logo.webp";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Process Automation", path: "/services/process-automation" },
        { name: "AI & Chatbots", path: "/services/ai-chatbots" },
        { name: "App Development", path: "/services/app-web-development" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", path: "/docs" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Support", path: "/support" },
      ],
    },
  ];

  // Updated social links
  const socialLinks = [
    {
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/people/Autolinium/61579833773688/",
      label: "Facebook",
    },
    {
      icon: "fab fa-whatsapp",
      url: " wa.me/8801742425796",
      label: "WhatsApp",
    },
    {
      icon: "fab fa-upwork",
      url: "https://www.upwork.com/freelancers/~01881dc186a6673f48?mp_source=share",
      label: "Upwork",
    },
    {
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/company/autolinium",
      label: "LinkedIn",
    },
    {
      icon: "fas fa-briefcase",
      url: "https://portfolio.autolinium.com",
      label: "Portfolio",
    },
  ];

  return (
    <footer className="relative bg-[#050810] border-t border-white/10 overflow-hidden">
      {/* === Background === */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#010205] to-[#000000]" />
        <img
          src={bgImg}
          alt="Footer background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
      </div>

      {/* === Main Footer Content === */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {/* === Brand Section === */}
          <motion.div
            className="lg:col-span-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-3 group mb-6"
            >
              {/* Replaced "AL" with logo */}
              <img
                src={logo}
                alt="Autolinium Logo"
                className="w-10 h-10 rounded-xl object-contain bg-white/10 p-1"
              />
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Autolinium
              </span>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Building intelligent automation solutions that transform
              businesses through AI-powered tools and custom development.
            </p>

            {/* === Social Links === */}
            <div className="flex justify-center lg:justify-start space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <i className={`${social.icon} text-sm`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* === Footer Links Sections === */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-6 text-base">
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
                      className="text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium block py-1 group"
                    >
                      <span className="flex items-center lg:justify-start justify-center">
                        <i className="fas fa-arrow-right text-xs mr-3 text-cyan-400/0 group-hover:text-cyan-400 group-hover:mr-3 transition-all duration-300"></i>
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* === Contact / CTA Section === */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6 text-base">
              Get Started
            </h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:office@autolinium.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium group"
                whileHover={{ x: 5 }}
              >
                <i className="fas fa-envelope mr-3"></i>
                office@autolinium.com
              </motion.a>

              <motion.a
                href="tel:+8801743425796"
                className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium group"
                whileHover={{ x: 5 }}
              >
                <i className="fas fa-phone mr-3"></i>
                +880 1742-425796
              </motion.a>

              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  to="https://calendar.app.google/1YYTXKxWK5PFaSzV8"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
                >
                  <span>Let's Have a Talk</span>
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* === Newsletter Section === */}
        <motion.div
          className="mt-16 pt-12 border-t border-white/10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg mb-3">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Get the latest insights on AI automation and business
              transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 text-sm"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === Bottom Bar === */}
      <div className="relative z-10 border-t border-white/10 bg-[#070B15]/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <motion.p
              className="text-gray-400 text-sm flex items-center justify-center md:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <i className="fas fa-copyright mr-2 text-cyan-400/60"></i>
              {currentYear} Autolinium. All rights reserved.
            </motion.p>

            <motion.div
              className="flex items-center gap-6 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to="/privacy"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Terms
              </Link>
              <div className="flex items-center gap-2 text-green-400">
                <i className="fas fa-circle text-xs animate-pulse"></i>
                <span className="text-xs">Systems Operational</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
