import {IMorningPa} from "../../exporter/generic/pageActions";


interface IMorningService {
  getVolume: () => Promise<string>;
  pageOpened: () => Promise<boolean>;
}


class MorningService implements IMorningService {

  constructor(public page: IMorningPa) {
  }

  getVolume() {
    return this.page.getVolume();
  }

  async pageOpened() {
    return (await this.page.isOpen()).reduce((prev, cur) => {
      return prev && cur;
    }, true);
  }

}


export {MorningService, IMorningService};