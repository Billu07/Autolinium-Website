import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 4px 8px rgba(0, 77, 64, 0.3)",
    transition: { duration: 0.3 },
  },
};

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
    image: "/assets/blog-ai-future.jpg",
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
    image: "/assets/blog-chatbot-trends.jpg",
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
    image: "/assets/blog-no-code.jpg",
    author: "Masum Billah Tuhin",
  },
];

const Blog: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <ErrorBoundary>
      <section
        ref={ref}
        className="section bg-[var(--primary-bg)] min-h-screen pt-20"
      >
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="container"
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-white">Our Blog</h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Stay updated with the latest insights on AI, automation, and
              software development. Learn from our experts and discover how to
              transform your business.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            className="card mb-12 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-[var(--accent-blue)] text-white text-sm rounded-full mb-4">
                  Featured
                </span>
                <h2 className="text-2xl font-bold mb-4 text-white">
                  {posts[0].title}
                </h2>
                <p className="text-[var(--text-secondary)] mb-6">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-[var(--text-secondary)]">
                    <span>{posts[0].date}</span>
                    <span>•</span>
                    <span>{posts[0].readTime}</span>
                    <span>•</span>
                    <span>{posts[0].author}</span>
                  </div>
                </div>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to={`/blog/${posts[0].id}`}
                    className="button bg-[var(--accent-deep-teal)] hover:bg-[var(--accent-blue)]"
                  >
                    Read Featured Article
                  </Link>
                </motion.div>
              </div>
              <div className="h-64 lg:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <i className="fas fa-newspaper text-6xl text-white opacity-80"></i>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {posts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                variants={cardVariants}
                className="card group hover:transform hover:scale-105 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col h-full">
                  {/* Category Badge */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2 py-1 bg-gray-700 text-[var(--text-secondary)] text-xs rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)]">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[var(--accent-blue)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-[var(--text-secondary)] mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--card-border)]">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
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
                        <p className="text-xs text-[var(--text-secondary)]">
                          {post.date}
                        </p>
                      </div>
                    </div>

                    <motion.div variants={buttonVariants} whileHover="hover">
                      <Link
                        to={`/blog/${post.id}`}
                        className="button bg-transparent border border-[var(--accent-blue)] text-[var(--accent-blue)] hover:bg-[var(--accent-blue)] hover:text-white text-sm px-4 py-2"
                      >
                        Read More
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            className="card text-center mt-12 bg-gradient-to-r from-[var(--accent-deep-teal)] to-[var(--accent-blue)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Stay Updated
              </h3>
              <p className="text-blue-100 mb-6 max-w-md mx-auto">
                Get the latest articles on AI, automation, and business growth
                delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-blue-200 focus:outline-none focus:bg-opacity-30 transition-colors"
                />
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="button bg-white text-[var(--accent-deep-teal)] hover:bg-gray-100 font-semibold"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default Blog;
