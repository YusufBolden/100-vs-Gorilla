import React from "react";
import { motion } from "framer-motion";

const MotionButton = motion.button;

const Button = ({ children, ...props }) => {
  return (
    <MotionButton
      whileTap={{ scale: 0.95 }}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all"
      {...props}
    >
      {children}
    </MotionButton>
  );
};

export { Button };
