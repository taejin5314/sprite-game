class Character {
  constructor() {
    this.x = 20;
    this.vx = 0;
    this.y = 720 - 150;
    this.vy = 0;
    this.width = 80;
    this.height = 120;
  }

  update() {

    if (keyPressed['ArrowRight']) this.vx = 3
    else if (keyPressed['ArrowLeft']) this.vx = -3;
    else this.vx = 0;
    this.x += this.vx;
  }

  draw() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const character = new Character();