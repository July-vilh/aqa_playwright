import { test as base } from "@playwright/test";
import { CustomersController } from "api/controllers/customers.controller";

interface ISalesPortalController {
  customersController: CustomersController;
}

export const test = base.extend<ISalesPortalController>({
  customersController: async ({}, use) => {
    await use(new CustomersController());
  }
})

export { expect } from "@playwright/test";