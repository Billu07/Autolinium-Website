import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { fadeInVariants, buttonVariants } from "../utils/animationVariants";

import ErrorBoundary from "../components/ErrorBoundary";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Enhanced mock data
const blogPostsData = {
  "future-of-ai": {
    title: "The Future of AI Automation in 2025",
    content: `
      <p>AI is revolutionizing industries by automating routine tasks, enabling businesses to focus on innovation. From predictive analytics to intelligent chatbots, AI-driven systems are reducing manual workloads by up to 90%.</p>
      
      <h3>Key Trends to Watch</h3>
      <p>In 2025, we expect AI to further integrate with no-code platforms like Airtable and Zapier, making automation accessible to all businesses. The convergence of AI with IoT and edge computing will create new opportunities for real-time decision making.</p>
      
      <h3>Practical Applications</h3>
      <ul>
        <li>Intelligent document processing and analysis</li>
        <li>Predictive maintenance in manufacturing</li>
        <li>Personalized customer experiences at scale</li>
        <li>Automated quality assurance and testing</li>
      </ul>
      
      <p>The businesses that embrace these technologies early will gain significant competitive advantages in efficiency, cost reduction, and customer satisfaction.</p>
    `,
    date: "October 1, 2025",
    readTime: "5 min read",
    category: "AI & Automation",
    author: "Minhaz Uddin Fahim",
    authorRole: "Founder & AI Specialist",
    tags: ["AI", "Automation", "Future Trends", "Business"],
  },
  "chatbot-trends": {
    title: "Top 5 Chatbot Trends for Modern Businesses",
    content: `
      <p>Chatbots are evolving rapidly in 2025, becoming more sophisticated and integral to customer service strategies. Here are the key trends shaping the future of conversational AI.</p>
      
      <h3>1. Multi-Channel Support</h3>
      <p>Modern chatbots now operate seamlessly across web, Telegram, WhatsApp, and social media platforms, providing consistent customer experiences wherever users prefer to engage.</p>
      
      <h3>2. Voice-Enabled AI Agents</h3>
      <p>With platforms like Vapi gaining traction, voice-enabled AI agents are becoming more natural and responsive, handling complex conversations with human-like understanding.</p>
      
      <h3>3. CRM Integration</h3>
      <p>Deep integration with CRM systems allows chatbots to provide personalized responses based on customer history, preferences, and previous interactions.</p>
      
      <h3>4. No-Code Development</h3>
      <p>Platforms like Botpress enable rapid deployment without extensive coding knowledge, making advanced chatbot capabilities accessible to businesses of all sizes.</p>
      
      <h3>5. Advanced NLP Capabilities</h3>
      <p>Models like ChatGPT and beyond are enabling more human-like interactions, understanding context, sentiment, and complex user intents with remarkable accuracy.</p>
    `,
    date: "September 15, 2025",
    readTime: "4 min read",
    category: "Chatbots",
    author: "Rohit Roy",
    authorRole: "AI Developer",
    tags: ["Chatbots", "AI", "Customer Service", "Technology"],
  },
  "no-code-revolution": {
    title: "The No-Code Revolution: Building Without Developers",
    content: `
      <p>The no-code movement is transforming how businesses build software, enabling non-technical teams to create powerful applications and automate workflows without writing a single line of code.</p>
      
      <h3>What is No-Code?</h3>
      <p>No-code platforms provide visual interfaces and pre-built components that allow users to create applications through drag-and-drop interfaces, significantly reducing development time and costs.</p>
      
      <h3>Popular No-Code Platforms</h3>
      <ul>
        <li><strong>Airtable:</strong> Database and workflow automation</li>
        <li><strong>Softr:</strong> Frontend development for Airtable</li>
        <li><strong>Make (formerly Integromat):</strong> Complex workflow automation</li>
        <li><strong>Zapier:</strong> Simple app integrations</li>
        <li><strong>Bubble:</strong> Full web application development</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>Companies using no-code tools report 70% faster development cycles and 60% cost savings compared to traditional development approaches. This democratization of software creation empowers business teams to solve their own problems quickly.</p>
    `,
    date: "September 1, 2025",
    readTime: "6 min read",
    category: "No-Code",
    author: "Masum Billah Tuhin",
    authorRole: "No-Code Specialist",
    tags: ["No-Code", "Automation", "Productivity", "Tools"],
  },
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { ref, isVisible } = useScrollAnimation();
  const post = id ? blogPostsData[id as keyof typeof blogPostsData] : null;

  if (!post) {
    return (
      <ErrorBoundary>
        <section className="section bg-[var(--primary-bg)] min-h-screen pt-20">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="container text-center"
          >
            <i className="fas fa-exclamation-triangle text-6xl text-yellow-400 mb-6"></i>
            <h2 className="text-4xl font-bold mb-4 text-white">
              Post Not Found
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              The blog post you're looking for doesn't exist or may have been
              moved.
            </p>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link to="/blog" className="button bg-[var(--accent-deep-teal)]">
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
      <section
        ref={ref}
        className="section bg-[var(--primary-bg)] min-h-screen pt-20"
      >
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="container max-w-4xl"
        >
          {/* Back Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-[var(--accent-blue)] hover:text-[var(--accent-deep-teal)] transition-colors"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-[var(--accent-blue)] text-white text-sm rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold mb-6 text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-[var(--text-secondary)]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">{post.author}</p>
                  <p className="text-sm">{post.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center">
                  <i className="fas fa-calendar mr-2"></i>
                  {post.date}
                </span>
                <span className="flex items-center">
                  <i className="fas fa-clock mr-2"></i>
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.header>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700 text-[var(--text-secondary)] text-sm rounded-full hover:bg-gray-600 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </motion.div>

          {/* Article Content */}
          <motion.article
            className="card p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: "var(--text-secondary)",
              }}
            />
          </motion.article>

          {/* Author Bio */}
          <motion.div
            className="card p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {post.author}
                </h3>
                <p className="text-[var(--text-secondary)] mb-3">
                  {post.authorRole}
                </p>
                <p className="text-[var(--text-secondary)] text-sm">
                  {post.author} is an expert in {post.category.toLowerCase()}{" "}
                  with years of experience helping businesses transform their
                  operations through technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="card text-center bg-gradient-to-r from-[var(--accent-deep-teal)] to-[var(--accent-blue)] p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6">
              Let's discuss how we can help you implement these strategies in
              your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  to="/contact"
                  className="button bg-white text-[var(--accent-deep-teal)] hover:bg-gray-100 font-semibold"
                >
                  Get Free Consultation
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  to="/services"
                  className="button bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--accent-deep-teal)] font-semibold"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default BlogPost;
