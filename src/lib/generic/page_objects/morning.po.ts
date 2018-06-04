import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {Label} from "../components/label";
import {BasePagePo} from "./basePage.po";


interface MorningPoInterface {
  volumeLabel: Label;
}


class MorningPo extends BasePagePo implements MorningPoInterface {

  name = 'Morning';

  constructor(private ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.volumeLabel];
  }

  get volumeLabel() {
    return new Label(this.ef.id('wan.pclock:id/textViewPercent'));
  }

}


export {MorningPo};
