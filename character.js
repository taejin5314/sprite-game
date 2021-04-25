const characterSprite = new Image();
characterSprite.src = 'walk.png';

class Character {
  constructor() {
    this.x = 20;
    this.vx = 0;
    this.vy = 0;
    this.width = 40;
    this.height = 60;
    this.y = 720 - this.height;
    this.jumpState = false;
  }

  update() {
    if (keyPressed['ArrowRight']) this.vx = 3
    else if (keyPressed['ArrowLeft']) this.vx = -3;
    else this.vx = 0;

    if (keyPressed['AltLeft']) {
      this.jumpState = true;
      this.vy = -4;
    }

    if (this.y < 720 - this.height * 3) {
      this.y = 720 - this.height * 3;
      this.jumpState = false;
      this.vy = 4;
    }

    if (this.y > 720 - this.height - 30) {
      this.y = 720 - this.height - 30;
      this.vy = 0;
    }

    if (this.jumpState) {
      this.vy *= 0.98;
    } else {
      this.vy /= 0.98;
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