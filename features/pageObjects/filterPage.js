class FilterPage {
  get filterCondition() { return $('//h3[normalize-space()="Condition"]') }
  get filterPrice() { return $('//h3[normalize-space()="Price"]') }
  get filterItemLocation() { return $('//h3[normalize-space()="Item location"]') }  
  get conditionOpenBox() { return $('//input[@id="group-checkbox-Open box"]') }
  get priceUnder() { return $('//input[starts-with(@id, "group-radio-under")]') }
  get locationWorldwide() { return $('//input[@id="group-radio-worldwide"]') }  
  get applyFilter() { return $('//button[@class="btn-submit btn btn--primary"]') }
  get filterResults() { return $('//button[.="3 filters applied"]')}
  get resultCondition() { return $('//span[contains(text(),"Condition: Open box")]')}
  get resultPrice() { return $('//span[contains(text(),"Price: Under")]')}
  get resultLocation() { return $('//span[contains(text(),"Item location: Worldwide")]')}

}
module.exports = new FilterPage();
