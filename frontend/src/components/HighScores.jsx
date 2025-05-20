import React from "react";

const HighScores = () => {
  const placeholderScores = [
    { name: "AlphaGorilla", score: 420 },
    { name: "JungleKing", score: 390 },
    { name: "TeamHuman", score: 360 },
  ];

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-2xl shadow text-sm">
      <h2 className="text-xl font-semibold mb-2 text-center">High Scores</h2>
      <ul className="space-y-1">
        {placeholderScores.map((entry, idx) => (
          <li key={idx} className="flex justify-between text-white px-2">
            <span>{entry.name}</span>
            <span>{entry.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighScores;
