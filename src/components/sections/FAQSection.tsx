import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { staggerContainer, cardVariants } from "../../utils/animationVariants";

const FAQSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const toggleFaq = useCallback(
    (index: number) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
    },
    [openFaqIndex]
  );

  const faqItems = [
    {
      question: "How does AI automation integrate with our existing team?",
      answer:
        "Our AI solutions are designed to augment human capabilities, not replace them. We focus on automating repetitive tasks, allowing your team to focus on strategic work that requires human creativity and decision-making. Most clients see improved job satisfaction as employees transition to more meaningful work.",
      category: "Implementation",
    },
    {
      question:
        "What's the typical timeline for custom automation development?",
      answer:
        "Most custom CRM and automation projects are delivered within 2-6 weeks, depending on complexity. We follow an agile methodology with weekly progress updates. Simple workflow automations can often be deployed in as little as 1-2 weeks.",
      category: "Timeline",
    },
    {
      question: "What technical expertise is required from our team?",
      answer:
        "None required. We handle all technical implementation and provide comprehensive training and documentation. Our solutions are designed for business users with intuitive interfaces. We also offer ongoing support to ensure your team feels confident using the new systems.",
      category: "Technical Requirements",
    },
    {
      question: "What kind of support and maintenance do you provide?",
      answer:
        "We offer comprehensive support packages including 24/7 monitoring, regular updates, and dedicated account management. Our SLA guarantees 99.9% uptime and rapid response times for any issues that may arise.",
      category: "Support",
    },
    {
      question: "How do you ensure data security and compliance?",
      answer:
        "We implement enterprise-grade security measures including encryption, access controls, and regular security audits. Our solutions are compliant with major regulations like GDPR and CCPA, and we can help you maintain industry-specific compliance requirements.",
      category: "Security",
    },
  ];

  return (
    <section
      ref={ref}
      className="section section-bg section-bg-primary py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            variants={cardVariants}
          >
            Frequently{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Asked Questions
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            Get answers to common questions about our automation solutions and
            implementation process.
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
          role="region"
          aria-label="Frequently Asked Questions"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="mb-4 sm:mb-6"
            >
              <motion.div
                className="card p-6 sm:p-8 hover:border-blue-400/40 transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -2 }}
                onClick={() => toggleFaq(index)}
              >
                <button
                  className="w-full text-left flex justify-between items-start gap-4 sm:gap-6"
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex-1">
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3 border border-blue-400/30">
                      {item.category}
                    </div>

                    {/* Question */}
                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-200 text-left leading-relaxed">
                      {item.question}
                    </h3>

                    {/* Answer */}
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={
                        openFaqIndex === index
                          ? {
                              opacity: 1,
                              height: "auto",
                            }
                          : {
                              opacity: 0,
                              height: 0,
                            }
                      }
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mt-4 pt-4 border-t border-[var(--card-border)]">
                        {item.answer}
                      </p>
                    </motion.div>
                  </div>

                  {/* Chevron Icon */}
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-200 mt-6"
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fas fa-chevron-down text-blue-400 text-sm"></i>
                  </motion.div>
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-[var(--secondary-bg)] to-[var(--tertiary-bg)] rounded-xl sm:rounded-2xl border border-[var(--card-border)] p-6 sm:p-8 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Still Have Questions?
            </h3>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 sm:mb-6">
              Our automation experts are here to help you find the perfect
              solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-comments mr-2 sm:mr-3"></i>
                Contact Support
              </button>
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold text-sm sm:text-base hover:bg-blue-400 hover:text-white transition-all duration-300">
                Schedule Demo
                <i className="fas fa-calendar ml-2 sm:ml-3"></i>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
