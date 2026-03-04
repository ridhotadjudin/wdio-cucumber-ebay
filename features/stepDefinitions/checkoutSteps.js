const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const searchPage = require('../pageObjects/searchPage');
const checkoutPage = require('../pageObjects/checkoutPage');

When('I search for {string} in the search bar', async (searchString) => {
  await searchPage.searchInput.setValue(searchString);
  console.log("Input the search value into search bar");
});

And('I select the product item', async () => {
  await searchPage.searchButton.click();
  console.log("Successfully search the product item");
  await searchPage.firstResultCheckout.waitForDisplayed({ timeout: 5000 });
  await searchPage.firstResultCheckout.click;
});

And('I checked if the sold amount is more than {string}', async (amount) => {
  const txtSold = await searchPage.getSoldText.getText();

  let result = txtSold.match(/\d+/);

  if (result >= 50) {
    console.log("Number of this product has been sold: " + txtSold + " and match the criteria");
  } else if (result >= 0) {
    console.log("Number of this product has been sold: " + txtSold + " and did not match the criteria");
  } else {
    console.log("INVALID TEXT SOLD");
  }
});

And('I navigate to checkout as guest page', async () => {
  await searchPage.buyNowButton.click();
  await checkoutPage.checkoutAsGuessButton.click();  
  console.log("Navigating into the checkout as guest product page");
});

When('I filled data as guest', async () => {
  await checkoutPage.selectCountryUS.scrollIntoView();
  await checkoutPage.selectCountryUS.click();
  await checkoutPage.emailInput.setValue("inibudi@gmail.com");
  
  await checkoutPage.firstNameInput.scrollIntoView();
  await checkoutPage.firstNameInput.setValue("Budi");
  await checkoutPage.lastNameInput.setValue("Baik Hatinya");
  await checkoutPage.streetAddressInput.setValue("Jl. Menuju rumah Budi");
  await checkoutPage.streetAddressOptInput.setValue("Alamat tambahan Budi");
  
  await checkoutPage.cityInput.scrollIntoView();
  await checkoutPage.cityInput.setValue("Seattle");
  await checkoutPage.stateInput.setValue("Washington");
  await checkoutPage.zipCodeInput.setValue("123456");
  await checkoutPage.selectCountryCode.click();
  await checkoutPage.usCountryCode.click();
  await checkoutPage.phoneNumberInput.setValue("87654321");
  
  console.log("Successfully filled all the guest fields");
});

Then('I should ready to order', async () => {
});