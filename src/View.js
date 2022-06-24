// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor({ track, hero }) {
    this.track = track;
    this.hero = hero;
  }
  render(track) {
    const yourTeamName = 'Dream-Team from Elbrus';

    // Тут всё рисуем.
    console.clear();
    // console.log(this.game.track.join(''));
    console.log(`${track.join('')}`);    
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
    console.log(`YOUR SCORE: ${this.hero.countDie}`);

  }
}

module.exports = View;
