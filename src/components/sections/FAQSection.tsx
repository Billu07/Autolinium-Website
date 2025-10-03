import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const faqAnswerVariants = {
  hidden: { opacity: 0, height: 0, marginTop: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    marginTop: "0.5rem",
    transition: {
      opacity: { duration: 0.3 },
      height: { duration: 0.3, ease: "easeOut" },
      marginTop: { duration: 0.3 },
    },
  },
};

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
      question: "Will your AI steal my job?",
      answer:
        "Nah, it'll just make you look like a superstar by handling the boring stuff while you sip coffee!",
    },
    {
      question: "How fast can you build my custom CRM?",
      answer:
        "Faster than you can say 'spreadsheet nightmare'—usually in weeks, depending on your needs!",
    },
    {
      question: "Can your chatbots handle my sassy customers?",
      answer:
        "Oh, they're sass-proof! Our AI chats quicker and wittier than your wittiest team member.",
    },
    {
      question: "What if I'm not tech-savvy?",
      answer:
        "No tech degree needed! We make it so easy, even your grandma could run your biz from her phone.",
    },
    {
      question: "Are your solutions affordable for small businesses?",
      answer:
        "Yup, we've got plans that won't break the bank—think rocket fuel prices, not rocket ship!",
    },
    {
      question: "Can you integrate with my existing tools?",
      answer:
        "Like peanut butter and jelly! We'll hook up Slack, Gmail, or whatever you're using in a snap.",
    },
  ];

  return (
    <section ref={ref} className="section bg-[var(--primary-bg)]">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="container"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Frequently Asked Questions
        </h2>

        <div
          className="faq-container"
          role="region"
          aria-label="Frequently Asked Questions"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="faq-item border-b border-[var(--card-border)]"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="faq-question w-full text-left py-4 text-[var(--accent-blue)] text-lg sm:text-xl font-semibold flex justify-between items-center hover:text-[var(--card-border)] transition-colors duration-200"
                aria-expanded={openFaqIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <motion.i
                  className={`fas ${
                    openFaqIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                  } text-[var(--accent-blue)]`}
                  animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </button>

              <motion.div
                id={`faq-answer-${index}`}
                variants={faqAnswerVariants}
                initial="hidden"
                animate={openFaqIndex === index ? "visible" : "hidden"}
                className="faq-answer text-[var(--text-secondary)] text-sm sm:text-base overflow-hidden"
              >
                <p className="pb-4">{item.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
