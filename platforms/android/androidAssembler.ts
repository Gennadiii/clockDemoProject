import {LandingPo, MorningPo} from "../../exporter/generic/pageObjects";

import {LandingPa, MorningPa} from "../../exporter/generic/pageActions";

import {
  LandingService, MorningService,
  ILandingService, IMorningService
} from "../../exporter/generic/services";

import {Iassembler} from "../../exporter/assembler";


const androidAssembler: Iassembler = {

  landing(): ILandingService {
    const landingPo = new LandingPo(),
      landingPa = new LandingPa(landingPo);
    return new LandingService(landingPa);
  },

  morning(): IMorningService {
    const morningPo = new MorningPo(),
      morningPa = new MorningPa(morningPo);
    return new MorningService(morningPa);
  }

};


export {androidAssembler};