import { test as base } from "fixtures/mock.fixture";
import { AddNewCustomerPage } from "ui/pages/customers/addNewCustomer.page";
import { CustomerDetailsPage } from "ui/pages/customers/customer-details.page";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { EditCustomerPage } from "ui/pages/customers/editCustomer.page";
import { HomePage } from "ui/pages/home.page";
import { DeleteModal } from "ui/pages/modals/customers/delete.modal";
import { SideMenuComponent } from "ui/pages/sideMenu.page";
import { SignInPage } from "ui/pages/signIn.page";

interface ISalesPortalPages {
  homePage: HomePage;
  customersPage: CustomersPage;
  addNewCustomerPage: AddNewCustomerPage;
  signInPage: SignInPage;
  editCustomerPage: EditCustomerPage;
  sideMenu: SideMenuComponent;
  customerDetailsPage: CustomerDetailsPage;
}

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
    await use(new SignInPage(page));
  },
  editCustomerPage: async ({ page }, use) => {
    await use(new EditCustomerPage(page));
  },
  sideMenu: async ({ page }, use) => {
    await use(new SideMenuComponent(page));
  },

  customerDetailsPage: async ({ page }, use) => {
    await use(new CustomerDetailsPage(page));
  },
});

// interface ISalesPortalPages {
//   pages: Pages;
// }

// export const test = base.extend<ISalesPortalPages>({
//   pages: async ({ page }, use) => {
//     await use(new Pages(page));
//   },
// });

export { expect } from "@playwright/test";