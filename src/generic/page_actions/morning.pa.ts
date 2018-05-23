import {PagePa} from "./page.pa";
import {MorningPo} from "../page_objects/morning.po";


interface MorningPaInterface extends PagePa {
  getVolume: () => Promise<string>;
}


class MorningPa extends PagePa implements MorningPaInterface {

  constructor(public page: MorningPo) {
    super();
  }

  isOpen() {
    return Promise.all([this.page.volumeLabel.isDisplayed()]);
  }

  getVolume() {
    console.info('Getting volume');
    return this.page.volumeLabel.text();
  }

}


export {MorningPa};
