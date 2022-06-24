// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Keyboard = require('./keyboard')

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({
    trackLength
  }) {
    this.trackLength = trackLength;
    this.hero = new Hero({
      position: 0
    }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({
      position: trackLength - 5
    });
    this.view = new View({
      track: this.track,
      hero: this.hero
    });
    this.keyboard = new Keyboard({
      hero: this.hero,
      boomerang: this.boomerang
    });
    this.boomerang = new Boomerang(this.hero.position);
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.enemy.position <= this.boomerang.position) {
      this.enemy.die()
      this.boomerang.moveLeft();
      this.hero.countDieEnemy();
      this.enemy = new Enemy({
        position: this.trackLength - 5
      })
      this.track[this.enemy.position] = this.enemy.skin;
    }
    if (this.boomerang.position <= this.hero.position) {
      this.boomerang.position = this.hero.position;
    }
  }

  play() {
    this.keyboard.runInteractiveConsole()
    setInterval(() => {;
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      this.enemy.moveLeft();
    },100);
  }
}

module.exports = Game;