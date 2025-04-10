# 🚀 Hackathon Hero – Interactive Story Game

Welcome to **Hackathon Hero**, a choice-based story game where you play as a young programmer navigating through bugs, challenges, and decisions to win a grand hackathon!

Built using a simple but powerful JSON-driven system, this project is perfect for showcasing how storytelling, logic, and coding can merge into an interactive experience.



## 📦 What's Inside?

- `story.json` – The heart of the game. Defines the story, decisions, and outcomes.
- `index.html` – Frontend UI (optional).
- `app.js` – Logic to load and run the story (optional).
- `style.css` – Optional styling.



## 🎮 How to Play

1. Start the game.
2. Read the scene's story or challenge.
3. Choose an option.
4. Your choice affects your journey – it may gain or lose points and change the outcome.
5. Try to reach one of the winning endings without hitting a Game Over!



## 📁 story.json Structure

```json
{
  "intro": {
    "text": "Welcome to the Grand Hackathon...",
    "choices": [
      { "text": "Begin Adventure", "next": "challenge1" }
    ]
  },
  "challenge1": {
    "text": "🪲 Your code throws an error...",
    "choices": [
      { "text": "Google the error", "next": "challenge2", "points": 15 }
    ]
  },
  ...
}
🔑 Node Format
Each story node (like "intro" or "challenge1") includes:

Key	Type	Description
text	String	The story content or challenge at that point
choices	Array	List of possible player choices
next	String	ID of the next node the choice leads to
points	Integer	(Optional) Points gained/lost by making this choice
🧠 Example Choice Object
json
Copy
Edit
{ 
  "text": "Use console.log to debug", 
  "next": "challenge2", 
  "points": 10 
}
✅ text: What appears as a clickable option

🔁 next: Where the story goes next

📊 points: Optional score tracking

🛠️ How to Use story.json in Your App
1. Load the JSON
js
Copy
Edit
fetch('story.json')
  .then(res => res.json())
  .then(data => startGame(data));
2. Display Text and Choices
js
Copy
Edit
const currentNode = storyData[currentNodeKey];
textElement.innerText = currentNode.text;
currentNode.choices.forEach(choice => {
  // Create button and handle clicks
});
3. Handle Navigation
js
Copy
Edit
function handleChoice(choice) {
  currentNodeKey = choice.next;
  score += choice.points || 0;
  renderScene();
}
🏁 Endings
final1, final2: Happy endings 🎉

gameover1–4: Unfortunate outcomes due to bad choices 💀

🔧 Possible Extensions
Track score on screen

Add animations or sound

Store progress in localStorage

Use a JavaScript framework like React

