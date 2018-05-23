import {Component} from "./component";
import {helper} from "../../helpers/helper";


interface LabelInterface extends Component {
  text: () => Promise<string>;
}

class Label extends Component implements LabelInterface {

  constructor(protected ef) {
    super(ef);
  }

  async text() {
    return (await this.element).text();
  }

}


helper.lib.addClass(Label);
export {Label};
