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
    <div className="flex justify-center space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`fas fa-star text-sm ${
            i < rating ? "text-yellow-400" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#00000d]"
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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by forward-thinking businesses across industries — hear how
            automation transformed their operations.
          </motion.p>
        </motion.div>

        {/* Testimonial Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Enhanced Card with Horizontal Layout */}
              <div className="relative bg-gradient-to-br from-[#0F172A]/80 to-[#0F172A]/90 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-sm shadow-2xl shadow-black/20 hover:shadow-cyan-500/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-cyan-400/40 overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-400/0 to-blue-400/0 group-hover:from-blue-500/5 group-hover:via-cyan-400/3 group-hover:to-blue-400/5 transition-all duration-500 rounded-2xl" />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-blue-500/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:via-blue-500/5 group-hover:to-cyan-400/10 transition-all duration-700 opacity-0 group-hover:opacity-100 blur-sm" />

                {/* Quote icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/25 z-10">
                  <i className="fas fa-quote-left text-white text-xs" />
                </div>

                <div className="relative z-10 flex flex-col">
                  {/* Star Rating */}
                  <StarRating rating={testimonial.rating} />

                  {/* Quote */}
                  <p className="text-gray-300 text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300 text-center">
                    "{testimonial.quote}"
                  </p>

                  {/* Client Info - Horizontal Layout */}
                  <div className="flex items-center space-x-4">
                    {/* Client image */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors duration-300">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Client details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors duration-300 truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300 truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300 rounded-b-xl" />
              </div>

              {/* Floating number overlay */}
              <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center text-sm font-bold border-2 border-[#00000d] shadow-lg shadow-cyan-500/25 z-20">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
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
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group backdrop-blur-sm hover:shadow-cyan-500/10"
            >
              <div className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center backdrop-blur-sm bg-gradient-to-r from-white/5 to-white/10 rounded-2xl px-8 py-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <p className="text-gray-300 text-lg sm:text-xl font-medium text-center sm:text-left">
              Join our satisfied clients today
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-bold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 flex items-center gap-3 group border border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/contact")}
            >
              <span>Start Your Project</span>
              <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#00000d]" />
    </section>
  );
};

export default TestimonialsSection;
