import {Button} from "../../exporter/generic/components";
import {elementFinderInterface} from "../../helpers/element_finder/elementFinder.helper";
import {helper} from "../../helpers/helper";


interface LandingPoInterface {
  skipVersionButton: Button;
  morningButton: Button;
}


class LandingPo implements LandingPoInterface {

  constructor(private ef: elementFinderInterface) {
  }

  get skipVersionButton() {
    return new Button(this.ef.id('android:id/button3'));
  }

  get morningButton() {
    return new Button(this.ef.id('wan.pclock:id/MorningConfigButton'));
  };
}


helper.lib.addClass(LandingPo);
export {LandingPo};
