import {LandingPo, MorningPo} from "../../exporter/generic/pageObjects";
import {LandingPa, MorningPa} from "../../exporter/generic/pageActions";
import {LandingService, MorningService} from "../../exporter/generic/services";
import {assemblerInterface} from "../../exporter/assembler";
import {ef} from "../../helpers/element_finder/elementFinder.helper";
import {helper} from "../../helpers/helper";


const androidServices: assemblerInterface = {

  landing: helper.assembler.buildService({
    service: LandingService,
    elementFinder: ef,
    parts: [{po: LandingPo, pa: LandingPa}]
  }),

  morning: helper.assembler.buildService({
    service: MorningService,
    elementFinder: ef,
    parts: [{po: MorningPo, pa: MorningPa}]
  }),

};


export {androidServices};
