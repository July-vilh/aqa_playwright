//import { test, expect } from "@playwright/test";
//Page Objectы теперь инициализируются тут (в фикстуре):
//import { test, expect } from "fixtures/pages.fixture";
import { test, expect } from "fixtures/businessSteps.fixture";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { NOTIFICATIONS } from "data/customers/notifications.data";
import { COUNTRIES } from "data/customers/countries.data";
import { AddNewCustomerPage } from "ui/pages/customers/addNewCustomer.page";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { HomePage } from "ui/pages/home.page";
import { SignIn } from "ui/pages/signIn.page";
import { loginCreds } from "data/customers/loginCredentials.data";
import _, { filter } from "lodash";
import { FilterModal } from "ui/pages/modals/customers/filter.modal";

test.describe("[UI] [Sales Portal] [Customers]", () => {
  //---1ый подход (фикстуры):
  test("Should check created customer in table", async ({ customersPage, addNewCustomerPage, homePage, loginAsLocalUser}) => {
  //создание объекта этого класса в котором уже есть методы
    //Precondition
    // const homePage = new HomePage(page);
    // const customersPage = new CustomersPage(page);
    // const addNewCustomerPage = new AddNewCustomerPage(page);
    //const signInPage = new SignIn(page);

    await loginAsLocalUser(); //вместо всех закомментированных ниже строчек (фикстура)
    /* await page.goto("https://anatoly-karpovich.github.io/aqa-course-project/#");
     //залогиниться
      await signInPage.fillCredentials(loginCreds);
      await signInPage.clickOnLoginButton(); */

    // await homePage.waitForOpened();

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

  //--- 2ой подход (фикстуры): добавлены "pages"
  test("Should check filtered by country table data", async ({ page, 
    //pages 
    }) => {
    //Precondition
    const homePage = new HomePage(page);
    const customersPage = new CustomersPage(page);
    //const filterModal = new FilterModal(page);
    const signInPage = new SignIn(page);
    await page.goto("https://anatoly-karpovich.github.io/aqa-course-project/#");

    //залогиниться
    await signInPage.fillCredentials(loginCreds);
    await signInPage.clickOnLoginButton();

    /* await pages.homePage.waitForOpened();
    await pages.homePage.clickModuleButton("Customers");
    await pages.customersPage.waitForOpened(); */

    //нажать на кнопку фильтра и в появившеся модалке выбрать указанные чекбоксы
    //await pages.customersPage.clickFilter();
    //await pages.customersPage.filterModal.waitForOpened();
    const countriesToCheck = ["USA", "Belarus", "Germany"];
    //await pages.customersPage.filterModal.checkFilters(...countriesToCheck);
    //await pages.customersPage.filterModal.clickApply();

    //waitForClosed ожидаем что модалка закрылась -> дожидаемся что все данные сейчас подгрузятся
    /* await pages.customersPage.filterModal.waitForClosed();
    await pages.customersPage.waitForOpened(); */ 

    // валидация что выбранные чекбоксы корректно выбрались
    const actualTableData = await customersPage.getTableData();
    expect(
      actualTableData?.every((row) => countriesToCheck.includes(row.country)),
      `Expect table to contain only customers from ${countriesToCheck.join(
        ", "
      )}`
    ).toBe(true);
  });
});
