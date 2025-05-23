import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import HealthBar from "./HealthBar";
import HighScores from "./HighScores";
import HowToPlayModal from "./HowToPlayModal";
import Controls from "./Controls";
import GorillaCharacter from "./GorillaCharacter";

const { div: MotionDiv, h1: MotionH1 } = motion;

const GameBoard = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen bg-[url('/assets/jungle-background.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-0" />

      <div className="relative z-10 flex flex-col items-center justify-between h-full p-6 text-white">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <MotionH1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
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
        <Card className="flex-1 w-full max-w-5xl flex items-center justify-center mt-4 p-6 bg-opacity-30">
          <GorillaCharacter />
        </Card>

        {/* Controls */}
        <Controls />

        {/* Footer */}
        <div className="w-full max-w-4xl">
          <HighScores />
        </div>

        {/* Demo usage of Button */}
        <div className="mt-4">
          <Button>Demo Button</Button>
        </div>
      </div>
    </MotionDiv>
  );
};

export default GameBoard;
