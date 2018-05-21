import {service} from "../testRunner";


describe('Appium test', function () {

  it('Check volume', async () => {
    await service.landing.openMorningTab();
    await service.morning.pageOpened();
    expect(await service.morning.getVolume()).toEqual('70%', 'Volume does not equal 70%')
  });

});