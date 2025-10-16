import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Consult & Understand",
    description:
      "We analyze your workflows, goals, and challenges to design a precise automation strategy tailored to your business.",
    icon: "🧠",
  },
  {
    id: 2,
    title: "Plan & Integrate",
    description:
      "We architect the perfect automation blueprint — integrating tools like n8n, Make, or Vapi seamlessly with your systems.",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Deploy & Test",
    description:
      "Our engineers build, test, and refine your automations to ensure flawless performance and high reliability.",
    icon: "🚀",
  },
  {
    id: 4,
    title: "Optimize & Scale",
    description:
      "We continuously monitor and optimize workflows, ensuring scalability and peak efficiency as your business grows.",
    icon: "📈",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="relative py-28 bg-white overflow-hidden">
      {/* Premium Leafy Background Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Leaf Blob - Top Left */}
        <div
          className="absolute -top-20 -left-20 w-80 h-80 opacity-8"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 119, 182, 0.02) 0%, transparent 70%)",
            filter: "blur(25px)",
            transform: "rotate(-15deg)",
            borderRadius: "60% 40% 70% 30% / 40% 60% 30% 70%",
          }}
        />

        {/* Medium Leaf Blob - Bottom Right */}
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 opacity-6"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 180, 216, 0.015) 0%, transparent 70%)",
            filter: "blur(20px)",
            transform: "rotate(25deg)",
            borderRadius: "50% 50% 70% 30% / 60% 40% 60% 40%",
          }}
        />

        {/* Small Leaf Blob - Center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-4"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 119, 182, 0.01) 0%, transparent 70%)",
            filter: "blur(15px)",
            transform: "rotate(10deg)",
            borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0077b6]">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A clear, collaborative process that transforms your operations into
            seamless automated systems.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line - Solid color */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-[#0077b6]/20 transform -translate-y-1/2" />

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
                {/* Step Circle - Solid colors */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#0077b6] text-white text-3xl border-2 border-[#0077b6] group-hover:bg-[#00b4d8] group-hover:border-[#00b4d8] transition-all duration-300 shadow-lg shadow-[#0077b6]/20 mb-6 relative z-10">
                  {step.icon}
                </div>

                {/* Connector dots for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#0077b6]/30" />
                )}

                {/* Step Content */}
                <div className="bg-white border-2 border-[#0077b6] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>

                {/* Step number - Subtle background */}
                <div className="absolute md:top-1/2 md:-right-4 top-[-10px] right-4 w-8 h-8 rounded-full bg-[#0077b6] text-white text-sm font-bold flex items-center justify-center border-2 border-white shadow-lg z-20">
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
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center bg-gray-50 rounded-xl px-8 py-6 border-2 border-[#0077b6] relative overflow-hidden">
            {/* CTA Background Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,25 Q25,20 30,25 Q35,30 30,35 Q25,40 20,35 Q15,30 20,25' fill='%230077b6'/%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            />
            <p className="text-gray-700 text-lg sm:text-xl font-medium text-center sm:text-left relative z-10">
              Ready to start your automation journey?
            </p>
            <motion.button
              className="px-8 py-4 bg-[#0077b6] text-white rounded-lg font-bold hover:bg-[#00b4d8] transition-all duration-300 flex items-center gap-3 group relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/contact")}
            >
              <span>Begin Process</span>
              <i className="fas fa-play transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#0077b6]" />
    </section>
  );
};

export default ProcessSection;
