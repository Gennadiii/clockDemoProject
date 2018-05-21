import {service} from "../testRunner";


describe('Appium test', function () {

  it('Gets landing page', async () => {
    await service.landing.skipUpdate();
    expect(await service.landing.pageOpened()).toBeTruthy('Landing page did not get opened')
  });

});