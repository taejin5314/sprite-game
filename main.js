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
let gamespeed = 2;

const background = new Image();
background.src = 'bg.jpg';

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  character.update();
  character.draw();
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