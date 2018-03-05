import { commands } from '../data/Commands';
import { buildOutputObject } from './utils';

const notACommand =
  ' is not recognized as an internal or external command, operable program or batch file.';
const anErrorOccured = 'An error occured while processing your command.';

function parseCommand(input) {
  let output = [
    buildOutputObject("'" + input + "'" + notACommand, false, false)
  ];
  const commandsFiltered = commands.filter(commandFilter(input));
  if (commandsFiltered !== null && commandsFiltered.length !== 0) {
    const commandToUse = commandsFiltered[0];
    if (commandToUse.printOutput) {
      output = [
        buildOutputObject(commandToUse.output, commandToUse.isError, false)
      ];
    } else {
      output = getCommandFunctionOutput(commandToUse, input);
    }
  }
  return output;
}

function getCommandFunctionOutput(commandObject, input) {
  if (commandObject.function !== undefined && commandObject.function !== null) {
    return commandObject.function({ command: commandObject, input: input });
  }
  return buildOutputObject(anErrorOccured, true, false);
}

function commandFilter(input) {
  return function(commandObject) {
    if (commandObject.regex !== null) {
      const isCommandMatch = commandObject.regex.test(input);
      return isCommandMatch;
    }
    return false;
  };
}

export { parseCommand };
