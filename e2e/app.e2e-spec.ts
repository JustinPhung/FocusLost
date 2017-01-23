import { FocusLostPage } from './app.po';

describe('focus-lost App', function() {
  let page: FocusLostPage;

  beforeEach(() => {
    page = new FocusLostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
