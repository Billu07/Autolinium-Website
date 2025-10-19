import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import collage3D from "/src/assets/3d-collage.png";

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 🎇 Particle background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }[] = [];

    const initParticles = () => {
      particles.length = 0;
      const count = window.innerWidth < 768 ? 15 : 25;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          size: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.1 + 0.05,
        });
      }
    };

    initParticles();

    let animationFrameId: number;
    const render = () => {
      ctx.fillStyle = "rgba(15, 20, 35, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(59,130,246,0.03)";
      ctx.lineWidth = 0.2;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 2
        );
        gradient.addColorStop(0, `rgba(59,130,246,${p.opacity})`);
        gradient.addColorStop(1, "rgba(59,130,246,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
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

  // ✨ Floating decorative shapes
  const FloatingShapes = () => {
    const shapes = [
      {
        type: "circle",
        size: "w-4 h-4",
        color: "bg-blue-400/10",
        position: "top-20 left-10",
        delay: 0,
        duration: 20,
      },
      {
        type: "square",
        size: "w-3 h-3",
        color: "bg-cyan-400/10",
        position: "top-40 right-20",
        delay: 5,
        duration: 25,
      },
      {
        type: "circle",
        size: "w-2 h-2",
        color: "bg-purple-400/10",
        position: "bottom-40 left-20",
        delay: 10,
        duration: 30,
      },
      {
        type: "square",
        size: "w-5 h-5",
        color: "bg-blue-400/5",
        position: "bottom-20 right-10",
        delay: 15,
        duration: 35,
      },
    ];
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shapes.map((s, i) => (
          <motion.div
            key={i}
            className={`absolute ${s.position} ${s.size} ${s.color} ${
              s.type === "circle" ? "rounded-full" : "rounded-sm"
            }`}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: s.type === "square" ? [0, 90, 180] : [0, 0, 0],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: s.delay,
            }}
          />
        ))}
      </div>
    );
  };

  // 💡 Subtle glowing orbs
  const LightOrbs = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 overflow-hidden
      bg-gradient-to-b from-[#1A2333] via-[#0F172A] to-[#0A0F1A] transition-all duration-700"
    >
      {/* Background Layers */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <LightOrbs />
      <FloatingShapes />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Content - Always visible */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              {/* Fixed Color - Remove bg-clip-text for solid colors */}
              <span className="block text-cyan-400">
                Transform Your Business With AI
              </span>
              <motion.span
                className="block text-white mt-2 text-xl sm:text-2xl md:text-3xl font-light tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                AUTOMATE • CONNECT • INNOVATE
              </motion.span>
            </motion.h1>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white 
                  bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 
                  shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white 
                  border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/5 
                  transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Book Demo
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-16 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              {[
                { number: "50%", label: "Cost Reduction" },
                { number: "24/7", label: "AI Support" },
                { number: "99%", label: "Accuracy" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/20 transition-all duration-300"
                >
                  <div className="text-xl font-bold text-cyan-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Collage - Larger size and better positioning */}
          <motion.div
            className="hidden lg:flex items-center justify-center flex-1"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <motion.img
              src={collage3D}
              alt="AI Automation Tools Collage"
              className="w-full h-auto max-w-lg xl:max-w-xl 2xl:max-w-2xl drop-shadow-[0_0_60px_rgba(34,211,238,0.4)]"
              animate={{
                rotate: [0, 1.5, -1.5, 0],
                scale: [1, 1.03, 1],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Smooth Transition to Services */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0A0F1A]" />
    </section>
  );
};

export default HeroSection;
