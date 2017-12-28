const commandLineArgs = require("command-line-args");
import {Driver} from "./generic/helpers/appium.helper";
import {jasmine} from "./jasmine-conf";


const optionDefinitions = [
    {name: 'platform', alias: 'p', type: String},
    {name: 'deviceName', alias: 'd', type: String},
    {name: 'app', alias: 'a', type: String},
    {name: 'implicitWait', alias: 'i', type: Number},
    {name: 'appiumPort', alias: 'x', type: Number},
    {name: 'tests', alias: 't', multiple: true, type: String}
  ],
  consoleOptions = commandLineArgs(optionDefinitions);

export const defaultOptions = {
  platform: 'Android',
  deviceName: 'Galaxy J7',
  app: `C:/Users/${process.env.USERNAME}/Desktop/Speaking Alarm Clock-0.9.112.apk`,
  implicitWait: 10 * 1000,
  appiumPort: 4723,
  tests: ['**/*spec.js']
};

// Get options from console arguments or user input
import {processInputParams} from "./generic/helpers/inputParameterProcessor";


let options = Object.keys(consoleOptions).length === 0
  ? processInputParams()
  : consoleOptions;


setDefaultOptionsForUnsetParams(options, defaultOptions);


console.log(`Test run is about to start with next configuration:
${JSON.stringify(options, null, 4)}`);


const capabilities = {
    deviceName: options.deviceName,
    platformName: options.platform,
    app: options.app
  },
  {implicitWait, appiumPort, platform} = options;
export const driver = new Driver({capabilities, implicitWait, appiumPort}).init();

import {getServices} from "./exporter/assembler";


export const service = getServices({platform});


jasmine.addSpecFiles(options.tests);
jasmine.execute();


function setDefaultOptionsForUnsetParams(options, defaultOptions) {
  options.platform = options.platform || defaultOptions.platform;
  options.deviceName = options.deviceName || defaultOptions.deviceName;
  options.app = options.app || defaultOptions.app;
  options.implicitWait = options.implicitWait || defaultOptions.implicitWait;
  options.appiumPort = options.appiumPort || defaultOptions.appiumPort;
  options.tests = options.tests || defaultOptions.tests;
}