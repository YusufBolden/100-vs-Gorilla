import React, { useState } from "react";
import { motion } from "framer-motion";
import HealthBar from "./HealthBar";
import HighScores from "./HighScores";
import HowToPlayModal from "./HowToPlayModal";
import Controls from "./Controls";

const { div: MotionDiv } = motion;

const GameBoard = () => {
  const [gorillaHealth, setGorillaHealth] = useState(100);

  const handleAttack = (strategy) => {
    let damage = 10;
    if (strategy === "rush") damage = 15;
    if (strategy === "sneak") damage = 20;
    if (strategy === "surround") damage = 12;
    setGorillaHealth((prev) => Math.max(prev - damage, 0));
  };

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
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-between items-center"
        >
          <h1 className="text-4xl font-bold drop-shadow-lg">Gorilla Showdown</h1>
          <HowToPlayModal />
        </motion.div>

        {/* Health Bar */}
        <div className="w-full max-w-3xl">
          <HealthBar health={gorillaHealth} />
        </div>

        {/* Game Area */}
        <div className="flex-1 w-full max-w-5xl flex items-center justify-center">
          <p className="text-xl italic opacity-80">Gorilla is fighting back...</p>
        </div>

        {/* Controls */}
        <div className="w-full max-w-xl">
          <Controls onAttack={handleAttack} />
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
