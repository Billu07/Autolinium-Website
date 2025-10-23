import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "../../assets/hero-bg3.webp";

const faqs = [
  {
    category: "Implementation",
    question: "How does AI automation integrate with our existing team?",
    answer:
      "Our AI solutions are designed to enhance—not replace—your team. We focus on automating repetitive tasks so your people can focus on strategic and creative work. Most clients report better productivity and employee satisfaction within weeks.",
    icon: "fa-users",
  },
  {
    category: "Timeline",
    question: "What's the typical timeline for custom automation development?",
    answer:
      "Most projects are completed within 2–6 weeks depending on complexity. We use an agile approach with weekly milestones and progress updates. Simpler automations can be deployed in as little as 7–10 days.",
    icon: "fa-calendar-alt",
  },
  {
    category: "Technical",
    question: "What technical expertise is required from our team?",
    answer:
      "None. We handle all implementation and setup. Our tools are user-friendly and designed for non-technical teams. We also provide complete training and documentation to ensure your team is confident and self-sufficient.",
    icon: "fa-cogs",
  },
  {
    category: "Support",
    question: "What kind of support and maintenance do you provide?",
    answer:
      "We offer tiered support including 24/7 monitoring, maintenance, and system optimization. Our SLA guarantees 99.9% uptime, and dedicated managers ensure smooth communication and fast resolutions.",
    icon: "fa-headset",
  },
  {
    category: "Security",
    question: "How do you ensure data security and compliance?",
    answer:
      "Our infrastructure follows enterprise-grade security protocols—data encryption, role-based access, and continuous monitoring. We adhere to GDPR and CCPA, and can accommodate industry-specific compliance standards.",
    icon: "fa-shield-alt",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const filteredFaqs = faqs;

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-24 overflow-hidden bg-[#050810]"
    >
      {/* === Background === */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070B] via-[#0A0F2A] to-[#010205]" />
        <img
          src={heroBg}
          alt="FAQ background"
          className="absolute inset-0 w-full h-[110%] object-cover opacity-10"
        />
      </div>

      {/* === Main Container === */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Header === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-5 sm:mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">FAQ</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Common Questions
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Quick answers to your most frequent questions about automation and
            AI integration
          </motion.p>
        </motion.div>

        {/* === FAQ List === */}
        <div className="max-w-5xl mx-auto relative">
          {/* timeline line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/20 via-blue-400/20 to-cyan-400/20" />

          <div className="space-y-10 sm:space-y-8">
            <AnimatePresence mode="wait">
              {filteredFaqs.map((faq, i) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 group"
                >
                  {/* === Icon === */}
                  <div className="flex-shrink-0 relative z-10 self-start sm:self-auto mx-auto sm:mx-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-lg sm:text-xl shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-all duration-300">
                      <i className={`fas ${faq.icon}`} />
                    </div>
                  </div>

                  {/* === FAQ Text === */}
                  <div className="flex-1 min-w-0 w-full">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full text-left focus:outline-none"
                    >
                      <div className="mb-3 sm:mb-4">
                        <span className="inline-block text-cyan-400 text-xs sm:text-sm font-semibold mb-1 sm:mb-2 tracking-wide">
                          {faq.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-cyan-100 transition-colors duration-300">
                          {faq.question}
                        </h3>
                      </div>

                      <AnimatePresence initial={false}>
                        {openIndex === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="border-l-2 border-cyan-400/40 pl-4 sm:pl-6 ml-1 sm:ml-2">
                              <p className="text-gray-300 leading-relaxed text-base sm:text-lg py-2">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-3 sm:mt-4">
                        <span>
                          {openIndex === i ? "Show less" : "Show more"}
                        </span>
                        <motion.i
                          className={`fas fa-chevron-${
                            openIndex === i ? "up" : "down"
                          } text-xs`}
                          animate={{ rotate: openIndex === i ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* === CTA === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-14 sm:mt-16"
        >
          <p className="text-gray-300 text-base sm:text-lg mb-5 sm:mb-6 px-4 sm:px-0">
            Didn't find your answer? We're here to help.
          </p>
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 inline-flex items-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/contact")}
          >
            <i className="fas fa-comments" />
            <span>Ask Your Question</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
