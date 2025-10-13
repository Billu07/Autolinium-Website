import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Performance-optimized particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Minimal particles for performance - even fewer on mobile
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 15 : 25; // Even fewer on mobile

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5, // Smaller on mobile
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.2 + 0.1,
        });
      }
    };

    initParticles();

    // Animation frame reference
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines between close particles
      ctx.strokeStyle = "rgba(59, 130, 246, 0.08)"; // More subtle
      ctx.lineWidth = 0.3;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            // Shorter connections
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      ctx.fillStyle = "rgba(59, 130, 246, 0.4)";

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width)
          particle.speedX *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height)
          particle.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Floating gradient orbs (reduced count and size for mobile)
  const FloatingOrbs = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const orbCount = isMobile ? 2 : 4;

    const orbs = [
      {
        size: "w-12 h-12 sm:w-16 sm:h-16",
        color: "from-blue-500/10 to-cyan-400/10",
        position: "top-10 left-5 sm:top-20 sm:left-10",
        delay: 0,
      },
      {
        size: "w-16 h-16 sm:w-24 sm:h-24",
        color: "from-purple-500/10 to-pink-500/10",
        position: "top-20 right-5 sm:top-40 sm:right-10",
        delay: 2,
      },
      ...(!isMobile
        ? [
            {
              size: "w-14 h-14 sm:w-20 sm:h-20",
              color: "from-cyan-500/10 to-blue-500/10",
              position: "bottom-40 left-20",
              delay: 4,
            },
            {
              size: "w-20 h-20 sm:w-28 sm:h-28",
              color: "from-blue-500/10 to-purple-500/10",
              position: "bottom-20 right-20",
              delay: 6,
            },
          ]
        : []),
    ];

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs.slice(0, orbCount).map((orb, index) => (
          <motion.div
            key={index}
            className={`absolute ${orb.position} ${orb.size} bg-gradient-to-br ${orb.color} rounded-full blur-xl`}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-section pt-16 sm:pt-20 relative overflow-hidden bg-gray-900">
      {/* Performance-optimized canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #0f1729 0%, #0a0f1a 100%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5 sm:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating gradient orbs */}
      <FloatingOrbs />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Hero Content */}
          <motion.div
            className="max-w-4xl mb-6 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Headline - Larger on mobile */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Transform Your
              </span>
              <span className="text-white block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                Business With AI
              </span>
            </motion.h1>

            {/* Subtitle - Larger on mobile */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Intelligent automation solutions that drive growth, efficiency,
              and innovation for modern businesses.
            </motion.p>
          </motion.div>

          {/* Stats Section - Fixed mobile layout */}
          <motion.div
            className="grid grid-cols-3 gap-2 sm:gap-6 mb-6 sm:mb-10 max-w-md w-full px-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: "50%", label: "Cost Reduction" },
              { number: "24/7", label: "AI Support" },
              { number: "99%", label: "Accuracy" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-1 whitespace-nowrap">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 leading-tight whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Primary CTA - Better mobile spacing */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-blue-400/20 w-full sm:w-auto justify-center"
            >
              <i className="fas fa-rocket mr-2 sm:mr-3"></i>
              Explore Our Services
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20 w-full sm:w-auto justify-center"
            >
              <i className="fas fa-calendar mr-2 sm:mr-3"></i>
              Book Demo
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - COMPLETELY REMOVED as requested */}
    </section>
  );
};

export default HeroSection;
