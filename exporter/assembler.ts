import {ILandingService, IMorningService} from "./generic/services";
import {androidAssembler} from "../platforms/android/androidAssembler";

interface Iassembler {
    landing: () => ILandingService;
    morning: () => IMorningService;
}


const getServiceFor = {

    android: androidAssembler

};


export {
    getServiceFor,
    Iassembler
};