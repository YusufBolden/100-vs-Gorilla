import React from "react";
import { motion } from "framer-motion";

const { button: MotionButton, div: MotionDiv } = motion;

const Controls = () => {
  const handleAttack = () => {
    console.log("Attack triggered");
    // TODO: Connect to backend logic later
  };

  const handleAdvance = () => {
    console.log("Advance triggered");
    // TODO: Connect to backend logic later
  };

  const handleSurround = () => {
    console.log("Surround triggered");
    // TODO: Connect to backend logic later
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 mt-6 flex-wrap justify-center"
    >
      <MotionButton
        whileTap={{ scale: 0.95 }}
        onClick={handleAttack}
        className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg text-sm"
      >
        Attack
      </MotionButton>
      <MotionButton
        whileTap={{ scale: 0.95 }}
        onClick={handleAdvance}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg text-sm"
      >
        Advance
      </MotionButton>
      <MotionButton
        whileTap={{ scale: 0.95 }}
        onClick={handleSurround}
        className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg shadow-lg text-sm"
      >
        Surround
      </MotionButton>
    </MotionDiv>
  );
};

export default Controls;
