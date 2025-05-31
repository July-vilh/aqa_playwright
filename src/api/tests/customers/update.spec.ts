import { test, expect } from "fixtures/controllers.fixture";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { customerSchema } from "data/schemas/customers/customer.schema";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import _ from "lodash";
import { validateSchema } from "utils/validations/SchemaValidation.utils";
import { validateResponse } from "utils/validations/responseValidation.utils";

test.describe("[API] [Customers] [Update]", () => {
  let id = "";
  let token = "";
  test.skip("Update customer with smoke data without controllers", async ({
    request,
  }) => {
    // ---- залогиниться + получить токен + завалидировать статус-код
    const loginResponse = await request.post(
      apiConfig.BASE_URL + apiConfig.ENDPOINTS.LOGIN,
      {
        data: { username: USER_LOGIN, password: USER_PASSWORD },
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const headers = loginResponse.headers();
    const token = headers["authorization"];
    //Assert1: status-code
    expect.soft(loginResponse.status()).toBe(STATUS_CODES.OK);

    //----- создать кастомера
    const customerData = generateCustomerData();
    const customerResponse = await request.post(
      apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMERS,
      {
        data: customerData,
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const customerBody = await customerResponse.json();
    //Assert1: status-code
    expect.soft(customerResponse.status()).toBe(STATUS_CODES.CREATED);

    //----- обновление (PUT) кастомера
    const updateCustomerData = generateCustomerData();
    const updateCustomerResponse = await request.put(
      apiConfig.BASE_URL +
        apiConfig.ENDPOINTS.CUSTOMER_BY_ID(customerBody.Customer._id),
      {
        data: updateCustomerData,
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const updatedCustomerBody = await updateCustomerResponse.json();
    //Asser1: json schema
    validateSchema(customerSchema, updatedCustomerBody);
    //Assert2: status-code
    expect.soft(updateCustomerResponse.status()).toBe(STATUS_CODES.OK);
    //Assert3: response
    expect
      .soft({ ...updateCustomerData })
      .toMatchObject(_.omit(updatedCustomerBody.Customer, "_id", "createdOn"));
    expect.soft(updatedCustomerBody.ErrorMessage).toBe(null);
    expect.soft(updatedCustomerBody.IsSuccess).toBe(true);

    //----- удаление кастомера
    const response = await request.delete(
      apiConfig.BASE_URL +
        apiConfig.ENDPOINTS.CUSTOMER_BY_ID(customerBody.Customer._id),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect.soft(response.status()).toBe(STATUS_CODES.DELETED);
  });

  test("Update customer with smoke data with controllers", async ({
    customersController,
    signInController,
  }) => {
    // ---- залогиниться
    const loginResponse = await signInController.login({
      username: USER_LOGIN,
      password: USER_PASSWORD,
    });
    const headers = loginResponse.headers;
    token = headers["authorization"];
    //Assert1: status code + IsSuccess + ErrorMessage
    validateResponse(loginResponse, STATUS_CODES.OK, true, null);

    //----- создать кастомера
    const customerData = generateCustomerData();
    const customerResponse = await customersController.create(
      customerData,
      token
    );
    id = customerResponse.body.Customer._id;
    //Assert1: status code + IsSuccess + ErrorMessage
    validateResponse(customerResponse, STATUS_CODES.CREATED, true, null);

    //----- обновление (PUT) кастомера
    const updateCustomerData = generateCustomerData();
    const updateCustomerResponse = await customersController.update(
      id,
      updateCustomerData,
      token
    );
    //Assert1: json schema
    validateSchema(customerSchema, updateCustomerResponse.body);
    //Assert2: status code + IsSuccess + ErrorMessage
    validateResponse(updateCustomerResponse, STATUS_CODES.OK, true, null);
    //Assert3: response
    expect.soft(updateCustomerResponse.body.Customer).toMatchObject({ ...updateCustomerData });
  });

  //----- удаление кастомера
  test.afterEach(async ({ customersController }) => {
    if (!id) return;
    const response = await customersController.delete(id, token);
    expect.soft(response.status).toBe(STATUS_CODES.DELETED);
  });
});
