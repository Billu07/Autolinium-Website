import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "./components/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import ToolDetail from "./pages/ToolDetail";
import Subscribe from "./pages/Subscribe";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Tools from "./pages/Tools";

import ErrorBoundary from "./components/ErrorBoundary";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import ChatWidget from "./components/ChatWidget";
import Home from "./components/sections/Home";

// Performance monitor (unchanged)
const PerformanceMonitor: React.FC = () => {
  React.useEffect(() => {
    if ("connection" in navigator) {
      const connection = (navigator as any).connection;
      console.log("Network type:", connection.effectiveType);
      console.log("Data saver:", connection.saveData);
    }

    const observeLoadTime = () => {
      if (performance.timing) {
        const loadTime =
          performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log("Page load time:", loadTime, "ms");
      }
    };

    if (document.readyState === "complete") observeLoadTime();
    else window.addEventListener("load", observeLoadTime);

    return () => window.removeEventListener("load", observeLoadTime);
  }, []);

  return null;
};

const App: React.FC = () => {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-[var(--primary-bg)] text-[var(--text-primary)] font-inter overflow-hidden">
        <PerformanceMonitor />

        {/* ✨ Futuristic floating orbs background */}
        <motion.div
          className="fixed inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[var(--accent-blue)]"
              style={{
                filter: "blur(2px)",
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0.3,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          ))}
        </motion.div>

        {/* ✨ Header + Page Transitions */}
        <Header />
        <ScrollProgress />

        <AnimatePresence mode="wait">
          <main key={location.pathname} className="relative z-10 pt-20">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/tools/:slug" element={<ToolDetail />} />
              <Route path="/subscribe" element={<Subscribe />} />
            </Routes>
          </main>
        </AnimatePresence>

        <Footer />
        <ChatWidget />
      </div>
    </ErrorBoundary>
  );
};
export default App;
