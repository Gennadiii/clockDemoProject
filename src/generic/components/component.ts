import {helper} from "../../helpers/helper";


interface ComponentInterface {
  isDisplayed: () => Promise<boolean>;
}


class Component implements ComponentInterface {

  constructor(protected ef) {
  }

  protected get element() {
    return this.ef();
  }

  async isDisplayed() {
    return (await this.element).isDisplayed();
  }

}

helper.lib.addClass(Component);
export {Component};
