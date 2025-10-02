import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Mocked for demo)");
    // Add backend integration here (e.g., Vercel serverless function)
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-20 container mx-auto px-4 bg-gray-900 min-h-screen"
    >
      <h2
        className="text-4xl md:text-5xl font-orbitron text-center mb-12 glitch"
        data-text="Get in Touch"
      >
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-[var(--neon-teal)] mb-2 font-sans"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-3 rounded bg-[var(--bg-dark)] text-white border-2 border-[var(--neon-teal)] focus:border-[var(--neon-pink)] focus:outline-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-[var(--neon-teal)] mb-2 font-sans"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded bg-[var(--bg-dark)] text-white border-2 border-[var(--neon-teal)] focus:border-[var(--neon-pink)] focus:outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-[var(--neon-teal)] mb-2 font-sans"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 rounded bg-[var(--bg-dark)] text-white border-2 border-[var(--neon-teal)] focus:border-[var(--neon-pink)] focus:outline-none"
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 10px var(--neon-teal)" }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-3 rounded bg-[var(--neon-teal)] text-white hover:bg-teal-300 transition"
          type="submit"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
};
export default Contact;
