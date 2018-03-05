import { helptxt } from './storyFiles';
import { buildOutputObject } from '../logic/utils';

const commands = [
  {
    name: 'cls',
    alt: 'clear',
    regex: RegExp(/^cls$|^clear$/),
    output: 'CLEAR',
    help: 'Clears the screen.',
    printOutput: false,
    isError: false,
    function: clear
  },
  {
    name: 'ls',
    alt: null,
    regex: RegExp(/^ls$/),
    output: 'PRINT-DIR',
    help: 'Lists the contents of the current directory.',
    printOutput: false,
    isError: false,
    function: printDir
  },
  {
    name: 'cd',
    alt: null,
    regex: RegExp(/^cd\s[\w\d\s.\\/]+$/),
    output: "You're not going anywhere.",
    help: 'Change directory.',
    printOutput: true,
    isError: true
  },
  {
    name: 'sudo',
    alt: null,
    regex: RegExp(/^sudo[\w\d\s.\\/]*$/),
    output: "I don't think so...",
    help:
      'Run command with the security privileges of the superuser (Super User DO).',
    printOutput: true,
    isError: true
  },
  {
    name: 'open',
    alt: 'cat',
    regex: RegExp(/^(cat|open)[\w\d\s.\\/]*$/),
    output: 'PRINT-FILE',
    help: 'Prints a files contents to the screen.',
    printOutput: false,
    isError: false,
    function: printFile
  },
  {
    name: 'top',
    alt: null,
    regex: RegExp(/^top$/),
    output: "I can't let you see behind the curtain now can I?",
    help: 'Displays active processes. Press q to quit.',
    printOutput: true,
    isError: true
  },
  {
    name: 'touch',
    alt: null,
    regex: RegExp(/^touch[\w\d\s.\\/]*$/),
    output: "Please don't pollute my file system.",
    help: 'Create a new file.',
    printOutput: true,
    isError: true
  },
  {
    name: 'mkdir',
    alt: null,
    regex: RegExp(/^mkdir[\w\d\s.\\/]*$/),
    output: "Please don't pollute my file system.",
    help: 'Create new directory.',
    printOutput: true,
    isError: true
  },
  {
    name: 'pwd',
    alt: null,
    regex: RegExp(/^pwd$/),
    output: 'YOU ARE HERE.',
    help: 'Full path to working directory.',
    printOutput: true,
    isError: true
  },
  {
    name: 'rm',
    alt: null,
    regex: RegExp(/^rm[\w\d\s.\\/]*$/),
    output: 'Lets leave things where they are.',
    help: 'Remove a file.',
    printOutput: true,
    isError: true
  },
  {
    name: 'cp',
    alt: null,
    regex: RegExp(/^cp[\w\d\s.\\/]*$/),
    output: 'Lets leave things how they are.',
    help: 'Copy file to file.',
    printOutput: true,
    isError: true
  },
  {
    name: 'mv',
    alt: null,
    regex: RegExp(/^mv[\w\d\s.\\/]*$/),
    output: 'Lets leave things where they are.',
    help: 'Copy file to file.',
    printOutput: true,
    isError: true
  },
  {
    name: 'grep',
    alt: null,
    regex: RegExp(/^grep[\w\d\s.\\/]*$/),
    output: 'No. Just no.',
    help: 'Search for all lines that contain the pattern.',
    printOutput: true,
    isError: true
  },
  {
    name: 'help',
    alt: null,
    regex: RegExp(/^help$/),
    output: 'SHOW-HELP',
    help: 'Show help.',
    printOutput: false,
    isError: false,
    function: printHelp
  }
];

function printDir(e) {
  return [buildOutputObject('help.txt', false, false)];
}

function clear(e) {
  return [buildOutputObject('CLEAR', false, false)];
}

function printFile(e) {
  const fileName = e.input.split(' ')[1];
  let output = buildOutputObject('File not found.', true, false);
  if (fileName === 'help.txt') {
    output = buildOutputObject(helptxt, false, false);
  }
  return [output];
}

function printHelp(e) {
  let outputObjects = commands.map(command => {
    return buildOutputObject(command.name + ' - ' + command.help, false, false);
  });
  return outputObjects;
}

export { commands };
