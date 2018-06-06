import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../components/button";
import {BasePagePo} from "./basePage.po";


interface LandingPoInterface {
  skipVersionButton: Button;
  morningButton: Button;
}


class LandingPo extends BasePagePo implements LandingPoInterface {

  name = 'Landing';

  constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.morningButton];
  }


  get skipVersionButton() {
    return new Button(this.ef.id('android:id/button3'));
  }

  get morningButton() {
    return new Button(this.ef.id('wan.pclock:id/MorningConfigButton'));
  }
}


export {LandingPo};
