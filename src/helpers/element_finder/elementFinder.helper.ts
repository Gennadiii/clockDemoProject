import {driver} from "../../../index";


interface elementFinderInterface {
  id: (string) => () => Promise<any>;
  xpath: (string) => () => Promise<any>;
}


const ef: elementFinderInterface = {

  id(id: string) {
    return findElementBy('id', id);
  },

  xpath(xpath: string) {
    return findElementBy('XPath', xpath);
  }

};


export {ef, elementFinderInterface}


function findElementBy(selectorType: string, value: string) {
  return async () => (await driver).element(selectorType, value)
}