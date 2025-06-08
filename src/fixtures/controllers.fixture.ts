import { test as base } from "@playwright/test";
import { CustomersController } from "api/controllers/customers.controller";
import { SignInController } from "api/controllers/signIn.controller";

interface ISalesPortalControllers {
  customersController: CustomersController;
}

export const test = base.extend<ISalesPortalControllers>({
  customersController: async ({ request }, use) => {
    await use(new CustomersController(request));
  },
});
export { expect } from "@playwright/test";