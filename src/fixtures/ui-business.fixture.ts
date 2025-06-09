import { test as base } from "./pages.fixture";
import { EditCustomerUiService } from "ui/business/customers/editCustomer.ui-business";
import { HomeUIService } from "ui/business/home.ui-business";
import { SignInUIService } from "ui/business/signIn.ui-business";
import { CustomersUIService } from "ui/business/customers/customers.ui-business";
import { ProductsUIService } from "ui/business/products/products.ui-business";
import { AddNewCustomerUiService } from "ui/business/customers/addNewCustomer.ui-business";
import { AddNewProductUiService } from "ui/business/products/addNewProduct.ui-business";
import { CustomersApiService } from "api/business/customers.api-business";

interface IUIServices {
  homeUIService: HomeUIService;
  signInUIService: SignInUIService;
  customersUIService: CustomersUIService;
  addNewCustomerUIService: AddNewCustomerUiService;
  editCustomerUIService: EditCustomerUiService;
  productsUIService: ProductsUIService;
  addNewProductUIService: AddNewProductUiService;
  customersApiService: CustomersApiService;
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
  productsUIService: async ({ page }, use) => {
    await use(new ProductsUIService(page));
  },
  addNewProductUIService: async ({ page }, use) => {
    await use(new AddNewProductUiService(page));
  },
  customersApiService: async ({ request }, use) => {
    await use(new CustomersApiService(request));
  },
});
export { expect } from "@playwright/test";
