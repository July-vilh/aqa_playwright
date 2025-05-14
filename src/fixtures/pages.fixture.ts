import { test as base } from "@playwright/test";
import { AddNewCustomerPage } from "ui/pages/customers/addNewCustomer.page";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { HomePage } from "ui/pages/home.page";
import { SignIn } from "ui/pages/signIn.page";
import { Pages } from "./page";

//1ый подход: интерфейс что бы затипизировать то чем мы будем расширять тест (для меня этот)
interface ISalesPortalPages {
  homePage: HomePage;
  customersPage: CustomersPage;
  addNewCustomerPage: AddNewCustomerPage;
  signInPage: SignIn;
}

/* новый тест который будет импортировать тесты из этого файла
новый ключ homePage который непосредственно будет создавать экземпляр страницы HomePage
здесь происходиит инциализация HomePage например с передачей контекста page
фикстура = расширение объекта test у playwright */

export const test = base.extend<ISalesPortalPages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  customersPage: async ({ page }, use) => {
    await use(new CustomersPage(page));
  },
  addNewCustomerPage: async ({ page }, use) => {
    await use(new AddNewCustomerPage(page));
  },
  signInPage: async ({ page }, use) => {
    await use(new SignIn(page));
  },
});

//2ой подход работы с фикстурами:
// interface ISalesPortalPages {
//   pages: Pages;
// }
// export const test = base.extend<ISalesPortalPages>({
//   pages: async ({ page }, use) => {
//     await use(new Pages(page));
//   },
// });

export { expect } from "@playwright/test";
