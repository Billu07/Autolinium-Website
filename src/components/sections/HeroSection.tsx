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

  // Generate random characters for the digital rain
  const getRandomChar = () => {
    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$#%&@";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  // Create digital rain columns
  const DigitalRain = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, columnIndex) => (
          <div
            key={columnIndex}
            className="absolute top-0"
            style={{
              left: `${(columnIndex * 100) / 40}%`,
            }}
          >
            {[...Array(25)].map((_, dropIndex) => (
              <motion.div
                key={dropIndex}
                className="absolute font-mono text-xs text-cyan-400/30"
                style={{
                  top: `${dropIndex * 4}%`,
                  left: "0px",
                }}
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [`${dropIndex * 4}%`, `${dropIndex * 4 + 100}%`],
                }}
                transition={{
                  duration: 1.5 + Math.random() * 2,
                  delay: Math.random() * 5,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 10,
                  ease: "linear",
                }}
              >
                {getRandomChar()}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // Fast-moving binary streams for added effect
  const BinaryStreams = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, streamIndex) => (
          <motion.div
            key={streamIndex}
            className="absolute font-mono text-sm text-green-400/20"
            style={{
              left: `${10 + (streamIndex * 80) / 15}%`,
              top: "-50px",
            }}
            animate={{
              y: ["-100vh", "100vh"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              delay: Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                {[...Array(20)]
                  .map(() => (Math.random() > 0.5 ? "1" : "0"))
                  .join("")}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    );
  };

  // Floating code snippets for brand alignment
  const FloatingCodeSnippets = () => {
    const codeSnippets = [
      "AI.initialize()",
      "neuralNetwork.train()",
      "voice.process()",
      "chatbot.respond()",
      "video.generate()",
      "automate.business()",
    ];

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={snippet}
            className="absolute font-mono text-xs text-purple-400/15"
            style={{
              left: `${15 + (index * 70) / codeSnippets.length}%`,
              top: `${20 + (index * 60) / codeSnippets.length}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-section pt-16 sm:pt-20 relative overflow-hidden bg-gray-900">
      {/* Dark gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900 pointer-events-none"></div>

      {/* Digital Rain Effects */}
      <DigitalRain />
      <BinaryStreams />
      <FloatingCodeSnippets />

      {/* Subtle grid for structure */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

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

              {/* Digital Rain Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
                {saasProducts.map((_, index) => {
                  const angle = (index * 360) / saasProducts.length;
                  const radius = 100;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <motion.path
                      key={index}
                      d={`M 0 0 L ${x} ${y}`}
                      stroke="url(#digitalGradient)"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: 1,
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        delay: 1 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      transform="translate(128, 128)"
                    />
                  );
                })}
                <defs>
                  <linearGradient
                    id="digitalGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Products - 3 items with equal spacing */}
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
                      backgroundColor: "rgba(255,255,255,0.15)",
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
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              <i className="fas fa-rocket mr-2 sm:mr-3"></i>
              Explore Our Solutions
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 border-t border-gray-800/50 pt-6 sm:pt-8 max-w-2xl backdrop-blur-sm bg-white/5 rounded-2xl px-6 py-4 border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
              <i className="fas fa-shield-check text-green-400 text-sm sm:text-base"></i>
              <span className="text-xs sm:text-sm font-medium">
                Enterprise Grade
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
              <i className="fas fa-bolt text-yellow-400 text-sm sm:text-base"></i>
              <span className="text-xs sm:text-sm font-medium">
                Fast Implementation
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
              <i className="fas fa-chart-line text-blue-400 text-sm sm:text-base"></i>
              <span className="text-xs sm:text-sm font-medium">
                Proven Results
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
