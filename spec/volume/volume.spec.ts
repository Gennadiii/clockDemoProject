import {assemblerInterface} from "../../src/assembler";


describe('Appium test', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;

  it('Check volume', async () => {
    await service.landing.openMorningTab();
    await service.morning.page.verifyIsOpen();
    expect(await service.morning.getVolume()).toEqual('70%', 'Volume does not equal 70%');
  });

});
