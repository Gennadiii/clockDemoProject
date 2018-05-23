import {driver} from "../../../index";


interface elementFinderInterface {
  id: (string) => () => Promise<any>;
  xpath: (string) => () => Promise<any>;
}


const ef = {

  id(id: string) {
    return findElementBy('id', id);
  },

  xpath(xpath: string) {
    return findElementBy('XPath', xpath);
  }

};


export {ef, elementFinderInterface}


function findElementBy(selectorType: string, value: string) {
  return () => driver
    .then(driver => driver.element(selectorType, value));
}