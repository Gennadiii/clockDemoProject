import {MorningPo} from "../../exporter/generic/pageObjects";
import {PagePa} from "../../exporter/generic/pageActions";


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
    console.log('Getting volume');
    return this.page.volumeLabel.text();
  }

}


export {MorningPa};
