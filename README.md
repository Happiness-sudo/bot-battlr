Bot Battlr — Phase 2 Code Challenge

Welcome to Bot Battlr, the one and only spot in the galaxy where you can build your own bot army!  
This React web app allows users to browse a list of bots, view details, and enlist them into a personal army.

---

Project Overview

This project was created as part of the Phase 2 React Code Challenge.  
It demonstrates core React concepts including components, props, state management, and event handling.

The app also includes data fetching from a local JSON server and features clean, reusable component structure.

---

Learning Goals

- Practice building React components and passing props
- Manage state using React Hooks
- Handle events to update the UI dynamically
- Fetch and display data from a local server
- Maintain a clear and modular component structure

---

Setup Instructions

Follow these steps to run the app locally:

1. Clone this repository
   ```bash
   git clone git@github.com:Happiness-sudo/bot-battlr.git
   cd bot-battlr
   Install dependencies
   ```

bash
Copy code
npm install
Start the backend (JSON Server)

bash
Copy code
npx json-server --watch db.json --port 8001
The server will run at:
http://localhost:8001/bots

Start the React app

bash
Copy code
npm start
The app will open automatically at:
http://localhost:3000

Features (Core Deliverables)
View all bots — Displays a list of available bots from the backend
Enlist bots — Click a bot to add it to your army (no duplicates)
Release bots — Click a bot in “Your Bot Army” to remove it
Discharge bots — Click the red “x” to permanently delete a bot from the backend
Persistent data — All bot data is stored and managed in db.json

Advanced Features (Bonus)
FilterBar — Filter bots by class (Support, Medic, Assault, etc.)
SortBar — Sort bots by health, armor, or damage
Responsive UI — Clean layout and modern styling
Hover effects — Smooth visual feedback for better user experience

Components Structure
pgsql
Copy code
src/
├── components/
│ ├── BotCard.js
│ ├── BotCollection.js
│ ├── YourBotArmy.js
│ ├── FilterBar.js
│ ├── SortBar.js
│ └── index.js
├── App.js
├── index.js
├── App.css
└── db.json
App.js — Manages state, event handlers, and data fetching

BotCollection.js — Displays all available bots

YourBotArmy.js — Shows enlisted bots

BotCard.js — Reusable component for displaying bot details

FilterBar.js & SortBar.js — Manage sorting and filtering functionality

Technologies Used
React.js (Hooks + Functional Components)

JSON Server

JavaScript (ES6+)

CSS3 (Flexbox & Grid)

API Endpoints
Method Endpoint Description
GET /bots Fetch all bots
DELETE /bots/:id Delete a specific bot

Example Bot Data
json
Copy code
{
"id": 101,
"name": "wHz-93",
"health": 94,
"damage": 20,
"armor": 63,
"bot_class": "Support",
"catchphrase": "1010010101001101100011000111101",
"avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
}
Rubric Alignment
Rubric Area Description Achieved
Props & State State held in correct component, props passed efficiently
Code Structure Functional components, hooks, destructuring used
Rendering All features rendered correctly and interactively
Advanced Features Sorting, filtering, reusable components

Author
Happiness Ngeete
GitHub: Happiness-sudo
Phase 2 — Software Engineering Program

“Build. Enlist. Dominate.”
The galaxy awaits your Bot Army.
