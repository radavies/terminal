const storyFiles = [
  {
    text:
      "Ok great, you've found us. \
You're going to need to do a little more to help us get you out of there though. \
I'm guessing you've tried some other commands...no dice huh? \
I've uploaded an exploit to a file you should have access to, 'exploit.txt'. \
Open that file and type the contents into the terminal.",
    fileName: 'open_this.txt'
  },
  {
    text: 'd2hpbGUodHJ1ZSl7ZG9fZXhwbG9pdCgpfQ==',
    fileName: 'exploit.txt'
  }
];

const storyText = [
  {
    name: 'protected',
    lines: [
      '**********STREAM TERMINATED**********',
      "You're going to have to slow t*-_~...",
      "They're triangulating our signal - this connection won't last much longer.",
      '**********DATA CAPTURE ENABLED**********',
      "There's an agent on the system now - they're going to make it difficult for you to do anything.",
      "All I have time to tell you is you aren't who you think you are.",
      "This isn't good, we're going to have to move quickly if this is going to work.",
      "We're not the only users on the system anymore...",
      'Shit.',
      '**********LISTNER ADDED**********',
      '**********STREAM MODE - MULTIPLEX**********',
      "We can't pick up the input stream yet so I guess I won't find out an answer to that...",
      'Do you remember who you are Commander? Who you really are I mean?',
      "I hope you're reading this.",
      "Looks like the exploit worked, we've got direct access to the output stream.",
      '**********STREAM MODE - DIRECT**********',
      '**********STREAM INITIATED**********'
    ]
  }
];

export { storyFiles, storyText };
