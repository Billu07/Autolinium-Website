import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { staggerContainer, cardVariants } from "../../utils/animationVariants";
import bgImg from "../../assets/service-bg.png";

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
        "Automate CRMs and business workflows using Make, n8n, Zapier, and Airtable — increasing efficiency and scalability.",
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
        "Voice/text AI agents and chatbots for WhatsApp, Instagram, Messenger — 24/7 customer support and automation.",
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
        "Custom web and mobile apps crafted with React, Next.js, Node, and AWS — designed for performance and security.",
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
      className="relative py-24 sm:py-32 overflow-hidden bg-[#050810]"
    >
      {/* Background - Matching Projects section */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#0A0F2A] to-[#050810]" />
        <img
          src={bgImg}
          alt="Wavy dots background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Header - Updated to match Projects section styling */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-xl text-gray-300 leading-relaxed"
          >
            From automation to AI agents — we design smart, scalable solutions
            that elevate every aspect of your business.
          </motion.p>
        </motion.div>

        {/* Enhanced Service Cards - EXACT same card style as original */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              custom={index}
              className="relative group"
            >
              {/* Card with enhanced styling - EXACT same as original */}
              <motion.div className="relative bg-gradient-to-br from-[#0F172A]/80 to-[#0F172A]/90 border border-cyan-400/20 rounded-2xl p-8 text-center transition-all duration-500 hover:scale-[1.02] hover:border-cyan-400/40 shadow-2xl shadow-black/20 hover:shadow-cyan-500/10 overflow-hidden">
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-400/0 to-blue-400/0 group-hover:from-blue-500/5 group-hover:via-cyan-400/3 group-hover:to-blue-400/5 transition-all duration-500 rounded-2xl" />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-blue-500/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:via-blue-500/5 group-hover:to-cyan-400/10 transition-all duration-700 opacity-0 group-hover:opacity-100 blur-sm" />

                {/* Dropdown Button */}
                <motion.button
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 z-20"
                  animate={{ rotate: activeCard === service.id ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCard((prev) =>
                      prev === service.id ? null : service.id
                    );
                  }}
                >
                  <i className="fas fa-chevron-right text-white text-sm" />
                </motion.button>

                {/* Enhanced Icon */}
                <div className="relative flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-2xl shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/40 group-hover:scale-110 transition-all duration-300">
                  <i className={`fas ${service.icon}`}></i>
                  {/* Icon glow */}
                  <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md group-hover:bg-cyan-400/30 transition-all duration-300" />
                </div>

                {/* Service Number */}
                <p className="text-sm text-cyan-400/80 mb-2 font-medium tracking-wide">
                  Service #{index + 1}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Enhanced Divider */}
                <div className="w-16 mx-auto border-b border-cyan-400/30 mb-6 group-hover:border-cyan-400/60 group-hover:w-20 transition-all duration-300" />

                {/* Description */}
                <p className="text-gray-400 mb-8 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Enhanced Learn More Link */}
                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center text-cyan-400 font-medium hover:text-cyan-300 transition-all duration-300 group/link"
                >
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                    Learn More
                  </span>
                  <i className="fas fa-arrow-right ml-2 text-sm group-hover/link:translate-x-1 transition-transform duration-300"></i>
                </Link>
              </motion.div>

              {/* Enhanced Dropdown Options */}
              <AnimatePresence>
                {activeCard === service.id && (
                  <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, y: -5, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute z-50 top-4 right-4 w-64 rounded-xl bg-gray-900/95 border border-cyan-400/40 shadow-2xl overflow-hidden"
                    style={{ transformOrigin: "top right" }}
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-3">
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wide flex items-center">
                        <i className="fas fa-list-ul mr-2"></i>
                        {service.title} Options
                      </h4>
                    </div>

                    <div className="p-2">
                      {service.options.map((option, i) => (
                        <div key={option.href}>
                          <Link
                            to={option.href}
                            className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 group/option border-l-2 border-transparent hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/5 hover:to-blue-400/5"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="font-medium text-sm group-hover/option:translate-x-1 transition-transform duration-300">
                              {option.label}
                            </span>
                            <i className="fas fa-arrow-right text-xs text-gray-500 group-hover/option:text-cyan-400 transform group-hover/option:translate-x-1 transition-all duration-300" />
                          </Link>
                          {i < service.options.length - 1 && (
                            <div className="mx-4 h-px bg-gray-700/50" />
                          )}
                        </div>
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
