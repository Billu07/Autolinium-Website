import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import collage3D from "/src/assets/3d-collageee.png"; // Your robot image (with visible eyes)

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Particle Background (unchanged)
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

    const particles: any[] = [];
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
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#0077b6] text-white flex flex-col justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-16 gap-12">
        {/* LEFT SIDE */}
        <motion.div
          className="text-center lg:text-left max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white block mb-2">Empower Your Business</span>
            <span className="text-[#e0f7ff] block">
              with Intelligent Automation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
            Streamline workflows, boost efficiency, and scale effortlessly —
            powered by Autolinium.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/services"
              className="px-8 py-4 rounded-xl text-lg font-semibold bg-white text-[#0077b6] border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 flex items-center gap-3 group"
            >
              <span>Explore Services</span>
              <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-[#0077b6] transition-all duration-300 flex items-center gap-3 group"
            >
              <i className="fas fa-calendar" />
              <span>Book a Demo</span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE - 3D Collage (Robot) */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center w-[480px] h-[480px]"
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <motion.img
            src={collage3D}
            alt="Automation Robot"
            className="w-full h-auto object-contain select-none drop-shadow-[0_0_25px_rgba(0,180,216,0.4)]"
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-[#0077b6] clip-path-wave" />
    </section>
  );
};

export default HeroSection;
