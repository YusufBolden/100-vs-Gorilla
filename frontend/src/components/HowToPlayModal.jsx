import React, { useState } from "react";
import { X } from "lucide-react";

const HowToPlayModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-black px-4 py-2 rounded-xl shadow font-semibold hover:bg-gray-200 transition"
      >
        How to Play
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">How to Play</h2>
            <ul className="list-disc list-inside text-sm space-y-2 text-gray-800">
              <li>🦍 Control the gorilla or lead the human team.</li>
              <li>⚔️ Take turns attacking and defending.</li>
              <li>🧠 Humans use strategy; gorilla uses brute strength.</li>
              <li>💖 Health bar shows remaining stamina. Fight until one side wins!</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HowToPlayModal;
