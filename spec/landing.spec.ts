import {assemblerInterface} from "../src/assembler";


describe('Appium test', () => {
  const service: assemblerInterface = (jasmine.getEnv() as any).service;

  it('Gets landing page', async () => {
    expect(await service.landing.page.checkIsOpen()).toBeTruthy('Landing page did not get opened');
  });

});
