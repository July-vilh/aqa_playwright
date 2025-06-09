import { test as base } from "@playwright/test";
import { CustomersController } from "api/controllers/customers.controller";
import { ProductsController } from "api/controllers/products.controller";
import { SignInController } from "api/controllers/signIn.controller";

interface ISalesPortalControllers {
  customersController: CustomersController;
  signInController: SignInController;
  productsController: ProductsController;
}

export const test = base.extend<ISalesPortalControllers>({
  customersController: async ({ request }, use) => {
    await use(new CustomersController(request));
  },
  signInController: async ({ request }, use) => {
    await use(new SignInController(request));
  },
  productsController: async ({ request }, use) => {
    await use(new ProductsController(request));
  },
});

export { expect } from "@playwright/test";
