import {LandingService, MorningService} from "./generic/services";
import {androidAssembler} from "../platforms/android/androidAssembler";


interface assemblerInterface {
  landing: () => LandingService;
  morning: () => MorningService;
}


const getServiceFor = {

  Android: androidAssembler

};

type service = {
  landing: LandingService;
  morning: MorningService;
}

function getServices(params: getServicesInterface): service {
  const {platform} = params;
  return {
    landing: getServiceFor[platform].landing(),
    morning: getServiceFor[platform].morning()
  }
}


export {
  getServices,
  assemblerInterface
};


interface getServicesInterface {
  platform: string;
}