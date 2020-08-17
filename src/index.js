import './assets/scss/index.scss';
import './style.scss';

import './index';

class Game {
  gameId = Date.now();

  log() {
    // eslint-disable-next-line no-console
    console.log(this.gameId);
  }
}

const game = new Game();
game.log();
