import { Coreysery.IoPage } from './app.po';

describe('coreysery.io App', () => {
  let page: Coreysery.IoPage;

  beforeEach(() => {
    page = new Coreysery.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
