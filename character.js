const leftWalk = new Image();
leftWalk.src = 'left.png';
const rightWalk = new Image();
rightWalk.src = 'right.png';
const leftStand = new Image();
leftStand.src = 'stand-left.png';
const rightStand = new Image();
rightStand.src = 'stand-right.png';

class Character {
  constructor() {
    this.x = 20;
    this.vx = 0;
    this.vy = 0;
    this.width = 40;
    this.height = 60;
    this.leftWidth = 84;
    this.rightWidth = 86;
    this.spriteHeight = 81;
    this.y = 720 - this.height;
    this.jumpState = false;
    this.frameX = 0;
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
    this.walk();
  }

  draw() {
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    if (keyPressed['ArrowLeft']) {
      ctx.drawImage(leftWalk, this.frameX * this.leftWidth, 0, this.leftWidth, this.spriteHeight, this.x - 20, this.y - 15, this.leftWidth, this.spriteHeight)
    } else if (keyPressed['ArrowRight']) {
      ctx.drawImage(rightWalk, this.frameX * this.rightWidth, 0, this.rightWidth, this.spriteHeight, this.x - 30, this.y - 15, this.rightWidth, this.spriteHeight)
    } else if (characterSide === 'left') {
      ctx.drawImage(leftStand, 0, 0, this.leftWidth, this.spriteHeight, this.x - 15, this.y - 15, this.leftWidth, this.spriteHeight)
    } else if (characterSide === 'right') {
      ctx.drawImage(rightStand, 0, 0, this.rightWidth, this.spriteHeight, this.x - 20, this.y - 15, this.rightWidth, this.spriteHeight)
    }
  }

  walk() {
    if (this.frameX >= 4) this.frameX = 0;
    else if (frame % 8 === 0) this.frameX += 1;
  }
}

const character = new Character();