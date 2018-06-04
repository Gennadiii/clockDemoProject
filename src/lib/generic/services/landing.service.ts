import {LandingPa} from "../page_actions/landing.pa";


interface LandingServiceInterface {
  skipUpdate: () => Promise<void>;
  openMorningTab: () => Promise<void>;
}


class LandingService implements LandingServiceInterface {

  constructor(public page: LandingPa) {
  }


  async skipUpdate() {
    await this.page.skipVersionUpdate();
  }

  async openMorningTab() {
    await this.page.openMorningTab();
  }

}


export {LandingService};
