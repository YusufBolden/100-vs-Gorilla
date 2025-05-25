import React from "react";
import GameProvider from "./context/GameContext";
import HealthBar from "./components/HealthBar";
import GameBoard from "./components/GameBoard";

const App = () => {
  return (
    <GameProvider>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <HealthBar />
        <GameBoard />
      </div>
    </GameProvider>
  );
};

export default App;
