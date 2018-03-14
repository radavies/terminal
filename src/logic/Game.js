import { parseCommand } from '../logic/CommandParser';
import FakeDirectory from './FakeDirectory';
class Game {
  constructor() {
    this.level = 0;
    this.fakeDirectory = new FakeDirectory();
  }

  processCommand(input) {
    const commandOutput = parseCommand(input, this.level, this.fakeDirectory);
    this.checkForStoryEvents(input, commandOutput);
    return commandOutput;
  }

  checkForStoryEvents(input, commandOutput) {
    if (this.fakeDirectory.currentDir.path === '/') {
      if (input === 'open open_this.txt' || input === 'cat open_this.txt') {
        this.level = 1;
        this.fakeDirectory.currentDir.contents.push('exploit.txt');
      } else if (
        this.level === 1 &&
        input === 'd2hpbGUodHJ1ZSl7ZG9fZXhwbG9pdCgpfQ=='
      ) {
        this.level = 2;
      }
    }
  }
}

export default Game;
