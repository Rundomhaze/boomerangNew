// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
// const Hero = require('./Hero');
// const Enemy = require('./Enemy');


class Boomerang {
  constructor(position) {
    this.skin = '🌀';
    this.position = position;
  }

  // fly() {
  //   this.moveRight;
  // }

  moveLeft() {
    setInterval(() => {
      this.position -= 1;
    }, 15);
  }

  moveRight() {
    setInterval(() => {
      this.position += 1;
    }, 25);
  }
}

module.exports = Boomerang;
