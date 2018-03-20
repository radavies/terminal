import {
  notACommand,
  anErrorOccured,
  accessDenied,
  storyText
} from '../data/story';

function buildOutputObject(print, isError, addCarrot, wait) {
  return {
    print: print,
    isError: isError,
    addCarrot: addCarrot,
    wait: wait
  };
}

function generateGibberish() {
  const chars =
    '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ¬!"£$%^&*()_+-=[]{};:@\'~#,<.>/?`¬/*';
  let gibberish = [];
  for (let counter = 0; counter <= 20; counter++) {
    const rand = Math.floor(Math.random() * chars.length + 0);
    gibberish.push(chars[rand]);
  }
  return gibberish.join('');
}

function buildProtectedDirStoryText() {
  let output = [];

  const protectedDirText = storyText.filter(text => text.name === 'protected');

  if (protectedDirText !== null && protectedDirText.length > 0) {
    let textToUse = protectedDirText[0];

    let timeout = textToUse.lines.length * 2500;
    textToUse.lines.forEach(line => {
      output.push(buildOutputObject(line, false, false, timeout));
      timeout -= 2500;
    });
  }

  return output;
}

export {
  notACommand,
  anErrorOccured,
  accessDenied,
  buildOutputObject,
  generateGibberish,
  buildProtectedDirStoryText
};
