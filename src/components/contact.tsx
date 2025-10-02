import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="py-20 container mx-auto px-4 bg-gray-900 min-h-screen"
  >
    <h2
      className="text-4xl md:text-5xl font-orbitron text-center mb-12 glitch"
      data-text="Contact Us"
    >
      Contact Us
    </h2>
    <form className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-[var(--neon-teal)] mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full p-3 rounded bg-gray-800 text-white border-2 border-[var(--neon-teal)]"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-[var(--neon-teal)] mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-3 rounded bg-gray-800 text-white border-2 border-[var(--neon-teal)]"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-[var(--neon-teal)] mb-2">
          Message
        </label>
        <textarea
          id="message"
          className="w-full p-3 rounded bg-gray-800 text-white border-2 border-[var(--neon-teal)]"
          rows={5}
          required
        ></textarea>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="w-full p-3 rounded bg-[var(--neon-purple)] text-white hover:bg-teal-700"
        type="submit"
      >
        Send Message
      </motion.button>
    </form>
  </motion.section>
);

export default Contact;
