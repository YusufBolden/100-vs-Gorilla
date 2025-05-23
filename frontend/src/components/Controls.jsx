import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const { div: MotionDiv } = motion;

const Controls = () => {
  const handleAction = (action) => {
    console.log(`Action triggered: ${action}`);
    // TODO: Backend integration
  };

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-6 flex flex-wrap gap-4 justify-center"
    >
      <Button onClick={() => handleAction("attack")}>Attack</Button>
      <Button onClick={() => handleAction("advance")}>Advance</Button>
      <Button onClick={() => handleAction("surround")}>Surround</Button>
      <Button onClick={() => handleAction("sneak")}>Sneak</Button>
    </MotionDiv>
  );
};

export default Controls;
