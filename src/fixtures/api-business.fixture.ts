import { CustomersApiService } from "api/business/customers.api-business";
import { test as base } from "fixtures/controllers.fixture";

interface IApiServices {
  customersApiService: CustomersApiService;
}

export const test = base.extend<IApiServices>({
  customersApiService: async ({ request }, use) => {
    await use(new CustomersApiService(request));
  },
});

export { expect } from "@playwright/test";