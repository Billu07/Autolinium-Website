import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Pricing: React.FC = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="section bg-[var(--primary-bg)] text-[var(--text-primary)]"
    id="pricing"
  >
    <div className="container">
      <h2 className="text-4xl font-bold mb-8 text-center">Flexible Pricing</h2>
      <p className="text-lg text-center mb-12 text-[var(--text-secondary)]">
        Affordable Pricing Plan
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="card text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Teams</h3>
          <p className="text-3xl font-bold mb-2">$69.00/month</p>
          <p className="text-[var(--text-secondary)] mb-6">
            Perfect for freelancers and startups automating workflows on a
            budget.
          </p>
          <ul className="text-left mb-6">
            <li className="mb-2">Basic AI Tools</li>
            <li className="mb-2">Limited API Access</li>
            <li className="mb-2">5 Prebuilt Templates</li>
            <li className="mb-2">Basic Support</li>
            <li className="mb-2">AI Assistance</li>
          </ul>
          <Link to="/subscribe" className="button">
            Get Started
          </Link>
        </motion.div>
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="card text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Business</h3>
          <p className="text-3xl font-bold mb-2">$99.00/month</p>
          <p className="text-[var(--text-secondary)] mb-6">
            For growing teams needing advanced AI automation.
          </p>
          <ul className="text-left mb-6">
            <li className="mb-2">Advanced AI Tools</li>
            <li className="mb-2">Unlimited API Access</li>
            <li className="mb-2">20+ Prebuilt Templates</li>
            <li className="mb-2">Priority Support</li>
            <li className="mb-2">Custom Integration</li>
          </ul>
          <Link to="/subscribe" className="button">
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default Pricing;
