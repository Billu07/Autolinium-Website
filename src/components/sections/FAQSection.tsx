import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "Implementation",
    question: "How does AI automation integrate with our existing team?",
    answer:
      "Our AI solutions are designed to enhance—not replace—your team. We focus on automating repetitive tasks so your people can focus on strategic and creative work. Most clients report better productivity and employee satisfaction within weeks.",
  },
  {
    category: "Timeline",
    question: "What's the typical timeline for custom automation development?",
    answer:
      "Most projects are completed within 2–6 weeks depending on complexity. We use an agile approach with weekly milestones and progress updates. Simpler automations can be deployed in as little as 7–10 days.",
  },
  {
    category: "Technical",
    question: "What technical expertise is required from our team?",
    answer:
      "None. We handle all implementation and setup. Our tools are user-friendly and designed for non-technical teams. We also provide complete training and documentation to ensure your team is confident and self-sufficient.",
  },
  {
    category: "Support",
    question: "What kind of support and maintenance do you provide?",
    answer:
      "We offer tiered support including 24/7 monitoring, maintenance, and system optimization. Our SLA guarantees 99.9% uptime, and dedicated managers ensure smooth communication and fast resolutions.",
  },
  {
    category: "Security",
    question: "How do you ensure data security and compliance?",
    answer:
      "Our infrastructure follows enterprise-grade security protocols—data encryption, role-based access, and continuous monitoring. We adhere to GDPR and CCPA, and can accommodate industry-specific compliance standards.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about Autolinium's automation,
            integration, and AI services.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#0F172A]/80 to-[#0F172A]/90 border border-cyan-400/20 rounded-2xl backdrop-blur-sm shadow-2xl shadow-black/20 hover:shadow-cyan-500/10 transition-all duration-300 group overflow-hidden"
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-400/0 to-blue-400/0 group-hover:from-blue-500/5 group-hover:via-cyan-400/3 group-hover:to-blue-400/5 transition-all duration-500 rounded-2xl" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-blue-500/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:via-blue-500/5 group-hover:to-cyan-400/10 transition-all duration-700 opacity-0 group-hover:opacity-100 blur-sm" />

              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left flex justify-between items-center p-6 sm:p-8 focus:outline-none relative z-10"
              >
                <div className="flex-1">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-semibold mb-3 border border-cyan-400/20">
                    {faq.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug group-hover:text-cyan-100 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center ml-4 shadow-lg shadow-cyan-500/25"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-chevron-down text-white text-sm" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 sm:px-8 pb-6 sm:pb-8 relative z-10"
                  >
                    <div className="border-t border-cyan-400/20 pt-4">
                      <p className="text-gray-300 leading-relaxed text-base sm:text-lg group-hover:text-gray-200 transition-colors duration-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300 rounded-b-xl" />
            </motion.div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center backdrop-blur-sm bg-gradient-to-r from-white/5 to-white/10 rounded-2xl px-8 py-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <p className="text-gray-300 text-lg sm:text-xl font-medium text-center sm:text-left">
              Still have questions? Let's talk.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-bold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 flex items-center gap-3 group border border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/contact")}
            >
              <span>Book a Call</span>
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

export default FAQSection;
