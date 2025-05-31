import { test, expect } from "fixtures/controllers.fixture";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import { validateResponse } from "utils/validations/responseValidation.utils";

test.describe("[API] [Customers] [Delete]", () => {
  let id = "";
  let token = "";
  test.skip("Should delete customer without controllers", async ({
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

    //----- удаление созданного кастомера
    const response = await request.delete(
      apiConfig.BASE_URL +
        apiConfig.ENDPOINTS.CUSTOMER_BY_ID(customerBody.Customer._id),
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    //text тк тут не возвращается json
    const deleteBody = await response.text();
    //Assert1: status-code
    expect.soft(response.status()).toBe(STATUS_CODES.DELETED);
    expect.soft(deleteBody).toBe("");
  });

  test("Should delete customer with controllers", async ({
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

    //----- удаление созданного кастомера
    const responseDelete = await customersController.delete(id, token);
    //Assert1: status code + IsSuccess + ErrorMessage
    expect.soft(responseDelete.status).toBe(STATUS_CODES.DELETED);
  });
});
