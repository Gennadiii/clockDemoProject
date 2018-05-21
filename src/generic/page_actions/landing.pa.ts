import {PagePa, IPagePa} from "../../exporter/generic/pageActions";
import {ILandingPo} from "../page_objects/landing.po";


interface ILandingPa extends IPagePa {
  skipVersionUpdate: () => Promise<void>;
  openMorningTab: () => Promise<void>;
}


class LandingPa extends PagePa implements ILandingPa {

  constructor(public page: ILandingPo) {
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


export {LandingPa, ILandingPa};
