import { NglocacePage } from './app.po';

describe('nglocace App', function() {
  let page: NglocacePage;

  beforeEach(() => {
    page = new NglocacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
