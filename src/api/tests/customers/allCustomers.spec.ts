import { test, expect } from "fixtures/controllers.fixture";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { allCustomersSchema } from "data/schemas/customers/getAllCustomers.schema";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import _ from "lodash";
import { validateSchema } from "utils/validations/SchemaValidation.utils";
import { validateResponse } from "utils/validations/responseValidation.utils";

test.describe("[API] [All Customers]", () => {
  let id = "";
  let token = "";
  test.skip("Get all customers without controllers", async ({ request }) => {
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

  test("Get all customers with controllers", async ({customersController, signInController}) => {
    //---- залогиниться
    const loginResponse = await signInController.login({
      username: USER_LOGIN,
      password: USER_PASSWORD,
    });
    const headers = loginResponse.headers;
    token = headers["authorization"];
    // Assert: status code + IsSuccess + ErrorMessage
    validateResponse(loginResponse, STATUS_CODES.OK, true, null);

    //----- создать кастомера
    const customerData = generateCustomerData();
    const customerResponse = await customersController.create(
      customerData,
      token
    );
    id = customerResponse.body.Customer._id;
    // Assert: status code + IsSuccess + ErrorMessage
    validateResponse(customerResponse, STATUS_CODES.CREATED, true, null);

    //----- получить всех кастомеров
    const getAllCustomersResponse = await customersController.getAll(
      token
    );
    // Assert: json-схема
    validateSchema(allCustomersSchema, getAllCustomersResponse.body); 
    // Assert: status code + IsSuccess + ErrorMessage
    validateResponse(getAllCustomersResponse, STATUS_CODES.OK, true, null);
    // Assert: проверить, что в массиве тела респонса есть созданный кастомер
    const foundCreatedCustomer = getAllCustomersResponse.body.Customers.find((customer: any) => customer.email === customerData.email);
    expect.soft(foundCreatedCustomer).toMatchObject({ ...customerData });
  });

  //---- удаление кастомера
  test.afterEach(async ({ customersController }) => {
    if (!id) return;
    const response = await customersController.delete(id, token);
    expect.soft(response.status).toBe(STATUS_CODES.DELETED);
  });
});
