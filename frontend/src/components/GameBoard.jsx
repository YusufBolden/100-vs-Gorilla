import React from "react";
import HealthBar from "./HealthBar";
import HighScores from "./HighScores";
import HowToPlayModal from "./HowToPlayModal";
import Controls from "./Controls";
import { motion } from "framer-motion";

const { div: MotionDiv } = motion;

const GameBoard = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-screen bg-[url('/assets/jungle-background.jpg')] bg-cover bg-center"
    >
      <MotionDiv className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-0" />

      <MotionDiv className="relative z-10 flex flex-col items-center justify-between h-full p-6 text-white">
        {/* Header */}
        <MotionDiv
          className="w-full flex justify-between items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold drop-shadow-lg">Gorilla Showdown</h1>
          <HowToPlayModal />
        </MotionDiv>

        {/* Health Bar */}
        <MotionDiv
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <HealthBar />
        </MotionDiv>

        {/* Game Area */}
        <MotionDiv
          className="flex-1 w-full max-w-5xl flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xl italic opacity-80">Game characters and actions go here...</p>
          <Controls />
        </MotionDiv>

        {/* Footer */}
        <MotionDiv
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <HighScores />
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  );
};

export default GameBoard;
