const wd = require('wd');


class Driver {

  init() {
    let driver = wd.promiseChainRemote('localhost', 4723);
    return driver.init({
      deviceName: 'Galaxy J7',
      platformName: 'Android',
      app: "C:\\Users\\gmish\\Desktop\\Speaking Alarm Clock-0.9.112.apk",
    }).setImplicitWaitTimeout(10 * 1000);
  }

}


export {Driver};