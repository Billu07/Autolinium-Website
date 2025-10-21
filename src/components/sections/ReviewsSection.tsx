import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Danial Doubo",
    role: "Founder, Smartrank",
    quote:
      "Autolinium transformed how we operate. Our CRM and outreach workflows now run entirely on automation — saving us over 20 hours a week.",
    image: "/src/assets/hero-bg3.png",
    results: ["20+ hours saved/week", "CRM fully automated", "300% ROI"],
  },
  {
    name: "Michael Chen",
    role: "COO, NovaTech",
    quote:
      "The AI agents they built handle 80% of our customer inquiries. It's like having an entire support team available 24/7.",
    image: "/src/assets/b.jpg",
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
    image: "/src/assets/c.jpg",
    results: [
      "2x faster scaling",
      "Seamless deployment",
      "Data-driven decisions",
    ],
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 overflow-hidden bg-[#050810]"
    >
      {/* Background Placeholder - Add your image here */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000d] via-[#0A0F2A] to-[#05070B]" />
        {/* Add your background image here */}
        <img
          src="/src/assets/pro-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">
              Client Stories
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        {/* Interactive Testimonial Carousel */}
        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 sm:p-12 border border-white/20 mb-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Quote Side */}
                  <div className="text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start mb-6">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className="fas fa-star text-yellow-400 text-lg mx-1"
                        />
                      ))}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                      "{testimonials[activeTestimonial].quote}"
                    </h3>

                    {/* Results Metrics */}
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {testimonials[activeTestimonial].results.map(
                        (result, index) => (
                          <motion.span
                            key={result}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium"
                          >
                            {result}
                          </motion.span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Client Side */}
                  <div className="text-center lg:text-right">
                    <div className="inline-block text-center">
                      <div className="w-24 h-24 mx-auto lg:mx-0 lg:ml-auto rounded-full border-4 border-cyan-400/50 overflow-hidden mb-4">
                        <img
                          src={testimonials[activeTestimonial].image}
                          alt={testimonials[activeTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-cyan-400 font-medium">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              <i className="fas fa-chevron-left" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center items-center gap-4 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { number: "50+", label: "Projects" },
              { number: "98%", label: "Satisfaction" },
              { number: "24/7", label: "Support" },
              { number: "5.0", label: "Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/contact")}
            >
              <span>Start Your Journey</span>
              <i className="fas fa-arrow-right" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
