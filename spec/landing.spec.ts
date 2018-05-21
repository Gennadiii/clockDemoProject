import {service} from "../index";


describe('Appium test', () => {

  it('Gets landing page', async () => {
    expect(await service.landing.pageOpened()).toBeTruthy('Landing page did not get opened')
  });

});