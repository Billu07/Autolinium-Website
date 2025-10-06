import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  staggerContainer,
  cardVariants,
  buttonVariants,
} from "../utils/animationVariants";
import ErrorBoundary from "../components/ErrorBoundary";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Mock posts with enhanced data
const posts = [
  {
    id: "future-of-ai",
    title: "The Future of AI Automation in 2025",
    excerpt:
      "Discover how AI is transforming businesses and what trends to watch in the coming year.",
    date: "Oct 1, 2025",
    readTime: "5 min read",
    category: "AI & Automation",
    gradient: "from-blue-500 to-cyan-400",
    author: "Minhaz Uddin Fahim",
  },
  {
    id: "chatbot-trends",
    title: "Top 5 Chatbot Trends for Modern Businesses",
    excerpt:
      "Stay ahead with the latest in AI chatbot technology and customer engagement strategies.",
    date: "Sep 15, 2025",
    readTime: "4 min read",
    category: "Chatbots",
    gradient: "from-purple-500 to-pink-500",
    author: "Rohit Roy",
  },
  {
    id: "no-code-revolution",
    title: "The No-Code Revolution: Building Without Developers",
    excerpt:
      "How no-code platforms are empowering businesses to create custom solutions faster than ever.",
    date: "Sep 1, 2025",
    readTime: "6 min read",
    category: "No-Code",
    gradient: "from-green-500 to-teal-400",
    author: "Masum Billah Tuhin",
  },
];

const Blog: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <ErrorBoundary>
      <section
        ref={ref}
        className="section section-bg section-bg-primary min-h-screen pt-20 flex items-center"
      >
        {/* Background Particles */}
        <div className="section-particles">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="section-particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${Math.random() * 8 + 12}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white"
              variants={cardVariants}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
              variants={cardVariants}
            >
              Stay updated with the latest insights on AI, automation, and
              software development. Learn from our experts and discover how to
              transform your business.
            </motion.p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-12 sm:mb-16"
          >
            <motion.div
              className="card overflow-hidden p-6 sm:p-8 group"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm rounded-full mb-4 font-semibold">
                    Featured
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white leading-tight">
                    {posts[0].title}
                  </h2>
                  <p className="text-[var(--text-secondary)] text-lg sm:text-xl mb-6 leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                    <div className="flex items-center space-x-4 text-sm sm:text-base text-[var(--text-secondary)]">
                      <span>{posts[0].date}</span>
                      <span>•</span>
                      <span>{posts[0].readTime}</span>
                      <span>•</span>
                      <span className="text-white font-medium">
                        {posts[0].author}
                      </span>
                    </div>
                  </div>
                  <motion.div variants={buttonVariants} whileHover="hover">
                    <Link
                      to={`/blog/${posts[0].id}`}
                      className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                      <i className="fas fa-book-open mr-2 sm:mr-3"></i>
                      Read Featured Article
                    </Link>
                  </motion.div>
                </div>
                <div
                  className={`order-1 lg:order-2 h-48 sm:h-64 lg:h-full rounded-xl bg-gradient-to-br ${posts[0].gradient} flex items-center justify-center shadow-lg`}
                >
                  <i className="fas fa-newspaper text-4xl sm:text-6xl text-white opacity-90"></i>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
          >
            {posts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                variants={cardVariants}
                custom={index}
                className="card group p-6 sm:p-8 h-full flex flex-col"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Category Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-[var(--tertiary-bg)] text-[var(--text-muted)] text-xs rounded-lg border border-[var(--card-border)] font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    {post.readTime}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 sm:mb-6 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between mt-auto pt-4 sm:pt-6 border-t border-[var(--card-border)]">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white text-xs sm:text-sm font-bold">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">
                        {post.author}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {post.date}
                      </p>
                    </div>
                  </div>

                  <motion.div variants={buttonVariants} whileHover="hover">
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center px-4 sm:px-6 py-2 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 text-xs sm:text-sm"
                    >
                      Read More
                      <i className="fas fa-arrow-right ml-2 text-xs"></i>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.div
              className="card p-6 sm:p-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-white max-w-2xl mx-auto"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Stay Updated
              </h3>
              <p className="text-blue-100 text-sm sm:text-base mb-4 sm:mb-6 max-w-md mx-auto leading-relaxed">
                Get the latest articles on AI, automation, and business growth
                delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-blue-200 focus:outline-none focus:bg-white/30 transition-colors text-sm sm:text-base"
                />
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="px-6 py-3 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Blog;
