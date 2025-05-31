import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { invalidTestCases } from "data/customers/create_invalid.data";
import { validTestCases } from "data/customers/create_valid.data";
import { customerSchema } from "data/schemas/customers/customer.schema";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import { test, expect } from "fixtures/controllers.fixture";
import { validateResponse } from "utils/validations/responseValidation.utils";
import { validateSchema } from "utils/validations/SchemaValidation.utils";

test.describe("[API] [Customers] [Create] with positive and negative checks", () => {
  let id = "";
  let token = "";

  test.beforeEach(async ({ signInController }) => {
    const loginResponse = await signInController.login({
      username: USER_LOGIN,
      password: USER_PASSWORD,
    });
    const headers = loginResponse.headers;
    token = headers["authorization"];
    //Assert1: token
    expect.soft(token).toBeTruthy();
    //Assert2: status code
    validateResponse(loginResponse, STATUS_CODES.OK, true, null);
  });

  // Позитивные тесты
  validTestCases.forEach(({ name, data }) => {
    test(name, async ({ customersController }) => {
      const customerResponse = await customersController.create(data, token);
      //Assert1: json schema
      validateSchema(customerSchema, customerResponse.body);
      //Assert2: status code + IsSuccess + ErrorMessage
      validateResponse(customerResponse, STATUS_CODES.CREATED, true, null);
      //Assert3: Response
      expect.soft(customerResponse.body.Customer).toMatchObject({ ...data });

      // Удаление
      const id = customerResponse.body.Customer._id;
      const deleteResponse = await customersController.delete(id, token);
      expect.soft(deleteResponse.status).toBe(STATUS_CODES.DELETED);
    });
  });

  // Негативные тесты
  invalidTestCases.forEach(({ name, data, expectedError }) => {
    test(name, async ({ customersController }) => {
      const customerResponse = await customersController.create(data, token);
      //Assert1: status code + IsSuccess + ErrorMessage
      validateResponse(customerResponse,STATUS_CODES.BAD_REQUEST,false,expectedError);
      expect.soft(customerResponse.body.Customer).toBeFalsy();
    });
  });
});
