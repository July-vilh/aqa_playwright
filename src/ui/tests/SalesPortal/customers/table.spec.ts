import test, { expect } from "@playwright/test";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { NOTIFICATIONS } from "data/customers/notifications.data";
import { COUNTRIES } from "data/customers/countries.data";
import { AddNewCustomerPage } from "ui/pages/customers/addNewCustomer.page";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { HomePage } from "ui/pages/home.page";
import { SignInPage } from "ui/pages/signIn.page";
import _, { filter } from "lodash";
import { FilterModal } from "ui/pages/modals/customers/filter.modal";
import { SALES_PORTAL_URL, USER_LOGIN, USER_PASSWORD } from "config/environment";

test.describe("[UI] [Sales Portal] [Customers]", () => {
  test("Should check created customer in table", async ({ page }) => {
    //создание объекта этого класса в котором уже есть методы
    //Precondition
    const homePage = new HomePage(page);
    const customersPage = new CustomersPage(page);
    const addNewCustomerPage = new AddNewCustomerPage(page);
    const signInPage = new SignInPage(page);
    await page.goto(SALES_PORTAL_URL);

    //залогиниться
    await page.locator("#emailinput").fill(USER_LOGIN);
    await page.locator("#passwordinput").fill(USER_PASSWORD);
    await signInPage.clickOnLoginButton();

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

    //Act (прописать ожидание что tableRow с нужным нам емэйлом что он вообще есть)
    await expect(customersPage.tableRowByEmail(data.email)).toBeVisible();

    //Assert
    const actualCustomerData = await customersPage.getCustomerData(data.email);
    //выбрать не все поля из нашей data а только нужные поля, те добавить (pick) только нужные поля из объекта
    //подключили дополнительно библиотеку lodash
    expect(actualCustomerData).toEqual(
      _.pick(data, ["email", "name", "country"])
    );
    const table = await customersPage.getTableData();
    //нажатие на кнопку Delete в actions
    await customersPage.clickTableAction(data.email, "delete");
  });

  test("Should check filtered by country table data", async ({ page }) => {
    //Precondition
    const homePage = new HomePage(page);
    const customersPage = new CustomersPage(page);
    //const filterModal = new FilterModal(page);
    const signInPage = new SignInPage(page);
    await page.goto(SALES_PORTAL_URL);

    //залогиниться
    await page.locator("#emailinput").fill(USER_LOGIN);
    await page.locator("#passwordinput").fill(USER_PASSWORD);
    await signInPage.clickOnLoginButton();

    await homePage.waitForOpened();
    await homePage.clickModuleButton("Customers");
    await customersPage.waitForOpened();

    //нажать на кнопку фильтра и в появившеся модалке выбрать указанные чекбоксы
    await customersPage.clickFilter();
    await customersPage.filterModal.waitForOpened();
    const countriesToCheck = ["USA", "Belarus", "Germany"];
    await customersPage.filterModal.checkFilters(...countriesToCheck);
    await customersPage.filterModal.clickApply();

    //waitForClosed ожидаем что модалка закрылась -> дожидаемся что все данные сейчас подгрузятся
    await customersPage.filterModal.waitForClosed();
    await customersPage.waitForOpened();

    // валидация что выбранные чекбоксы корректно выбрались
    const actualTableData = await customersPage.getTableData();
    expect(
      actualTableData?.every((row) => countriesToCheck.includes(row.country)),
      `Expect table to contain only customers from ${countriesToCheck.join(", ")}`).toBe(true);
  });
});
