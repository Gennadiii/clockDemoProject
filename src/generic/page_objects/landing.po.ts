import {
  Button,
  IButton
} from "../../exporter/generic/components";


interface ILandingPo {
  skipVersionButton: IButton;
  morningButton: IButton;
}


class LandingPo implements ILandingPo {

  get skipVersionButton() {
    return new Button('android:id/button3');
  }

  get morningButton() {
    return new Button('wan.pclock:id/MorningConfigButton')
  };
}


export {LandingPo, ILandingPo};