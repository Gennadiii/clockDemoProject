import {driver} from "../../exporter/generic/helpers";


interface IComponent {
  isDisplayed: () => Promise<boolean>;
}


class Component implements IComponent {

  constructor(protected selector) {
  }

  protected get element() {
    return driver
      .then(driver => driver.elementById(this.selector));
  }

  async isDisplayed() {
    return (await this.element).isDisplayed()
  }

}


export {Component, IComponent};