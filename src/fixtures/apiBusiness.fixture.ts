import { CustomersApiService } from "api/business/customers.api-business";
import { test as base } from "fixtures/controllers.fixture";
import { SignInApiService } from "api/business/signIn.api-business";

interface IApiServices {
  customersApiService: CustomersApiService;
  signInApiService: SignInApiService;
}

export const test = base.extend<IApiServices>({
  customersApiService: async ({ request }, use) => {
    await use(new CustomersApiService(request));
  },
  signInApiService: async ({ request }, use) => {
    await use(new SignInApiService(request));
  },
});

export { expect } from "@playwright/test";
