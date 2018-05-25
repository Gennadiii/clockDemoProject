import {driver} from "../../../index";
import {logger} from "../logger";


const log = logger.get('ElementFinder');


interface ElementFinderInterface {
  all: ElementFinderInterface;
  id: (string, options?) => () => Promise<any>;
  xpath: (string, options?) => () => Promise<any>;
  className: (string, options?) => () => Promise<any>;
}


class ElementFinder implements ElementFinderInterface {

  constructor(private searchFunction: any) {
  }

  get all() {
    return new ElementFinder(findElementsBy);
  }

  id(id: string, options?) {
    return this.searchFunction('id', id, options);
  }

  xpath(xpath: string, options?) {
    return this.searchFunction('XPath', xpath, options);
  }

  className(className: string, options?) {
    return this.searchFunction('class name', className, options);
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
    elements.length === 0 && log.warn(`Couldn't find elements with search string: ${value}`);
    return index !== undefined ? elements[index] : elements;
  }
}
