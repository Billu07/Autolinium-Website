import React from "react";
import { motion } from "framer-motion";
import { useTiltAnimation } from "../../hooks/useTiltAnimation";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  staggerContainer,
  slideInVariants,
} from "../../utils/animationVariants";

const TeamSection: React.FC = () => {
  const tiltAnimation = useTiltAnimation();
  const { ref, isVisible } = useScrollAnimation();

  const teamMembers = [
    {
      img: "/assets/business.png",
      name: "Minhaz Uddin Fahim",
      role: "Founder & AI/Automation Specialist",
      linkedin: "#",
      twitter: "#",
    },
    {
      img: "/assets/nerd.png",
      name: "Masum Billah Tuhin",
      role: "Softr, Airtable & n8n Specialist",
      linkedin: "#",
      twitter: "#",
    },
    {
      img: "/assets/coding.png",
      name: "Rohit Roy",
      role: "Backend & Mobile/AI Developer",
      linkedin: "#",
      twitter: "#",
    },
    {
      img: "/assets/coding.png",
      name: "Md. Zahidul Hasan",
      role: "Full-Stack & Mobile Engineer",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section ref={ref} className="section bg-[var(--primary-bg)]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="container"
      >
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-white"
          variants={slideInVariants}
        >
          Meet the Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={slideInVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <motion.div
                className="team-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[var(--accent-blue)]"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={member.linkedin}
                    className="text-[var(--accent-blue)] hover:text-[var(--card-border)] transition-colors duration-200"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <i className="fab fa-linkedin-in text-lg"></i>
                  </motion.a>
                  <motion.a
                    href={member.twitter}
                    className="text-[var(--accent-blue)] hover:text-[var(--card-border)] transition-colors duration-200"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`${member.name} Twitter`}
                  >
                    <i className="fab fa-twitter text-lg"></i>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TeamSection;
