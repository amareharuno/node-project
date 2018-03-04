import { NodeProjectPage } from './app.po';

describe('node-project App', () => {
  let page: NodeProjectPage;

  beforeEach(() => {
    page = new NodeProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
