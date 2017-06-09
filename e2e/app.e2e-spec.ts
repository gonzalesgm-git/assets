import { AssetsatworkPage } from './app.po';

describe('assetsatwork App', () => {
  let page: AssetsatworkPage;

  beforeEach(() => {
    page = new AssetsatworkPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
