import {Component, IComponent} from "./component";


interface ILabel extends IComponent {
  text: () => Promise<string>;
}

class Label extends Component implements ILabel {

  constructor(protected selector) {
    super(selector);
  }

  async text() {
    return (await this.element).text();
  }

}


export {Label, ILabel};
