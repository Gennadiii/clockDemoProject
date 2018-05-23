import {LandingPa} from "../../exporter/generic/pageActions";
import {helper} from "../../helpers/helper";


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


helper.lib.addClass(LandingService);
export {LandingService};
