import {Component} from "./component";
import {helper} from "../../helpers/helper";


interface ButtonInterface extends Component {
  click: () => Promise<void>;
}


class Button extends Component implements ButtonInterface {

  constructor(protected ef) {
    super(ef);
  }

  async click() {
    (await this.element).click();
  }

}

helper.lib.addClass(Button);
export {Button};
