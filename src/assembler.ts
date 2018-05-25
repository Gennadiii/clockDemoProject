import {androidServices} from "./platforms/android/androidAssembler";
import {LandingService} from "./generic/services/landing.service";
import {MorningService} from "./generic/services/morning.service";


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