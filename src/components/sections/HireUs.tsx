import { motion } from "framer-motion";

const UpworkIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.47 5.16c-.66 0-1.28.26-1.74.73-.46.47-.72 1.1-.72 1.76v.01c0 .45.14.88.4 1.24l.87 1.33c.27.41.69.68 1.16.68.94 0 1.7-.76 1.7-1.7 0-.94-.76-1.7-1.7-1.7zm-1.7 6.7c-.46 0-.88-.14-1.24-.4l-.87-1.33c-.27-.41-.69-.68-1.16-.68-.94 0-1.7.76-1.7 1.7 0 .94.76 1.7 1.7 1.7.66 0 1.28-.26 1.74-.73.46-.47.72-1.1.72-1.76v-.01c0-.45-.14-.88-.4-1.24l-.87-1.33c-.27-.41-.69-.68-1.16-.68-.94 0-1.7.76-1.7 1.7 0 .94.76 1.7 1.7 1.7z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.47 15.16c-.66 0-1.28-.26-1.74-.73-.46-.47-.72-1.1-.72-1.76v-.01c0-.45.14.88.4 1.24l.87 1.33c.27.41.69.68 1.16.68.94 0 1.7-.76 1.7 1.7 0 .94-.76 1.7-1.7 1.7zm-1.7-6.7c-.46 0-.88.14-1.24.4l-.87 1.33c-.27.41-.69.68-1.16.68-.94 0-1.7-.76-1.7-1.7 0-.94.76-1.7 1.7-1.7.66 0 1.28.26 1.74.73.46.47.72 1.1.72 1.76v.01c0 .45-.14.88-.4 1.24l-.87 1.33c-.27.41-.69.68-1.16.68-.94 0-1.7-.76-1.7-1.7 0-.94.76-1.7 1.7-1.7z" />
  </svg>
);

const HireOnUpworkCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-16 sm:py-20">
      {/* === Background === */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070B] via-[#0A0F2A] to-[#05070B]" />
      </div>
      {/* Subtle Animated Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        {/* Horizontal Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-white/5 via-white/8 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden"
        >
          {/* Inner Glow Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left: Header & Text */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                <UpworkIcon />
                <span className="text-cyan-400 font-semibold text-sm tracking-wider">
                  TOP-RATED ON UPWORK
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Hire Us on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Upwork
                </span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-2xl mx-auto lg:mx-0">
                Get enterprise-grade AI automation, custom apps, and chatbot
                solutions — delivered by a{" "}
                <strong className="text-cyan-400">Top-Rated Plus</strong> agency
                with{" "}
                <strong className="text-green-400">100% Job Success</strong>.
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                  <i className="fas fa-star text-yellow-400 text-sm"></i>
                  <span className="text-white text-sm font-medium">
                    5.0 Rating
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                  <i className="fas fa-check-circle text-green-400 text-sm"></i>
                  <span className="text-white text-sm font-medium">
                    25+ Jobs
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                  <i className="fas fa-dollar-sign text-cyan-400 text-sm"></i>
                  <span className="text-white text-sm font-medium">
                    $10K+ Earned
                  </span>
                </div>
              </div>
            </div>

            {/* Right: CTA Button */}
            <div className="flex justify-center lg:justify-end">
              <motion.a
                href="https://www.upwork.com/freelancers/~01881dc186a6673f48?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-upwork text-xl group-hover:animate-pulse"></i>
                Hire Us Now
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireOnUpworkCTA;
