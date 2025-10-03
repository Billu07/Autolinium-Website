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
      className="card max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-center text-white">
        Calculate Your Potential Savings
      </h3>

      <div className="space-y-6">
        {/* Hours Saved Input */}
        <div>
          <label className="block text-sm font-medium mb-3 text-[var(--text-secondary)]">
            Hours saved per employee per week:
            <span className="text-[var(--accent-blue)] font-bold ml-2">
              {hours} hours
            </span>
          </label>
          <input
            type="range"
            min="5"
            max="40"
            value={hours}
            onChange={handleHoursChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-[var(--text-secondary)] mt-1">
            <span>5h</span>
            <span>20h</span>
            <span>40h</span>
          </div>
        </div>

        {/* Employees Input */}
        <div>
          <label className="block text-sm font-medium mb-3 text-[var(--text-secondary)]">
            Number of employees:
            <span className="text-[var(--accent-blue)] font-bold ml-2">
              {employees}
            </span>
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={employees}
            onChange={handleEmployeesChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-[var(--text-secondary)] mt-1">
            <span>1</span>
            <span>25</span>
            <span>50</span>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
          <motion.div
            className="p-4 rounded-lg bg-gradient-to-br from-blue-900 to-blue-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-2xl font-bold text-green-400">
              ${weeklySavings.toLocaleString()}
            </div>
            <div className="text-sm text-blue-200">Weekly Savings</div>
          </motion.div>

          <motion.div
            className="p-4 rounded-lg bg-gradient-to-br from-purple-900 to-purple-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-2xl font-bold text-green-400">
              ${teamAnnualSavings.toLocaleString()}
            </div>
            <div className="text-sm text-purple-200">Annual Savings</div>
          </motion.div>
        </div>

        {/* Additional Metrics */}
        <motion.div
          className="p-4 rounded-lg bg-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-lg font-semibold text-white mb-2">
            That's Like...
          </div>
          <div className="text-sm text-[var(--text-secondary)] space-y-1">
            <p>
              💰 {Math.round(teamAnnualSavings / 5000)} new marketing campaigns
            </p>
            <p>
              🚀 {Math.round(teamAnnualSavings / 80000)} additional team members
            </p>
            <p>
              📈 {Math.round(teamAnnualSavings / 100000)}x ROI on your
              investment
            </p>
          </div>
        </motion.div>
      </div>

      <p className="text-xs text-center mt-4 text-[var(--text-secondary)]">
        Based on average ${hourlyRate}/hour operational costs
      </p>
    </motion.div>
  );
};

export default ROICalculator;
