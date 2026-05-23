console.log("script.js loaded");

const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const selectedAnswer = document.querySelector('input[name="q1"]:checked');

  if (selectedAnswer === null) {
    alert("Please pick an answer before submitting.");
    return;
  }

  const scores = {
    fdr: Number(selectedAnswer.getAttribute("data-fdr")),
    jfk: Number(selectedAnswer.getAttribute("data-jfk")),
    lincoln: Number(selectedAnswer.getAttribute("data-lincoln")),
    teddy: Number(selectedAnswer.getAttribute("data-teddy"))
  };

  const winnerKey = getWinner(scores);

  const resultPages = {
    fdr: "results/fdr.html",
    jfk: "results/jfk.html",
    lincoln: "results/lincoln.html",
    teddy: "results/teddy.html"
  };

  window.location.href = resultPages[winnerKey];
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
