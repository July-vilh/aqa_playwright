import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import { expect, test } from "fixtures/ui-business.fixture";

test.describe("[E2E] [UI] [Customers] [Create]", () => {
  let id = "";
  let token = "";
  test("Create customer with smoke data", async ({
    signInUIService,
    homeUIService,
    customersUIService,
    addNewCustomerUIService,
    customersController,
  }) => {
    token = await signInUIService.signInAsLocalUser();
    await homeUIService.openModule("Customers");
    await customersUIService.openAddPage();
    const createdCustomer = await addNewCustomerUIService.create();
    const response = await customersController.getById(createdCustomer._id, token);
    id = createdCustomer._id;
    expect(response.status).toBe(STATUS_CODES.OK);
  });

  test.afterEach(async ({ customersController }) => {
    await customersController.delete(id, token);
  });
});