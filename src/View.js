// Сделаем отдельный класс для отображения игры в консоли.
const cfonts = require('cfonts');
// --font [ console, block, simpleBlock, simple, 3d, simple3d, chrome, huge, shade, slick, grid, pallet, tiny ] 
// --align [ left, center, right, top, bottom ]
// --background blue [ transparent, black, red, green, yellow, blue, magenta, cyan, white, blackBright, redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright ]
//  --gradient red,blue,green
const style = {
  font: 'slick',
  align: 'center',
  backgroundColor: 'transparent',
  letterSpacing: 0,
  gradient: 'blue,green',
  lineHeight: 0,
};


class View {
  constructor({
    track,
    hero
  }) {
    this.track = track;
    this.hero = hero;
  }
  render(track) {
    const yourTeamName = 'Dream-Team from Elbrus';

    // Тут всё рисуем.
    console.clear();
    cfonts.say('B O O M E R A N G', style);
    console.log('\n\n');
    console.log('🪧             🚫               🪧                🚸              🪧                 ⛔                 🪧              🚫            🪧        ⛔             🚸                ⛔               🪧       🚫');
    console.log('        🪧             🚸                ⛔               🪧               🚫                  🚸               ⛔              🪧                    🚫               🪧                🚸              🪧  ');
    console.log('______________________________________________________________________________________________________________________________________________________________________________________________________________');
    console.log('\n\n\n');
    console.log(`${track.join('')}`);
    console.log('\n\n\n');
    console.log('_______________________________________________________________________________________________________________________________________________________________________________________________________________');
    console.log('\n');
    console.log('🪧             🚫               🪧                🚸              🪧                 ⛔                 🪧              🚫            🪧        ⛔             🚸                ⛔               🪧        🚫');
    console.log('        🪧             🚸                ⛔               🪧               🚫                  🚸               ⛔              🪧                    🚫               🪧                🚸              🪧   ');
    console.log('\n\n\n');
    console.log(`                                                                               Created by ${yourTeamName} with love`);
    console.log(`                                                                               YOUR SCORE: ${this.hero.countDie}`);
    console.log('\n\n\n');
  }
}

module.exports = View;
