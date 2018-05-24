import {elementFinderInterface} from "../../helpers/element_finder/elementFinder.helper";
import {Button} from "../components/button";


interface LandingPoInterface {
  name: string;
  skipVersionButton: Button;
  morningButton: Button;
}


class LandingPo implements LandingPoInterface {

  name;

  constructor(private ef: elementFinderInterface) {
    this.name = 'Landing';
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
