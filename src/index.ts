import '@assets/scss/index.scss';
import '@src/style.scss';

class Game {
  gameId: number = Date.now();

  log() {
    // eslint-disable-next-line no-console
    console.log(this.gameId);
  }
}

const game = new Game();
game.log();
