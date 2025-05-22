import React from "react";
import { motion } from "framer-motion";

const { div: MotionDiv } = motion;

const HealthBar = ({ health = 100 }) => {
  let barColor = "bg-green-500";
  if (health <= 30) barColor = "bg-red-500";
  else if (health <= 66) barColor = "bg-yellow-500";

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-gray-700 rounded-xl overflow-hidden shadow-lg"
    >
      <MotionDiv
        className={`h-6 transition-all duration-500 ${barColor}`}
        style={{ width: `${health}%` }}
      />
    </MotionDiv>
  );
};

export default HealthBar;
