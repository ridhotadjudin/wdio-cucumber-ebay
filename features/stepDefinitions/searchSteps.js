const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const homePage = require('../pageObjects/homePage');
const searchPage = require('../pageObjects/searchPage');

When('I search for {string} in the search bar', async (searchString) => {
  await searchPage.searchInput.setValue(searchString);
  console.log("Input the search value into search bar");
});

When('I change the search category to {string}', async (category) => {
  await searchPage.categoryButton.click();
  await searchPage.selectCategory(category).click();
  await searchPage.searchButton.click();
  console.log("Successfully changed the search category");
});

Then('I should see results for {string}', async (searchString) => {
  await searchPage.firstResult.waitForDisplayed({ timeout: 5000 });
  const firstResultText = await searchPage.firstResult.getText();
  await expect(firstResultText.toLowerCase()).toContain(searchString.toLowerCase());
  console.log("Successfully verified the search results");
});