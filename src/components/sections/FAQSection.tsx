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
      className="relative py-28 bg-gradient-to-b from-[#f8fbff] to-white overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[30rem] h-[30rem] opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,180,216,0.05) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[35rem] h-[35rem] opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,119,182,0.05) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0077b6]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to know about Autolinium’s automation,
            integration, and AI services.
          </p>
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
              className="rounded-xl border border-[#0077b6]/20 bg-white/80 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left flex justify-between items-center p-6 sm:p-8 focus:outline-none"
              >
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#00b4d8]/10 text-[#0077b6] text-xs font-semibold mb-2">
                    {faq.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <motion.i
                  className="fas fa-chevron-down text-[#0077b6] ml-4"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 sm:px-8 pb-6 sm:pb-8"
                  >
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-[#f8fbff]/80 border border-[#0077b6]/20 rounded-xl px-8 py-6 shadow-md">
            <p className="text-gray-700 text-lg sm:text-xl font-medium">
              Still have questions? Let’s talk.
            </p>
            <button className="px-8 py-4 bg-[#0077b6] text-white rounded-lg font-semibold hover:bg-[#00b4d8] transition-all duration-300">
              Book a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
