import {LandingService, MorningService} from "./generic/services";
import {androidServices} from "../platforms/android/androidAssembler";


interface assemblerInterface {
  landing: LandingService;
  morning: MorningService;
}


const platformServices = {

  Android: androidServices

};

function getServices(params: getServicesInterface): assemblerInterface {
  const {platform} = params;
  return platformServices[platform];
}


export {
  getServices,
  assemblerInterface
};


interface getServicesInterface {
  platform: string;
}
