const quizForm = document.getElementById("quiz-form");
const resultsOutput = document.getElementById("results-output");

const presidentNames = {
  fdr: "Franklin D. Roosevelt",
  jfk: "John F. Kennedy",
  lincoln: "Abraham Lincoln",
  teddy: "Theodore Roosevelt"
};

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const selectedAnswer = document.querySelector('input[name="q1"]:checked');

  if (!selectedAnswer) {
    resultsOutput.textContent = "Please pick an answer before submitting.";
    return;
  }

  const scores = {
    fdr: Number(selectedAnswer.dataset.fdr),
    jfk: Number(selectedAnswer.dataset.jfk),
    lincoln: Number(selectedAnswer.dataset.lincoln),
    teddy: Number(selectedAnswer.dataset.teddy)
  };

  const winner = getWinner(scores);

  resultsOutput.innerHTML = `
    <strong>Scores:</strong><br>
    FDR: ${scores.fdr}<br>
    JFK: ${scores.jfk}<br>
    Lincoln: ${scores.lincoln}<br>
    Teddy Roosevelt: ${scores.teddy}<br><br>
    <strong>Current winner:</strong> ${presidentNames[winner]}
  `;
});

function getWinner(scores) {
  let winner = "";
  let highestScore = -1;

  for (const president in scores) {
    if (scores[president] > highestScore) {
      highestScore = scores[president];
      winner = president;
    }
  }

  return winner;
}console.log("POTUS Heartthrob script loaded.");

function testButton() {
  const output = document.getElementById("js-test-output");
  output.textContent = "JavaScript is working. The republic is emotionally available.";
}
