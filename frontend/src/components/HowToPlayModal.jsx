import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const { div: MotionDiv, button: MotionButton } = motion;

const HowToPlayModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <MotionButton
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-white bg-opacity-30 rounded-lg shadow text-white hover:bg-opacity-50 transition"
        onClick={() => setIsOpen(true)}
      >
        How to Play
      </MotionButton>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <MotionDiv
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-2xl max-w-md w-full relative"
            >
              <MotionButton
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-700 hover:text-black"
              >
                <X size={20} />
              </MotionButton>
              <h2 className="text-2xl font-bold mb-4">How to Play</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Choose a strategy to attack the gorilla.</li>
                <li>Watch the gorilla’s health bar drop.</li>
                <li>Try different tactics to win with the highest score.</li>
              </ul>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HowToPlayModal;
