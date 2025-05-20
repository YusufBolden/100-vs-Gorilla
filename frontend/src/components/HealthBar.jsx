import React from "react";

const HealthBar = ({ gorillaHealth = 100, humanHealth = 100 }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <span className="block text-lg font-semibold mb-1">Gorilla</span>
        <div className="w-full h-6 bg-red-900 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${gorillaHealth}%` }}
          />
        </div>
      </div>
      <div>
        <span className="block text-lg font-semibold mb-1">Humans</span>
        <div className="w-full h-6 bg-red-900 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${humanHealth}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default HealthBar;
