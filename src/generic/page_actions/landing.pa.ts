import {LandingPo} from "../page_objects/landing.po";
import {PagePa} from "./page.pa";


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
    console.info('Skiping version update');
    return this.page.skipVersionButton.click();
  };

  openMorningTab() {
    console.info('Opening morning tab');
    return this.page.morningButton.click();
  };

}


export {LandingPa};
