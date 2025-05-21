import React from "react";
import { motion } from "framer-motion";
import HealthBar from "./HealthBar";
import HighScores from "./HighScores";
import HowToPlayModal from "./HowToPlayModal";

const { div: MotionDiv, h1: MotionH1 } = motion;

const GameBoard = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-screen bg-[url('/assets/jungle-background.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-0" />

      <div className="relative z-10 flex flex-col items-center justify-between h-full p-6 text-white">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <MotionH1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold drop-shadow-lg"
          >
            Gorilla Showdown
          </MotionH1>
          <HowToPlayModal />
        </div>

        {/* Health Bar */}
        <div className="w-full max-w-3xl">
          <HealthBar />
        </div>

        {/* Game Area */}
        <div className="flex-1 w-full max-w-5xl flex items-center justify-center">
          <p className="text-xl italic opacity-80">Game characters and actions go here...</p>
        </div>

        {/* Footer */}
        <div className="w-full max-w-4xl">
          <HighScores />
        </div>
      </div>
    </MotionDiv>
  );
};

export default GameBoard;
