import React from "react";
import { motion } from "framer-motion";

const { button: MotionButton, div: MotionDiv } = motion;

const Controls = () => {
  const handleAttack = () => console.log("Attack action sent");
  const handleAdvance = () => console.log("Advance action sent");
  const handleSurround = () => console.log("Surround action sent");

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex gap-4 flex-wrap justify-center"
    >
      <MotionButton
        whileTap={{ scale: 0.9 }}
        onClick={handleAttack}
        className="bg-red-600 px-5 py-2 rounded-xl shadow-lg hover:bg-red-700 transition"
      >
        Attack
      </MotionButton>

      <MotionButton
        whileTap={{ scale: 0.9 }}
        onClick={handleAdvance}
        className="bg-blue-600 px-5 py-2 rounded-xl shadow-lg hover:bg-blue-700 transition"
      >
        Advance
      </MotionButton>

      <MotionButton
        whileTap={{ scale: 0.9 }}
        onClick={handleSurround}
        className="bg-yellow-600 px-5 py-2 rounded-xl shadow-lg hover:bg-yellow-700 transition"
      >
        Surround
      </MotionButton>
    </MotionDiv>
  );
};

export default Controls;
