import React, { useState } from "react";
import { motion } from "framer-motion";

const { div: MotionDiv, button: MotionButton } = motion;

const HowToPlayModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MotionButton
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(true)}
        className="bg-green-600 px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition"
      >
        How to Play
      </MotionButton>

      {open && (
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div className="bg-white text-black rounded-xl p-6 max-w-md shadow-xl">
            <h2 className="text-2xl font-bold mb-4">How to Play</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use strategy buttons to control your team.</li>
              <li>Monitor health bars to adjust tactics.</li>
              <li>The gorilla reacts in real time — be fast and smart!</li>
            </ul>
            <MotionButton
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(false)}
              className="mt-4 bg-red-600 px-4 py-2 text-white rounded-lg hover:bg-red-700 transition"
            >
              Close
            </MotionButton>
          </div>
        </MotionDiv>
      )}
    </>
  );
};

export default HowToPlayModal;
