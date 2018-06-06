import {LandingPo} from "../../generic/page_objects/landing.po";
import {Button} from "../../generic/components/button";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";


interface IosLandingPoInterface extends LandingPo {
}


class IosLandingPo extends LandingPo implements IosLandingPoInterface {

  name = 'Landing';

  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

  get morningButton() {
    return new Button(this.ef.className('someIosLocator'));
  }
}


export {IosLandingPo};
