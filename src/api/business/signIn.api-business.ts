import { APIRequestContext } from "@playwright/test";
import { SignInController } from "api/controllers/signIn.controller";
import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import { validateResponse } from "utils/validations/responseValidation.utils";

export class SignInApiService {
  // Create a new instance of SignInController with the provided APIRequestContext
  controller: SignInController;

  constructor(request: APIRequestContext) {
    this.controller = new SignInController(request);
  }

  async loginAsLocalUser() {
    const response = await this.controller.login({
      username: USER_LOGIN,
      password: USER_PASSWORD,
    });

    validateResponse(response, STATUS_CODES.OK, true, null);
    const token = response.headers["authorization"];
    return token;
  }
}
