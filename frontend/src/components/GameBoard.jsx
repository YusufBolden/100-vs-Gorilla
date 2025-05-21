import React, { useEffect, useState, useRef } from "react";
import HealthBar from "./HealthBar";
import HighScores from "./HighScores";
import HowToPlayModal from "./HowToPlayModal";

const MAX_HEALTH = 100;

const GameBoard = () => {
  const [gorillaHealth, setGorillaHealth] = useState(MAX_HEALTH);
  const [humanHealth, setHumanHealth] = useState(MAX_HEALTH);
  const [battleLog, setBattleLog] = useState([]);
  const [fightStarted, setFightStarted] = useState(false);
  const fightInterval = useRef(null);

  const addLog = (entry) => {
    setBattleLog((prev) => [entry, ...prev.slice(0, 9)]);
  };

  // Gorilla attacks every 2 seconds
  useEffect(() => {
    if (fightStarted) {
      fightInterval.current = setInterval(() => {
        const damage = Math.floor(Math.random() * 10) + 5;
        setHumanHealth((prev) => Math.max(prev - damage, 0));
        addLog(`🦍 Gorilla attacked for ${damage} damage!`);
      }, 2000);
    }
    return () => clearInterval(fightInterval.current);
  }, [fightStarted]);

  const handleAttack = (type) => {
    let damage = 0;
    switch (type) {
      case "rush":
        damage = Math.floor(Math.random() * 15) + 5;
        addLog("👥 Rush attack initiated!");
        break;
      case "surround":
        damage = Math.floor(Math.random() * 10) + 10;
        addLog("🧠 Surround tactic deployed!");
        break;
      case "sneak":
        damage = Math.random() < 0.5 ? 0 : Math.floor(Math.random() * 20) + 10;
        addLog("🕵️ Attempting sneak attack...");
        break;
      case "single":
        damage = Math.floor(Math.random() * 5) + 2;
        addLog("👤 Sent 1 fighter to attack.");
        break;
      case "triple":
        damage = Math.floor(Math.random() * 10) + 5;
        addLog("👥👥👥 Sent 3 fighters to attack.");
        break;
      default:
        return;
    }
    setGorillaHealth((prev) => Math.max(prev - damage, 0));
    if (damage > 0) addLog(`🧍 Humans dealt ${damage} damage!`);
  };

  const startFight = () => {
    setFightStarted(true);
    addLog("⚔️ The battle has begun!");
  };

  const restartGame = () => {
    setFightStarted(false);
    clearInterval(fightInterval.current);
    setGorillaHealth(MAX_HEALTH);
    setHumanHealth(MAX_HEALTH);
    setBattleLog([]);
  };

  return (
    <div className="relative w-full h-screen bg-[url('/assets/jungle-background.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-0" />

      <div className="relative z-10 flex flex-col items-center justify-between h-full p-6 text-white">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-bold drop-shadow-lg">Gorilla Showdown</h1>
          <HowToPlayModal />
        </div>

        {/* Health Bars */}
        <div className="w-full max-w-3xl flex justify-between items-center gap-4">
          <HealthBar label="Gorilla" health={gorillaHealth} />
          <HealthBar label="Humans" health={humanHealth} />
        </div>

        {/* Game Area */}
        <div className="flex-1 w-full max-w-5xl flex flex-col items-center justify-center gap-4">
          {!fightStarted ? (
            <button
              onClick={startFight}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow"
            >
              Start Fight
            </button>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => handleAttack("rush")} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Rush</button>
              <button onClick={() => handleAttack("surround")} className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">Surround</button>
              <button onClick={() => handleAttack("sneak")} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Sneak</button>
              <button onClick={() => handleAttack("single")} className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded">1 Fighter</button>
              <button onClick={() => handleAttack("triple")} className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded">3 Fighters</button>
              <button onClick={restartGame} className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded">Restart</button>
            </div>
          )}

          <div className="w-full bg-black bg-opacity-40 p-4 rounded-xl max-h-48 overflow-y-auto mt-4 text-sm">
            {battleLog.map((log, idx) => (
              <div key={idx} className="mb-1">{log}</div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="w-full max-w-4xl">
          <HighScores />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
