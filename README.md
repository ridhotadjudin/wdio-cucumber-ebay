
# eBay Automation Testing

## Introduction
This project is created involve automating three test scenarios on the eBay website using **WebDriverIO**, **Cucumber**, and **JavaScript** (NodeJS). The tests are structured using **BDD (Behavior-Driven Development)** and **WebDriverIO** test automation framework.

### Scenarios Tested:
1. **Access a Product via category after applying multiple filters**.
2. **Access a Product via Search**.
3. **Checkout Product as Guest**.

The tests are written to verify the functionality of category-based navigation, filters, and the search functionality on eBay.

## Tech Stack
- **Programming Language**: JavaScript (NodeJS)
- **Test Automation Framework**: WebDriverIO
- **BDD Framework**: Cucumber
- **Reporting**: Allure for test reports

## Project Setup

### Prerequisites
Ensure that you have **Node.js** (version 14.x or higher) installed on your local machine. 

### Steps to Setup

1. **Clone the repository** or extract the zip folder to your local machine.

2. **Install dependencies**:

   Navigate to the project folder and install the required dependencies by running:

   ```bash
   npm install
   ```

   This will install **WebDriverIO**, **Cucumber**, **Allure Reporter**, and other dependencies specified in `package.json`.

3. **Set up WebDriverIO configuration**:

   The **`wdio.conf.js`** configuration file is already set up to run tests using the Chrome browser.

4. **Running Tests**:

   - To run the tests using WebDriverIO, use the following script:

     ```bash
     npm run test
     ```

     This will trigger the `wdio` command and start executing your test scenarios.

5. **Generating and Viewing Allure Reports**:

   - To generate the Allure report after running tests, use:

     ```bash
     npm run allure:generate
     ```

   - To open the Allure report, use:

     ```bash
     npm run allure:open
     ```

   - To serve the report via a local server (optional):

     ```bash
     npm run allure:serve
     ```

   This will generate, open, or serve the Allure report based on your command.

## Scenarios Covered

### Scenario 1: Access a Product via Category After Applying Multiple Filters
- **Steps**:
  1. Go to **www.ebay.com**.
  2. Navigate to the **Electronics** category > **Cell Phones & Accessories**.
  3. In the left-hand navigation section, click on **Cell Phones & Smartphones**.
  4. Click **All Filters** at the end of the filter dropdowns.
  5. Apply three filters: **Condition**, **Price**, and **Item Location**.
  6. Verify that the filters are applied successfully and the correct products are displayed.

### Scenario 2: Access a Product via Search
- **Steps**:
  1. Go to **www.ebay.com**.
  2. Enter a search term (e.g., **MacBook**) in the search bar.
  3. Change the search category to **Computers/Tablets & Networking**.
  4. Click **Search**.
  5. Verify that the page loads completely.
  6. Verify that the first result's name matches the search string.

### Scenario 3: Checkout as Guest on eBay
- **Steps**:
  1. Go to **www.ebay.com**.
  2. Enter a search term (e.g., **Laptop**) in the search bar.
  3. Celect the product item.
  4. Verify the dynamic element.
  5. Navigate to Checkout as Guest page.
  6. Fill and verify all the input data.

## Code Structure

### File Structure:

```
/project-root
    /features                   # Contains feature files for BDD (Cucumber)
        /01_filters.feature
        /02_search.feature
        /03_checkout.feature
        /stepDefinitions        # Contains step definition files for the BDD framework
            /filterSteps.js
            /searchSteps.js
            /checkoutSteps.js
        /pageObjects            # Page Object Model for reusable page methods
            /homePage.js
            /searchPage.js
            /filterPage.js
            /checkoutPage.js
    wdio.conf.js            # WebDriverIO configuration file
    package.json            # Dependencies and project metadata
    allure-results          # Results from test executions (can be generated)
    allure-report           # Allure report folder (generated after tests)
    README.md               # This readme file
```

- **`/features/`**: Contains feature files written in Gherkin syntax to describe the test scenarios.
- **`/stepDefinitions/`**: Contains step definitions that map the Gherkin steps to WebDriverIO commands.
- **`/pages/`**: Implements the Page Object Model to make the code modular and reusable. Each page contains functions that represent interactions with the page elements.

## Assumptions
- All test scripts assume that eBay’s website is accessible and that the category and filter options remain consistent.
- The tests are designed to be robust but may need adjustments if the website's structure changes.

---

Feel free to contribute!
