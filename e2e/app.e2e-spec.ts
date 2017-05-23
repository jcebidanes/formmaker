import { FormmakerPage } from './app.po';

describe('formmaker App', () => {
  let page: FormmakerPage;

  beforeEach(() => {
    page = new FormmakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
