import {MorningPa} from "../page_actions/morning.pa";


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
    return await this.page.checkIsOpen();
  }

}


export {MorningService};
