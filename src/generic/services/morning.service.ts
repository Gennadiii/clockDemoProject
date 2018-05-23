import {MorningPa} from "../../exporter/generic/pageActions";
import {helper} from "../../helpers/helper";


interface MorningServiceInterface {
  getVolume: () => Promise<string>;
  pageOpened: () => Promise<boolean>;
}


class MorningService implements MorningServiceInterface {

  constructor(public page: MorningPa) {
  }

  getVolume() {
    return this.page.getVolume();
  }

  async pageOpened() {
    return (await this.page.isOpen())
      .reduce((prev, cur) => {
        return prev && cur;
      }, true);
  }

}


helper.lib.addClass(MorningService);
export {MorningService};
