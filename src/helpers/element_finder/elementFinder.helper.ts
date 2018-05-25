import {driver} from "../../../index";


interface ElementFinderInterface {
  all: ElementFinderInterface;
  id: (string) => () => Promise<any>;
  xpath: (string) => () => Promise<any>;
  className: (string) => () => Promise<any>;
}


class ElementFinder implements ElementFinderInterface {

  constructor(private searchFunction: any) {
  }

  get all() {
    return new ElementFinder(findElementsBy);
  }

  id(id: string) {
    return this.searchFunction('id', id);
  }

  xpath(xpath: string) {
    return this.searchFunction('XPath', xpath);
  }

  className(className: string) {
    return this.searchFunction('className', className);
  }

}


const ef = new ElementFinder(findElementBy);


export {ef, ElementFinderInterface};


function findElementBy(selectorType: string, value: string) {
  return async () => (await driver).appium.element(selectorType, value);
}

function findElementsBy(selectorType: string, value: string, options?) {
  options = options || {};
  const {index} = options;
  return async () => {
    const elements = await (await driver).appium.elements(selectorType, value);
    return index ? elements[index] : elements;
  }
}
