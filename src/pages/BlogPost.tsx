import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  staggerContainer,
  cardVariants,
  buttonVariants,
} from "../utils/animationVariants";
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
    gradient: "from-blue-500 to-cyan-400",
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
    gradient: "from-purple-500 to-pink-500",
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
    gradient: "from-green-500 to-teal-400",
  },
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { ref, isVisible } = useScrollAnimation();
  const post = id ? blogPostsData[id as keyof typeof blogPostsData] : null;

  if (!post) {
    return (
      <ErrorBoundary>
        <section className="section section-bg section-bg-primary min-h-screen pt-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-400 flex items-center justify-center shadow-lg">
                <i className="fas fa-exclamation-triangle text-white text-3xl"></i>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Post Not Found
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
                The blog post you're looking for doesn't exist or may have been
                moved.
              </p>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  to="/blog"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <i className="fas fa-arrow-left mr-2 sm:mr-3"></i>
                  Back to Blog
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <section
        ref={ref}
        className="section section-bg section-bg-secondary min-h-screen pt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Back Button */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-400 hover:text-cyan-400 transition-colors text-sm sm:text-base"
            >
              <i className="fas fa-arrow-left mr-2 sm:mr-3"></i>
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-8 sm:mb-12 text-center"
          >
            <motion.span
              className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm rounded-full mb-4 sm:mb-6 font-semibold"
              variants={cardVariants}
            >
              {post.category}
            </motion.span>
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight"
              variants={cardVariants}
            >
              {post.title}
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-[var(--text-secondary)]"
              variants={cardVariants}
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white text-sm font-bold">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-sm sm:text-base">
                    {post.author}
                  </p>
                  <p className="text-xs sm:text-sm">{post.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 sm:space-x-6 text-sm">
                <span className="flex items-center">
                  <i className="fas fa-calendar mr-2 text-blue-400"></i>
                  {post.date}
                </span>
                <span className="flex items-center">
                  <i className="fas fa-clock mr-2 text-cyan-400"></i>
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </motion.header>

          {/* Tags */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="flex flex-wrap gap-2 justify-center mb-8 sm:mb-12"
          >
            {post.tags.map((tag, index) => (
              <motion.span
                key={index}
                variants={cardVariants}
                custom={index}
                className="px-3 py-1 bg-[var(--tertiary-bg)] text-[var(--text-muted)] text-xs sm:text-sm rounded-lg border border-[var(--card-border)] hover:border-blue-400/50 transition-colors cursor-pointer"
              >
                #{tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Article Content */}
          <motion.article
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-8 sm:mb-12"
          >
            <motion.div
              className="card p-6 sm:p-8"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div
                className="prose prose-invert max-w-none text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
          </motion.article>

          {/* Author Bio */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-8 sm:mb-12"
          >
            <motion.div
              className="card p-6 sm:p-8"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <span className="text-white font-bold text-sm sm:text-base">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    {post.author}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-3">
                    {post.authorRole}
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                    {post.author} is an expert in {post.category.toLowerCase()}{" "}
                    with years of experience helping businesses transform their
                    operations through technology.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              className="card p-6 sm:p-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-blue-100 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Let's discuss how we can help you implement these strategies in
                your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
                  >
                    <i className="fas fa-calendar-check mr-2 sm:mr-3"></i>
                    Get Free Consultation
                  </Link>
                </motion.div>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 text-sm sm:text-base"
                  >
                    Explore Services
                    <i className="fas fa-arrow-right ml-2 sm:ml-3"></i>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default BlogPost;
