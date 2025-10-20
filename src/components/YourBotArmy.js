import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>No bots enlisted yet.</p>
      ) : (
        <div className="bot-list">
          {army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onClick={() => onRelease(bot.id)}
              onDelete={onDischarge}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
