describe('Appium test', () => {
  const service = (<any>jasmine.getEnv()).service;

  it('Check volume', async () => {
    await service.landing.openMorningTab();
    await service.morning.pageOpened();
    expect(await service.morning.getVolume()).toEqual('70%', 'Volume does not equal 70%')
  });

});