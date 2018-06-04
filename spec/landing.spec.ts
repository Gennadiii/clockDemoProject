import {assemblerInterface} from "../src/assembler";


describe('Appium test', () => {
  const service: assemblerInterface = (<any>jasmine.getEnv()).service;

  it('Gets landing page', async () => {
    expect(await service.landing.page.checkIsOpen()).toBeTruthy('Landing page did not get opened')
  });

});