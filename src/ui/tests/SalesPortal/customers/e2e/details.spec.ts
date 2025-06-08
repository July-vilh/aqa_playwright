import { expect, test } from "fixtures/ui-business.fixture";
import _ from "lodash";
import { convertToDateAndTime } from "utils/date.utils";

test.describe("[E2E] [UI] [Customers] [Details]", () => {
  let token = "";
  let id = "";

  test("Should display valid customer data", async ({
    signInUIService,
    homeUIService,
    customersUIService,
    customersApiService,
    customerDetailsPage,
  }) => {
    token = await signInUIService.SignInAsLocalUser();
    const createdCustomer = await customersApiService.create(token);
    id = createdCustomer._id;
    await homeUIService.openModule("Customers");
    await customersUIService.OpenDetailsPage(createdCustomer.email);
    const actualData = await customerDetailsPage.getDetails();
    expect(actualData).toMatchObject({
      ..._.omit(createdCustomer, "_id"),
      createdOn: convertToDateAndTime(createdCustomer.createdOn),
    });
  });

  test.afterEach(async ({ customersController }) => {
    await customersController.delete(id, token);
  });
});