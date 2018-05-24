import {helper} from "../../helpers/helper";
import {BasePagePo} from "../page_objects/basePage.po";

const log = helper.logger.get('BasePagePa');
const basePagePo = new BasePagePo();


interface BasePagePaInterface {
  // checks
  checkIsOpen: () => Promise<boolean>;
  verifyIsOpen: () => Promise<void>;
}


class BasePagePa extends BasePagePo implements BasePagePaInterface {

  protected page: any = basePagePo; // Type any is to avoid inheritance issues

  async checkIsOpen() {
    log.info(`Checking if ${this.page.name} page is opened`);
    const isDisplayedArr = this.page.staticElements
      .map(element => element.isDisplayed());
    return helper.promise.allTrue({arr: isDisplayedArr});
  }

  async verifyIsOpen() {
    if (!await this.checkIsOpen()) {
      throw new Error(`Page didn't get opened`);
    }
  }

}


export {BasePagePa};