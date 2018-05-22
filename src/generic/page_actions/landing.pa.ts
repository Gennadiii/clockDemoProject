import PagePa from "./page.pa";
import LandingPo from "../page_objects/landing.po";


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
    console.log('Skiping version update');
    return this.page.skipVersionButton.click();
  };

  openMorningTab() {
    console.log('Opening morning tab');
    return this.page.morningButton.click();
  };

}


module.exports = LandingPa;
export default LandingPa;
