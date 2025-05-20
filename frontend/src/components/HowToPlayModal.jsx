import React, { useState } from "react";
import { X } from "lucide-react";

const HowToPlayModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200"
      >
        How to Play
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative text-black">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">How to Play</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Choose the number of humans and their strategy.</li>
              <li>The gorilla’s strength will be randomly generated.</li>
              <li>Run the simulation to see who wins!</li>
              <li>Check the health bar to monitor each side's stamina.</li>
              <li>View past results in the high scores section.</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HowToPlayModal;
