import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cardVariantsWithIndex } from "../utils/animationVariants";

interface VideoCardProps {
  src: string;
  title: string;
  description: string;
  buttonText: string;
  color: string;
  icon: string;
  index?: number;
}

const VideoCard: React.FC<VideoCardProps> = ({
  src,
  title,
  description,
  buttonText,
  color,
  icon,
  index = 0,
}) => {
  const fallbackImage = "/assets/fallback-image.jpg";

  const handleImageError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      console.error(`Failed to load image for ${title}: ${src}`);
      event.currentTarget.src = fallbackImage;
    },
    [title, src]
  );

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <motion.div
      custom={index}
      variants={cardVariantsWithIndex}
      initial="hidden"
      animate="visible"
      whileHover={!isMobile ? "hover" : undefined}
      whileTap={isMobile ? { scale: 0.98 } : undefined}
      className="card text-center relative overflow-hidden group"
      style={{ borderColor: "var(--card-border)" }}
    >
      {/* AI-inspired data flow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-300"></div>
      </div>

      {/* Image container with elegant frame */}
      <div className="relative mb-6 z-10">
        <div className="relative inline-block">
          <motion.img
            src={src}
            alt={title}
            className="w-full max-h-[160px] sm:max-h-[220px] object-contain rounded-xl border border-gray-600 group-hover:border-blue-400 transition-all duration-500"
            loading="lazy"
            onError={handleImageError}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 font-jakarta group-hover:text-blue-300 transition-colors duration-300 text-white">
          {title}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base mb-6 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative"
        >
          <Link
            to="/services"
            className="button inline-block relative overflow-hidden group/btn font-jakarta"
            style={
              {
                background:
                  "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
              } as React.CSSProperties
            }
          >
            <span className="relative z-10 flex items-center justify-center">
              <i className={`${icon} mr-3 text-lg`}></i>
              {buttonText}
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-300 -z-10"></div>
    </motion.div>
  );
};

export default VideoCard;
