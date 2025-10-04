import React from "react";
import { motion } from "framer-motion";
import { useTiltAnimation } from "../../hooks/useTiltAnimation";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  staggerContainer,
  slideInVariants,
} from "../../utils/animationVariants";

const ReviewsSection: React.FC = () => {
  const tiltAnimation = useTiltAnimation();
  const { ref, isVisible } = useScrollAnimation();

  const reviews = [
    {
      rating: 5,
      text: '"Autolinium transformed our workflow with a custom CRM that cut our manual work by 80%. Their team was responsive and delivered beyond expectations."',
      author: "Jane D., Real Estate CEO",
    },
    {
      rating: 4.5,
      text: '"The AI chatbot they built for us handles customer queries 24/7, boosting our conversions. Highly recommend their expertise!"',
      author: "Mark S., E-commerce Manager",
    },
    {
      rating: 5,
      text: '"Their automation setup with Make and Airtable saved us hours weekly. Professional, reliable, and worth every penny."',
      author: "Sarah L., Finance Director",
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <section ref={ref} className="section bg-[var(--primary-bg)]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="container"
      >
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-white"
          variants={slideInVariants}
        >
          Client Reviews
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={slideInVariants}
              style={{
                rotateX: tiltAnimation.rotateX,
                rotateY: tiltAnimation.rotateY,
                perspective: 1000,
              }}
              onMouseMove={tiltAnimation.handleMouseMove}
              onMouseLeave={tiltAnimation.handleMouseLeave}
            >
              <motion.div
                className="review-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="star-rating flex justify-center mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-[var(--text-secondary)] mb-4 italic">
                  {review.text}
                </p>
                <p className="font-semibold text-[var(--accent-blue)]">
                  {review.author}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ReviewsSection;
