console.log("script.js loaded");

const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const totalQuestions = 2;

  const scores = {
    fdr: 0,
    jfk: 0,
    lincoln: 0,
    teddy: 0
  };

  for (let questionNumber = 1; questionNumber <= totalQuestions; questionNumber++) {
    const selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);

    if (selectedAnswer === null) {
      alert(`Please answer Question ${questionNumber} before submitting.`);
      return;
    }

    scores.fdr += Number(selectedAnswer.getAttribute("data-fdr"));
    scores.jfk += Number(selectedAnswer.getAttribute("data-jfk"));
    scores.lincoln += Number(selectedAnswer.getAttribute("data-lincoln"));
    scores.teddy += Number(selectedAnswer.getAttribute("data-teddy"));
  }

  const winnerKey = getWinner(scores);

  const resultPages = {
    fdr: "results/fdr.html",
    jfk: "results/jfk.html",
    lincoln: "results/lincoln.html",
    teddy: "results/teddy.html"
  };

  const scoreParams = new URLSearchParams(scores);

  window.location.href = `${resultPages[winnerKey]}?${scoreParams.toString()}`;
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
