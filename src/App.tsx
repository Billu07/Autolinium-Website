import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Eager load critical components (above the fold)
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import ChatWidget from "./components/ChatWidget";
import Home from "./components/sections/Home";

// Lazy load non-critical components (below the fold)
const Contact = lazy(() => import("./components/Contact"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const ToolDetail = lazy(() => import("./pages/ToolDetail"));
const Subscribe = lazy(() => import("./pages/Subscribe"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Tools = lazy(() => import("./pages/Tools"));

// Loading component for lazy-loaded routes
const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-cyan-400 text-lg font-medium">Loading...</p>
    </motion.div>
  </div>
);

// Performance monitor (removed in production via build process)
const PerformanceMonitor: React.FC = () => {
  React.useEffect(() => {
    // Only run in development - will be tree-shaken in production
    if (import.meta.env.DEV) {
      if ("connection" in navigator) {
        const connection = (navigator as any).connection;
        console.log("Network type:", connection.effectiveType);
        console.log("Data saver:", connection.saveData);
      }

      const observeLoadTime = () => {
        if (performance.timing) {
          const loadTime =
            performance.timing.loadEventEnd -
            performance.timing.navigationStart;
          console.log("Page load time:", loadTime, "ms");
        }
      };

      if (document.readyState === "complete") observeLoadTime();
      else window.addEventListener("load", observeLoadTime);

      return () => window.removeEventListener("load", observeLoadTime);
    }
  }, []);

  return null;
};

// Optimized particle system with reduced count
const ParticleSystem: React.FC = React.memo(() => (
  <motion.div
    className="fixed inset-0 z-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-[var(--accent-blue)]"
        style={{
          filter: "blur(2px)",
          willChange: "transform",
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
));

const App: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <ErrorBoundary>
      <div className="app-container relative min-h-screen bg-[var(--primary-bg)] text-[var(--text-primary)] font-inter overflow-hidden">
        {import.meta.env.DEV && <PerformanceMonitor />}

        {/* Enhanced Background System - HIDDEN ON HOME PAGE */}
        {!isHomePage && <div className="neural-grid"></div>}

        {/* PARTICLE SYSTEM - HIDDEN ON HOME PAGE (HERO) */}
        {!isHomePage && <ParticleSystem />}

        {/* ADDITIONAL FLOATING PARTICLES - HIDDEN ON HOME PAGE */}
        {!isHomePage && (
          <div className="particles-container">
            <div className="particle small"></div>
            <div className="particle medium"></div>
            <div className="particle large"></div>
            <div className="particle small"></div>
            <div className="particle medium"></div>
            <div className="particle large"></div>
          </div>
        )}

        {/* Header + Page Transitions */}
        <Header />
        <ScrollProgress />

        <AnimatePresence mode="wait">
          <main key={location.pathname} className="relative z-10 pt-20">
            <Suspense fallback={<LoadingFallback />}>
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
            </Suspense>
          </main>
        </AnimatePresence>

        <Footer />
        <ChatWidget />
      </div>
    </ErrorBoundary>
  );
};

export default App;
