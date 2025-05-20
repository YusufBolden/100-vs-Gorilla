import React from "react";

const getHealthColor = (health) => {
  if (health > 66) return "bg-green-500";
  if (health > 30) return "bg-yellow-400";
  return "bg-red-500";
};

const HealthBar = ({ health = 100 }) => {
  const barColor = getHealthColor(health);

  return (
    <div className="w-full h-6 bg-gray-700 rounded-full overflow-hidden shadow-inner">
      <div
        className={`h-full ${barColor} transition-all duration-300 ease-in-out`}
        style={{ width: `${Math.max(0, Math.min(health, 100))}%` }}
      />
    </div>
  );
};

export default HealthBar;
