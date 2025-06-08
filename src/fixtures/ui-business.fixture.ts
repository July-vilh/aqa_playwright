import { CustomersUIService } from "ui/bisness/customers/customers.ui-business";
import { HomeUIService } from "ui/bisness/home.ui-business";
import { SignInUIService } from "ui/bisness/signIn.ui-business";
import { test as base } from "./pages.fixture";
import { AddNewCustomerUiService } from "ui/bisness/customers/add-new-customer.ui-business";
import { EditCustomerUiService } from "ui/bisness/customers/edit-customer.ui-business";

interface IUIServices {
  homeUIService: HomeUIService;
  signInUIService: SignInUIService;
  customersUIService: CustomersUIService;
  addNewCustomerUIService: AddNewCustomerUiService;
  editCustomerUIService: EditCustomerUiService;
}

export const test = base.extend<IUIServices>({
  homeUIService: async ({ page }, use) => {
    await use(new HomeUIService(page));
  },
  signInUIService: async ({ page }, use) => {
    await use(new SignInUIService(page));
  },
  customersUIService: async ({ page }, use) => {
    await use(new CustomersUIService(page));
  },
  addNewCustomerUIService: async ({ page }, use) => {
    await use(new AddNewCustomerUiService(page));
  },
  editCustomerUIService: async ({ page }, use) => {
    await use(new EditCustomerUiService(page));
  },
});
export { expect } from "@playwright/test";
