import React from "react";
import useGame from "../context/useGame";

const GameBoard = () => {
  const { gorillaHealth, humanHealth, updateHealth } = useGame();

  const attack = () => {
    const damage = Math.floor(Math.random() * 10) + 5;
    const target = Math.random() < 0.5 ? "gorilla" : "human";
    updateHealth(target, damage);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Click to Attack!</h2>
      <button
        onClick={attack}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-xl"
      >
        Attack
      </button>
      <div className="text-white mt-4">
        <p>Gorilla Health: {gorillaHealth}%</p>
        <p>Human Health: {humanHealth}%</p>
      </div>
    </div>
  );
};

export default GameBoard;
