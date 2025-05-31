import { test, expect } from "fixtures/controllers.fixture";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { customerSchema } from "data/schemas/customers/customer.schema";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import _ from "lodash";
import { validateSchema } from "utils/validations/SchemaValidation.utils";
import { validateResponse } from "utils/validations/responseValidation.utils";

test.describe("[API] [Customers] [Get By Id]", () => {
  let id = "";
  let token = "";
  test.skip("Should get created customer by id without controllers", async ({
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

    //------ получение кастомера (get) по id
    const getResponse = await request.get(
      apiConfig.BASE_URL +
        apiConfig.ENDPOINTS.CUSTOMER_BY_ID(customerBody.Customer._id),
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const bogyGetResponse = await getResponse.json();
    //Assert1: status-code
    expect.soft(getResponse.status()).toBe(STATUS_CODES.OK);
    //Assert2: response
    expect
      .soft({ ...customerBody.Customer })
      .toMatchObject(_.omit(bogyGetResponse.Customer, "_id", "createdOn"));
    expect.soft(bogyGetResponse.ErrorMessage).toBe(null);
    expect.soft(bogyGetResponse.IsSuccess).toBe(true);
    //Asser3: json schema
    validateSchema(customerSchema, bogyGetResponse);

    //----- удаление кастомера
    const response = await request.delete(
      apiConfig.BASE_URL +
        apiConfig.ENDPOINTS.CUSTOMER_BY_ID(customerBody.Customer._id),
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    //Assert1: status-code
    expect.soft(response.status()).toBe(STATUS_CODES.DELETED);
  });

  test("Should get created customer by id with controllers", async ({
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

    //------ получение кастомера (get) по id
    const getResponse = await customersController.getById(id, token);
    //Assert1: status code + IsSuccess + ErrorMessage
    validateResponse(getResponse, STATUS_CODES.OK, true, null);
    //Assert2: response
    expect.soft(getResponse.body.Customer).toMatchObject({ ...customerData });
    //Asser3: json schema
    validateSchema(customerSchema, getResponse.body);
  });

  //----- удаление кастомера
  test.afterEach(async ({ customersController }) => {
    if (!id) return;
    const response = await customersController.delete(id, token);
    expect.soft(response.status).toBe(STATUS_CODES.DELETED);
  });
});
