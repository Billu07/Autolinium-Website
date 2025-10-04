import type { Variants } from "framer-motion";
import { easeOut } from "framer-motion";

// ✅ Simple fade in (no transitions)
export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ✅ Springy fade in
export const fadeInSpringVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// ✅ Slide in from left
export const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

// ✅ For grids/lists with staggered children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// ✅ Card fade in (basic, no delay)
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ✅ Card fade in WITH index-based delay
export const cardVariantsWithIndex: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
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

// ✅ Button states
export const buttonVariants: Variants = {
  hover: { scale: 1.05 },
  pulse: { scale: [1, 1.05, 1] },
};

// ✅ Mobile menu open/close
export const mobileMenuVariants: Variants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
};

// ✅ Horizontal ticker animation
export const tickerVariants: Variants = {
  animate: {
    x: ["0%", "-100%"],
  },
};

// ✅ FAQ expand/collapse
export const faqAnswerVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
};
