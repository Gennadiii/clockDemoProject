import {LandingPa} from "../../exporter/generic/pageActions";


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

  openMorningTab() {
    return this.page.openMorningTab();
  };

  async pageOpened() {
    return (await this.page.isOpen())
      .reduce((prev, cur) => {
        return prev && cur;
      }, true);
  }

}


export {LandingService};