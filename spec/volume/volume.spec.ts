import {service} from "../../index";


describe('Appium test', () => {

  it('Check volume', async () => {
    await service.landing.openMorningTab();
    await service.morning.pageOpened();
    expect(await service.morning.getVolume()).toEqual('70%', 'Volume does not equal 70%')
  });

});