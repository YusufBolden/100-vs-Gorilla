import React from "react";
import useGame from "../context/useGame";
import { motion } from "framer-motion";

const { div: MotionDiv } = motion;

const HighScores = () => {
  const { highScores } = useGame();

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-white/10 text-white p-4 rounded shadow w-full max-w-sm"
    >
      <h2 className="text-xl font-semibold mb-2">High Scores</h2>
      <ul className="list-decimal list-inside">
        {highScores.map((score, idx) => (
          <li key={idx}>{score}</li>
        ))}
      </ul>
    </MotionDiv>
  );
};

export default HighScores;
