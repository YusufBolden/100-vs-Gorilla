import React from "react";
import { motion } from "framer-motion";

const { div: MotionDiv } = motion;

const HowToPlayModal = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="bg-white/10 text-white p-4 rounded shadow w-full max-w-md text-center"
    >
      <h2 className="text-xl font-bold mb-2">How to Play</h2>
      <p>
        Use the buttons to choose your strategy: Attack, Surround, or Sneak.
        Each action impacts the battle differently. Reduce the Gorilla’s health
        to 0 to win!
      </p>
    </MotionDiv>
  );
};

export default HowToPlayModal;
