import React from "react";
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
    boxShadow: "0 8px 16px rgba(0, 77, 64, 0.3)", // Consistent with other components
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
  // Debug index value
  console.log(`VideoCard ${title} index:`, index);

  // Fallback image
  const fallbackImage = "/assets/fallback-image.jpg";

  // Mobile-optimized image source (assumes mobile versions exist)
  const mobileSrc = src.replace(".png", "-mobile.png");

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={window.innerWidth >= 640 ? "hover" : undefined} // Disable hover on mobile
      className="card text-center relative overflow-hidden"
      style={{ borderColor: "var(--card-border)" }}
    >
      {/* Responsive Image */}
      <div className="relative aspect-w-16 aspect-h-9 mb-4">
        <picture>
          <source media="(max-width: 640px)" srcSet={mobileSrc} />
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
            onError={(e) => {
              console.error(`Failed to load image for ${title}`);
              e.currentTarget.src = fallbackImage;
            }}
          />
        </picture>
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
