import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ava Thompson",
    role: "Founder, GrowthIQ",
    quote:
      "Autolinium transformed how we operate. Our CRM and outreach workflows now run entirely on automation — saving us over 20 hours a week.",
    image: "/src/assets/testimonials/ava.jpg",
  },
  {
    name: "Michael Chen",
    role: "COO, NovaTech",
    quote:
      "The AI agents they built handle 80% of our customer inquiries. It's like having an entire support team available 24/7.",
    image: "/src/assets/testimonials/michael.jpg",
  },
  {
    name: "Sophia Davis",
    role: "Operations Director, CloudNest",
    quote:
      "Their process was seamless — from discovery to deployment. We now scale faster and make smarter decisions thanks to their automation setup.",
    image: "/src/assets/testimonials/sophia.jpg",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Premium Leafy Background Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Leaf Blob - Top Left */}
        <div
          className="absolute -top-20 -left-20 w-72 h-72 opacity-8"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 119, 182, 0.02) 0%, transparent 70%)",
            filter: "blur(20px)",
            transform: "rotate(-25deg)",
            borderRadius: "60% 40% 70% 30% / 40% 60% 30% 70%",
          }}
        />

        {/* Leaf Blob - Bottom Right */}
        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 opacity-6"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 180, 216, 0.015) 0%, transparent 70%)",
            filter: "blur(25px)",
            transform: "rotate(15deg)",
            borderRadius: "50% 50% 70% 30% / 60% 40% 60% 40%",
          }}
        />

        {/* Small Leaf Blob - Center */}
        <div
          className="absolute top-1/2 left-1/3 w-48 h-48 opacity-4"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 119, 182, 0.01) 0%, transparent 70%)",
            filter: "blur(15px)",
            transform: "rotate(45deg)",
            borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0077b6]">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Trusted by forward-thinking businesses across industries — hear how
            automation transformed their operations.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card with solid borders */}
              <div className="relative p-8 rounded-xl bg-white border-2 border-[#0077b6] shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 backdrop-blur-sm h-full flex flex-col">
                {/* Quote icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#0077b6] flex items-center justify-center">
                  <i className="fas fa-quote-left text-white text-xs" />
                </div>

                <div className="flex flex-col items-center text-center flex-1">
                  {/* Client image */}
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#0077b6] mb-6 group-hover:border-[#00b4d8] transition-colors duration-300">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-1">
                    "{testimonial.quote}"
                  </p>

                  {/* Client info */}
                  <div className="mt-auto">
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#0077b6] font-medium mt-2">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0077b6] group-hover:bg-[#00b4d8] transition-colors duration-300 rounded-b-xl" />
              </div>

              {/* Floating stats overlay */}
              <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-[#00b4d8] text-white flex items-center justify-center text-sm font-bold border-2 border-white shadow-lg">
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
              className="text-center p-6 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-[#0077b6] transition-all duration-300 group"
            >
              <div className="text-2xl font-bold text-[#0077b6] mb-2 group-hover:text-[#00b4d8] transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
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
              Join our satisfied clients today
            </p>
            <motion.button
              className="px-8 py-4 bg-[#0077b6] text-white rounded-lg font-bold hover:bg-[#00b4d8] transition-all duration-300 flex items-center gap-3 group relative z-10"
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

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#0077b6]" />
    </section>
  );
};

export default TestimonialsSection;
