import React from "react";
import useGame from "../context/useGame";

const HealthBar = () => {
  const { gorillaHealth, humanHealth } = useGame();

  return (
    <div className="w-full flex justify-around items-center p-6 gap-8">
      <div className="w-1/3">
        <div className="bg-gray-700 h-4 rounded-full overflow-hidden">
          <div
            className={`h-4 transition-all duration-500 ${
              gorillaHealth > 66
                ? "bg-green-500"
                : gorillaHealth > 30
                ? "bg-yellow-500"
                : "bg-red-600"
            }`}
            style={{ width: `${gorillaHealth}%` }}
          />
        </div>
        <p className="text-center mt-1 text-white">Gorilla: {gorillaHealth}%</p>
      </div>

      <div className="w-1/3">
        <div className="bg-gray-700 h-4 rounded-full overflow-hidden">
          <div
            className={`h-4 transition-all duration-500 ${
              humanHealth > 66
                ? "bg-green-500"
                : humanHealth > 30
                ? "bg-yellow-500"
                : "bg-red-600"
            }`}
            style={{ width: `${humanHealth}%` }}
          />
        </div>
        <p className="text-center mt-1 text-white">Human: {humanHealth}%</p>
      </div>
    </div>
  );
};

export default HealthBar;
