import { StockMarketSrcPage } from './app.po';

describe('stock-market-src App', () => {
  let page: StockMarketSrcPage;

  beforeEach(() => {
    page = new StockMarketSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
