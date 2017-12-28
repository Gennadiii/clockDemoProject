const readlineSync = require('readline-sync');
import {defaultOptions} from "../../testRunner";
import {selectTests} from "./testsSelector";


const inputParams = [
  {
    name: 'platform',
    options: ['Android', 'iOS'],
    byDefault: defaultOptions.platform,
    useDefault: true
  },
  {
    name: 'deviceName',
    options: ['Galaxy J7'],
    byDefault: defaultOptions.deviceName,
    useDefault: true
  },
  {
    name: 'app',
    options: false,
    byDefault: defaultOptions.app,
    useDefault: true
  },
  {
    name: 'implicitWait',
    options: false,
    byDefault: defaultOptions.implicitWait,
    useDefault: true
  },
  {
    name: 'appiumPort',
    options: [4723],
    byDefault: defaultOptions.appiumPort,
    useDefault: true
  }
];

const processInputParams = function () {
  let processedParams = {};

  inputParams.forEach(inputParam => processedParams[inputParam.name] = processCapability(inputParam));

  processedParams['tests'] = selectTests({platform: processedParams['platform']});

  return processedParams;
};


export {processInputParams};


function processCapability(inputParam) {

  if (inputParam.useDefault) {
    return inputParam.byDefault;
  }

  console.log(`Choose ${inputParam.name}: \n`);
  printOptions(inputParam.options);
  console.log(`Default - ${inputParam.byDefault} - press Enter to proceed with default option.`);

  let userChoice = readlineSync.question('\n');

  if (!userChoice) {
    return inputParam.byDefault;
  }

  if (!inputParam.options) {
    return userChoice;
  }

  if (!inputParam.options[userChoice - 1]) {
    throw new Error(`Wrong choice (should be a round number). Try again.`);
  }

  return inputParam.options[userChoice - 1];
}

function printOptions(options) {
  if (options) {
    console.log(`Available options: `);
    options.forEach((option, index) => {
      console.log(`${index + 1} - ${option}`);
    })
  }
}