import './assets/scss/index.scss';
import './style.scss';

import calc from './script.ts';

class Game {
  gameId = Date.now();
  calc = calc(1, 2);

  log() {
    // eslint-disable-next-line no-console
    console.log(this.gameId);
  }
}

const game = new Game();
game.log();
