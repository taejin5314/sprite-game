const obstaclesArray = [];

class Obstacle {
  constructor() {
    this.x = (Math.random() * canvas.width);
    this.y = 0;
    this.width = 30;
    this.height = 30;
  }
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
  }
}