import test, { expect } from "@playwright/test";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { allCustomersSchema } from "data/schemas/customers/getAllCustomers.schema";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import _ from "lodash";
import { validateSchema } from "utils/validations/SchemaValidation.utils";

test.describe("[API] [All Customers]", () => {
  test("Get all customers", async ({ request }) => {
    //---- залогиниться
    const loginResponse = await request.post(apiConfig.BASE_URL + apiConfig.ENDPOINTS.LOGIN,
      {
        data: { username: USER_LOGIN, password: USER_PASSWORD },
        headers: { "content-type": "application/json" },
      }
    );
    const headers = loginResponse.headers();
    const token = headers["authorization"];
    // Assert: status-code
    expect.soft(loginResponse.status()).toBe(STATUS_CODES.OK)

    //----- создать кастомера
    const customerData = generateCustomerData();
    const customerResponse = await request.post(apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMERS, 
      {
        data: customerData,
        headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      }
    )
    const customerBody = await customerResponse.json();
    // Assert: status-code
    expect.soft(customerResponse.status()).toBe(STATUS_CODES.CREATED);

    //----- получить всех кастомеров
    const getAllCustomersResponse = await request.get(apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMERS,
      {
        headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      }
    )
    const getAllCustomersBody = await getAllCustomersResponse.json();
    // Assert: json-схема
    validateSchema(allCustomersSchema, getAllCustomersBody); 
    // Assert: status-code
    expect.soft(getAllCustomersResponse.status()).toBe(STATUS_CODES.OK)
    // Assert: проверить, что в массиве тела респонса есть созданный кастомер
    const foundCreatedCustomer = getAllCustomersBody.Customers.find((customer: any) => customer.email === customerData.email);
    expect.soft(foundCreatedCustomer).toMatchObject({ ...customerData });

    // Проверить поля IsSuccess and ErrorMessage
    expect.soft(getAllCustomersBody.IsSuccess).toBe(true);
    expect.soft(getAllCustomersBody.ErrorMessage).toBe(null);

    //---- удаление кастомера
    const response = await request.delete(apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMER_BY_ID(customerBody.Customer._id), 
    {
      headers: { Authorization: `Bearer ${token}` }
    })
    // Assert1: status-code
    expect.soft(response.status()).toBe(STATUS_CODES.DELETED);
  });
});
