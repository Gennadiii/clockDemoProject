import {Component, IComponent} from "./component";


interface IButton extends IComponent {
  click: () => Promise<void>;
}


class Button extends Component implements IButton {

  constructor(protected selector) {
    super(selector);
  }

  async click() {
    (await this.element).click();
  }

}

export {Button, IButton};