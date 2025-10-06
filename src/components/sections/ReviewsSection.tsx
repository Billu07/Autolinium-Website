import React from "react";
import { motion } from "framer-motion";
import { useTiltAnimation } from "../../hooks/useTiltAnimation";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { staggerContainer, cardVariants } from "../../utils/animationVariants";

const ReviewsSection: React.FC = () => {
  const tiltAnimation = useTiltAnimation();
  const { ref, isVisible } = useScrollAnimation();

  const reviews = [
    {
      rating: 5,
      text: '"Autolinium transformed our workflow with a custom CRM that cut our manual work by 80%. Their team was responsive and delivered beyond expectations."',
      author: "Jane D.",
      position: "Real Estate CEO",
      company: "UrbanSpace Properties",
      results: [
        "80% manual work reduction",
        "2x lead conversion",
        "Real-time analytics",
      ],
      industry: "Real Estate",
      project: "Custom CRM Development",
      duration: "3 months",
    },
    {
      rating: 5,
      text: '"The AI chatbot they built handles 500+ daily customer queries, boosting conversions by 45%. Their expertise in automation is exceptional."',
      author: "Mark S.",
      position: "E-commerce Director",
      company: "StyleCart",
      results: [
        "45% conversion boost",
        "500+ queries/day",
        "24/7 customer service",
      ],
      industry: "E-commerce",
      project: "AI Chatbot Implementation",
      duration: "2 months",
    },
    {
      rating: 5,
      text: '"Their workflow automation saved us 25 hours weekly. Professional, reliable, and delivered measurable ROI within the first month."',
      author: "Sarah L.",
      position: "Finance Director",
      company: "WealthFlow Advisors",
      results: ["25 hours saved/week", "99% accuracy", "Seamless integration"],
      industry: "Finance",
      project: "Process Automation",
      duration: "6 weeks",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas ${
          i < Math.floor(rating)
            ? "fa-star"
            : i < rating
            ? "fa-star-half-alt"
            : "far fa-star"
        } text-yellow-400 text-sm sm:text-base`}
      />
    ));
  };

  return (
    <section
      ref={ref}
      className="section section-bg section-bg-primary py-16 sm:py-20 lg:py-24 flex items-center relative overflow-hidden"
    >
      {/* Background Elements - Reduced on mobile */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/3 to-purple-500/3"
            style={{
              width: `${Math.random() * 100 + 30}px`,
              height: `${Math.random() * 100 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4"
            variants={cardVariants}
          >
            Client{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed px-4"
            variants={cardVariants}
          >
            Discover how businesses across industries achieved remarkable
            results through our automation solutions.
          </motion.p>
        </motion.div>

        {/* Reviews Grid - Mobile optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
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
                className="card h-full flex flex-col group relative overflow-hidden p-6 sm:p-8"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Industry Badge - Smaller on mobile */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                  <span className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold border border-blue-400/30">
                    {review.industry}
                  </span>
                </div>

                {/* Stars Rating - Centered and responsive */}
                <div className="flex justify-center mb-4 sm:mb-6 text-base sm:text-lg">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text - Better mobile typography */}
                <div className="flex-1 mb-4 sm:mb-6">
                  <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed sm:leading-loose italic text-center">
                    {review.text}
                  </p>
                </div>

                {/* Project Details - Compact on mobile */}
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[var(--tertiary-bg)] rounded-xl border border-[var(--card-border)]">
                  <div className="text-center mb-2 sm:mb-3">
                    <span className="text-white font-semibold text-sm sm:text-base">
                      {review.project}
                    </span>
                    <span className="text-[var(--text-muted)] text-xs sm:text-sm block mt-1">
                      Completed in {review.duration}
                    </span>
                  </div>

                  {/* Results - Stacked on mobile */}
                  <div className="space-y-1 sm:space-y-2">
                    {review.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs sm:text-sm"
                      >
                        <i className="fas fa-check-circle text-green-400 mr-2 text-xs"></i>
                        <span className="text-[var(--text-secondary)] truncate">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author Info - Compact on mobile */}
                <div className="text-center border-t border-[var(--card-border)] pt-4 sm:pt-6 mt-auto">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                    <i className="fas fa-user text-white text-sm sm:text-xl"></i>
                  </div>
                  <h4 className="text-white font-bold text-base sm:text-lg mb-1">
                    {review.author}
                  </h4>
                  <p className="text-[var(--text-muted)] text-xs sm:text-sm mb-1">
                    {review.position}
                  </p>
                  <p className="text-[var(--accent-blue)] text-xs sm:text-sm font-semibold truncate">
                    {review.company}
                  </p>
                </div>

                {/* Hover Shine Effect - Disable on touch devices */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 hidden sm:block" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics - Stack on mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "100%", label: "On-Time Delivery" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              className="text-center p-4 sm:p-6 bg-[var(--secondary-bg)] rounded-xl sm:rounded-2xl border border-[var(--card-border)] hover:border-blue-400/50 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-[var(--text-muted)] text-xs sm:text-sm font-medium leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Stack buttons on mobile */}
        <motion.div
          variants={cardVariants}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-[var(--secondary-bg)] to-[var(--tertiary-bg)] rounded-xl sm:rounded-2xl border border-[var(--card-border)] p-6 sm:p-8 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 sm:mb-6">
              Join dozens of satisfied clients who transformed their operations
              with our automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                <i className="fas fa-calendar-check mr-2 sm:mr-3 text-xs sm:text-sm"></i>
                Schedule Discovery Call
              </button>
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 text-sm sm:text-base">
                View Case Studies
                <i className="fas fa-arrow-right ml-2 sm:ml-3 text-xs sm:text-sm"></i>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
