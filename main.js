const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 720;

let keyPressed = {
  ArrowRight: false,
  ArrowLeft: false,
  ArrowUp: false,
  ArrowDown: false,
  AltLeft: false,
  ControlLeft: false,
}
let frame = 0;
let score = 0;
let gamespeed = 2;

const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop('0.4', '#fff');
gradient.addColorStop('0.5', '#000');
gradient.addColorStop('0.55', '#4040ff');
gradient.addColorStop('0.6', '#000');
gradient.addColorStop('0.9', '#fff');

const background = new Image();
background.src = 'bg.jpg';

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  handleObstacles();
  character.update();
  character.draw();
  ctx.fillStyle = gradient;
  ctx.font = '90px Georgia';
  ctx.strokeText(score, 1150, 80);
  ctx.fillText(score, 1150, 80);
  if (handleCollsions()) return;
  // ctx.fillRect(20, canvas.height - 150, 80, 120);
  requestAnimationFrame(animate);
  frame++;
}
animate();

window.addEventListener('keydown', function (e) {
  if (e.code === 'ArrowRight' || e.code === 'ArrowLeft' || e.code === 'ArrowUp' || e.code === 'ArrowDown') keyPressed[e.code] = true;

  if (e.code === 'AltLeft' || e.code === 'ControlLeft') {
    window.event.returnValue = false;
    console.log(frame);
    keyPressed[e.code] = true;
  }
})

window.addEventListener('keyup', function (e) {
  if (e.code === 'ArrowRight' || e.code === 'ArrowLeft' || e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'AltLeft' || e.code === 'ControlLeft') keyPressed[e.code] = false;
})

// const bang = new Image();
// bang.src = 'bang.png';
function handleCollsions() {
  for (let i = 0; i < obstaclesArray.length; i++) {
    const collision = isIntersect(obstaclesArray[i].x, obstaclesArray[i].y, obstaclesArray[i].width, obstaclesArray[i].height, character.x, character.y, character.width, character.height);
    if (collision) {
      ctx.font = '40px Georgia';
      ctx.fillStyle = 'black';
      ctx.fillText('Game Over, your score is ' + score, canvas.width / 2 - 200, canvas.height / 2 - 10);
      return true;
    }
  }
}

function isIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
  if (x1 + w1 >= x2 && x1 <= x2 + w2 && y1 + h1 >= y2 && y1 <= y2 + h2) return true;
  return false;
}