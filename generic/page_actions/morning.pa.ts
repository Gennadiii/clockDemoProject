import {IMorningPo} from "../../exporter/generic/pageObjects";
import {PagePa, IPagePa} from "../../exporter/generic/pageActions";


interface IMorningPa extends IPagePa {
  getVolume: () => Promise<string>;
}


class MorningPa extends PagePa implements IMorningPa {

    constructor(public page: IMorningPo) {
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


export {MorningPa, IMorningPa};
