import React, { useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

interface VideoCardProps {
  src: string;
  title: string;
  description: string;
  buttonText: string;
  color: string;
  icon: string;
  index?: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: index * 0.2,
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 16px rgba(0, 77, 64, 0.3)",
    borderColor: "var(--accent-deep-teal)",
    transition: { duration: 0.3 },
  },
};

const VideoCard: React.FC<VideoCardProps> = ({
  src,
  title,
  description,
  buttonText,
  color,
  icon,
  index = 0,
}) => {
  // Fallback image
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
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={!isMobile ? "hover" : undefined}
      whileTap={isMobile ? { scale: 0.98 } : undefined}
      className="card text-center relative overflow-hidden group"
      style={{ borderColor: "var(--card-border)" }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>

      {/* Image */}
      <div className="relative mb-4 z-10">
        <motion.img
          src={src}
          alt={title}
          className="w-full max-h-[150px] sm:max-h-[200px] object-contain rounded-lg"
          loading="lazy"
          onError={handleImageError}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-[var(--accent-blue)] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 group-hover:text-white transition-colors duration-200">
          {description}
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/services"
            className="button inline-block relative overflow-hidden group"
            style={
              {
                backgroundColor: color,
                "--hover-bg": "var(--accent-deep-teal)",
              } as React.CSSProperties
            }
          >
            <span className="relative z-10 flex items-center justify-center">
              <i className={`${icon} mr-2`}></i>
              {buttonText}
            </span>
            <div className="absolute inset-0 bg-[var(--accent-deep-teal)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
