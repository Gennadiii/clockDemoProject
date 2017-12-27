import {ILandingPa} from "../../exporter/generic/pageActions";


interface ILandingService {
  skipUpdate: () => Promise<ILandingService>;
  openMorningTab: () => Promise<void>;
  pageOpened: () => Promise<boolean>;
}


class LandingService implements ILandingService {

  constructor(public page: ILandingPa) {
  }


  async skipUpdate() {
    await this.page.skipVersionUpdate();
    return this;
  };

  openMorningTab() {
    return this.page.openMorningTab();
  };

  async pageOpened() {
    return (await this.page.isOpen()).reduce((prev, cur) => {
      return prev && cur;
    }, true);
  }

}


export {LandingService, ILandingService};