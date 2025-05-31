import test, { expect } from "@playwright/test";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";

test.describe("[API] [Customers] [Delete]", () => {
  test("Should delete customer", async ({ request }) => {

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
      apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMER_BY_ID(customerBody.Customer._id),
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
});