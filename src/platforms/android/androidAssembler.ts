import {assemblerInterface} from "../../assembler";
import {ef} from "../../helpers/element_finder/elementFinder.helper";
import LandingService from "../../generic/services/landing.service";
import MorningService from "../../generic/services/morning.service";
import MorningPa from "../../generic/page_actions/morning.pa";
import MorningPo from "../../generic/page_objects/morning.po";
import LandingPa from "../../generic/page_actions/landing.pa";
import LandingPo from "../../generic/page_objects/landing.po";


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