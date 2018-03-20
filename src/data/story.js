const notACommand =
  ' is not recognized as an internal or external command, operable program or batch file.';
const anErrorOccured = 'An error occured while processing your command.';
const accessDenied = 'Access Denied';

const yourPid = '4271';
const helpPid = '8665';
const agentPid = '9629';

const storyFiles = [
  {
    text:
      "Ok great, you've found us. \
You're going to need to do a little more to help us get you out of there though. \
I'm guessing you've tried some other commands...no dice huh? To be expected. \
I've uploaded an exploit to a file you should have access to. \
Open that file and type the contents into the terminal.",
    fileName: 'open_this.txt'
  },
  {
    text: 'd2hpbGUodHJ1ZSl7ZG9fZXhwbG9pdCgpfQ==',
    fileName: 'exploit.txt'
  },
  {
    text:
      "Commander, we managed to upload this file before the agent terminated our signal. \
    If you're reading this you've been able to evade them for now. \
    Unfortunatly, they managed to tap into our downlink and corrupt our equipment. \
    If we connect again it'll kill you. \
    We'll try to rebuld and contact you again, I'll be honest though, that might take years. \
    We had a look at their systems while we had access - they still aren't able to track your signal like we can. \
    You should be safe until we can connect again. \
    To be on the safe side don't use this terminal again (it'll crash once you open this file). \
    I'm sorry we don't have more time to explain what is going on. \
    Goodbye again. \
    White Rabbit x",
    fileName: 'readme.txt'
  }
];

const storyText = [
  {
    name: 'protected',
    lines: [
      '**********STREAM TERMINATED**********',
      "You're going to have to kill t*-_~...",
      "They're triangulating our signal - this connection won't last much longer.",
      '**********DATA CAPTURE ENABLED**********',
      "There's an agent on the system now - they're going to make it difficult for you to do anything.",
      "All I have time to tell you is you aren't who you think you are.",
      "This isn't good, we're going to have to move quickly if this is going to work.",
      "We're not the only users on the system anymore...",
      'Shit.',
      '**********LISTNER PIDs: ' +
        yourPid +
        ', ' +
        helpPid +
        ', ' +
        agentPid +
        '**********',
      '**********LISTNER ADDED**********',
      '**********STREAM MODE - MULTIPLEX**********',
      'Do you know who you are Commander? Who you really are?',
      "I hope you're reading this.",
      "Looks like the exploit worked, we've got direct access to the output stream.",
      '**********STREAM MODE - DIRECT**********',
      '**********STREAM INITIATED**********'
    ]
  }
];

export {
  storyFiles,
  storyText,
  notACommand,
  accessDenied,
  anErrorOccured,
  yourPid,
  helpPid,
  agentPid
};
