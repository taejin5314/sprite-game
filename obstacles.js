const obstaclesArray = [];

class Obstacle {
  constructor() {
    this.x = (Math.random() * canvas.width);
    this.y = 0;
    this.width = 30;
    this.height = 30;
    this.snail = new Image();
    this.random = Math.floor(Math.random() * 3);
    // console.log(this.random);
    if (this.random === 0) this.snail.src = 'greenSnail.png';
    else if (this.random === 1) this.snail.src = 'blueSnail.png';
    else if (this.random === 2) this.snail.src = 'redSnail.png';
  }
  draw() {
    // ctx.fillStyle = 'red';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.snail, this.x - 2, this.y);
  }
  update() {
    this.y += 2;
    this.draw();
  }
}

function handleObstacles() {
  if (frame % Math.floor(Math.random() * 50) === 0) {
    obstaclesArray.push(new Obstacle);
  }
  for (let i = 0; i < obstaclesArray.length; i++) {
    obstaclesArray[i].update();
    if (obstaclesArray[i].y === canvas.height) {
      score++;
    }
  }
}