import {BasePagePa} from "./basePage.pa";
import {MorningPo} from "../page_objects/morning.po";
import {helper} from "../../helpers/helper";


const log = helper.logger.get('MorningPa');


interface MorningPaInterface extends BasePagePa {
  getVolume: () => Promise<string>;
}


class MorningPa extends BasePagePa implements MorningPaInterface {

  constructor(public page: MorningPo) {
    super();
  }

  getVolume() {
    log.info('Getting volume');
    return this.page.volumeLabel.text();
  }

}


export {MorningPa};
