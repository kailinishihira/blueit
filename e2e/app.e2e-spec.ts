import { BlueitPage } from './app.po';

describe('blueit App', () => {
  let page: BlueitPage;

  beforeEach(() => {
    page = new BlueitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
