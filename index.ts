require('dotenv-safe').config();
import {Driver} from "./src/helpers/appium.helper";
import {jasmine} from "./jasmine-conf";
import {selectTests} from "./src/helpers/testsSelector.helper";


const options = {
  platform: process.env.PLATFORM,
  deviceName: process.env.DEVICE_NAME,
  app: process.env.APP,
  implicitWait: process.env.IMPLICIT_WAIT,
  appiumPort: process.env.APPIUM_PORT
};


console.log(`Test run is about to start with next configuration:
${JSON.stringify(options, null, 4)}`);


const capabilities = {
  deviceName: options.deviceName,
  platformName: options.platform,
  app: options.app
};
const {implicitWait, appiumPort, platform} = options;

const appium = new Driver({capabilities, implicitWait, appiumPort});
export const driver = appium.init();

import {getServices} from "./src/exporter/assembler";


export const service = getServices({platform});


void async function main() {
  const tests = (await selectTests())
    .map(test => `${__dirname}/spec/${test}`);
  await jasmine.addSpecFiles(tests);
  await jasmine.execute();
}();
