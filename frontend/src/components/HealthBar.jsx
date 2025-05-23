import React from "react";
import { motion } from "framer-motion";

const { div: MotionDiv } = motion;

const getHealthColor = (health) => {
  if (health > 66) return "bg-green-500";
  if (health > 30) return "bg-yellow-400";
  return "bg-red-500";
};

const HealthBar = ({ health = 100 }) => {
  const healthColor = getHealthColor(health);

  return (
    <div className="w-full h-6 bg-gray-700 rounded-full overflow-hidden">
      <MotionDiv
        className={`h-full ${healthColor}`}
        initial={{ width: "0%" }}
        animate={{ width: `${health}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default HealthBar;
