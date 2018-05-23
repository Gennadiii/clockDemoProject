import {MorningPo} from "../../exporter/generic/pageObjects";
import {PagePa} from "../../exporter/generic/pageActions";
import {helper} from "../../helpers/helper";


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


helper.lib.addClass(MorningPa);
export {MorningPa};
