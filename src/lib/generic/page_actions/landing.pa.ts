import {LandingPo} from "../page_objects/landing.po";
import {BasePagePa} from "./basePage.pa";
import {helper} from "../../../helpers/helper";


const log = helper.logger.get('LandingPa');


interface LandingPaInterface extends BasePagePa {
  skipVersionUpdate: () => Promise<void>;
  openMorningTab: () => Promise<void>;
}


class LandingPa extends BasePagePa implements LandingPaInterface {

  constructor(public page: LandingPo) {
    super();
  }

  skipVersionUpdate() {
    log.info('Skipping version update');
    return this.page.skipVersionButton.click();
  }

  openMorningTab() {
    log.info('Opening morning tab');
    return this.page.morningButton.click();
  }

}


export {LandingPa};
