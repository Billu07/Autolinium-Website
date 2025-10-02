// src/pages/BlogPost.tsx
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

// Mock data
const blogPostsData = {
  "future-of-ai": {
    title: "The Future of AI Automation",
    content:
      "Full article content here... AI is revolutionizing industries by automating routine tasks, enabling businesses to focus on innovation.",
    date: "Oct 1, 2025",
  },
  // Add more...
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPostsData[id as keyof typeof blogPostsData];

  if (!post) return <p>Post not found.</p>;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 container mx-auto px-4 bg-gray-900 min-h-screen"
    >
      <h2
        className="text-4xl md:text-5xl font-orbitron text-center mb-12 glitch"
        data-text={post.title}
      >
        {post.title}
      </h2>
      <p className="text-sm text-gray-500 text-center mb-8">{post.date}</p>
      <article className="prose prose-invert max-w-3xl mx-auto text-gray-300">
        <p>{post.content}</p>
        {/* Add more paragraphs, images, etc. */}
      </article>
    </motion.section>
  );
};

export default BlogPost;
