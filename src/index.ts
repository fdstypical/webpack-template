import "./assets/scss/index.scss";
import "./style.scss";

import calc from "./script";

class Game {
  gameId: number = Date.now();
  calc: number = calc(10, 25);

  log() {
    // eslint-disable-next-line no-console
    console.log(this.gameId);
  }
}

const game = new Game();
game.log();