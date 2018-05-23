import {assemblerInterface} from "../../assembler";
import {ef} from "../../helpers/element_finder/elementFinder.helper";
import {helper} from "../../helpers/helper";


const {
  page_objects: {LandingPo, MorningPo},
  page_actions: {LandingPa, MorningPa},
  services: {LandingService, MorningService}
} = (<any>helper.lib.all);


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
