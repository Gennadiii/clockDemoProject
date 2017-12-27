const wd = require('wd');


class Driver {

  async init() {
    let driver = wd.promiseChainRemote('localhost', 4723);
    await driver.init({
      deviceName: 'Galaxy J7',
      platformName: 'Android',
      app: `C:\\Users\\${process.env.USERNAME}\\Desktop\\Speaking Alarm Clock-0.9.112.apk`
    }).setImplicitWaitTimeout(10 * 1000);
    return driver;
  }

}


export {Driver};