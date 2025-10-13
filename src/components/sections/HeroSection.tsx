import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const getCenter = () => ({
      x: canvas.width / 2 + canvas.width * 0.22, // further right
      y: canvas.height / 2 - canvas.height * 0.05, // slightly higher
    });

    let time = 0;

    const render = () => {
      const { x: centerX, y: centerY } = getCenter();
      ctx.fillStyle = "rgba(8, 10, 30, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const ringCount = 10;
      for (let ring = ringCount; ring > 0; ring--) {
        const radius = ring * 25 + Math.sin(time * 0.002 + ring) * 8;
        const ringWidth = 2.8 + ring * 0.45;

        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          radius - ringWidth,
          centerX,
          centerY,
          radius + ringWidth
        );

        gradient.addColorStop(0, `rgba(168, 85, 247, ${0.4 - ring * 0.03})`);
        gradient.addColorStop(0.5, `rgba(99, 102, 241, ${0.28 - ring * 0.02})`);
        gradient.addColorStop(1, `rgba(59, 130, 246, ${0.12 - ring * 0.01})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = ringWidth;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // More vivid vortex
      const vortexRadius = 35 + Math.sin(time * 0.004) * 10;
      const vortexGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        vortexRadius
      );
      vortexGradient.addColorStop(0, "rgba(255,255,255,0.4)");
      vortexGradient.addColorStop(0.4, "rgba(192,132,252,0.25)");
      vortexGradient.addColorStop(1, "rgba(99,102,241,0)");

      ctx.fillStyle = vortexGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, vortexRadius, 0, Math.PI * 2);
      ctx.fill();

      time++;
      requestAnimationFrame(render);
    };

    render();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // 💫 Enhanced PortalGlow: 3 layers of drift, rotation & breathing
  const PortalGlow = () => (
    <div className="absolute inset-0 pointer-events-none">
      {/* Core pulse */}
      <motion.div
        className="absolute top-[45%] left-[70%] w-28 h-28 bg-white/40 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          filter: "blur(35px)",
        }}
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.18, 0.35, 0.18],
          x: [0, 12, -12, 0],
          y: [0, -10, 10, 0],
          rotate: [0, 12, -12, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer ring glow */}
      <motion.div
        className="absolute top-[45%] left-[70%] w-60 h-60 bg-purple-500/25 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          filter: "blur(65px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.18, 0.08],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Subtle cyan shimmer */}
      <motion.div
        className="absolute top-[45%] left-[70%] w-72 h-72 bg-cyan-400/20 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          filter: "blur(85px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.12, 0.05],
          x: [0, -10, 10, 0],
          y: [0, 6, -6, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 overflow-hidden bg-[#080A1E]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
      />

      <PortalGlow />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-3xl text-left md:text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Enter The Future
          </span>
          <span className="block text-white mt-2 text-2xl sm:text-3xl font-light tracking-wider">
            OF AUTOMATION
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Step through the portal to discover intelligent automation solutions
          that transcend traditional boundaries.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            to="/services"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative flex items-center">
              Enter Portal
              <i className="fas fa-door-open ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white border border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <i className="fas fa-comments mr-2" />
            Contact Guide
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
