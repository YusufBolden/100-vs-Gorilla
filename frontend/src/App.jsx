import React from "react";
import GameProvider from "../context/GameContext";
import GameBoard from "./GameBoard";
import Controls from "./Controls";
import HealthBar from "./HealthBar";
import HighScores from "./HighScores";
import HowToPlayModal from "./HowToPlayModal";

const App = () => (
  <GameProvider>
    <div className="min-h-screen bg-green-900 text-white p-4">
      <GameBoard />
      <Controls />
      <HealthBar />
      <HighScores />
      <HowToPlayModal />
    </div>
  </GameProvider>
);

export default App;