const wd = require('wd');


interface DriverInterface {
  init: () => Promise<any>;
}


class Driver implements DriverInterface {

  private capabilities;
  private implicitWait;
  private appiumPort;

  constructor(private params: DiverParamsInterface) {
    const {
      implicitWait,
      capabilities,
      appiumPort
    } = this.params;
    this.capabilities = capabilities;
    this.implicitWait = +implicitWait; // Comes as user input from runtime (string)
    this.appiumPort = +appiumPort; // Comes as user input from runtime (string)
  }

  async init() {
    let driver = wd.promiseChainRemote('localhost', this.appiumPort);
    await driver.init(this.capabilities).setImplicitWaitTimeout(this.implicitWait);
    return driver;
  }

}


export {Driver};


interface capabilitiesInterface {
  deviceName: string;
  platformName: string;
  app: string;
}


interface DiverParamsInterface {
  capabilities: capabilitiesInterface;
  implicitWait: number | string;
  appiumPort: number | string;
}
