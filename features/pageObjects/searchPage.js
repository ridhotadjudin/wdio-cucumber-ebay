class SearchPage {
  get searchInput() { return $('//input[@id="gh-ac"]') }
  get searchButton() { return $('//button[@id="gh-search-btn"]') }
  get categoryButton() { return $('//select[@id="gh-cat"]') }
  get firstResult() { return $('(//span[contains(text(),"MacBook")])[1]') }

  get firstResultCheckout() { return $('(//li[@id="item44f6de3b85"])[1]') }
  
  get getSoldText() { return $('(//span[contains(text(),"sold")])[1]') }
  get buyNowButton() { return $('//a[.="Buy It Now"]') }
  

  selectCategory(category) {
    return $(`(//option[contains(text(),'${category}')])[1]`);
  }
  
}
module.exports = new SearchPage();
