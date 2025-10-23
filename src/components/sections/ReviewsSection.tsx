import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "/src/assets/pro-bg.webp";

const testimonials = [
  {
    name: "Danial Doubo",
    role: "Founder, Smartrank",
    quote:
      "Autolinium transformed how we operate. Our CRM and outreach workflows now run entirely on automation — saving us over 20 hours a week.",
    initial: "D",
    results: ["20+ hours saved/week", "CRM fully automated", "300% ROI"],
  },
  {
    name: "Michael Chen",
    role: "COO, NovaTech",
    quote:
      "The AI agents they built handle 80% of our customer inquiries. It's like having an entire support team available 24/7.",
    initial: "M",
    results: [
      "80% inquiries automated",
      "24/7 AI support",
      "45% cost reduction",
    ],
  },
  {
    name: "Sophia Davis",
    role: "Operations Director, CloudNest",
    quote:
      "Their process was seamless — from discovery to deployment. We now scale faster and make smarter decisions thanks to their automation setup.",
    initial: "S",
    results: [
      "2x faster scaling",
      "Seamless deployment",
      "Data-driven decisions",
    ],
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

  // Auto-rotate testimonials every 5s
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-14 sm:py-20 lg:py-24 overflow-hidden bg-[#050810]"
    >
      {/* === Background === */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000d] via-[#0A0F2A] to-[#05070B]" />
        {/* ✅ Imported background image used here */}
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
              Client Stories
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
                  {/* === Avatar === */}
                  <div className="order-2 lg:order-1 text-center lg:text-right lg:w-1/3 w-full">
                    <div className="inline-block text-center w-full">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center border-2 border-cyan-400/50 mb-3 sm:mb-4 shadow-lg shadow-cyan-500/25">
                        <span className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
                          {testimonials[activeTestimonial].initial}
                        </span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-cyan-400 font-medium text-sm sm:text-base px-2">
                        {testimonials[activeTestimonial].role}
                      </p>
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

                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-6 leading-snug sm:leading-tight px-2 sm:px-0">
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
              className="absolute left-2 sm:left-4 top-[calc(50%-1rem)] sm:top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg shadow-cyan-500/25 touch-manipulation"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left text-xs sm:text-sm" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-[calc(50%-1rem)] sm:top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg shadow-cyan-500/25 touch-manipulation"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right text-xs sm:text-sm" />
            </button>
          </div>

          {/* === Dots === */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                  activeTestimonial === i
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* === Stats Bar === */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { number: "50+", label: "Projects" },
              { number: "98%", label: "Satisfaction" },
              { number: "24/7", label: "Support" },
              { number: "5.0", label: "Rating" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group p-2 sm:p-0"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* === CTA === */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.button
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 touch-manipulation active:scale-95 min-h-[52px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/contact")}
            >
              <span>Start Your Journey</span>
              <i className="fas fa-arrow-right text-sm" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
