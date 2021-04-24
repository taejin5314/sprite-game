const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 720;

let gamespeed = 2;

const background = new Image();
background.src = 'bg.jpg';

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
}

animate();