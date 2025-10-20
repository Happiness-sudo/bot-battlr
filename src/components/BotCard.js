import React from "react";

function BotCard({ bot, onClick, onDelete }) {
  return (
    <div className="bot-card" onClick={() => onClick(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <p className="catchphrase">"{bot.catchphrase}"</p>

      {onDelete && (
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation(); // prevents triggering the parent click
            onDelete(bot.id);
          }}
        >
          ❌
        </button>
      )}
    </div>
  );
}

export default BotCard;
