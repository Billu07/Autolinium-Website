import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Consult & Understand",
    description:
      "We analyze your workflows, goals, and challenges to design a precise automation strategy tailored to your business.",
    icon: "fas fa-brain",
  },
  {
    id: 2,
    title: "Plan & Integrate",
    description:
      "We architect the perfect automation blueprint — integrating tools like n8n, Make, or Vapi seamlessly with your systems.",
    icon: "fas fa-cogs",
  },
  {
    id: 3,
    title: "Deploy & Test",
    description:
      "Our engineers build, test, and refine your automations to ensure flawless performance and high reliability.",
    icon: "fas fa-rocket",
  },
  {
    id: 4,
    title: "Optimize & Scale",
    description:
      "We continuously monitor and optimize workflows, ensuring scalability and peak efficiency as your business grows.",
    icon: "fas fa-chart-line",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#00000d]"
    >
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A clear, collaborative process that transforms your operations into
            seamless automated systems.
          </motion.p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line - Gradient */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/20 via-cyan-400/30 to-blue-400/20 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Step Circle - Gradient */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-2xl border-2 border-cyan-400/50 group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 mb-6 relative z-10">
                  <i className={step.icon}></i>
                </div>

                {/* Connector dots for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                )}

                {/* Step Content - Updated to match ServicesSection cards */}
                <div className="relative bg-gradient-to-br from-[#0F172A]/80 to-[#0F172A]/90 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-sm shadow-2xl shadow-black/20 hover:shadow-cyan-500/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-cyan-400/40 overflow-hidden">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-400/0 to-blue-400/0 group-hover:from-blue-500/5 group-hover:via-cyan-400/3 group-hover:to-blue-400/5 transition-all duration-500 rounded-2xl" />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-blue-500/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:via-blue-500/5 group-hover:to-cyan-400/10 transition-all duration-700 opacity-0 group-hover:opacity-100 blur-sm" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step number */}
                <div className="absolute md:top-1/2 md:-right-4 top-[-10px] right-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-sm font-bold flex items-center justify-center border-2 border-[#00000d] shadow-lg shadow-cyan-500/25 z-20">
                  {step.id}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center backdrop-blur-sm bg-gradient-to-r from-white/5 to-white/10 rounded-2xl px-8 py-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <p className="text-gray-300 text-lg sm:text-xl font-medium text-center sm:text-left">
              Ready to start your automation journey?
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-bold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 flex items-center gap-3 group border border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/contact")}
            >
              <span>Begin Process</span>
              <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#00000d]" />
    </section>
  );
};

export default ProcessSection;
