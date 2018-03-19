import { commands } from '../data/Commands';
import {
  notACommand,
  anErrorOccured,
  accessDenied,
  buildOutputObject
} from './utils';

function parseCommand(input, level, directory) {
  if (input !== '') {
    let output = [
      buildOutputObject("'" + input + "'" + notACommand, false, false, 0)
    ];
    const commandsFiltered = commands.filter(commandFilter(input));
    if (commandsFiltered !== null && commandsFiltered.length !== 0) {
      const commandToUse = commandsFiltered[0];
      if (commandToUse.printOutput) {
        let outputText = commandToUse.output;
        if (level < 3) {
          outputText = accessDenied;
        }
        output = [
          buildOutputObject(outputText, commandToUse.isError, false, 0)
        ];
      } else {
        output = getCommandFunctionOutput(
          commandToUse,
          input,
          level,
          directory
        );
      }
    }
    return output;
  } else {
    return [buildOutputObject('', false, false, 0)];
  }
}

function getCommandFunctionOutput(commandObject, input, level, directory) {
  if (commandObject.function !== undefined && commandObject.function !== null) {
    const commandOutput = commandObject.function({
      command: commandObject,
      input: input,
      level: level,
      directory: directory
    });
    if (commandOutput !== null) {
      return commandOutput;
    }
  }
  return [buildOutputObject(anErrorOccured, true, false, 0)];
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
