console.log("script.js loaded");

const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const scores = {
    fdr: 0,
    jfk: 0,
    lincoln: 0,
    teddy: 0
  };

  const questionNames = getQuestionNames();

  console.log("Questions found:", questionNames);

  for (const questionName of questionNames) {
    const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);

    if (selectedAnswer === null) {
      const questionNumber = questionName.replace("q", "");
      alert(`Please answer Question ${questionNumber} before submitting.`);
      return;
    }

    scores.fdr += Number(selectedAnswer.getAttribute("data-fdr"));
    scores.jfk += Number(selectedAnswer.getAttribute("data-jfk"));
    scores.lincoln += Number(selectedAnswer.getAttribute("data-lincoln"));
    scores.teddy += Number(selectedAnswer.getAttribute("data-teddy"));
  }

  console.log("Final scores:", scores);

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

function getQuestionNames() {
  const allRadioButtons = document.querySelectorAll('input[type="radio"]');
  const questionSet = new Set();

  allRadioButtons.forEach(function(radioButton) {
    questionSet.add(radioButton.name);
  });

  return Array.from(questionSet).sort(function(a, b) {
    const numberA = Number(a.replace("q", ""));
    const numberB = Number(b.replace("q", ""));
    return numberA - numberB;
  });
}

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
