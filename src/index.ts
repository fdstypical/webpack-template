import '@assets/scss/index.scss';
import '@src/style.scss';

// just add comment for test

class Game {
  gameId: number = Date.now();

  log() {
    // eslint-disable-next-line no-console
    console.log(this.gameId);
  }
}

const game = new Game();
game.log();
