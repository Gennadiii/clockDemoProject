import {LandingPo, MorningPo} from "../../exporter/generic/pageObjects";
import {LandingPa, MorningPa} from "../../exporter/generic/pageActions";
import {LandingService, MorningService} from "../../exporter/generic/services";
import {assemblerInterface} from "../../exporter/assembler";
import {ef} from "../../helpers/element_finder/elementFinder.helper";


const androidAssembler: assemblerInterface = {

  landing(): LandingService {
    const landingPo = new LandingPo(ef),
      landingPa = new LandingPa(landingPo);
    return new LandingService(landingPa);
  },

  morning(): MorningService {
    const morningPo = new MorningPo(ef),
      morningPa = new MorningPa(morningPo);
    return new MorningService(morningPa);
  }

};


export {androidAssembler};