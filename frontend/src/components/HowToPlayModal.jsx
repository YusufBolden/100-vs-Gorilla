import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const { div: MotionDiv, button: MotionButton } = motion;

const HowToPlayModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MotionButton
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-green-700 rounded-lg shadow hover:bg-green-800 transition"
      >
        How to Play
      </MotionButton>

      {isOpen && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60"
        >
          <MotionDiv
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black p-6 rounded-xl max-w-md w-full relative shadow-2xl"
          >
            <MotionButton
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
            >
              <X size={20} />
            </MotionButton>
            <h2 className="text-2xl font-bold mb-4">How to Play</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Press attack buttons to engage the gorilla.</li>
              <li>Choose strategies like "Rush", "Surround", or "Sneak".</li>
              <li>Monitor both team and gorilla health in real time.</li>
              <li>Win by depleting the opponent’s health.</li>
            </ul>
          </MotionDiv>
        </MotionDiv>
      )}
    </>
  );
};

export default HowToPlayModal;
