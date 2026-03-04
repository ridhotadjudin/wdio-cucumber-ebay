class HomePage {
  get electronicsCategory() { return $('//li[@class="vl-flyout-nav__js-tab"]//a[contains(text(),"Electronics")]') }
  get cellPhonesCategory() { return $('//a[normalize-space()="Cell Phones & Accessories"]') }
  get cellPhonesAndSmartphones() { return $('//a[normalize-space()="Cell Phones & Smartphones"]') }
  get allFiltersButton() { return $('//button[@class="filter-button filter-button--unselected brwr__all-filters"]') }
}
module.exports = new HomePage();
