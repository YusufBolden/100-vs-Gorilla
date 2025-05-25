// src/context/GameContext.jsx
import React, { useState } from "react";
import GameContext from "./GameContextObject";

const GameProvider = ({ children }) => {
  const [gorillaHealth, setGorillaHealth] = useState(100);
  const [humanHealth, setHumanHealth] = useState(100);

  const updateHealth = (type, amount) => {
    if (type === "gorilla") {
      setGorillaHealth((prev) => Math.max(0, prev - amount));
    } else {
      setHumanHealth((prev) => Math.max(0, prev - amount));
    }
  };

  return (
    <GameContext.Provider value={{ gorillaHealth, humanHealth, updateHealth }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
