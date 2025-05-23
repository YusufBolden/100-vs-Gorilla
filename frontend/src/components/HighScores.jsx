import React from "react";
import { motion } from "framer-motion";

const { div: MotionDiv } = motion;

const HighScores = () => {
  const dummyScores = [
    { name: "Khiyah", score: 85 },
    { name: "Bob", score: 78 },
    { name: "Charlie", score: 64 },
    { name: "Alice", score: 60 },
    { name: "Jeff", score: 55 },
  ];

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-2xl font-semibold mb-2">Top Scores</h2>
      <ul>
        {dummyScores.map((entry, index) => (
          <li key={index} className="flex justify-between py-1">
            <span>{entry.name}</span>
            <span>{entry.score}</span>
          </li>
        ))}
      </ul>
    </MotionDiv>
  );
};

export default HighScores;
