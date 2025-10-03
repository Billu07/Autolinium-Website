import React from "react";

const SkeletonCard: React.FC = () => (
  <div className="card animate-pulse">
    <div className="h-16 bg-gray-600 rounded mx-auto mb-4"></div>
    <div className="h-6 bg-gray-600 rounded mb-2"></div>
    <div className="h-4 bg-gray-600 rounded mb-4"></div>
    <div className="h-10 bg-gray-600 rounded"></div>
  </div>
);

export default SkeletonCard;
