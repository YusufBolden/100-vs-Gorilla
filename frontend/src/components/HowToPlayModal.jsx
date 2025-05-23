import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const { div: MotionDiv } = motion;

const HowToPlayModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>How to Play</Button>

      {open && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        >
          <div className="bg-white text-black p-6 rounded-lg max-w-md w-full relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-xl"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-2">How to Play</h2>
            <p>Press buttons to choose actions. Win by defeating the gorilla!</p>
          </div>
        </MotionDiv>
      )}
    </>
  );
};

export default HowToPlayModal;
