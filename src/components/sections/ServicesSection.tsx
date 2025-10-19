import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { staggerContainer, cardVariants } from "../../utils/animationVariants";

const ServicesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: "automation",
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
      title: "App & Web Development",
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

  const handleBookProject = (title: string) => {
    alert(`Book a Project for ${title}`);
  };

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0A0F1A] via-[#070B12] to-[#05080E] overflow-visible"
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

        {/* Services Grid - 3 cards in one row on desktop */}
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
              className="h-full group relative"
            >
              {/* Premium Thin Border Container */}
              <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-400/30 via-cyan-400/20 to-blue-400/30">
                <motion.div
                  className="card h-full flex flex-col text-center p-8 rounded-3xl bg-white/5 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 relative overflow-visible"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Content - No Icon */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white pr-4">
                        {service.title}
                      </h3>
                      <motion.button
                        className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center hover:from-blue-600 hover:to-cyan-500 transition-colors duration-300 shadow-lg shadow-cyan-500/25"
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
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-8 flex-1 text-lg">
                      {service.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col gap-4 mt-auto">
                      <Link
                        to={service.link}
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:from-blue-600 group-hover:to-cyan-500 border border-cyan-400/30"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                      </Link>

                      <button
                        className="inline-flex items-center justify-center px-6 py-3 border border-cyan-400/40 text-white rounded-xl font-medium hover:border-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/15"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookProject(service.title);
                        }}
                      >
                        <i className="fas fa-calendar-alt mr-2"></i>
                        <span>Book Now</span>
                      </button>
                    </div>
                  </div>

                  {/* Subtle Hover Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/3 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
                </motion.div>
              </div>

              {/* Enhanced Dropdown */}
              <AnimatePresence>
                {activeCard === service.id && (
                  <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, x: -10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute z-50 top-4 right-4 w-64 rounded-xl bg-gray-900 border border-cyan-400/40 shadow-2xl overflow-hidden backdrop-blur-xl"
                    style={{ transformOrigin: "top right" }}
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-3">
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
                        {service.title} Options
                      </h4>
                    </div>

                    <div className="p-2">
                      {service.options.map((option, index) => (
                        <div key={option.href}>
                          <Link
                            to={option.href}
                            className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 group/option border-l-2 border-transparent hover:border-cyan-400"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="font-medium text-sm group-hover/option:translate-x-1 transition-transform duration-300">
                              {option.label}
                            </span>
                            <i className="fas fa-arrow-right text-xs text-gray-500 group-hover/option:text-cyan-400 transform group-hover/option:translate-x-1 transition-all duration-300" />
                          </Link>
                          {index < service.options.length - 1 && (
                            <div className="mx-4 h-px bg-gray-700" />
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

        {/* CTA */}
        <motion.div
          variants={cardVariants}
          className="mt-24 flex justify-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center backdrop-blur-sm bg-gradient-to-r from-white/5 to-white/10 rounded-2xl px-6 py-4 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
            <p className="text-gray-300 text-base sm:text-lg">
              Ready to automate and innovate?
            </p>
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 border border-cyan-400/30 whitespace-nowrap"
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
