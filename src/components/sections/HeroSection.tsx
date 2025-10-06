import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const saasProducts = [
    {
      name: "AI Voice Assistant",
      icon: "fas fa-microphone-alt",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      description: "Powered by Vapi",
    },
    {
      name: "Business Chatbot",
      icon: "fas fa-comments",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      description: "Intelligent support",
    },
    {
      name: "Short Generator",
      icon: "fas fa-video",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      description: "Content creation",
    },
  ];

  // Floating Geometric Mesh Elements
  const FloatingGeometricMesh = () => {
    const shapes = [
      {
        type: "triangle",
        color: "blue",
        size: "w-24 h-24",
        position: "top-20 left-10",
      },
      {
        type: "hexagon",
        color: "purple",
        size: "w-20 h-20",
        position: "top-40 right-15",
      },
      {
        type: "diamond",
        color: "cyan",
        size: "w-16 h-16",
        position: "bottom-30 left-20",
      },
      {
        type: "triangle",
        color: "blue",
        size: "w-28 h-28",
        position: "bottom-20 right-25",
      },
      {
        type: "hexagon",
        color: "purple",
        size: "w-32 h-32",
        position: "top-60 left-30",
      },
    ];

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${shape.position} ${shape.size} border border-${shape.color}-400/20 opacity-20`}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + index * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2,
            }}
            style={{
              clipPath:
                shape.type === "triangle"
                  ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                  : shape.type === "hexagon"
                  ? "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                  : "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // diamond
            }}
          />
        ))}
      </div>
    );
  };

  // Orbital Rings around Central Hub
  const OrbitalRings = () => (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute inset-0 m-auto w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-blue-400/20"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity },
        }}
      />
      <motion.div
        className="absolute inset-0 m-auto w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-purple-400/15"
        animate={{
          rotate: -360,
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity },
        }}
      />
    </div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center hero-section pt-16 sm:pt-20 relative overflow-hidden bg-gray-900">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
          {/* Main Grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Animated Grid Lines */}
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: `
                linear-gradient(90deg, transparent 99%, rgba(59, 130, 246, 0.4) 100%),
                linear-gradient(transparent 99%, rgba(168, 85, 247, 0.3) 100%)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Floating Geometric Elements */}
      <FloatingGeometricMesh />
      <OrbitalRings />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Value Proposition */}
          <motion.div
            className="max-w-3xl mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Benefit-focused Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Automate Your Business
              </span>
              <br />
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                With AI-Powered Solutions
              </span>
            </motion.h1>
          </motion.div>

          {/* Product Ecosystem */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                Our AI Product Suite
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                Integrated solutions that work together to transform your entire
                operation
              </p>
            </div>

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              {/* Central Integration Hub */}
              <motion.div
                className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-2xl z-20 backdrop-blur-sm"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <i className="fas fa-brain text-white text-xl sm:text-2xl"></i>
              </motion.div>

              {/* Products */}
              {saasProducts.map((product, index) => {
                const angle = (index * 360) / saasProducts.length;
                const radius = 100;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <motion.div
                    key={product.name}
                    className={`absolute w-20 h-20 sm:w-24 sm:h-24 rounded-xl ${product.bgColor} border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center shadow-lg z-10`}
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 1 + index * 0.2,
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -12,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <i
                      className={`${product.icon} text-lg sm:text-xl ${product.color} mb-1`}
                    ></i>
                    <span className="text-xs font-medium text-gray-300 text-center leading-tight px-1">
                      {product.name}
                    </span>
                    <span className="text-[10px] text-gray-400 mt-1">
                      {product.description}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <i className="fas fa-rocket mr-2 sm:mr-3"></i>
              Explore Our Solutions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
