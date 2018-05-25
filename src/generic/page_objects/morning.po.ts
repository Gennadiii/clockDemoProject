import {elementFinderInterface} from "../../helpers/element_finder/elementFinder.helper";
import {Label} from "../components/label";


interface MorningPoInterface {
  volumeLabel: Label;
}


class MorningPo implements MorningPoInterface {

  name = 'Morning';

  constructor(private ef: elementFinderInterface) {
  }

  get staticElements() {
    return [this.volumeLabel];
  }

  get volumeLabel() {
    return new Label(this.ef.id('wan.pclock:id/textViewPercent'));
  }

}


export {MorningPo};
