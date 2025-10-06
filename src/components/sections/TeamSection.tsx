import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Added this import
import { useTiltAnimation } from "../../hooks/useTiltAnimation";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { staggerContainer, cardVariants } from "../../utils/animationVariants";

const TeamSection: React.FC = () => {
  const tiltAnimation = useTiltAnimation();
  const { ref, isVisible } = useScrollAnimation();

  const teamMembers = [
    {
      name: "Minhaz Uddin Fahim",
      role: "Founder & AI/Automation Specialist",
      icon: "fas fa-brain",
      gradient: "from-blue-500 to-cyan-400",
      expertise: ["AI Strategy", "Business Automation", "Project Leadership"],
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Masum Billah Tuhin",
      role: "Softr, Airtable & n8n Specialist",
      icon: "fas fa-cogs",
      gradient: "from-purple-500 to-pink-500",
      expertise: [
        "No-Code Development",
        "Workflow Automation",
        "System Integration",
      ],
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Rohit Roy",
      role: "Backend & Mobile/AI Developer",
      icon: "fas fa-server",
      gradient: "from-green-500 to-teal-400",
      expertise: [
        "Backend Architecture",
        "Mobile Development",
        "AI Integration",
      ],
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Md. Zahidul Hasan",
      role: "Full-Stack & Mobile Engineer",
      icon: "fas fa-code",
      gradient: "from-orange-500 to-red-400",
      expertise: ["Full-Stack Development", "Mobile Apps", "API Development"],
      linkedin: "#",
      twitter: "#",
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
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expert Team
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            The passionate professionals behind your automation success. Each
            team member brings specialized expertise to deliver exceptional
            results.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              custom={index}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
              className="h-full"
            >
              <motion.div
                className="card h-full flex flex-col text-center group p-6 sm:p-8"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Profile Icon */}
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg`}
                >
                  <i
                    className={`${member.icon} text-white text-2xl sm:text-3xl`}
                  ></i>
                </div>

                {/* Member Info */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 leading-relaxed">
                    {member.role}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[var(--tertiary-bg)] text-[var(--text-muted)] text-xs rounded-lg border border-[var(--card-border)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-[var(--card-border)]">
                  <motion.a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/30 hover:text-white transition-all duration-200 border border-blue-400/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <i className="fab fa-linkedin-in text-sm"></i>
                  </motion.a>
                  <motion.a
                    href={member.twitter}
                    className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 hover:text-white transition-all duration-200 border border-cyan-400/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`${member.name} Twitter`}
                  >
                    <i className="fab fa-twitter text-sm"></i>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Team CTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-[var(--secondary-bg)] to-[var(--tertiary-bg)] rounded-xl sm:rounded-2xl border border-[var(--card-border)] p-6 sm:p-8 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Work With Our Experts
            </h3>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 sm:mb-6">
              Ready to bring your automation vision to life? Our team is excited
              to collaborate with you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-handshake mr-2 sm:mr-3"></i>
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
