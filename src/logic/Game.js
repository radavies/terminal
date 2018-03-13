import { parseCommand } from '../logic/CommandParser';

class Game {
  constructor() {
    this.level = 0;
  }

  processCommand(input) {
    return parseCommand(input, this.level);
  }
}

export default Game;
