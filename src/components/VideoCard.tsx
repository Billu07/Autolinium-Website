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
      className="card text-center relative overflow-hidden"
      style={{ borderColor: "var(--card-border)" }}
    >
      {/* Image */}
      <div className="relative mb-4">
        <img
          src={src}
          alt={title}
          className="w-full max-h-[150px] sm:max-h-[200px] object-contain rounded-lg"
          loading="lazy"
          onError={handleImageError}
        />
      </div>
      {/* Content */}
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4">
        {description}
      </p>
      <Link
        to="/services"
        className="button inline-block"
        style={
          {
            backgroundColor: color,
            "--hover-bg": "var(--accent-deep-teal)",
          } as React.CSSProperties
        }
      >
        <i className={`${icon} mr-2`}></i>
        {buttonText}
      </Link>
    </motion.div>
  );
};

export default VideoCard;
