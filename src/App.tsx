import React from "react";
import { motion } from "framer-motion";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import VideoCard from "./components/VideoCard";
import Contact from "./components/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import ToolDetail from "./pages/ToolDetail";
import Subscribe from "./pages/Subscribe";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import "./App.css";

// Simple variants for fade-ins (matching Axus minimal animations)
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Scroll progress component
const ScrollProgress: React.FC = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollY(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-[var(--accent-blue)] z-20"
      style={{ width: `${scrollY}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollY}%` }}
      transition={{ duration: 0.2 }}
    />
  );
};

// Home component with Axus structure
const Home: React.FC = () => (
  <div>
    {/* Hero Section - Axus Style */}
    <section className="min-h-screen flex items-center justify-center bg-[var(--primary-bg)] text-white pt-20">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="text-center px-4 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Welcome To Autolinium
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-[var(--text-secondary)]">
          AI automates routine tasks, freeing up employees for more strategic,
          creative, and high-value activities.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {/* Hero Cards - Placeholder for images */}
          <div className="card text-center p-4">
            <img
              src="https://via.placeholder.com/150?text=AI+Tool+1"
              alt="Hero Card 1"
              className="w-full h-32 object-cover rounded mb-2"
            />
          </div>
          <div className="card text-center p-4">
            <img
              src="https://via.placeholder.com/150?text=AI+Tool+2"
              alt="Hero Card 2"
              className="w-full h-32 object-cover rounded mb-2"
            />
          </div>
          <div className="card text-center p-4">
            <img
              src="https://via.placeholder.com/150?text=AI+Tool+3"
              alt="Hero Card 3"
              className="w-full h-32 object-cover rounded mb-2"
            />
          </div>
          <div className="card text-center p-4">
            <img
              src="https://via.placeholder.com/150?text=AI+Tool+4"
              alt="Hero Card 4"
              className="w-full h-32 object-cover rounded mb-2"
            />
          </div>
        </div>
        <p className="text-2xl mb-8">
          204+ Startups Supported From Companies Around The World
        </p>
        <Link to="/pricing" className="button text-lg">
          Start Your 30-Day Free Trial
        </Link>
      </motion.div>
    </section>

    {/* About Section - Axus Style */}
    <section className="section bg-[var(--primary-bg)]">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          About Autolinium
        </h2>
        <p className="text-lg text-center mb-8 text-[var(--text-secondary)]">
          Easy Ways To Use AI Tools, And Build AI. Access valuable insights on
          customer behavior, identify areas for improvement, manage support
          requests and make data-driven decisions to optimize your services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <h3 className="text-xl font-semibold mb-2">
              AI Strategy and Consulting
            </h3>
            <p className="text-[var(--text-secondary)]">
              Tailored strategies for AI adoption.
            </p>
          </div>
          <div className="card text-center">
            <h3 className="text-xl font-semibold mb-2">
              Machine Learning Solutions
            </h3>
            <p className="text-[var(--text-secondary)]">
              Custom ML models for your needs.
            </p>
          </div>
          <div className="card text-center">
            <h3 className="text-xl font-semibold mb-2">
              AI Integration and Deployment
            </h3>
            <p className="text-[var(--text-secondary)]">
              Seamless integration into workflows.
            </p>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Services/Features Section - Axus Style */}
    <section className="section bg-[var(--primary-bg)]">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          Built For Integration
        </h2>
        <p className="text-lg text-center mb-12 text-[var(--text-secondary)]">
          Connect Autolinium with the software you use every day
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <img
              src="https://via.placeholder.com/100?text=Logo1"
              alt="Logo 1"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Integration 1</h3>
          </div>
          <div className="card text-center">
            <img
              src="https://via.placeholder.com/100?text=Logo2"
              alt="Logo 2"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Integration 2</h3>
          </div>
          <div className="card text-center">
            <img
              src="https://via.placeholder.com/100?text=Logo3"
              alt="Logo 3"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Integration 3</h3>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Process Section - Axus Style */}
    <section className="section bg-[var(--primary-bg)]">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Working Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="process-step">
            <h3 className="text-2xl font-bold mb-2">#01</h3>
            <h4 className="text-xl font-semibold mb-2">Create Account</h4>
            <p className="text-[var(--text-secondary)]">
              This initial phase ensures that the project is well-defined and
              aligned with the client's objectives.
            </p>
          </div>
          <div className="process-step">
            <h3 className="text-2xl font-bold mb-2">#02</h3>
            <h4 className="text-xl font-semibold mb-2">Your Idea</h4>
            <p className="text-[var(--text-secondary)]">
              We then transform the data into a suitable format for analysis and
              split it into training, validation.
            </p>
          </div>
          <div className="process-step">
            <h3 className="text-2xl font-bold mb-2">#03</h3>
            <h4 className="text-xl font-semibold mb-2">Evaluation</h4>
            <p className="text-[var(--text-secondary)]">
              We perform Exploratory Data Analysis to reveal patterns,
              correlations, and distributions.
            </p>
          </div>
          <div className="process-step">
            <h3 className="text-2xl font-bold mb-2">#04</h3>
            <h4 className="text-xl font-semibold mb-2">Get Result</h4>
            <p className="text-[var(--text-secondary)]">
              The journey begins with a thorough understanding of the client’s
              needs, and their specific problem.
            </p>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Pricing Section - Axus Style */}
    <section className="section bg-[var(--primary-bg)]" id="pricing">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          Flexible Pricing
        </h2>
        <p className="text-lg text-center mb-12 text-[var(--text-secondary)]">
          Affordable Pricing Plan
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card text-center">
            <h3 className="text-2xl font-bold mb-4">Teams</h3>
            <p className="text-3xl font-bold mb-2">$69.00/month</p>
            <p className="text-[var(--text-secondary)] mb-6">
              Perfect for freelancers and startups automating workflows on a
              budget.
            </p>
            <ul className="text-left mb-6">
              <li className="mb-2">Basic AI Tools</li>
              <li className="mb-2">Limited API Access</li>
              <li className="mb-2">5 Prebuilt Templates</li>
              <li className="mb-2">Basic Support</li>
              <li className="mb-2">AI Assistance</li>
            </ul>
            <Link to="/subscribe" className="button">
              Get Started
            </Link>
          </div>
          <div className="card text-center">
            <h3 className="text-2xl font-bold mb-4">Business</h3>
            <p className="text-3xl font-bold mb-2">$99.00/month</p>
            <p className="text-[var(--text-secondary)] mb-6">
              For growing teams needing advanced AI automation.
            </p>
            <ul className="text-left mb-6">
              <li className="mb-2">Advanced AI Tools</li>
              <li className="mb-2">Unlimited API Access</li>
              <li className="mb-2">20+ Prebuilt Templates</li>
              <li className="mb-2">Priority Support</li>
              <li className="mb-2">Custom Integration</li>
            </ul>
            <Link to="/subscribe" className="button">
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Testimonials Section - Axus Style */}
    <section className="section bg-[var(--primary-bg)]">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Testimonials</h2>
        <p className="text-lg text-center mb-12 text-[var(--text-secondary)]">
          Reliable Reviews From Our Customers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="testimonial">
            <p className="mb-4">
              Unique highly effective! Loves or pursues or desires to obtain
              pain because it is pain but because occasionally of all our
              circumstances.
            </p>
            <h4 className="font-semibold">Andrew Mark</h4>
            <p className="text-[var(--text-secondary)]">Founder - Umake</p>
          </div>
          <div className="testimonial">
            <p className="mb-4">
              Amazing & Efficient! Seeks or craves or strives to achieve
              pleasure not for itself but because of the fleeting nature of our
              conditions.
            </p>
            <h4 className="font-semibold">William Jack</h4>
            <p className="text-[var(--text-secondary)]">Manager - Attributes</p>
          </div>
          <div className="testimonial">
            <p className="mb-4">
              My Favorite Tool. Desires or aspires or hopes to grasp happiness
              not merely for itself but because of the unpredictability of life.
            </p>
            <h4 className="font-semibold">Jack Taylor</h4>
            <p className="text-[var(--text-secondary)]">
              Project Head - Specify Sol
            </p>
          </div>
        </div>
      </motion.div>
    </section>

    {/* FAQ Section - Axus Style */}
    <section className="section bg-[var(--primary-bg)]">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-center mb-12 text-[var(--text-secondary)]">
          We Answer Your Questions
        </p>
        <div className="faq-item">
          <h3 className="text-xl font-semibold cursor-pointer">
            How do I get started with Autolinium?
          </h3>
          <p className="text-[var(--text-secondary)]">
            To begin, sign up for an Autolinium account, obtain your API key,
            and explore our easy-to-use dashboard for content generation and
            design assistance.
          </p>
        </div>
        <div className="faq-item">
          <h3 className="text-xl font-semibold cursor-pointer">
            How is the data security of our chatbots ensured?
          </h3>
          <p className="text-[var(--text-secondary)]">
            We use end-to-end encryption and comply with GDPR standards to
            protect your data.
          </p>
        </div>
        <div className="faq-item">
          <h3 className="text-xl font-semibold cursor-pointer">
            What integrations does Autolinium support?
          </h3>
          <p className="text-[var(--text-secondary)]">
            Seamless integration with CRM, Slack, and more.
          </p>
        </div>
      </motion.div>
    </section>

    {/* Contact Section - Axus Style */}
    <section className="section bg-[var(--primary-bg)]">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Drop A Line</h2>
        <p className="text-lg text-center mb-12 text-[var(--text-secondary)]">
          Let's Collaborate & Discuss Your Project
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">I want to discuss:</h3>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li>
                <Link to="#" className="hover:text-[var(--accent-blue)]">
                  User Experience
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[var(--accent-blue)]">
                  Quality & Reliability
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[var(--accent-blue)]">
                  Collaboration
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[var(--accent-blue)]">
                  Legal & Copyright
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="Your Name" className="mb-4" />
            <input type="email" placeholder="Your Email" className="mb-4" />
            <textarea placeholder="Your Message" rows={4} className="mb-4" />
            <button type="submit" className="button w-full">
              Send Message
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  </div>
);

