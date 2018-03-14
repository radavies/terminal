import { directory } from '../data/directoryData';

class FakeDirectory {
  constructor() {
    this.currentDir = directory;
  }

  getCurrentDir() {
    return this.currentDir;
  }
}

export default FakeDirectory;
