import {LandingPa} from "../page_actions/landing.pa";


interface LandingServiceInterface {
  skipUpdate: () => Promise<void>;
  openMorningTab: () => Promise<void>;
  pageOpened: () => Promise<boolean>;
}


class LandingService implements LandingServiceInterface {

  constructor(public page: LandingPa) {
  }


  async skipUpdate() {
    await this.page.skipVersionUpdate();
  };

  async openMorningTab() {
    await this.page.openMorningTab();
  };

  async pageOpened() {
    return await this.page.checkIsOpen();
  }

}


export {LandingService};
