import React from "react";
import { motion } from "framer-motion";

const { button: MotionButton, div: MotionDiv } = motion;

const Controls = ({ onAttack }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-3 gap-4"
    >
      {[
        { label: "Attack", value: "strike" },
        { label: "Advance", value: "rush" },
        { label: "Surround", value: "surround" },
      ].map((btn) => (
        <MotionButton
          key={btn.value}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-white bg-opacity-30 rounded-xl shadow text-white hover:bg-opacity-50 transition"
          onClick={() => onAttack(btn.value)}
        >
          {btn.label}
        </MotionButton>
      ))}
    </MotionDiv>
  );
};

export default Controls;
