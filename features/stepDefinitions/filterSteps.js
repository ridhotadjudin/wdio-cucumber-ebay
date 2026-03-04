const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const homePage = require('../pageObjects/homePage');
const filterPage = require('../pageObjects/filterPage');

Given('I am on the eBay homepage', async () => {
  await browser.url('/');
  console.log("Successfully navigated to the eBay homepage");
});

When('I navigate to Electronics > Cell Phones & Smartphones', async () => {
  await homePage.electronicsCategory.click();
  await homePage.cellPhonesCategory.click();
  await homePage.cellPhonesAndSmartphones.click();
  console.log("Successfully navigated into Cell Phones & Smartphones");
});

When('I apply filters for Condition, Price, and Location', async () => {
  await homePage.allFiltersButton.click();
  await filterPage.filterItemLocation.scrollIntoView();
  await filterPage.filterCondition.click();
  await filterPage.conditionOpenBox.click();
  console.log("Add filter Condition");

  await filterPage.filterPrice.click();
  await filterPage.priceUnder.click();
  console.log("Add filter Price");

  await filterPage.filterItemLocation.click();
  await filterPage.locationWorldwide.click();
  console.log("Add filter Location");

  await filterPage.applyFilter.click();
  console.log("Successfully applied the filters");
});

Then('I should see the filters applied correctly', async () => {
  const filterButton = await filterPage.filterResults;
  await expect(await filterButton.getText()).toContain('3 filters applied');
  await filterButton.click();

  await expect(await filterPage.resultCondition.getText()).toContain('Condition: Open box');
  await expect(await filterPage.resultPrice.getText()).toContain('Price: Under');
  await expect(await filterPage.resultLocation.getText()).toContain('Item location: Worldwide');
  console.log("Successfully asserting the results");
});
