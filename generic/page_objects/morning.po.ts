import {
    Label,
    ILabel
} from "../../exporter/generic/components";


interface IMorningPo {
  volumeLabel: ILabel;
}

class MorningPo implements IMorningPo {

    get volumeLabel() {
        return new Label('wan.pclock:id/textViewPercent');
    }

}


export {MorningPo, IMorningPo};