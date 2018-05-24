import {elementFinderInterface} from "../../helpers/element_finder/elementFinder.helper";
import {Label} from "../components/label";


interface MorningPoInterface {
  name: string;
  volumeLabel: Label;
}


class MorningPo implements MorningPoInterface {

  name;

  constructor(private ef: elementFinderInterface) {
    this.name = 'Morning';
  }

  get staticElements() {
    return [this.volumeLabel];
  }

  get volumeLabel() {
    return new Label(this.ef.id('wan.pclock:id/textViewPercent'));
  }

}


export {MorningPo};
