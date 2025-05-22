import React from "react";
import { motion } from "framer-motion";

const { div: MotionDiv } = motion;

const HighScores = () => {
  const scores = [
    { name: "Alpha Team", score: 980 },
    { name: "Gorilla", score: 870 },
    { name: "Bravo Team", score: 860 },
  ];

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-white bg-opacity-10 p-4 rounded-xl shadow-inner backdrop-blur-sm"
    >
      <h2 className="text-2xl font-semibold mb-2 text-center">High Scores</h2>
      <ul className="space-y-1">
        {scores.map((entry, index) => (
          <li key={index} className="flex justify-between">
            <span>{entry.name}</span>
            <span>{entry.score}</span>
          </li>
        ))}
      </ul>
    </MotionDiv>
  );
};

export default HighScores;
