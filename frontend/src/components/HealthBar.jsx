import React from "react";
import { motion } from "framer-motion";

const { div: MotionDiv } = motion;

const HealthBar = ({ health }) => {
  let bgColor = "bg-green-500";
  if (health <= 66 && health > 30) bgColor = "bg-yellow-500";
  if (health <= 30) bgColor = "bg-red-600";

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gray-800 rounded-full h-6 overflow-hidden"
    >
      <div
        className={`h-full ${bgColor} transition-all duration-300`}
        style={{ width: `${health}%` }}
      ></div>
    </MotionDiv>
  );
};

export default HealthBar;
