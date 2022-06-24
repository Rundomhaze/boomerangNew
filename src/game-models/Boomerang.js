// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(position) {
    this.skin = '🌀';
    this.position = position;
  }

  fly() {
    this.moveRight();
    this.moveLeft();
  }

  moveLeft() {
    // Идём влево.
    setInterval(() => {
      this.position -= 1;
    }, 25)
  }

  moveRight() {
    // Идём вправо.
    setInterval(() => {
      this.position += 1;
    }, 25)
  }
}

module.exports = Boomerang;