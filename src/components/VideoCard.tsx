import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

// Card container variants for staggered animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

interface VideoCardProps {
  src: string;
  title: string;
  description: string;
  buttonText: string;
  color: string;
  icon: string;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({
  src,
  title,
  description,
  buttonText,
  color,
  icon,
  index,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ rotateX: 5, rotateY: 5, boxShadow: `0 0 20px ${color}` }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 0.8,
        delay: index * 0.2,
      }}
      className="bg-[var(--bg-dark)] p-6 rounded-lg border-2 hover:shadow-[var(--border-glow)] transition transform"
      style={{ borderColor: color }}
    >
      <div className="flex justify-center mb-4">
        <motion.i
          className={`fas ${icon} text-4xl`}
          style={{ color }}
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        ></motion.i>
      </div>
      <h3
        className="text-2xl font-orbitron mb-4 drop-shadow-sm text-center"
        style={{ color, textShadow: "var(--text-shadow)" }}
      >
        {title}
      </h3>
      <p className="font-sans mb-4 text-gray-300 text-center">{description}</p>
      <div className="relative">
        <video
          src={src}
          autoPlay
          loop
          muted
          className="w-full h-48 object-cover rounded mb-4"
          onLoadedData={(e) => {
            e.currentTarget.style.opacity = "1";
            setIsLoading(false);
          }}
          style={{ opacity: 0, transition: "opacity 0.5s" }}
          aria-label={`Demo video for ${title}`}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="rounded-full h-12 w-12 border-t-2 border-b-2"
              style={{ borderColor: color }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </div>
        )}
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        <motion.span
          whileHover={{ scale: 1.05, boxShadow: `0 0 10px ${color}` }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded transition inline-block text-white"
          style={{ backgroundColor: color }}
        >
          <Link
            to={
              buttonText === "Learn More"
                ? `/services/${title.toLowerCase().replace(/\s+/g, "-")}`
                : `/tools/${title.toLowerCase().replace(/\s+/g, "-")}`
            }
          >
            {buttonText}
          </Link>
        </motion.span>
        {buttonText === "Request Demo" && (
          <motion.span
            whileHover={{ scale: 1.05, boxShadow: `0 0 10px ${color}` }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded transition inline-block text-white"
            style={{ backgroundColor: color }}
          >
            <Link to="/subscribe">Subscribe Now</Link>
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};

export default VideoCard;
