import React from "react";
import { motion } from "framer-motion";

const { img: MotionImg } = motion;

const GorillaCharacter = () => {
  return (
    <MotionImg
      src="/assets/gorilla.png" // TODO: Generate image
      alt="Gorilla"
      className="w-40 h-40 object-contain"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    />
  );
};

export default GorillaCharacter;
