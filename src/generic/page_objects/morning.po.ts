import {Label} from "../../exporter/generic/components";
import {elementFinderInterface} from "../../helpers/element_finder/elementFinder.helper";


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