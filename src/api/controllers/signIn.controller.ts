import { RequestApi } from "api/apiClients/request";
import { apiConfig } from "config/api-config";
import { IRequestOptions } from "types/api.types";
import { ICredentials, ILoginResponse, IUser } from "types/user.types";

export class SignInController {
  constructor(private request = new RequestApi()) {}

  async login(body: ICredentials) {
    const options: IRequestOptions = {
      url: apiConfig.ENDPOINTS.LOGIN,
      method: "post",
      data: body,
      headers: {
        "content-type": "application/json",
      },
    };
    return await this.request.send<ILoginResponse>(options);
  }
}
