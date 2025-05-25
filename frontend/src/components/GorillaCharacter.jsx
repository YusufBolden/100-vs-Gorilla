import React from "react";
import { motion } from "framer-motion";
import useGame from "../context/useGame";

const { img: MotionImg } = motion;

const GorillaCharacter = () => {
  const { gameState } = useGame();

  return (
    <div className="relative text-center">
      <MotionImg
        src="/assets/gorilla.png"
        alt="Gorilla"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-48 sm:w-56 md:w-64 drop-shadow-xl mx-auto"
      />
      <p className="mt-2 text-lg font-bold text-white drop-shadow">Gorilla</p>
      <p className="text-sm text-white">Health: {gameState.health}%</p>
    </div>
  );
};

export default GorillaCharacter;
