import {LandingPo} from "../page_objects/landing.po";
import {PagePa} from "./page.pa";
import {helper} from "../../helpers/helper";


const log = helper.logger.get('LandingPa');


interface LandingPaInterface extends PagePa {
  skipVersionUpdate: () => Promise<void>;
  openMorningTab: () => Promise<void>;
}


class LandingPa extends PagePa implements LandingPaInterface {

  constructor(public page: LandingPo) {
    super();
  }

  isOpen() {
    return Promise.all([this.page.morningButton.isDisplayed()]);
  };

  skipVersionUpdate() {
    log.info('Skipping version update');
    return this.page.skipVersionButton.click();
  };

  openMorningTab() {
    log.info('Opening morning tab');
    return this.page.morningButton.click();
  };

}


export {LandingPa};
