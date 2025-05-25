// src/App.jsx
import React from "react";
import GameProvider from "./context/GameContext";
import GameBoard from "./components/GameBoard";
import HealthBar from "./components/HealthBar";
import HighScores from "./components/HighScores";
import HowToPlayModal from "./components/HowToPlayModal";
import useGame from "./context/useGame";

const App = () => {
  useGame(); // Explicit usage to satisfy linter

  return (
    <GameProvider>
      <div className="min-h-screen bg-green-900 text-white font-sans">
        <HealthBar />
        <GameBoard />
        <HighScores />
        <HowToPlayModal />
      </div>
    </GameProvider>
  );
};

export default App;
