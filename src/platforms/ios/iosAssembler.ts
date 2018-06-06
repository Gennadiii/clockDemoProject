import {assemblerInterface} from "../../assembler";
import {ef} from "../../helpers/element_finder/elementFinder.helper";
import {helper} from "../../helpers/helper";


const {
  generic: {
    page_objects: {MorningPo},
    page_actions: {LandingPa, MorningPa},
    services: {LandingService, MorningService}
  },
  ios: {
    page_objects: {IosLandingPo}
  }
} = (helper.lib.all as any);


const iosServices: assemblerInterface = {

  landing: helper.assembler.buildService({
    service: LandingService,
    elementFinder: ef,
    parts: [{po: IosLandingPo, pa: LandingPa}]
  }),

  morning: helper.assembler.buildService({
    service: MorningService,
    elementFinder: ef,
    parts: [{po: MorningPo, pa: MorningPa}]
  }),

};


export {iosServices};
