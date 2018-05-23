import {elementFinderInterface} from "../../helpers/element_finder/elementFinder.helper";
import {Label} from "../components/label";


interface MorningPoInterface {
  volumeLabel: Label;
}


class MorningPo implements MorningPoInterface {

  constructor(private ef: elementFinderInterface) {
  }

  get volumeLabel() {
    return new Label(this.ef.id('wan.pclock:id/textViewPercent'));
  }

}


export {MorningPo};
