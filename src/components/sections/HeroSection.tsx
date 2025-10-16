import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import collage3D from "/src/assets/3d-collage.png"; // 👈 use your transparent 3D collage here

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 🌌 Particle Background
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
      ctx.fillStyle = "rgba(3, 4, 94, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(0, 180, 216, 0.05)";
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
        gradient.addColorStop(0, `rgba(0,180,216,${p.opacity})`);
        gradient.addColorStop(1, "rgba(0,180,216,0)");
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

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#03045e] via-[#0077b6] to-[#00b4d8] text-white overflow-hidden flex flex-col justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-16 gap-12">
        {/* 🩵 Left Text Section */}
        <motion.div
          className="text-center lg:text-left max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-[#00b4d8] to-[#90e0ef] bg-clip-text text-transparent">
              Empower Your Business
            </span>
            <br />
            with Intelligent Automation
          </h1>

          <p className="text-lg md:text-xl text-[#caf0f8]/90 mb-8">
            Streamline workflows, boost efficiency, and scale effortlessly —
            powered by Autolinium.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/services"
              className="px-8 py-4 rounded-xl text-lg font-semibold bg-[#00b4d8] hover:bg-[#0077b6] shadow-lg shadow-[#00b4d8]/20 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl text-lg font-semibold border border-[#90e0ef]/40 hover:bg-[#90e0ef]/10 transition-all duration-300 transform hover:scale-105"
            >
              Book a Demo
            </Link>
          </div>

          {/* 🌟 Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0">
            {[
              { number: "50%", label: "Cost Reduction" },
              { number: "24/7", label: "AI Support" },
              { number: "99%", label: "Accuracy" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#90e0ef]/20 transition-all duration-300"
              >
                <div className="text-xl font-bold text-[#00b4d8] mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-[#caf0f8]/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 💫 3D Collage (Desktop only) */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center w-[520px] h-[520px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.img
            src={collage3D}
            alt="Automation Tools Collage"
            className="w-full h-auto drop-shadow-[0_0_30px_rgba(0,180,216,0.4)]"
            animate={{
              rotate: [0, 1.5, -1.5, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
