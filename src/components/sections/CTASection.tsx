import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//import bgPattern from "../../assets/project-bg1.png";
import brain3D from "../../assets/ai-brain.png";

const CTASection: React.FC = () => {
  return (
    <section
      id="cta"
      className="relative flex flex-col md:flex-row items-center justify-center overflow-hidden bg-[#050810] py-20 sm:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050810] via-[#0A0F2A] to-[#050810]" />
        {/* Add your background image here */}
        {/* <img src={bgPattern} alt="tech pattern background" className="absolute inset-0 w-full h-full object-cover opacity-10" /> */}
      </div>

      {/* Left (3D visual / AI brain) */}
      <motion.div
        className="relative z-[3] w-full md:w-1/2 flex justify-center items-center px-6 sm:px-10 mb-12 md:mb-0"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <img
            src={brain3D}
            alt="AI automation visualization"
            className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] object-contain drop-shadow-[0_0_50px_rgba(34,211,238,0.3)]"
          />
          {/* soft glowing aura */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl bg-cyan-400/20"
            animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Right (text + CTA) - Updated for Agency Focus */}
      <motion.div
        className="relative z-[4] w-full md:w-1/2 px-6 sm:px-10 text-center md:text-left"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-sm font-medium">
            Ready to Transform?
          </span>
        </motion.div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transform Your Business with{" "}
          <span className="text-cyan-400">AI Automation</span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
          Stop spending hours on repetitive tasks. Our intelligent automation
          solutions handle the work for you—streamlining operations, reducing
          costs, and scaling your business 24/7.
        </p>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg">
          {[
            { icon: "fa-clock", text: "Save 20+ hours/week" },
            { icon: "fa-chart-line", text: "Boost productivity 3x" },
            { icon: "fa-robot", text: "24/7 AI automation" },
            { icon: "fa-dollar-sign", text: "Reduce operational costs" },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 text-gray-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                <i className={`fas ${benefit.icon} text-cyan-400 text-sm`} />
              </div>
              <span className="text-sm font-medium">{benefit.text}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group"
            >
              <span>Start Your Project</span>
              <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold text-lg hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 group"
            >
              <i className="fas fa-play-circle mr-3" />
              <span>View Services</span>
            </Link>
          </motion.div>
        </div>

        {/* Trust Indicator */}
        <motion.div
          className="flex items-center gap-4 mt-8 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <i className="fas fa-check-circle text-green-400" />
            <span>50+ Projects Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-star text-yellow-400" />
            <span>5.0 Rating</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
