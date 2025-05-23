import React from "react";
import { motion } from "framer-motion";
import { useGame } from "../context/useGame";

const { button: MotionButton } = motion;

const Controls = () => {
  const { attack, surround, sneak } = useGame();

  return (
    <div className="flex gap-4 justify-center">
      <MotionButton
        whileTap={{ scale: 0.95 }}
        onClick={attack}
        className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition"
      >
        Attack
      </MotionButton>
      <MotionButton
        whileTap={{ scale: 0.95 }}
        onClick={surround}
        className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition"
      >
        Surround
      </MotionButton>
      <MotionButton
        whileTap={{ scale: 0.95 }}
        onClick={sneak}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
      >
        Sneak
      </MotionButton>
    </div>
  );
};

export default Controls;
