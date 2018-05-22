import Component from "./component";


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


export default Label;
module.exports = Label;
