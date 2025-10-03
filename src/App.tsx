import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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

// Import split components
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import ChatWidget from "./components/ChatWidget";
import Home from "./components/sections/Home";

// Performance monitoring
const PerformanceMonitor: React.FC = () => {
  React.useEffect(() => {
    // Basic performance monitoring
    if ("connection" in navigator) {
      const connection = (navigator as any).connection;
      console.log("Network type:", connection.effectiveType);
      console.log("Data saver:", connection.saveData);
    }

    // Log Core Web Vitals (simplified)
    const observeLoadTime = () => {
      if (performance.timing) {
        const loadTime =
          performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log("Page load time:", loadTime, "ms");
      }
    };

    if (document.readyState === "complete") {
      observeLoadTime();
    } else {
      window.addEventListener("load", observeLoadTime);
    }

    return () => {
      window.removeEventListener("load", observeLoadTime);
    };
  }, []);

  return null;
};

const App: React.FC = () => {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <div className="bg-[var(--primary-bg)] text-[var(--text-primary)] font-inter relative overflow-hidden">
        <PerformanceMonitor />

        <Header />
        <ScrollProgress />

        {/* Page Content with Transitions */}
        <AnimatePresence mode="wait">
          <main key={location.pathname} className="pt-20">
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
