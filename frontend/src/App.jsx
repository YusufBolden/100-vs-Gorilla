import React from "react";
import { GameProvider } from "./context/GameContext";
import { motion } from "framer-motion";

import GameBoard from "./components/GameBoard";
import HealthBar from "./components/HealthBar";
import Controls from "./components/Controls";
import HighScores from "./components/HighScores";
import HowToPlayModal from "./components/HowToPlayModal";

const { div: MotionDiv } = motion;

const App = () => {
  return (
    <GameProvider>
      <MotionDiv
        className="min-h-screen w-full bg-[url('/jungle.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-white p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">🐵 Gorilla Showdown</h1>
        <HealthBar />
        <GameBoard />
        <Controls />
        <HighScores />
        <HowToPlayModal />
      </MotionDiv>
    </GameProvider>
  );
};

export default App;
