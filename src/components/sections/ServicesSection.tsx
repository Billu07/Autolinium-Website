import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [setHoveredCard] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const services = [
    {
      id: "automation",
      title: "Process Automation",
      icon: "⚡",
      description:
        "Automate CRMs, workflows, and data systems using n8n, Make, Zapier, and Airtable to enhance productivity and scalability.",
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
      id: "ai-agents",
      title: "AI Agents",
      icon: "🤖",
      description:
        "Build AI voice and text agents for support, scheduling, and lead handling — powered by GPT, Vapi, and GoHighLevel.",
      link: "/services/ai-agents",
      options: [
        { label: "Voice Agent (Vapi)", href: "/services/ai-agents/voice" },
        { label: "Text Agent", href: "/services/ai-agents/text" },
        { label: "Omnichannel Agent", href: "/services/ai-agents/omnichannel" },
      ],
    },
    {
      id: "dev",
      title: "App & Web Development",
      icon: "💻",
      description:
        "Custom-built web and mobile apps using React, Next.js, and Node — designed for performance, automation, and scalability.",
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
          href: "/services/app-web-development/crm-gohl",
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
    const handleEsc = (e: KeyboardEvent) =>
      e.key === "Escape" && setActiveCard(null);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section className="relative py-28 overflow-visible bg-white" id="services">
      {/* Premium Background Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Leaf Pattern - Top Left */}
        <div
          className="absolute top-10 left-10 w-64 h-64 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,40 Q40,20 60,40 Q80,60 60,80 Q40,100 20,80 Q0,60 20,40' fill='%230077b6'/%3E%3C/svg%3E")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Organic Blob - Center Left */}
        <div
          className="absolute top-1/2 left-20 w-48 h-48 opacity-4"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30,50 C20,30 40,10 60,20 C80,30 90,50 80,70 C70,90 40,90 30,70 C20,50 40,30 30,50' fill='%2300b4d8'/%3E%3C/svg%3E")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Subtle Grid Pattern - Very Light */}
        <div
          className="absolute inset-0 opacity-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #0077b6 2px, transparent 2px)`,
            backgroundSize: "300px 50px",
          }}
        />
      </div>

      {/* Wave Transition from Hero */}
      <div className="absolute -top-24 left-0 w-full h-24 bg-white clip-path-wave-reverse" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0077b6]">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Seamlessly bridging automation, AI, and development — empowering
            your business with precision and intelligence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, index) => (
            <motion.div
              key={s.id}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(s.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background Pattern */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230077b6' fill-opacity='0.03'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <button
                onClick={() =>
                  setActiveCard((prev) => (prev === s.id ? null : s.id))
                }
                className="relative w-full h-full text-left p-8 rounded-xl bg-white border-2 border-[#0077b6] shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 overflow-visible backdrop-blur-sm"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 pr-4">
                      {s.title}
                    </h3>
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0077b6] flex items-center justify-center group-hover:bg-[#00b4d8] transition-colors duration-300"
                      animate={{ rotate: activeCard === s.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className="fas fa-chevron-right text-white text-sm" />
                    </motion.div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {s.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    <Link
                      to={s.link}
                      className="inline-flex items-center justify-center px-5 py-3 bg-[#0077b6] text-white rounded-lg font-semibold hover:bg-[#00b4d8] transition-all duration-300 group/btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <button
                      className="inline-flex items-center justify-center px-5 py-3 border-2 border-[#0077b6] text-[#0077b6] rounded-lg font-semibold hover:bg-[#0077b6] hover:text-white active:scale-95 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`Book a Project for ${s.title}`);
                      }}
                    >
                      <i className="fas fa-calendar-alt mr-2" />
                      Book Project
                    </button>
                  </div>
                </div>
              </button>

              {/* Enhanced Dropdown - Positioned beside the icon */}
              <AnimatePresence>
                {activeCard === s.id && (
                  <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, x: -10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute z-50 top-4 right-4 w-64 rounded-xl bg-white border-2 border-[#0077b6] shadow-lg overflow-hidden backdrop-blur-sm"
                    style={{ transformOrigin: "top right" }}
                  >
                    {/* Dropdown header with subtle background */}
                    <div className="bg-[#0077b6] px-4 py-3">
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
                        {s.title} Options
                      </h4>
                    </div>

                    <div className="p-2">
                      {s.options.map((opt, idx) => (
                        <div key={opt.href}>
                          <Link
                            to={opt.href}
                            className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:text-[#0077b6] hover:bg-blue-50 transition-all duration-300 group/option"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="font-medium text-sm group-hover/option:translate-x-1 transition-transform duration-300">
                              {opt.label}
                            </span>
                            <i className="fas fa-arrow-right text-xs text-gray-400 group-hover/option:text-[#0077b6] transform group-hover/option:translate-x-1 transition-all duration-300" />
                          </Link>
                          {idx < s.options.length - 1 && (
                            <div className="mx-4 h-px bg-gray-200" />
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center bg-gray-50 rounded-xl px-8 py-6 border-2 border-[#0077b6] relative overflow-hidden">
            {/* CTA Background Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,25 Q25,20 30,25 Q35,30 30,35 Q25,40 20,35 Q15,30 20,25' fill='%230077b6'/%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            />
            <p className="text-gray-700 text-lg sm:text-xl font-medium text-center sm:text-left relative z-10">
              Ready to automate and innovate?
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#0077b6] text-white rounded-lg font-bold hover:bg-[#00b4d8] transition-all duration-300 flex items-center gap-3 group relative z-10"
            >
              <span>Get Started</span>
              <i className="fas fa-rocket transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Subtle brand accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#0077b6]" />
    </section>
  );
};

export default ServicesSection;
