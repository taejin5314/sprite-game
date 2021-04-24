class Character {
  constructor() {
    this.x = 20;
    this.vx = 0;
    this.y = 720 - 150;
    this.vy = 0;
    this.width = 80;
    this.height = 120;
    this.jumpState = false;
  }

  update() {
    if (keyPressed['ArrowRight']) this.vx = 3
    else if (keyPressed['ArrowLeft']) this.vx = -3;
    else this.vx = 0;

    if (keyPressed['AltLeft']) {
      this.jumpState = true;
      this.vy = -10;
    }

    if (this.y < 720 - 210) {
      this.y = 720 - 210;
      this.jumpState = false;
      this.vy = 0.1;
    }

    if (this.y > 720 - 150) {
      this.y = 720 - 150;
      this.vy = 0;
    }

    if (this.jumpState) {
      this.vy *= 0.8;
    } else {
      this.vy /= 0.8;
    }

    this.x += this.vx;
    this.y += this.vy;

  }

  draw() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const character = new Character();