class Item {
  shape;
  x;
  y;
  constructor(shape, x, y) {
    this.shape = shape;
    this.x = x;
    this.y = y;
    this.shape.style.left = x + 'px';
    this.shape.style.top = y + 'px';
  }
}
let t = new Item(document.getElementById('food'), 200, 500);



class Food extends Item {
  constructor(shape, x, y) {
    super(shape, x, y);
  }
  recreate() {
    this.x = getrRangom20(window.innerWidth - 20);
    this.y = getrRangom20(window.innerHeight - 20);
    this.shape.style.top = this.y + 'px';
    this.shape.style.left = this.x + 'px';
  }
}

class Players extends Item {
  constructor(shape, x, y) {
    super(shape, x, y);
  }
  moveUp() {
    this.y -= 20;
    this.shape.style.top = this.y + 'px';
  }
  moveRight() {
    this.x += 20;
    this.shape.style.left = this.x + 'px';
  }
  moveDown() {
    this.y += 20;
    this.shape.style.top = this.y + 'px';
  }
  moveLeft() {
    this.x -= 20;
    this.shape.style.left = this.x + 'px';
  }
}
function getrRangom20(end) {
  let value = Math.round(Math.random() * end);
  return value - (value % 20);
}
console.log(getrRangom20(412));
let food = new Food(
  document.getElementById('food'),
  getrRangom20(window.innerWidth-20),
  getrRangom20(window.innerHeight-20)
);
console.log(food);
let player = new Players(
  document.getElementById('player'),
  getrRangom20(window.innerWidth - 20),
  getrRangom20(window.innerHeight - 20)
);
window.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 38: {
      if (player.y > 0) player.moveUp();
      break;
    }
    case 40: {
      if (player.y < window.innerHeight -30) player.moveDown();
      break;
    }

    case 39: {
      if (player.y < window.innerHeight - 30) player.moveRight();
      break;
    }
    case 37: {
      if (player.x > 0) player.moveLeft();
      break;
    }
  }
  if (player.x === food.x && player.y === food.y) {
    food.recreate();
  }
});
