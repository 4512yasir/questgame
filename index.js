let story = {};
let currentNode = "intro";
let score = 0;
// getting elements
const storyTextEl = document.getElementById("story-text");
const choicesEl = document.getElementById("choices");
const scoreDisplay = document.getElementById("score-display");
// fetching data from json file
fetch("story.json")
  .then(res => res.json())
  .then(data => {
    story = data;
    renderScene();
  })
  .catch(err => {
    storyTextEl.innerText = "Failed to load story.";
    console.error(err);
  });

function renderScene() {
  const node = story[currentNode];
  storyTextEl.innerText = node.text;
  choicesEl.innerHTML = "";

  if (node.choices && node.choices.length > 0) {
    node.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.innerText = choice.text;
      btn.onclick = () => {
        if (choice.points) score += choice.points;
        currentNode = choice.next;
        renderScene();
      };
      choicesEl.appendChild(btn);
    });
  } else {
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Restart Game ";
    restartBtn.onclick = () => {
      currentNode = "intro";
      score = 0;
      renderScene();
    };
    choicesEl.appendChild(restartBtn);
  }

  scoreDisplay.innerText = `Score: ${score}`;
}
