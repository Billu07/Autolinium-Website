import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, cardVariants } from "../../utils/animationVariants";
import bgImg from "../../assets/pro-bg-ff.png";

const OurProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);

  const projects = [
    {
      title: "Lead Management CRM",
      description:
        "Automated lead tracking and management system with real-time analytics",
      tech: ["Airtable", "Make"],
      category: "crm",
      status: "completed",
    },
    {
      title: "Real Estate CRM",
      description:
        "Property management and client relationship platform for real estate agencies",
      tech: ["Airtable", "Make"],
      category: "crm",
      status: "completed",
    },
    {
      title: "Social Media Content Creator",
      description:
        "AI-powered content creation and automated posting across social platforms",
      tech: ["Make", "ChatGPT"],
      category: "automation",
      status: "completed",
    },
    {
      title: "Avatar Video Generation Tool",
      description:
        "Custom avatar-based video creation for personalized marketing",
      tech: ["Make", "HeyGen"],
      category: "ai",
      status: "completed",
    },
    {
      title: "Graphics Generator",
      description:
        "Automated quote-style graphic design for social media marketing",
      tech: ["Make", "Canva"],
      category: "automation",
      status: "completed",
    },
    {
      title: "SEO Blog Writing System",
      description: "AI-generated SEO content with automatic website publishing",
      tech: ["Make", "ChatGPT"],
      category: "ai",
      status: "completed",
    },
    {
      title: "Audio Transcription & Email Tool",
      description:
        "Voice-to-text transcription with automated email distribution",
      tech: ["Make", "GPT", "Google Docs"],
      category: "ai",
      status: "completed",
    },
    {
      title: "AI Voice Calling Assistant",
      description:
        "Intelligent voice AI for customer service and outreach calls",
      tech: ["Vapi", "Make"],
      category: "ai",
      status: "completed",
    },
    {
      title: "AI Job Scraping Tool",
      description:
        "Automated job listing aggregation with AI-powered filtering",
      tech: ["n8n", "GPT"],
      category: "automation",
      status: "completed",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "ai",
      label: "AI Solutions",
      count: projects.filter((p) => p.category === "ai").length,
    },
    {
      id: "automation",
      label: "Automation",
      count: projects.filter((p) => p.category === "automation").length,
    },
    {
      id: "crm",
      label: "CRM Systems",
      count: projects.filter((p) => p.category === "crm").length,
    },
    {
      id: "chatbots",
      label: "Chatbots",
      count: projects.filter((p) => p.category === "chatbots").length,
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setCurrentPage(0);
  };

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-[#050810]"
    >
      {/* === Background === */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#0A0F2A] to-[#00000d]" />
        <img
          src={bgImg}
          alt="Projects background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Header === */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center mb-10 sm:mb-16"
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-5 sm:mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">
              Our Projects
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Built & Deployed
          </motion.h2>
        </motion.div>

        {/* === Category Filter === */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex overflow-x-auto pb-3 sm:pb-4 mb-8 sm:mb-12 scrollbar-hide gap-2 sm:gap-3 -mx-2 sm:mx-0 px-2 sm:px-0"
        >
          {categories.map((c) => (
            <motion.button
              key={c.id}
              variants={cardVariants}
              onClick={() => handleCategoryChange(c.id)}
              className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 border whitespace-nowrap ${
                activeCategory === c.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-cyan-400/40 hover:text-cyan-300"
              }`}
            >
              {c.label}
              <span className="ml-1 text-xs opacity-70">({c.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* === Carousel === */}
        <div className="relative max-w-6xl mx-auto">
          {totalPages > 1 && (
            <>
              {/* Arrows reposition for mobile */}
              <button
                onClick={prevPage}
                className="absolute left-2 sm:-left-8 top-[calc(50%-1rem)] sm:top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110"
              >
                <i className="fas fa-chevron-left text-sm sm:text-base" />
              </button>
              <button
                onClick={nextPage}
                className="absolute right-2 sm:-right-8 top-[calc(50%-1rem)] sm:top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110"
              >
                <i className="fas fa-chevron-right text-sm sm:text-base" />
              </button>
            </>
          )}

          {/* Cards grid */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${currentPage}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
              >
                {currentProjects.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 shadow-2xl shadow-black/20 hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-105 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-blue-500/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:via-blue-500/3 group-hover:to-cyan-400/5 transition-all duration-500 rounded-2xl" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs text-green-400 font-medium">
                              {p.status}
                            </span>
                          </div>
                          <div className="text-sm sm:text-lg text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors duration-300">
                            #{startIndex + i + 1}
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-100 transition-colors duration-300 line-clamp-2">
                          {p.title}
                        </h3>

                        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                          {p.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 backdrop-blur-sm"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <button className="w-full py-2.5 sm:py-3 rounded-xl bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/30 text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium text-sm backdrop-blur-sm">
                          View Case Study
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8 sm:mt-12">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentPage === i
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scrollbar hide + line clamp utility */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default OurProjectsSection;
