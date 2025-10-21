import React from "react";
import { motion } from "framer-motion";

const StatsSection: React.FC = () => {
  const stats = [
    { number: 257, label: "Projects" },
    { number: 65, label: "Companies Served" },
    { number: 5, label: "Years" },
    { number: 2, label: "Offices" },
  ];

  return (
    <section className="relative bg-[#050810] py-10 sm:py-2 flex justify-center items-center overflow-hidden">
      {/* Background matching your site */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#0A0F2A] to-[#050810] opacity-90" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col sm:flex-row justify-center items-center sm:divide-x divide-cyan-500/20">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center px-6 sm:px-8 py-4 text-center"
          >
            {/* Large faint number */}
            <div className="relative">
              <span className="text-[12vw] sm:text-[8vw] md:text-[6vw] font-extrabold text-white/5 select-none leading-none">
                {stat.number}
              </span>
              {/* Label overlay */}
              <span className="absolute inset-0 flex items-center justify-center text-cyan-100 text-base sm:text-lg font-semibold">
                {stat.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
