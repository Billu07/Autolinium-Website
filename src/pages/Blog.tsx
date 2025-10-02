// src/pages/Blog.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Mock posts
const posts = [
  {
    id: "future-of-ai",
    title: "The Future of AI Automation",
    excerpt: "Discover how AI is transforming businesses in 2025.",
    date: "Oct 1, 2025",
  },
  {
    id: "chatbot-trends",
    title: "Top 5 Chatbot Trends",
    excerpt: "Stay ahead with the latest in AI chatbot technology.",
    date: "Sep 15, 2025",
  },
];

const Blog: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 container mx-auto px-4 bg-gray-900 min-h-screen"
    >
      <h2
        className="text-4xl md:text-5xl font-orbitron text-center mb-12 glitch"
        data-text="Our Blog"
      >
        Our Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--bg-dark)] p-6 rounded-lg border-2 border-[var(--neon-teal)] hover:shadow-[var(--border-glow)]"
          >
            <h3 className="text-2xl font-orbitron mb-4 text-[var(--neon-teal)]">
              {post.title}
            </h3>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
            <Link
              to={`/blog/${post.id}`}
              className="mt-4 inline-block px-4 py-2 rounded bg-[var(--neon-teal)] text-white hover:bg-teal-300"
            >
              Read More
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Blog;
