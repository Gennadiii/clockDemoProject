const component = require('./component').Component;
console.log(new component());

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

module.exports = Button;
