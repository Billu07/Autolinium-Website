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
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-[#050810]"
    >
      {/* Background - Matching Projects section */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#0A0F2A] to-[#050810]" />
        <img
          src={bgImg}
          alt="Wavy dots background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Updated to match Projects section styling */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-4 sm:mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed px-2 sm:px-0"
          >
            From automation to AI agents — we design smart, scalable solutions
            that elevate every aspect of your business.
          </motion.p>
        </motion.div>

        {/* Enhanced Service Cards - Mobile Optimized */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              custom={index}
              className="relative group"
            >
              {/* Card with enhanced styling - Mobile padding adjustments */}
              <motion.div className="relative bg-gradient-to-br from-[#0F172A]/80 to-[#0F172A]/90 border border-cyan-400/20 rounded-2xl p-6 sm:p-8 text-center transition-all duration-500 hover:scale-[1.02] hover:border-cyan-400/40 shadow-2xl shadow-black/20 hover:shadow-cyan-500/10 overflow-hidden touch-manipulation">
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-400/0 to-blue-400/0 group-hover:from-blue-500/5 group-hover:via-cyan-400/3 group-hover:to-blue-400/5 transition-all duration-500 rounded-2xl" />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-blue-500/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:via-blue-500/5 group-hover:to-cyan-400/10 transition-all duration-700 opacity-0 group-hover:opacity-100 blur-sm" />

                {/* Dropdown Button - Mobile optimized */}
                <motion.button
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 z-20 touch-manipulation active:scale-95"
                  animate={{ rotate: activeCard === service.id ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCard((prev) =>
                      prev === service.id ? null : service.id
                    );
                  }}
                  aria-label={`Show options for ${service.title}`}
                >
                  <i className="fas fa-chevron-right text-white text-sm" />
                </motion.button>

                {/* Enhanced Icon */}
                <div className="relative flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-xl sm:text-2xl shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/40 group-hover:scale-110 transition-all duration-300">
                  <i className={`fas ${service.icon}`}></i>
                  {/* Icon glow */}
                  <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md group-hover:bg-cyan-400/30 transition-all duration-300" />
                </div>

                {/* Service Number */}
                <p className="text-sm text-cyan-400/80 mb-2 font-medium tracking-wide">
                  Service #{index + 1}
                </p>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Enhanced Divider */}
                <div className="w-16 mx-auto border-b border-cyan-400/30 mb-4 sm:mb-6 group-hover:border-cyan-400/60 group-hover:w-20 transition-all duration-300" />

                {/* Description */}
                <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Enhanced Learn More Link */}
                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center text-cyan-400 font-medium hover:text-cyan-300 transition-all duration-300 group/link touch-manipulation"
                >
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300 text-sm sm:text-base">
                    Learn More
                  </span>
                  <i className="fas fa-arrow-right ml-2 text-xs sm:text-sm group-hover/link:translate-x-1 transition-transform duration-300"></i>
                </Link>
              </motion.div>

              {/* Enhanced Dropdown Options - Mobile Optimized */}
              <AnimatePresence>
                {activeCard === service.id && (
                  <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, y: -5, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute z-50 top-4 right-4 w-[calc(100vw-2rem)] sm:w-64 max-w-sm rounded-xl bg-gray-900/95 border border-cyan-400/40 shadow-2xl overflow-hidden backdrop-blur-sm"
                    style={{ transformOrigin: "top right" }}
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-3">
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wide flex items-center justify-center sm:justify-start">
                        <i className="fas fa-list-ul mr-2"></i>
                        {service.title} Options
                      </h4>
                    </div>

                    <div className="p-2 max-h-60 sm:max-h-none overflow-y-auto">
                      {service.options.map((option, i) => (
                        <div key={option.href}>
                          <Link
                            to={option.href}
                            className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 group/option border-l-2 border-transparent hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400/5 hover:to-blue-400/5 active:scale-98 touch-manipulation min-h-[48px]"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveCard(null);
                            }}
                          >
                            <span className="font-medium text-sm group-hover/option:translate-x-1 transition-transform duration-300 text-center sm:text-left flex-1">
                              {option.label}
                            </span>
                            <i className="fas fa-arrow-right text-xs text-gray-500 group-hover/option:text-cyan-400 transform group-hover/option:translate-x-1 transition-all duration-300 flex-shrink-0 ml-2" />
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
