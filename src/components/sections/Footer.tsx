import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonVariants } from "../../utils/animationVariants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-6 text-center">
      <p className="mb-4">&copy; 2025 Autolinium. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="#"
          className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="#"
          className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <motion.div variants={buttonVariants} animate="pulse">
        <Link
          to="/contact"
          className="button bg-[var(--accent-blue)] hover:bg-[var(--accent-deep-teal)]"
        >
          Drop A Line
        </Link>
      </motion.div>

      <div className="mt-6 text-sm text-[var(--text-secondary)]">
        <p>Building the future of business automation</p>
      </div>
    </footer>
  );
};

export default Footer;
