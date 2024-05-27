const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let bugX = 100,
  bugY = 100;
const bugSize = 100;
let score = 0;
let speed = 1000;
let intervalId = null;
const bugImage = new Image();
bugImage.src = "ladybug Background Removed.png";

function drawBug() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    bugImage,
    bugX - bugSize,
    bugY - bugSize,
    bugSize * 2,
    bugSize * 2
  );

  ctx.font = "40px shantell sans";
  ctx.fillStyle = "black";
  ctx.fillText("Score: " + score, 10, canvas.height - 20);
}

function updateGameArea() {
  bugX = Math.random() * (canvas.width - 2 * bugSize) + bugSize;
  bugY = Math.random() * (canvas.height - 2 * bugSize) + bugSize;

  drawBug();
}

canvas.onclick = function (event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  const distance = Math.sqrt(
    Math.pow(clickX - bugX, 2) + Math.pow(clickY - bugY, 2)
  );

  if (distance < bugSize) {
    score++;
    speed *= 0.9;
    clearInterval(intervalId);
    intervalId = setInterval(updateGameArea, speed);
    updateGameArea();
  }
};

function startGame() {
  updateGameArea();
  intervalId = setInterval(updateGameArea, speed);
}

function resetSpeed() {
  speed = 1000;
  clearInterval(intervalId);
  intervalId = setInterval(updateGameArea, speed);
}

function resetScore() {
  score = 0;
  updateGameArea();
}

bugImage.onload = function () {
  startGame();
};
