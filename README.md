[![WebDriverIO](https://img.shields.io/badge/WebDriverIO-v9.24.0-EA5906?style=flat-square&logo=webdriverio&logoColor=white)](https://webdriver.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-BDD-23D96C?style=flat-square&logo=cucumber&logoColor=white)](https://cucumber.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Allure](https://img.shields.io/badge/Allure-v2.27.0-FF6347?style=flat-square&logo=qameta&logoColor=white)](https://allurereport.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

# 🛒 wdio-cucumber-ebay

End-to-end test automation framework for the **eBay e-commerce platform**, built with **WebDriverIO v9** and **Cucumber BDD** to validate critical shopping flows including product filtering, search, and checkout.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Test Scenarios](#-test-scenarios)
- [Design Patterns](#-design-patterns)
- [Reports](#-reports)
- [Author](#-author)

---

## ✨ Features

- **Cucumber BDD** — human-readable Gherkin scenarios for living documentation
- **Page Object Model** — clean separation of test logic and page interactions
- **Allure Reporting** — rich, interactive HTML reports with screenshots and step details
- **Chrome Headless** — fast, CI-friendly execution at 1366×768 viewport
- **Tag-Based Execution** — run targeted suites using the `@pilot` tag
- **Multi-Filter Validation** — verifies complex filter combinations on eBay listings
- **Guest Checkout Flow** — end-to-end checkout without requiring authentication

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| WebDriverIO | 9.24.0 | Browser automation framework |
| Cucumber | 11.x | BDD test runner with Gherkin syntax |
| JavaScript | ES2022 | Programming language |
| Allure Reporter | 2.27.0 | Test report generation and visualization |
| Google Chrome | Headless | Target browser (1366×768) |
| Node.js | ≥ 18.x | Runtime environment |

---

## 📁 Project Structure

```
wdio-cucumber-ebay/
├── features/
│   ├── 01_filters.feature
│   ├── 02_search.feature
│   ├── 03_checkout.feature
│   └── step-definitions/
│       ├── filterSteps.js
│       ├── searchSteps.js
│       └── checkoutSteps.js
├── pages/
│   ├── homePage.js
│   ├── searchPage.js
│   ├── filterPage.js
│   └── checkoutPage.js
├── allure-results/
├── allure-report/
├── wdio.conf.js
├── package.json
└── README.md
```

---

## 📋 Prerequisites

- **Node.js** ≥ 18.x — [Download](https://nodejs.org/)
- **npm** ≥ 9.x (bundled with Node.js)
- **Google Chrome** (latest stable)
- **Java JDK** ≥ 11 (required by Allure CLI)
- **Allure CLI** — `npm install -g allure-commandline`

---

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/ridhotadjudin/wdio-cucumber-ebay.git
cd wdio-cucumber-ebay
npm install
```

### Run Tests

```bash
# Execute the full test suite
npm test

# Run via WebDriverIO directly
npm run wdio
```

### Generate & View Reports

```bash
# Generate Allure report from results
npm run allure:generate

# Open the report in the default browser
npm run allure:open

# Generate and serve the report in one step
npm run allure:serve
```

---

## 🧪 Test Scenarios

| # | Scenario | Type | Description |
|---|---|---|---|
| 1 | Filter Electronics › Cell Phones | Multi-Filter | Navigate to Electronics, apply the Cell Phones & Smartphones category filter, then layer additional filters (brand, condition, price range) and verify the refined listing results |
| 2 | Search MacBook with Category Change | Search | Enter "MacBook" in the global search bar, switch the category dropdown mid-search, submit, and validate that results reflect the updated category context |
| 3 | Checkout Laptop as Guest | Checkout | Search for a laptop, select a listing, add it to cart, proceed to checkout, fill in guest shipping and payment data, and verify the order summary |

---

## 🏗 Design Patterns

### Page Object Model (POM)

Each page of the eBay application is represented by a dedicated class that encapsulates its selectors and interaction methods. This keeps tests maintainable — when the UI changes, only the relevant page object needs updating.

```
pages/
├── homePage.js       → Global navigation, search bar, category selector
├── searchPage.js     → Search results, sorting, pagination
├── filterPage.js     → Sidebar filters, applied filter chips, result count
└── checkoutPage.js   → Cart summary, guest form, payment fields, order review
```

### Behavior-Driven Development (BDD) with Cucumber

Test scenarios are written in **Gherkin** syntax, making them readable by all stakeholders — developers, QA engineers, and product owners alike.

```gherkin
Feature: Product Search

  @pilot
  Scenario: Search MacBook with category change
    Given I am on the eBay home page
    When I type "MacBook" in the search bar
    And I change the category to "Computers & Tablets"
    And I click the search button
    Then the results should display items in "Computers & Tablets"
    And each listing title should contain "MacBook"
```

---

## 📊 Reports

This framework uses **Allure v2.27.0** for reporting, providing a comprehensive view of every test run.

| Command | Description |
|---|---|
| `npm run allure:generate` | Compiles `allure-results/` into a static HTML report in `allure-report/` |
| `npm run allure:open` | Opens the previously generated report in the default browser |
| `npm run allure:serve` | Generates a temporary report and launches a local server to view it |

**Report highlights:**

- 📸 Step-by-step screenshots on failure
- 📝 Gherkin steps mapped to report entries
- 📈 Historical trend charts across runs
- 🏷️ Tag-based filtering (`@pilot`)
- ⏱️ Execution duration per scenario and step

---

## 👤 Author

**Ridho Tadjudin** — QA Engineer

- 🌐 Website: [ridhotadjudin.id](https://ridhotadjudin.id)
- 💻 GitHub: [@ridhotadjudin](https://github.com/ridhotadjudin)

---

<p align="center">
  Built with ☕ and curiosity — automated testing for a better web.
</p>
