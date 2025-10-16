import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { staggerContainer, cardVariants } from "../../utils/animationVariants";

const ServicesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const services = [
    {
      id: "automation",
      title: "Process Automation",
      description:
        "Automate CRMs and business workflows using Make, n8n, Zapier, and Airtable — increasing efficiency and scalability.",
      link: "/services/process-automation",
      thumbnail: "/assets/images/automation-thumb.jpg", // placeholder
      projects: [
        "Sales CRM Automation for FinTech",
        "Lead Management Workflow",
        "Zapier-Linked Billing Process",
      ],
      gradient: "from-blue-500/20 to-cyan-400/10",
    },
    {
      id: "chatbots",
      title: "Business Chatbots",
      description:
        "Deploy WhatsApp, Facebook, and Instagram bots that interact with customers 24/7 — integrated directly with your systems.",
      link: "/services/business-chatbots",
      thumbnail: "/assets/images/chatbot-thumb.jpg",
      projects: [
        "WhatsApp Bot for Agency",
        "Instagram DM Automation",
        "Messenger AI Assistant",
      ],
      gradient: "from-green-500/20 to-teal-400/10",
    },
    {
      id: "ai-agents",
      title: "AI Agents",
      description:
        "Voice and text-based AI agents powered by GPT and Vapi — built for support, scheduling, and lead handling.",
      link: "/services/ai-agents",
      thumbnail: "/assets/images/aiagent-thumb.jpg",
      projects: [
        "Voice Agent for Real Estate",
        "Customer Support Bot",
        "24/7 AI Booking Assistant",
      ],
      gradient: "from-purple-500/20 to-pink-500/10",
    },
    {
      id: "dev",
      title: "App & Web Development",
      description:
        "Custom web and mobile apps crafted with React, Next.js, Node, and AWS — designed for performance and security.",
      link: "/services/app-web-development",
      thumbnail: "/assets/images/dev-thumb.jpg",
      projects: [
        "SaaS Dashboard for Analytics",
        "Custom Booking Platform",
        "Marketing Website Revamp",
      ],
      gradient: "from-orange-500/20 to-yellow-400/10",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0A0F1A] via-[#070B12] to-[#05080E] overflow-hidden"
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

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.h2
            variants={cardVariants}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-lg sm:text-xl text-gray-400 leading-relaxed"
          >
            From automation to AI agents — we design smart, scalable solutions
            that elevate every aspect of your business.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-16 sm:space-y-24 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: i * 0.15 }}
              className={`relative group flex flex-col md:flex-row items-center gap-8 p-6 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 cursor-pointer`}
              onMouseEnter={() => setActiveCard(s.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Hover Glow */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
              />

              {/* Thumbnail Image */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden relative">
                <img
                  src={s.thumbnail}
                  alt={s.title}
                  className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                  {s.title}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                  {s.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <Link
                    to={s.link}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    Learn More
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Link>

                  <button
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white rounded-xl font-medium hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 backdrop-blur-sm"
                    onClick={() => alert(`Book a Project for ${s.title}`)}
                  >
                    <i className="fas fa-calendar-alt mr-2"></i> Book a Project
                  </button>
                </div>

                {/* Hover Reveal Project List */}
                <AnimatePresence>
                  {activeCard === s.id && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 text-gray-400 text-sm sm:text-base space-y-1"
                    >
                      {s.projects.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <i className="fas fa-check text-cyan-400 text-xs"></i>
                          {p}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={cardVariants}
          className="mt-24 flex justify-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center backdrop-blur-sm bg-white/5 rounded-2xl px-6 py-4 border border-white/10">
            <p className="text-gray-300 text-base sm:text-lg">
              Ready to automate and innovate?
            </p>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
