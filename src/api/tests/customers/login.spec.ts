import { test, expect } from "fixtures/controllers.fixture";
import { apiConfig } from "config/api-config";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import { loginSchema } from "data/schemas/customers/loginSchema.schema";
import { validateSchema } from "utils/validations/SchemaValidation.utils";
import { validateResponse } from "utils/validations/responseValidation.utils";

test.describe("[API] [Customers] [Login]", () => {
  let token = "";
  test.skip("Login customer without controller", async ({ request }) => {
    const loginResponse = await request.post(
      apiConfig.BASE_URL + apiConfig.ENDPOINTS.LOGIN,
      {
        data: { username: USER_LOGIN, password: USER_PASSWORD },
        headers: { "content-type": "application/json" },
      }
    );
    const headers = loginResponse.headers();
    const token = headers["authorization"];
    const loginBody = await loginResponse.json();

    //Assert: status-code
    expect.soft(loginResponse.status()).toBe(STATUS_CODES.OK);
    //Assert: token
    expect.soft(token).toBeTruthy();
    //Assert: json-schema
    validateSchema(loginSchema, loginBody);
  });

  test("Login customer with controller", async ({ signInController }) => {
    const loginResponse = await signInController.login({
      username: USER_LOGIN,
      password: USER_PASSWORD,
    });
    const headers = loginResponse.headers;
    token = headers["authorization"];

    //Assert1: status code + IsSuccess + ErrorMessage
    validateResponse(loginResponse, STATUS_CODES.OK, true, null);
    //Assert2: token
    expect.soft(token).toBeTruthy();
    //Assert3: json-schema
    validateSchema(loginSchema, loginResponse.body);
  });
});
