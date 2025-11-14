import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "/src/assets/pro-bg.webp";

// Import company logos
import kreaLogo from "/src/assets/company-logos/krea-logo.png";
import smallbayLogo from "/src/assets/company-logos/smallbay-logo.webp";
import flyironbirdLogo from "/src/assets/company-logos/fly-iron-bird-logo.webp";
import makeLogo from "/src/assets/company-logos/krea-logo.png";

const testimonials = [
  {
    name: "Murali Barathi",
    role: "Founder & CEO, Krea Business Advisory",
    quote:
      "As the founder of Krea Business Advisory Services Inc, I engaged Autolinium, to design and implement a full-stack CRM and lead automation system for our firm. They delivered an integrated solution connecting Airtable, Outlook, Calendly, and our website, while also automating the entire lead journey through Make.com. Autolinium took the time to deeply understand our workflow and then built a customized Airtable CRM tailored to our exact needs. The result is a solution that is both scalable and user-friendly, giving us a system we can grow with. Throughout the project—and even beyond—Autolinium has been reliable, responsive, and a genuine pleasure to work with. I would not hesitate to recommend them to any business looking to streamline operations and build a robust, efficient system.",
    logo: kreaLogo,
    logoAlt: "Krea Business Advisory Logo",
    website: "https://kreabusiness.com",
    results: ["Full-stack CRM", "Lead automation", "Scalable solution"],
    project: "Custom CRM + Workflow Automation (Make + Airtable)",
    amount: "$520.00",
    duration: "Jul 30, 2025 - Sep 23, 2025",
  },
  {
    name: "Michael Tran",
    role: "Co-founder, Small Bay Flex",
    quote:
      "Autolinium was great to work with even on my busy schedule. They delivered a customized real estate CRM that perfectly fits our workflow and helps us manage properties more efficiently.",
    logo: smallbayLogo,
    logoAlt: "Small Bay Flex Logo",
    website: "https://smallbayflex.com",
    results: ["Custom CRM", "Workflow automation", "Busy schedule friendly"],
    project: "Customized Real Estate CRM + Workflow Automation",
    amount: "$520.00",
    duration: "Jul 30, 2025 - Sep 23, 2025",
  },
  {
    name: "Daniel Harris",
    role: "Managing Partner, Flyironbird",
    quote:
      "Fantastic to work with. Communicates very well has a good understanding of technology and how to execute projects, will absolutely work with them again..",
    logo: flyironbirdLogo,
    logoAlt: "Flyironbird Logo",
    website: "https://flyironbird.com",
    results: ["Great communication", "Tech expertise", "Project execution"],
    project:
      "Build Softr MVP Website (G2-Style Aviation Software Review Platform)",
    amount: "$200.00",
    duration: "Sep 22, 2025 - Sep 30, 2025",
  },
  {
    name: "Murali Barathi",
    role: "Founder & CEO, Krea Business Advisory",
    quote:
      "Autolinium is very knowledgeable on make.com and the apps associated with it. They were very responsive and helpful. Did a great job and we will definitely hire them again.",
    logo: makeLogo,
    logoAlt: "Make.com Project Logo",
    website: "https://kreabusiness.com",
    results: ["Make.com expertise", "Responsive", "Knowledgeable"],
    project: "Make.com Scenario Development",
    amount: "$200.00",
    duration: "Sep 11, 2025 - Sep 23, 2025",
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () =>
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);

  const prevTestimonial = () =>
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section
      id="testimonials"
      className="relative py-14 sm:py-20 lg:py-24 overflow-hidden bg-[#050810]"
    >
      {/* === Background === */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000d] via-[#0A0F2A] to-[#05070B]" />
        <img
          src={bgImg}
          alt="Testimonials background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Header === */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-4 sm:mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent px-1 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Our Notable Clients
          </motion.h2>
        </motion.div>

        {/* === Testimonial Carousel === */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-white/20 mb-8 sm:mb-12 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center">
                  {/* === Company Logo === */}
                  <div className="order-2 lg:order-1 text-center lg:text-right lg:w-1/3 w-full">
                    <div className="inline-block text-center w-full">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-cyan-500/10 p-3">
                        <img
                          src={testimonials[activeTestimonial].logo}
                          alt={testimonials[activeTestimonial].logoAlt}
                          className="w-full h-full object-contain rounded-lg"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-cyan-400 font-medium text-sm sm:text-base px-2 mb-2">
                        {testimonials[activeTestimonial].role}
                      </p>

                      {/* Website Link */}
                      {testimonials[activeTestimonial].website !== "#" && (
                        <a
                          href={testimonials[activeTestimonial].website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-300 hover:text-cyan-200 text-xs font-medium transition-colors duration-300 inline-flex items-center gap-1"
                        >
                          <i className="fas fa-external-link-alt text-xs" />
                          Visit Website
                        </a>
                      )}

                      {/* Project Details */}
                      <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-white text-sm font-semibold mb-1">
                          {testimonials[activeTestimonial].project}
                        </p>
                        <p className="text-cyan-300 text-sm font-bold">
                          {testimonials[activeTestimonial].amount}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          {testimonials[activeTestimonial].duration}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* === Quote === */}
                  <div className="order-1 lg:order-2 text-center lg:text-left lg:w-2/3 w-full">
                    <div className="flex justify-center lg:justify-start mb-3 sm:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className="fas fa-star text-yellow-400 text-sm sm:text-lg mx-0.5 sm:mx-1"
                        />
                      ))}
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-3 sm:mb-6 leading-relaxed px-2 sm:px-0">
                      "{testimonials[activeTestimonial].quote}"
                    </h3>

                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start px-2 sm:px-0">
                      {testimonials[activeTestimonial].results.map((r, i) => (
                        <motion.span
                          key={r}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 text-xs sm:text-sm font-medium"
                        >
                          {r}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* === Nav Arrows === */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg shadow-cyan-500/25 touch-manipulation z-20"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left text-sm sm:text-sm" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg shadow-cyan-500/25 touch-manipulation z-20"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right text-sm sm:text-sm" />
            </button>
          </div>

          {/* === Dots === */}
          <div className="flex justify-center items-center gap-4 sm:gap-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-4 h-4 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                  activeTestimonial === i
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
