import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message "Book Rating"', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Book Rating');
  });
});
