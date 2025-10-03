import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import "./../App.css";

// Mock data
const blogPostsData = {
  "future-of-ai": {
    title: "The Future of AI Automation",
    content:
      "AI is revolutionizing industries by automating routine tasks, enabling businesses to focus on innovation. From predictive analytics to intelligent chatbots, AI-driven systems are reducing manual workloads by up to 90%. In 2025, we expect AI to further integrate with no-code platforms like Airtable and Zapier, making automation accessible to all businesses.",
    date: "Oct 1, 2025",
  },
  "chatbot-trends": {
    title: "Top 5 Chatbot Trends",
    content:
      "Chatbots are evolving rapidly in 2025. Key trends include: 1) Multi-channel support (web, Telegram, WhatsApp), 2) Voice-enabled AI agents using Vapi, 3) Integration with CRMs for personalized responses, 4) No-code platforms like Botpress for rapid deployment, and 5) Advanced NLP with models like ChatGPT for human-like interactions.",
    date: "Sep 15, 2025",
  },
};

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
    scale: 1.1,
    boxShadow: "0 4px 8px rgba(0, 77, 64, 0.3)",
    transition: { duration: 0.3 },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    console.error("ErrorBoundary caught error:", error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Something went wrong</h2>
          <p className="text-lg text-text-secondary">Please try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostsData[id as keyof typeof blogPostsData] : null;

  useEffect(() => {
    console.log("BlogPost component mounted successfully", {
      postId: id,
      postExists: !!post,
    });
  }, [id, post]);

  if (!post) {
    return (
      <ErrorBoundary>
        <section className="section bg-[var(--primary-bg)] min-h-screen pt-20">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="container text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-white font-inter">
              Post Not Found
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link to="/blog" className="button bg-accent-deep-teal">
                Back to Blog
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <section className="section bg-[var(--primary-bg)] min-h-screen pt-20">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white font-inter">
            {post.title}
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12">
            {post.date}
          </p>
          <motion.article
            variants={cardVariants}
            className="card border-2 border-accent-pink max-w-3xl mx-auto"
          >
            <p className="text-text-secondary">{post.content}</p>
          </motion.article>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            className="text-center mt-8"
          >
            <Link to="/blog" className="button bg-accent-deep-teal">
              Back to Blog
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default BlogPost;
