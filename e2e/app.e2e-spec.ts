import { GreenchatPage } from './app.po';

describe('greenchat App', () => {
  let page: GreenchatPage;

  beforeEach(() => {
    page = new GreenchatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
