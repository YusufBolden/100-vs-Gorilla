import React from "react";
import { motion } from "framer-motion";

const { div: MotionDiv } = motion;

const HighScores = () => {
  const scores = [
    { name: "Team Alpha", score: 2300 },
    { name: "Gorilla Solo", score: 1800 },
    { name: "Jungle Squad", score: 1550 },
  ];

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black bg-opacity-40 rounded-lg p-4 shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-2">Top Scores</h2>
      <ul className="space-y-1 text-sm">
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
