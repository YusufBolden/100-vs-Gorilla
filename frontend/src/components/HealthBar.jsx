import React from "react";
import useGame from "../context/useGame";

const HealthBar = () => {
  const { gameState } = useGame();
  const { health } = gameState;

  const getBarColor = () => {
    if (health > 66) return "bg-green-500";
    if (health > 30) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="w-full max-w-md h-6 bg-gray-300 rounded overflow-hidden shadow">
      <div
        className={`h-full ${getBarColor()} transition-all duration-300`}
        style={{ width: `${health}%` }}
      />
    </div>
  );
};

export default HealthBar;
