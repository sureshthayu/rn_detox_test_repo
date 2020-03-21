describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have "Step One" section', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('should render "See Your Changes" in the second slide', async () => {
    // getting the reference of the slides and make a swipe
    await element(by.id('slides')).swipe('left');
    await expect(element(by.text('See Your Changes'))).toBeVisible(); // no this will pass!
  });

  it('should enable swiping back and forth', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('right');
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('should render "Debug" and have a Button to click in the third slide', async () => {
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await expect(element(by.text('Debug'))).toBeVisible();

    await element(by.text('Click here!')).tap();
    await expect(element(by.text('Clicked!'))).toBeVisible();
  });

  it('should render "Learn More" and change text in the fourth slide', async () => {
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await expect(element(by.text('Learn More'))).toBeVisible();

    const docsInput = element(by.id('docsInput'));

    await expect(docsInput).toBeVisible();

    await docsInput.clearText();
    await docsInput.typeText('Maybe later!');

    await expect(docsInput).toHaveText('Maybe later!');
  });
});
