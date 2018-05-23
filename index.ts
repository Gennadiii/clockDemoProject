require('dotenv-safe').config();
import {Driver} from "./src/helpers/appium.helper";
import {jasmine} from "./jasmine-conf";
import {selectTests} from "./src/helpers/testsSelector.helper";
import {helper} from "./src/helpers/helper";


const options = {
  platform: process.env.PLATFORM,
  deviceName: process.env.DEVICE_NAME,
  app: process.env.APP,
  implicitWait: process.env.IMPLICIT_WAIT,
  appiumPort: process.env.APPIUM_PORT
};


console.info(`Test run is about to start with next configuration:
${JSON.stringify(options, null, 4)}`);


const capabilities = {
  deviceName: options.deviceName,
  platformName: options.platform,
  app: options.app
};
const {implicitWait, appiumPort, platform} = options;

const appium = new Driver({capabilities, implicitWait, appiumPort});
export const driver = appium.init();


void async function main() {
  const tests = (await selectTests())
    .map(test => `${__dirname}/spec/${test}`);
  helper.lib.build();
  await helper.lib.waitReady();
  const getServices = (await import("./src/assembler")).getServices;
  jasmine.env.service = getServices({platform});
  await jasmine.addSpecFiles(tests);
  await jasmine.execute();
}();
