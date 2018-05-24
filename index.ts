require('dotenv-safe').config();
import {Driver} from "./src/helpers/appium.helper";
import {jasmine} from "./jasmine-conf";
import {selectTests} from "./src/helpers/testsSelector.helper";
import {helper} from "./src/helpers/helper";


const log = helper.logger.get('index');


const {
  platform, deviceName, app, implicitWait, appiumPort, specs
} = process.env;


log.info(`Test run is about to start with next configuration:
${JSON.stringify(
  {platform, deviceName, app, implicitWait, appiumPort, specs},
  null, 4)}`);


const capabilities = {
  deviceName,
  app,
  platformName: platform,
};

const appium = new Driver({capabilities, implicitWait, appiumPort});
export const driver = appium.init();


void async function main() {
  const tests = specs || (await selectTests())
    .map(test => `${__dirname}/spec/${test}`);
  helper.lib.build();
  await helper.lib.waitReady();
  const getServices = (await import("./src/assembler")).getServices;
  jasmine.env.service = getServices({platform});
  await jasmine.addSpecFiles(tests);
  await jasmine.execute();
}();
