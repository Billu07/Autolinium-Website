import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import Vapi (default import per latest docs)
import Vapi from "@vapi-ai/web";

// Import your background image
import heroBg from "/src/assets/hero4.webp";

const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [vapi, setVapi] = useState<Vapi | null>(null);

  useEffect(() => {
    // Preload the hero background image
    const img = new Image();
    img.src = heroBg;
    img.onload = () => setImageLoaded(true);

    // Initialize Vapi client
    const initializeVapi = async () => {
      try {
        const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
        if (!publicKey) {
          console.error("VAPI_PUBLIC_KEY not found in env");
          return;
        }
        const vapiClient = new Vapi(publicKey); // Pass key as string
        setVapi(vapiClient);

        // Set up event listeners once after init (per latest docs)
        vapiClient.on("call-start", () => {
          console.log("Call started");
        });

        vapiClient.on("call-end", () => {
          console.log("Call ended");
          setIsCalling(false);
        });

        vapiClient.on("error", (error: any) => {
          console.error("Call error:", error);
          setIsCalling(false);
        });

        // Optional: Listen for transcripts if needed
        vapiClient.on("message", (message: any) => {
          if (message.type === "transcript") {
            console.log(`${message.role}: ${message.transcript}`);
          }
        });
      } catch (error) {
        console.error("Failed to initialize Vapi:", error);
      }
    };

    initializeVapi();
  }, []);

  const handleVoiceAgentClick = async () => {
    if (!vapi) {
      console.error("Vapi not initialized");
      return;
    }

    const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;
    if (!assistantId) {
      console.error("VAPI_ASSISTANT_ID not found in env");
      return;
    }

    setIsCalling(true);

    try {
      // Start the call (returns Promise<void>, resolves on start)
      await vapi.start(assistantId); // Pass ID as string
    } catch (error) {
      console.error("Failed to start voice agent:", error);
      setIsCalling(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050810] pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-[1]">
        <img
          src={heroBg}
          alt="AI automation technology background"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-100"
          }`}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050810] via-[#050810]/95 to-[#050810]/80" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-[5] w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Text */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-regular text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your <span className="text-cyan-400">Business</span>{" "}
              with AI Automation
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Work Less, Let AI do the Rest
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-bold text-white bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Explore Solutions
                <i className="fas fa-arrow-right ml-3" aria-hidden="true"></i>
              </Link>
              <Link
                to="https://calendar.app.google/1YYTXKxWK5PFaSzV8"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <i className="fas fa-calendar-alt mr-3" aria-hidden="true"></i>
                Book Consultation
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center space-x-8 opacity-70 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            ></motion.div>
          </motion.div>

          {/* Right Side - Voice Agent Demo - Now visible on mobile */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col items-center space-y-8 -mt-8 lg:-mt-16">
              {/* Voice Agent Illustration */}
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <i className="fas fa-microphone text-cyan-400 text-4xl"></i>
                </div>

                {/* Animated sound waves */}
                <div className="flex justify-center items-end space-x-1 h-8 mt-4">
                  {[
                    { heights: [4, 16, 4], delay: 0 },
                    { heights: [8, 20, 8], delay: 0.2 },
                    { heights: [12, 24, 12], delay: 0.4 },
                    { heights: [8, 20, 8], delay: 0.6 },
                    { heights: [4, 16, 4], delay: 0.8 },
                  ].map((wave, index) => (
                    <motion.div
                      key={index}
                      className="w-1 bg-cyan-400 rounded-full"
                      animate={{ height: wave.heights }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: wave.delay,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Voice Agent CTA Button */}
              <motion.button
                onClick={handleVoiceAgentClick}
                disabled={isCalling}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  isCalling
                    ? "bg-cyan-600 cursor-not-allowed"
                    : "bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                }`}
                whileHover={!isCalling ? { scale: 1.05 } : {}}
                whileTap={!isCalling ? { scale: 0.95 } : {}}
              >
                {isCalling ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                    />
                    Connecting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-microphone mr-3"></i>
                    Try Our Voice Agent
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center text-white/60 z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs mb-2">Scroll to explore</span>
        <motion.div
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
