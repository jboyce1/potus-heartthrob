console.log("result.js loaded");

const presidentNames = {
  fdr: "Franklin D. Roosevelt",
  jfk: "John F. Kennedy",
  lincoln: "Abraham Lincoln",
  teddy: "Theodore Roosevelt"
};

const params = new URLSearchParams(window.location.search);

const scores = {
  fdr: Number(params.get("fdr")) || 0,
  jfk: Number(params.get("jfk")) || 0,
  lincoln: Number(params.get("lincoln")) || 0,
  teddy: Number(params.get("teddy")) || 0
};

const sortedScores = Object.entries(scores).sort(function(a, b) {
  return b[1] - a[1];
});

const winnerKey = sortedScores[0][0];
const runnerUpKey = sortedScores[1][0];

const scoreOutput = document.getElementById("score-output");
const runnerUpOutput = document.getElementById("runner-up-output");

if (scoreOutput) {
  scoreOutput.innerHTML = `
    <h3>Your Score Breakdown</h3>
    <ul>
      <li>Franklin D. Roosevelt: ${scores.fdr}</li>
      <li>John F. Kennedy: ${scores.jfk}</li>
      <li>Abraham Lincoln: ${scores.lincoln}</li>
      <li>Theodore Roosevelt: ${scores.teddy}</li>
    </ul>
  `;
}

if (runnerUpOutput) {
  runnerUpOutput.innerHTML = `
    <h3>Your Runner-Up</h3>
    <p>
      Your second-best match was <strong>${presidentNames[runnerUpKey]}</strong>.
      That means your romantic instincts contain multitudes, which is probably dangerous
      for the republic.
    </p>
  `;
}
