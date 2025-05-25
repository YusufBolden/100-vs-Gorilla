import React from "react";
import { motion } from "framer-motion";
import useGame from "../context/useGame";
import Controls from "./Controls";
import HealthBar from "./HealthBar";
import HighScores from "./HighScores";
import HowToPlayModal from "./HowToPlayModal";
import GorillaCharacter from "./GorillaCharacter";

const { div: MotionDiv } = motion;

const GameBoard = () => {
  const { gameState } = useGame();

  return (
    <MotionDiv
      className="min-h-screen flex flex-col items-center justify-center bg-jungle bg-cover bg-center p-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg scale-100 hover:scale-105 transition-transform">
        Gorilla Showdown
      </h1>

      <GorillaCharacter />

      <p className="text-white text-lg drop-shadow">
        Gorilla Health: {gameState.health}%
      </p>

      <HealthBar />

      <Controls />

      <HighScores />

      <HowToPlayModal />
    </MotionDiv>
  );
};

export default GameBoard;
