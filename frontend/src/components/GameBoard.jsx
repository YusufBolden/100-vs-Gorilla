import React from "react";
import { motion } from "framer-motion";

import HealthBar from "./HealthBar";
import HighScores from "./HighScores";
import HowToPlayModal from "./HowToPlayModal";
import Controls from "./Controls";

const { div: MotionDiv } = motion;

const GameBoard = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen bg-[url('/assets/jungle-background.jpg')] bg-cover bg-center"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-0" />

      {/* Foreground Content */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-between h-full p-6 text-white"
      >
        {/* Header */}
        <MotionDiv
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full flex justify-between items-center"
        >
          <h1 className="text-4xl font-bold drop-shadow-lg">Gorilla Showdown</h1>
          <HowToPlayModal />
        </MotionDiv>

        {/* Health Bar */}
        <div className="w-full max-w-3xl">
          <HealthBar />
        </div>

        {/* Game Area */}
        <div className="flex-1 w-full max-w-5xl flex items-center justify-center">
          <p className="text-xl italic opacity-80">Game characters and actions go here...</p>
        </div>

        {/* Combat Controls */}
        <div className="w-full max-w-4xl">
          <Controls />
        </div>

        {/* Footer */}
        <div className="w-full max-w-4xl">
          <HighScores />
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default GameBoard;
