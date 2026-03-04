class CheckoutPage {
  get checkoutAsGuessButton() { return $('//span[contains(text(),"Check out as guest")]') }
  get emailInput() { return $('//input[@id="email"]') }
  get selectCountryUS() { return $('//option[@value="US"]') }
  get firstNameInput() { return $('//input[@id="firstName"]') }
  get lastNameInput() { return $('//input[@id="lastName"]') }
  get streetAddressInput() { return $('//input[@id="addressLine1"]') }
  get streetAddressOptInput() { return $('//input[@id="addressLine2"]') }
  get cityInput() { return $('//input[@id="city"]') }
  get stateInput() { return $('//input[@id="stateOrProvince"]') }
  get zipCodeInput() { return $('//input[@id="postalCode"]') }
  get selectCountryCode() { return $('//span[@class="btn__text"]//span[@class="custom-phone-field__dial-code"]') }
  get usCountryCode() { return $('//div[@id="listbox_btn_us_0"]//span[@class="custom-phone-field__dial-code"][normalize-space()="+1"]') }
  get phoneNumberInput() { return $('//input[@id="phoneNumber"]') }
}
module.exports = new CheckoutPage();
