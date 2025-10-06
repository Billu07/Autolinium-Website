import React, { useState } from "react";
import { motion } from "framer-motion";

const ROICalculator: React.FC = () => {
  const [hours, setHours] = useState(10);
  const [employees, setEmployees] = useState(5);
  const hourlyRate = 45; // Average hourly rate

  const weeklySavings = hours * hourlyRate;
  const annualSavings = weeklySavings * 52;
  const teamAnnualSavings = annualSavings * employees;

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHours(Number(e.target.value));
  };

  const handleEmployeesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployees(Number(e.target.value));
  };

  return (
    <motion.div
      className="card p-6 sm:p-8 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-white">
        Calculate Your{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Potential Savings
        </span>
      </h3>

      <div className="space-y-6 sm:space-y-8">
        {/* Hours Saved Input */}
        <div>
          <label className="block text-sm sm:text-base font-medium mb-3 text-[var(--text-secondary)]">
            Hours saved per employee per week:
            <span className="text-blue-400 font-bold ml-2">{hours} hours</span>
          </label>
          <input
            type="range"
            min="5"
            max="40"
            value={hours}
            onChange={handleHoursChange}
            className="w-full h-2 bg-[var(--tertiary-bg)] rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-[var(--text-muted)] mt-2">
            <span>5h</span>
            <span>20h</span>
            <span>40h</span>
          </div>
        </div>

        {/* Employees Input */}
        <div>
          <label className="block text-sm sm:text-base font-medium mb-3 text-[var(--text-secondary)]">
            Number of employees:
            <span className="text-blue-400 font-bold ml-2">{employees}</span>
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={employees}
            onChange={handleEmployeesChange}
            className="w-full h-2 bg-[var(--tertiary-bg)] rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-[var(--text-muted)] mt-2">
            <span>1</span>
            <span>25</span>
            <span>50</span>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
          <motion.div
            className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-blue-400/30"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
              ${weeklySavings.toLocaleString()}
            </div>
            <div className="text-xs sm:text-sm text-blue-300">
              Weekly Savings
            </div>
          </motion.div>

          <motion.div
            className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-400/20 border border-purple-400/30"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
              ${teamAnnualSavings.toLocaleString()}
            </div>
            <div className="text-xs sm:text-sm text-purple-300">
              Annual Savings
            </div>
          </motion.div>
        </div>

        {/* Additional Metrics */}
        <motion.div
          className="p-4 sm:p-6 rounded-xl bg-[var(--tertiary-bg)] border border-[var(--card-border)] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-lg font-semibold text-white mb-3 sm:mb-4">
            That's Like Having...
          </div>
          <div className="text-sm text-[var(--text-secondary)] space-y-2 sm:space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <i className="fas fa-bullseye text-green-400 text-sm"></i>
              <span>
                {Math.round(teamAnnualSavings / 5000)} new marketing campaigns
                funded
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <i className="fas fa-user-plus text-blue-400 text-sm"></i>
              <span>
                {Math.round(teamAnnualSavings / 80000)} additional team members
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <i className="fas fa-chart-line text-cyan-400 text-sm"></i>
              <span>
                {Math.round(teamAnnualSavings / 100000)}x ROI on automation
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-3">
            Based on average ${hourlyRate}/hour operational costs
          </p>
          <motion.button
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-calculator mr-2"></i>
            Get Detailed Analysis
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ROICalculator;
