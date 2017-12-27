import process = require( 'process' );
import {getServiceFor} from "../exporter/assembler";
import {ILandingService, IMorningService} from "../exporter/generic/services";


const desiredPlatform = process.argv[2];

type Tservice = {
  landing: ILandingService;
  morning: IMorningService;
}

const service: Tservice = {
  landing: getServiceFor[desiredPlatform].landing(),
  morning: getServiceFor[desiredPlatform].morning()
};


describe('Appium test', function () {

  it('Gets landing page', async () => {
    try {
      await service.landing.skipUpdate();
      expect(await service.landing.pageOpened()).toBeTruthy('Landing page did not get opened')
    } catch (e) {
      expect(e).toBe(null, `Error during test: ${e}`);
    }
  });

  it('Check volume', async () => {
    try {
      await service.landing.openMorningTab();
      await service.morning.pageOpened();
      expect(await service.morning.getVolume()).toEqual('70%', 'Volume does not equal 70%')
    } catch (e) {
      expect(e).toBe(null, `Error during test: ${e}`);
    }
  });


});
