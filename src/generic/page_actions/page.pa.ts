import {helper} from "../../helpers/helper";


interface PagePaInterface {
  isOpen: () => Promise<boolean[]>;
}


class PagePa implements PagePaInterface {

  isOpen() {
    return Promise.all([Promise.resolve(true)]);
  }

}


helper.lib.addClass(PagePa);
export {PagePa};
