import React, { useState } from "react";
import "./App.css";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [army, setArmy] = useState([]);

  // Add bot to army
  function handleAddBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  // Release bot from army
  function handleReleaseBot(id) {
    setArmy(army.filter((bot) => bot.id !== id));
  }

  // Discharge bot (delete permanently)
  function handleDischargeBot(id) {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy(army.filter((bot) => bot.id !== id));
      })
      .catch((err) => console.error("Error discharging bot:", err));
  }

  return (
    <div className="App">
      <h1>🤖 Bot Battlr</h1>
      <YourBotArmy
        army={army}
        onRelease={handleReleaseBot}
        onDischarge={handleDischargeBot}
      />
      <BotCollection onAddBot={handleAddBot} />
    </div>
  );
}

export default App;
