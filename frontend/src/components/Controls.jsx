import React from "react";
import { motion } from "framer-motion";

const { button: MotionButton, div: MotionDiv } = motion;

const Controls = () => {
  const handleAttack = () => {
    console.log("Attack strategy executed");
    // TODO: Connect to backend API call
  };

  const handleAdvance = () => {
    console.log("Advance strategy executed");
    // TODO: Connect to backend API call
  };

  const handleSurround = () => {
    console.log("Surround strategy executed");
    // TODO: Connect to backend API call
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row gap-4 justify-center items-center p-4"
    >
      <MotionButton
        whileTap={{ scale: 0.95 }}
        onClick={handleAttack}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-2xl shadow-lg transition duration-200"
      >
        Attack
      </MotionButton>

      <MotionButton
        whileTap={{ scale: 0.95 }}
        onClick={handleAdvance}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-2xl shadow-lg transition duration-200"
      >
        Advance
      </MotionButton>

      <MotionButton
        whileTap={{ scale: 0.95 }}
        onClick={handleSurround}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-2xl shadow-lg transition duration-200"
      >
        Surround
      </MotionButton>
    </MotionDiv>
  );
};

export default Controls;
