import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ava Thompson",
    role: "Founder, GrowthIQ",
    quote:
      "Autolinium transformed how we operate. Our CRM and outreach workflows now run entirely on automation — saving us over 20 hours a week.",
    image: "/src/assets/a.jpg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "COO, NovaTech",
    quote:
      "The AI agents they built handle 80% of our customer inquiries. It's like having an entire support team available 24/7.",
    image: "/src/assets/b.jpg",
    rating: 5,
  },
  {
    name: "Sophia Davis",
    role: "Operations Director, CloudNest",
    quote:
      "Their process was seamless — from discovery to deployment. We now scale faster and make smarter decisions thanks to their automation setup.",
    image: "/src/assets/c.jpg",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex justify-center space-x-1 mb-3 sm:mb-4">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`fas fa-star text-xs sm:text-sm ${
            i < rating ? "text-yellow-400" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 overflow-hidden bg-[#00000d]"
    >
      {/* Grid Overlay */}
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

      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-5 sm:left-10 w-52 sm:w-72 h-52 sm:h-72 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-5 sm:right-10 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            className="text-base sm:text-xl text-gray-400 leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by forward-thinking businesses — hear how automation
            transformed their operations.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-[#0F172A]/80 to-[#0F172A]/90 border border-cyan-400/20 rounded-2xl p-5 sm:p-6 backdrop-blur-sm shadow-xl sm:shadow-2xl shadow-black/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              <StarRating rating={t.rating} />
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 text-center">
                “{t.quote}”
              </p>

              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left">
                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400/50 mb-4 sm:mb-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {t.name}
                  </h4>
                  <p className="text-cyan-400 text-sm sm:text-base font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "5.0", label: "Average Rating" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center p-4 sm:p-6 rounded-2xl bg-white/5 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2">
                {s.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-14 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6 items-center backdrop-blur-sm bg-gradient-to-r from-white/5 to-white/10 rounded-2xl px-6 sm:px-8 py-5 sm:py-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
            <p className="text-gray-300 text-base sm:text-lg font-medium text-center sm:text-left">
              Join our satisfied clients today
            </p>
            <motion.button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-bold text-sm sm:text-base hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 flex items-center gap-2 sm:gap-3 border border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/contact")}
            >
              <span>Start Your Project</span>
              <i className="fas fa-arrow-right" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#00000d]" />
    </section>
  );
};

export default TestimonialsSection;
