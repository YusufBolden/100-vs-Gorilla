import React from "react";
import { motion } from "framer-motion";

const { div: MotionDiv } = motion;

const getHealthColor = (health) => {
  if (health > 66) return "bg-green-500";
  if (health > 30) return "bg-yellow-500";
  return "bg-red-600";
};

const HealthBar = ({ label = "Gorilla", health = 100 }) => {
  const width = `${health}%`;
  const colorClass = getHealthColor(health);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full mb-4"
    >
      <div className="text-sm mb-1">{label}</div>
      <div className="w-full h-6 bg-gray-800 rounded-full overflow-hidden shadow-inner">
        <div
          className={`h-full ${colorClass} transition-all duration-500`}
          style={{ width }}
        />
      </div>
    </MotionDiv>
  );
};

export default HealthBar;
