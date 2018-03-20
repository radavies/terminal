import { parseCommand } from '../logic/CommandParser';
import FakeDirectory from './FakeDirectory';
import { agentPid } from '../data/story';
import { buildOutputObject } from './utils';

class Game {
  constructor() {
    this.level = 0;
    this.gameOver = false;
    this.fakeDirectory = new FakeDirectory();
  }

  processCommand(input) {
    if (!this.gameOver) {
      const commandOutput = parseCommand(input, this.level, this.fakeDirectory);
      this.checkForStoryEvents(input, commandOutput);
      return commandOutput;
    } else {
      return [buildOutputObject('GAME-OVER', false, false, 0)];
    }
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
      } else if (
        this.level === 2 &&
        (input === 'cd protected' || input === 'cd protected/')
      ) {
        this.fakeDirectory.currentDir = this.fakeDirectory.currentDir.children[0];
        this.level = 3;
      }
    } else {
      if (this.level === 3) {
        this.checkForGameEnd(commandOutput);
      } else if (
        this.level === 4 &&
        (input === 'cd exit' || input === 'cd exit/')
      ) {
        this.fakeDirectory.currentDir = this.fakeDirectory.currentDir.children[0];
        this.level = 5;
      } else if (
        this.level === 5 &&
        (input === 'open readme.txt' || input === 'cat readme.txt')
      ) {
        this.gameOver = true;
      }
    }
  }

  checkForGameEnd(commandOutput) {
    if (commandOutput !== null && commandOutput.length > 0) {
      const command = commandOutput[0];
      if (commandOutput.length === 2) {
        if (command.print === 'Terminal session disconnected.') {
          this.gameOver = true;
        } else if (
          command.print ===
          "Peer to peer connection with 'white_rabbit' disconnected."
        ) {
          this.gameOver = true;
        }
      } else {
        if (command.print === 'PID ' + agentPid + ' killed.') {
          this.fakeDirectory.currentDir.contents.push('exit/');
          this.fakeDirectory.currentDir.children.push({
            path: '/exit',
            contents: ['..', 'readme.txt'],
            children: []
          });
          this.level = 4;
        }
      }
    }
  }
}

export default Game;
