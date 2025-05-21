import React from "react";

const getHealthColor = (percent) => {
  if (percent > 66) return "bg-green-500";
  if (percent > 30) return "bg-yellow-400";
  return "bg-red-500";
};

const HealthSegment = ({ label, current, max }) => {
  const percent = Math.max(0, (current / max) * 100);
  const color = getHealthColor(percent);

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-bold">{label}</span>
        <span>{current} / {max}</span>
      </div>
      <div className="w-full bg-gray-800 h-5 rounded-lg overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-300 ease-in-out`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

const HealthBar = ({ gorillaHealth, gorillaMax, humanHealth, humanMax }) => {
  return (
    <div className="w-full">
      <HealthSegment label="🦍 Gorilla" current={gorillaHealth} max={gorillaMax} />
      <HealthSegment label="👥 Humans" current={humanHealth} max={humanMax} />
    </div>
  );
};

export default HealthBar;
