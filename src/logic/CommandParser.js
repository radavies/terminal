import { commands } from '../data/Commands';
import { buildOutputObject } from './utils';

const notACommand =
  ' is not recognized as an internal or external command, operable program or batch file.';
const anErrorOccured = 'An error occured while processing your command.';
const levelOneResponse = 'Access Denied';

function parseCommand(input, level) {
  if (input !== '') {
    let output = [
      buildOutputObject("'" + input + "'" + notACommand, false, false)
    ];
    const commandsFiltered = commands.filter(commandFilter(input));
    if (commandsFiltered !== null && commandsFiltered.length !== 0) {
      const commandToUse = commandsFiltered[0];
      if (commandToUse.printOutput) {
        let outputText = commandToUse.output;
        if (level === 0) {
          outputText = levelOneResponse;
        }
        output = [buildOutputObject(outputText, commandToUse.isError, false)];
      } else {
        output = getCommandFunctionOutput(commandToUse, input);
      }
    }
    return output;
  } else {
    return [buildOutputObject('', false, false)];
  }
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
