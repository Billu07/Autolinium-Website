import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { staggerContainer, cardVariants } from "../../utils/animationVariants";
import bgImg from "../../assets/wavy-bg8.png";

const ServicesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: "automation",
      icon: "fa-gear",
      title: "Process Automation",
      description:
        "Automate CRMs and workflows using Make, n8n, Zapier, and Airtable — boosting efficiency and scalability.",
      link: "/services/process-automation",
      options: [
        {
          label: "n8n & Make Workflows",
          href: "/services/process-automation/n8n-make",
        },
        {
          label: "Zapier Integrations",
          href: "/services/process-automation/zapier",
        },
        {
          label: "Airtable Automations",
          href: "/services/process-automation/airtable",
        },
      ],
    },
    {
      id: "ai-chatbots",
      icon: "fa-robot",
      title: "AI & Chatbots",
      description:
        "AI agents and chatbots for WhatsApp, Instagram, Messenger — providing 24/7 customer support and automation.",
      link: "/services/ai-chatbots",
      options: [
        { label: "Voice Agents (Vapi)", href: "/services/ai-chatbots/voice" },
        {
          label: "WhatsApp Automation",
          href: "/services/ai-chatbots/whatsapp",
        },
        { label: "Instagram DM Bots", href: "/services/ai-chatbots/instagram" },
        { label: "Omnichannel AI", href: "/services/ai-chatbots/omnichannel" },
      ],
    },
    {
      id: "dev",
      icon: "fa-code",
      title: "App & Web Dev",
      description:
        "Custom web and mobile apps built with React, Next.js, Node, and AWS — optimized for speed and reliability.",
      link: "/services/app-web-development",
      options: [
        {
          label: "React / Next.js Apps",
          href: "/services/app-web-development/react-next",
        },
        {
          label: "Dashboards & Portals",
          href: "/services/app-web-development/dashboards",
        },
        {
          label: "CRM & GHL Integrations",
          href: "/services/app-web-development/crm-integrations",
        },
      ],
    },
  ];

  // Close dropdown on outside click or ESC
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveCard(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCard(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 overflow-hidden bg-[#0A0F1A]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -top-52 sm:-top-72 h-[calc(100%+14rem)] sm:h-[calc(100%+18rem)] z-[1]">
        <img
          src={bgImg}
          alt="Wavy background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute top-0 left-0 w-full h-56 sm:h-72 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/70 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-56 sm:h-72 bg-gradient-to-b from-transparent to-[#00000d]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-14 sm:mb-20"
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-base sm:text-xl text-gray-400 leading-relaxed px-2 sm:px-0"
          >
            From automation to AI agents — we design smart, scalable solutions
            that elevate every aspect of your business.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              custom={index}
              className="relative group"
            >
              <motion.div
                className="relative bg-gradient-to-br from-[#0F172A]/80 to-[#0F172A]/90 border border-cyan-400/20 rounded-2xl p-6 sm:p-8 text-center transition-all duration-500 hover:scale-[1.02] hover:border-cyan-400/40 backdrop-blur-sm shadow-xl sm:shadow-2xl shadow-black/20 hover:shadow-cyan-500/10 overflow-hidden"
                whileHover={{ y: -3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-400/0 to-blue-400/0 group-hover:from-blue-500/5 group-hover:via-cyan-400/3 group-hover:to-blue-400/5 transition-all duration-500 rounded-2xl" />

                {/* Icon */}
                <div className="relative flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-xl sm:text-2xl shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/40 group-hover:scale-110 transition-all duration-300">
                  <i className={`fas ${service.icon}`}></i>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed px-2">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center text-cyan-400 font-medium hover:text-cyan-300 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right ml-2 text-sm" />
                </Link>
              </motion.div>

              {/* Mobile-friendly Dropdown */}
              <AnimatePresence>
                {activeCard === service.id && (
                  <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, y: -5, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute z-50 top-4 right-4 w-56 sm:w-64 rounded-xl bg-gray-900/95 border border-cyan-400/40 shadow-2xl overflow-hidden backdrop-blur-xl"
                    style={{ transformOrigin: "top right" }}
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 sm:py-3">
                      <h4 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wide flex items-center">
                        <i className="fas fa-list-ul mr-2"></i>
                        {service.title} Options
                      </h4>
                    </div>
                    <div className="p-2">
                      {service.options.map((option, i) => (
                        <Link
                          key={option.href}
                          to={option.href}
                          className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 border-l-2 border-transparent hover:border-cyan-400"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="font-medium text-xs sm:text-sm">
                            {option.label}
                          </span>
                          <i className="fas fa-arrow-right text-xs text-gray-500" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
