import {ILandingService, IMorningService} from "./generic/services";
import {androidAssembler} from "../platforms/android/androidAssembler";


interface Iassembler {
  landing: () => ILandingService;
  morning: () => IMorningService;
}


const getServiceFor = {

  Android: androidAssembler

};

type Tservice = {
  landing: ILandingService;
  morning: IMorningService;
}

function getServices(params: IgetServices): Tservice {
  const {platform} = params;
  return {
    landing: getServiceFor[platform].landing(),
    morning: getServiceFor[platform].morning()
  }
}


export {
  getServices,
  Iassembler
};


interface IgetServices {
  platform: string;
}