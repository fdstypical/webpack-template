import './assets/scss/index.scss';

class Game {
  gameId = Date.now();

  log() {
    // eslint-disable-next-line no-console
    console.log(this.gameId);
  }
}

const game = new Game();
game.log();
