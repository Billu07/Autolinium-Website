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
    >
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

      {/* Icon/Image Container */}
      <div className="relative mb-6 z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border border-blue-400/20 group-hover:border-blue-400/40 transition-all duration-500 mb-4">
          <motion.img
            src={src}
            alt={title}
            className="w-10 h-10 object-contain"
            loading="lazy"
            onError={handleImageError}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-3 font-jakarta text-white group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative"
        >
          <Link
            to="/services"
            className="button inline-block relative overflow-hidden group/btn font-jakarta text-sm px-6 py-3"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <i className={`${icon} mr-2`}></i>
              {buttonText}
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Enhanced ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-700 -z-10"></div>
    </motion.div>
  );
};

export default VideoCard;
