import {service} from "../testRunner";


describe('Appium test', function () {

  it('Gets landing page', async () => {
    // await service.landing.skipUpdate();
    expect(await service.landing.pageOpened()).toBeTruthy('Landing page did not get opened')
  });

  it('Check volume', async () => {
    await service.landing.openMorningTab();
    await service.morning.pageOpened();
    expect(await service.morning.getVolume()).toEqual('70%', 'Volume does not equal 70%')
  });

});