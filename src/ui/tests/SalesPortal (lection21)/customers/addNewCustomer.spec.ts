import test, { expect } from "@playwright/test";
//import { COUNTRIES } from "data/customers/countries.data";
import { AddNewCustomerPage } from "ui/pages/customers/addNewCustomer.page";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { HomePage } from "ui/pages/home.page";

test.describe("[UI] [Sales Portal] [Customers]", () => {
  test("Create customer with smoke data", async ({ page }) => {
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

    //дождаться что исчезнут все спинеры после логина
    const spinner = page.locator(".spinner-border");
    const welcomeTitle = page.locator(".welcome-text");
    await expect(welcomeTitle).toBeVisible();
    await expect(spinner).toHaveCount(0);

    //перейти на модуль с кастомерами (клик через класс HomePage)
    await homePage.clickModuleButton("Customers");
    const customersTitle = page.locator("h2");
    await expect(customersTitle).toHaveText("Customers List ");
    await expect(spinner).toHaveCount(0);

    //добавить нового customer (клик на кнопку добавления через класс CustomersPage)
    await customersPage.clickAddNewCustomer();

    await expect(customersTitle).toHaveText("Add New Customer ");
    await expect(spinner).toHaveCount(0);

    //заполнить поля данными (заполнение полей через класс AddNewCustomerPage)
    await addNewCustomerPage.fillInputs({
      email: "julytest@gmail.com",
      name: "Test Customer",
      country: COUNTRIES.GERMANY,
      city: "Kologne",
      street: "Germanskaya",
      house: "78",
      flat: "787",
      phone: "+67676767799",
      notes: "somenotes",
    })

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
    await expect(customersTitle).toHaveText("Customers List ");
    await expect(spinner).toHaveCount(0);
    await expect(page.locator(".toast-body")).toHaveText(
      "Customer was successfully created"
    );
  });
});
