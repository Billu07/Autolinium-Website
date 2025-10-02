// src/pages/Subscribe.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Subscribe: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", plan: "basic" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscription submitted! (Mocked)");
    // Integrate with Stripe or backend
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 container mx-auto px-4 bg-gray-900 min-h-screen"
    >
      <h2
        className="text-4xl md:text-5xl font-orbitron text-center mb-12 glitch"
        data-text="Subscribe Now"
      >
        Subscribe Now
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-[var(--neon-teal)] mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded bg-gray-800 text-white border-2 border-[var(--neon-teal)]"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="plan" className="block text-[var(--neon-teal)] mb-2">
            Plan
          </label>
          <select
            id="plan"
            className="w-full p-3 rounded bg-gray-800 text-white border-2 border-[var(--neon-teal)]"
            value={formData.plan}
            onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
          >
            <option value="basic">Basic ($9/mo)</option>
            <option value="pro">Pro ($29/mo)</option>
          </select>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full p-3 rounded bg-[var(--neon-teal)] text-white hover:bg-teal-300"
          type="submit"
        >
          Subscribe
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Subscribe;
