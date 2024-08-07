let progress = 0;
let intervalId = null;

const progressBar = document.getElementById("progress");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function startProgress() {
  if (intervalId) return;
  intervalId = setInterval(() => {
    if (progress >= 100) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }
    progress += 0.9;
    progressBar.style.width = progress + "%";
  }, 100);
}

function stopProgress() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetProgress() {
  stopProgress();
  progress = 0;
  progressBar.style.width = progress + "%";
}

startButton.addEventListener("click", startProgress);
stopButton.addEventListener("click", stopProgress);
resetButton.addEventListener("click", resetProgress);
