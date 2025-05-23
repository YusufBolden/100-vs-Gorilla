import React from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const Card = ({ children, className = "", ...props }) => {
  return (
    <MotionDiv
      whileHover={{ scale: 1.01 }}
      className={`bg-white bg-opacity-20 rounded-2xl shadow-xl backdrop-blur-md p-4 ${className}`}
      {...props}
    >
      {children}
    </MotionDiv>
  );
};

export { Card };
