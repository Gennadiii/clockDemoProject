describe('Appium test', () => {
  const service = (<any>jasmine.getEnv()).service;

  it('Gets landing page', async () => {
    expect(await service.landing.pageOpened()).toBeTruthy('Landing page did not get opened')
  });

});