import React, { useEffect, useState } from "react";

const HighScores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Replace with actual API call
    const dummyScores = [
      { player: "Team Alpha", score: "Victory - 89%" },
      { player: "Team Beta", score: "Defeat - 27%" },
      { player: "Team Gamma", score: "Victory - 73%" },
    ];
    setScores(dummyScores);
  }, []);

  return (
    <div className="bg-black bg-opacity-40 p-4 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-2 text-center">High Scores</h2>
      <ul className="space-y-1">
        {scores.map((entry, index) => (
          <li
            key={index}
            className="flex justify-between px-3 py-1 bg-white bg-opacity-10 rounded"
          >
            <span>{entry.player}</span>
            <span className="font-bold">{entry.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighScores;
