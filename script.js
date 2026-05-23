console.log("script.js loaded");

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

  if (selectedAnswer === null) {
    resultsOutput.textContent = "Please pick an answer before submitting.";
    return;
  }

  const scores = {
    fdr: Number(selectedAnswer.getAttribute("data-fdr")),
    jfk: Number(selectedAnswer.getAttribute("data-jfk")),
    lincoln: Number(selectedAnswer.getAttribute("data-lincoln")),
    teddy: Number(selectedAnswer.getAttribute("data-teddy"))
  };

  const winnerKey = getWinner(scores);

  resultsOutput.innerHTML = `
    <p><strong>Scores:</strong></p>
    <ul>
      <li>Franklin D. Roosevelt: ${scores.fdr}</li>
      <li>John F. Kennedy: ${scores.jfk}</li>
      <li>Abraham Lincoln: ${scores.lincoln}</li>
      <li>Theodore Roosevelt: ${scores.teddy}</li>
    </ul>

    <p><strong>Current winner:</strong> ${presidentNames[winnerKey]}</p>
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
}
