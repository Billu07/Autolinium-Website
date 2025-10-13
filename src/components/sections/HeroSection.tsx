import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();

  // Futuristic neural network animation
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

    // Neural network nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      connections: number[];
    }> = [];

    // Initialize neural network
    const initNeuralNetwork = () => {
      nodes.length = 0;
      const nodeCount = window.innerWidth < 768 ? 12 : 20;

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          connections: [],
        });
      }

      // Create connections
      nodes.forEach((node, i) => {
        node.connections = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i !== j && Math.random() > 0.7) {
            node.connections.push(j);
          }
        }
      });
    };

    initNeuralNetwork();

    const animate = () => {
      ctx.fillStyle = "rgba(10, 15, 26, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections with gradient
      nodes.forEach((node, i) => {
        node.connections.forEach((connIndex) => {
          const target = nodes[connIndex];
          const dx = node.x - target.x;
          const dy = node.y - target.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const gradient = ctx.createLinearGradient(
              node.x,
              node.y,
              target.x,
              target.y
            );
            gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)");
            gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.08)");
            gradient.addColorStop(1, "rgba(6, 182, 212, 0.1)");

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        });
      });

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Draw node with glow
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.size * 3
        );
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Floating AI Circuit Patterns
  const FloatingCircuits = () => {
    const circuits = [
      {
        path: "M20,20 Q40,5 60,20 T100,20",
        position: "top-10 left-10",
        delay: 0,
      },
      {
        path: "M10,80 Q30,60 50,80 T90,80",
        position: "top-40 right-5",
        delay: 2,
      },
      {
        path: "M30,120 Q50,100 70,120 T110,120",
        position: "bottom-40 left-5",
        delay: 4,
      },
      {
        path: "M15,150 Q35,130 55,150 T95,150",
        position: "bottom-20 right-10",
        delay: 6,
      },
    ];

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" className="opacity-10">
          {circuits.map((circuit, index) => (
            <motion.path
              key={index}
              d={circuit.path}
              stroke="url(#circuitGradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: circuit.delay,
              }}
            />
          ))}
          <defs>
            <linearGradient
              id="circuitGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  // Data Stream Particles
  const DataStreams = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-100, window.innerHeight + 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );

  // Holographic Grid
  const HolographicGrid = () => (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="w-full h-full opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          backgroundPosition: "center center",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
      />
    </div>
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 overflow-hidden hero-section bg-[#0A0F1A]">
      {/* Futuristic Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Holographic Grid */}
      <HolographicGrid />

      {/* Circuit Patterns */}
      <FloatingCircuits />

      {/* Data Streams */}
      <DataStreams />

      {/* Ambient Light Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          style={{
            transform: "translate(50%, 50%)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Transform Your Business With AI
          </span>
          <span className="block text-white mt-2 text-xl sm:text-2xl md:text-3xl font-light tracking-wider">
            AUTOMATE • CONNECT • INNOVATE
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Intelligent automation solutions that drive growth, efficiency, and
          innovation for modern businesses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative">Explore Our Services</span>
            <i className="fas fa-arrow-right ml-2 relative group-hover:translate-x-1 transition-transform duration-300"></i>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white border border-cyan-400/30 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <i className="fas fa-calendar-alt mr-2"></i>
            Book Demo
          </Link>
        </motion.div>

        {/* Tech Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-16 max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            {
              number: "50%",
              label: "Cost Reduction",
              icon: "fas fa-chart-line",
            },
            { number: "24/7", label: "AI Support", icon: "fas fa-robot" },
            { number: "99%", label: "Accuracy", icon: "fas fa-bullseye" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <i className={`${stat.icon} text-cyan-400 text-lg mb-2`}></i>
              <div className="text-xl font-bold text-blue-400 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