// Dedicated About page
const About: React.FC = () => (
  <section className="section bg-[var(--primary-bg)]">
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="container"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">About Autolinium</h2>
      <p className="text-lg text-center mb-8 text-[var(--text-secondary)]">
        Easy Ways To Use AI Tools, And Build AI. Access valuable insights on
        customer behavior, identify areas for improvement, manage support
        requests and make data-driven decisions to optimize your services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card text-center">
          <h3 className="text-xl font-semibold mb-2">
            AI Strategy and Consulting
          </h3>
          <p className="text-[var(--text-secondary)]">
            Tailored strategies for AI adoption.
          </p>
        </div>
        <div className="card text-center">
          <h3 className="text-xl font-semibold mb-2">
            Machine Learning Solutions
          </h3>
          <p className="text-[var(--text-secondary)]">
            Custom ML models for your needs.
          </p>
        </div>
        <div className="card text-center">
          <h3 className="text-xl font-semibold mb-2">
            AI Integration and Deployment
          </h3>
          <p className="text-[var(--text-secondary)]">
            Seamless integration into workflows.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

// Dedicated Pricing page
const Pricing: React.FC = () => (
  <section className="section bg-[var(--primary-bg)]" id="pricing">
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="container"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Flexible Pricing</h2>
      <p className="text-lg text-center mb-12 text-[var(--text-secondary)]">
        Affordable Pricing Plan
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card text-center">
          <h3 className="text-2xl font-bold mb-4">Teams</h3>
          <p className="text-3xl font-bold mb-2">$69.00/month</p>
          <p className="text-[var(--text-secondary)] mb-6">
            Perfect for freelancers and startups automating workflows on a
            budget.
          </p>
          <ul className="text-left mb-6">
            <li className="mb-2">Basic AI Tools</li>
            <li className="mb-2">Limited API Access</li>
            <li className="mb-2">5 Prebuilt Templates</li>
            <li className="mb-2">Basic Support</li>
            <li className="mb-2">AI Assistance</li>
          </ul>
          <Link to="/subscribe" className="button">
            Get Started
          </Link>
        </div>
        <div className="card text-center">
          <h3 className="text-2xl font-bold mb-4">Business</h3>
          <p className="text-3xl font-bold mb-2">$99.00/month</p>
          <p className="text-[var(--text-secondary)] mb-6">
            For growing teams needing advanced AI automation.
          </p>
          <ul className="text-left mb-6">
            <li className="mb-2">Advanced AI Tools</li>
            <li className="mb-2">Unlimited API Access</li>
            <li className="mb-2">20+ Prebuilt Templates</li>
            <li className="mb-2">Priority Support</li>
            <li className="mb-2">Custom Integration</li>
          </ul>
          <Link to="/subscribe" className="button">
            Get Started
          </Link>
        </div>
      </div>
    </motion.div>
  </section>
);

// App with updated navigation for new routes
const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-[var(--primary-bg)] text-[var(--text-primary)] font-inter relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[var(--primary-bg)] bg-opacity-95 p-4 z-10 shadow-[var(--shadow)]">
        <ScrollProgress />
        <nav className="container mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <img
              src="/assets/autolinium-logo.png"
              alt="Autolinium Logo"
              className="h-10 mr-2 drop-shadow-lg"
            />
            <h1 className="text-2xl md:text-3xl font-bold">Autolinium</h1>
          </motion.div>
          <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base">
            {["Home", "About", "Services", "Pricing", "Blog", "Contact"].map(
              (item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-[var(--accent-blue)]"
                    aria-current={
                      location.pathname ===
                      (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                        ? "page"
                        : undefined
                    }
                  >
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </ul>
        </nav>
      </header>

      {/* Page Content with Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="pt-20"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/tools/:slug" element={<ToolDetail />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-800 p-6 text-center">
        <p className="mb-4">&copy; 2025 Autolinium. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="#"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)]"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)]"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)]"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <Link to="/contact" className="button">
          Drop A Line
        </Link>
      </footer>
    </div>
  );
};

export default App;
