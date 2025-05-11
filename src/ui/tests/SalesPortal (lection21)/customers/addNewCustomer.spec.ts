import test, { expect } from "@playwright/test";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { NOTIFICATIONS } from "data/customers/notifications.data";
import { COUNTRIES } from "data/customers/countries.data";
import { AddNewCustomerPage } from "ui/pages/customers/addNewCustomer.page";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { HomePage } from "ui/pages/home.page";
import { SignIn } from "ui/pages/signIn.page";
import { loginCreds } from "data/customers/loginCredentials.data";

test.describe("[UI] [Sales Portal] [Customers]", () => {
  test("Should create customer with smoke data", async ({ page }) => {
    //создание объекта этого класса в котором уже есть методы
    const homePage = new HomePage(page);
    const customersPage = new CustomersPage(page);
    const addNewCustomerPage = new AddNewCustomerPage(page);
    const signInPage = new SignIn(page);

    //перейти на сайт
    await page.goto("https://anatoly-karpovich.github.io/aqa-course-project/#");

    //залогиниться
    /* await page.locator("#emailinput").fill("test@gmail.com");
       await page.locator("#passwordinput").fill("12345678");
       await page.getByRole("button", { name: "Login" }).click(); */
    await signInPage.fillCredentials(loginCreds);
    await signInPage.clickOnLoginButton();

    //дождаться что исчезнут все спинеры после логина
    //const spinner = page.locator(".spinner-border");
    //const welcomeTitle = page.locator(".welcome-text");

    // await expect(welcomeTitle).toBeVisible();
    // // метод из класса SalesPortalPage (через наследование)
    // await homePage.waitForSpinner();
    await homePage.waitForOpened();

    //перейти на модуль с кастомерами (клик через класс HomePage)
    await homePage.clickModuleButton("Customers");
    // const customersTitle = page.locator("h2");
    // await expect(customersTitle).toHaveText("Customers List ");
    // await customersPage.waitForSpinner();
    await customersPage.waitForOpened();

    //добавить нового customer (клик на кнопку добавления через класс CustomersPage)
    await customersPage.clickAddNewCustomer();

    // await expect(customersTitle).toHaveText("Add New Customer ");
    // await addNewCustomerPage.waitForSpinner();
    await addNewCustomerPage.waitForOpened();

    //заполнить поля данными (заполнение полей через класс AddNewCustomerPage)
    //{Date.now() для генерации рандомного емэйла
    // await addNewCustomerPage.fillInputs({
    //   email: `julytest${Date.now()}@gmail.com`,
    //   name: "Test Customer",
    //   country: COUNTRIES.GERMANY,
    //   city: "Kologne",
    //   street: "Germanskaya",
    //   house: "78",
    //   flat: "787",
    //   phone: "+67676767799",
    //   notes: "somenotes",
    // });
    const data = generateCustomerData({ country: COUNTRIES.RUSSIA });
    await addNewCustomerPage.fillInputs(data);

    // await page.locator("#inputEmail").fill("julytest@gmail.com");
    // await page.locator("#inputName").fill("Test Customer");
    // await page.locator("#inputCountry").selectOption("Germany");
    // await page.locator("#inputCity").fill("Kologne");
    // await page.locator("#inputStreet").fill("Germanskaya");
    // await page.locator("#inputHouse").fill("78");
    // await page.locator("#inputFlat").fill("787");
    // await page.locator("#inputPhone").fill("+67676767799");
    // await page.locator("#textareaNotes").fill("somenotes");

    //клик по кнопке сохранения заполненных полей (метод из класса AddNewCustomerPage)
    await addNewCustomerPage.clickSaveNewCustomer();

    //проверить что customer успешно создался
    // await expect(customersTitle).toHaveText("Customers List ");
    // await customersPage.waitForSpinner();
    await customersPage.waitForOpened();

    //await expect(page.locator(".toast-body")).toHaveText("Customer was successfully created");
    await customersPage.waitForNotification(NOTIFICATIONS.CUSTOMER_CREATED);
    await customersPage.expectFirstRowCompare(data);
  });

  test("Should NOT create customer with duplicate email", async ({ page }) => {
    //создание объекта этого класса в котором уже есть методы
    const homePage = new HomePage(page);
    const customersPage = new CustomersPage(page);
    const addNewCustomerPage = new AddNewCustomerPage(page);

    //перейти на сайт
    await page.goto("https://anatoly-karpovich.github.io/aqa-course-project/#");

    //залогиниться
    await page.locator("#emailinput").fill("test@gmail.com");
    await page.locator("#passwordinput").fill("12345678");
    await page.getByRole("button", { name: "Login" }).click();

    await homePage.waitForOpened();

    await homePage.clickModuleButton("Customers");

    await customersPage.waitForOpened();
    await customersPage.clickAddNewCustomer();
    await addNewCustomerPage.waitForOpened();
    //создали данные
    const data = generateCustomerData();
    await addNewCustomerPage.fillInputs(data);
    await addNewCustomerPage.clickSaveNewCustomer();
    await customersPage.waitForOpened();
    await customersPage.waitForNotification(NOTIFICATIONS.CUSTOMER_CREATED);

    await customersPage.clickAddNewCustomer();
    await addNewCustomerPage.waitForOpened();
    // эти же данные подсунули дальше
    await addNewCustomerPage.fillInputs(data);
    await addNewCustomerPage.clickSaveNewCustomer();
    await customersPage.waitForNotification(NOTIFICATIONS.CUSTOMER_DUPLICATED(data.email));
  });
});
