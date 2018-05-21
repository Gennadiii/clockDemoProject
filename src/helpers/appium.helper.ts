const wd = require('wd');


interface IDriver {
  init: () => Promise<any>;
}


class Driver implements IDriver {

  private capabilities;
  private implicitWait;
  private appiumPort;

  constructor(private params: IDiverParams) {
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


interface Icapabilities {
  deviceName: string;
  platformName: string;
  app: string;
}


interface IDiverParams {
  capabilities: Icapabilities;
  implicitWait: number | string;
  appiumPort: number | string;
}
