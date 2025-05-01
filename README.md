⚔️ Quest Game
Quest Game is a simple, text-based adventure game built with HTML, CSS, and JavaScript. Players make choices at key points in the story that determine the outcome of their quest. It's an interactive project that showcases basic game logic, decision trees, and dynamic UI updates.

🔗 Play the Game

🚀 Features
🧭 Choose-your-own-adventure style gameplay

✨ Simple and responsive UI

🧠 Branching story logic using JavaScript

🔁 Replayable with different outcomes

📱 Mobile-friendly design

🛠️ Technologies Used
HTML – For structure and layout

CSS – For styling and responsive design

JavaScript – For interactivity and game logic


🔍 How It Works
The game uses a series of JavaScript objects to define story nodes. Each node contains text and possible options. Clicking a button moves the player to a new node, creating a branching narrative experience.

javascript
Copy
Edit
{
  id: 1,
  text: "You wake up in a forest. What do you do?",
  options: [
    { text: "Explore the forest", nextText: 2 },
    { text: "Go back to sleep", nextText: 3 }
  ]
}
📁 Project Structure
pgsql
Copy
Edit
questgame/
├── index.html
├── style.css
└── script.js
🧩 Future Improvements
Add background music or sound effects

Save game progress to local storage

Add animations and transitions

More complex story branching with inventory or character stats

🧑‍💻 Author
Yasir
🔗 GitHub Profile

