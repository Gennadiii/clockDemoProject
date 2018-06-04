import {MorningPa} from "../page_actions/morning.pa";


interface MorningServiceInterface {
  getVolume: () => Promise<string>;
}


class MorningService implements MorningServiceInterface {

  constructor(public page: MorningPa) {
  }

  getVolume() {
    return this.page.getVolume();
  }

}


export {MorningService};
