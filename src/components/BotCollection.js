import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ onAddBot }) {
  const [bots, setBots] = useState([]);

  // Fetch all bots from JSON server
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={onAddBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
