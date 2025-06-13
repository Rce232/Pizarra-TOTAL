import { useState } from "react";
import { motion } from "framer-motion";

type Player = {
  id: number;
  x: number;
  y: number;
  team: "home" | "away";
};

export default function TacticalBoard() {
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, x: 100, y: 150, team: "home" },
    { id: 2, x: 200, y: 150, team: "home" },
    { id: 3, x: 300, y: 150, team: "home" },
    { id: 4, x: 400, y: 150, team: "away" },
    { id: 5, x: 500, y: 150, team: "away" },
  ]);

  function onDrag(id: number, x: number, y: number) {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, x, y } : p))
    );
  }

  return (
    <div className="relative w-full max-w-4xl h-[500px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden select-none">
      {/* Campo */}
      <div className="absolute inset-0 border-4 border-neonBlue rounded-lg"></div>
      {/* Jugadores */}
      {players.map((player) => (
        <motion.div
          key={player.id}
          drag
          dragConstraints={{ left: 0, right: 800, top: 0, bottom: 480 }}
          dragMomentum={false}
          onDrag={(e, info) => onDrag(player.id, info.point.x, info.point.y)}
          className={`absolute w-10 h-10 rounded-full flex items-center justify-center text-black font-bold cursor-pointer select-none ${
            player.team === "home" ? "bg-neonPink" : "bg-neonBlue"
          }`}
          style={{ x: player.x, y: player.y }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {player.id}
        </motion.div>
      ))}
    </div>
  );
}
