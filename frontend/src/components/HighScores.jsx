import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";

const { div: MotionDiv } = motion;

const HighScores = () => {
  const scores = [
    { player: "Player1", score: 120 },
    { player: "Player2", score: 100 },
    { player: "Player3", score: 80 },
  ];

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-4 mt-4 bg-opacity-30">
        <h2 className="text-xl font-semibold mb-2">High Scores</h2>
        <ul>
          {scores.map((entry, index) => (
            <li key={index}>
              {entry.player}: {entry.score}
            </li>
          ))}
        </ul>
      </Card>
    </MotionDiv>
  );
};

export default HighScores;
