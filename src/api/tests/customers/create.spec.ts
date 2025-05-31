import { test, expect } from "fixtures/controllers.fixture";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { customerSchema } from "data/schemas/customers/customer.schema";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import _ from "lodash";
import { validateSchema } from "utils/validations/SchemaValidation.utils";
import { validateResponse } from "utils/validations/responseValidation";

test.describe("[API] [Customers] [Create]", () => {
  let id = "";
  let token = "";

  test.skip("Create cusomer with smoke data without Controller", async ({
    request,
  }) => {
    //----- Login
    const loginResponse = await request.post(
      apiConfig.BASE_URL + apiConfig.ENDPOINTS.LOGIN,
      {
        //data = body
        data: { username: USER_LOGIN, password: USER_PASSWORD },
        headers: {
          "content-type": "application/json", //в каком формате прилетят данные на api
        },
      }
    );

    const headers = loginResponse.headers();
    token = headers["authorization"]; //тк в этом ключе в headers респонса хранится токен
    const loginBody = await loginResponse.json(); //достать body
    const expectedUser = {
      _id: "680795ced006ba3d475fca1f",
      username: "july",
      firstName: "Yuliya",
      lastName: "Vilchynskaya",
      roles: ["USER"],
      createdOn: "2025/04/22 13:12:46",
    };

    //soft в assertах чтобы если что-то упадет остальные expect продолжили проверять
    //Assert1: status-code (завалидировать статус-код):
    expect.soft(loginResponse.status()).toBe(STATUS_CODES.OK);

    //Assert2: token
    expect.soft(token).toBeTruthy();

    //Assert3: response
    expect.soft(loginBody.User).toMatchObject(expectedUser); //строгое сравнение 2ух объектов
    expect.soft(loginBody.ErrorMessage).toBe(null);
    expect.soft(loginBody.IsSuccess).toBe(true);

    //-------Cоздание кастомера:
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
    const customerBody = await customerResponse.json(); //содержит больше полей в респонсе чем customerData, решение: 2 объекта привести к 1 и тому же виду (lodash -> omit)

    //Assert1: status-code
    expect.soft(customerResponse.status()).toBe(STATUS_CODES.CREATED);

    //Assert2: response
    //expect.soft(customerBody.Customer).toMatchObject({ ...customerData });
    expect
      .soft({ ...customerData })
      .toMatchObject(_.omit(customerBody.Customer, "_id", "createdOn")); //разложение в пустой объект, убираем лишнюю типизацию + omit (lodash)
    expect.soft(customerBody.ErrorMessage).toBe(null);
    expect.soft(customerBody.IsSuccess).toBe(true);

    //Asser3: json schema
    validateSchema(customerSchema, customerBody); //customerBody - реальный body -> сравнение

    //---- удаление кастомера
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

  test("Create cusomer with smoke data with Controller", async ({
    request,
    customersController,
  }) => {
    //----- Login
    const loginResponse = await request.post(
      apiConfig.BASE_URL + apiConfig.ENDPOINTS.LOGIN,
      {
        //data = body
        data: { username: USER_LOGIN, password: USER_PASSWORD },
        headers: {
          "content-type": "application/json", //в каком формате прилетят данные на api
        },
      }
    );

    const headers = loginResponse.headers();
    token = headers["authorization"]; //тк в этом ключе в headers респонса хранится токен
    const loginBody = await loginResponse.json(); //достать body

    const expectedUser = {
      _id: "680795ced006ba3d475fca1f",
      username: "july",
      firstName: "Yuliya",
      lastName: "Vilchynskaya",
      roles: ["USER"],
      createdOn: "2025/04/22 13:12:46",
    };

    //soft в assertах чтобы если что-то упадет остальные expect продолжили проверять

    //Assert2: token
    expect.soft(token).toBeTruthy();
    //Assert1: status-code (завалидировать статус-код):
    // expect.soft(loginResponse.status()).toBe(STATUS_CODES.OK);

    validateResponse(
      {
        status: loginResponse.status(),
        headers: loginResponse.headers(),
        body: loginBody,
      },
      STATUS_CODES.OK,
      true,
      null
    );

    //Assert3: response
    expect.soft(loginBody.User).toMatchObject(expectedUser); //строгое сравнение 2ух объектов
    // expect.soft(loginBody.ErrorMessage).toBe(null);
    // expect.soft(loginBody.IsSuccess).toBe(true);

    //-------Cоздание кастомера:
    const customerData = generateCustomerData();
    const customerResponse = await customersController.create(
      customerData,
      token
    );
    id = customerResponse.body.Customer._id;

    //Assert1: status-code
    // expect.soft(customerResponse.status).toBe(STATUS_CODES.CREATED);
    console.log("customerResponse =", customerResponse);
    validateResponse(customerResponse, STATUS_CODES.CREATED, true, null);

    //Assert2: response
    expect
      .soft(customerResponse.body.Customer)
      .toMatchObject({ ...customerData });
    // expect
    //   .soft({ ...customerData })
    //   .toMatchObject(
    //     _.omit(customerResponse.body.Customer, "_id", "createdOn")
    //   ); //разложение в пустой объект, убираем лишнюю типизацию + omit (lodash)
    // expect.soft(customerResponse.body.ErrorMessage).toBe(null);
    // expect.soft(customerResponse.body.IsSuccess).toBe(true);

    //Asser3: json schema
    validateSchema(customerSchema, customerResponse.body);
  });

  test.afterEach(async ({ customersController }) => {
    if (!id) return;
    const response = await customersController.delete(id, token);
    expect.soft(response.status).toBe(STATUS_CODES.DELETED);
  });
});
