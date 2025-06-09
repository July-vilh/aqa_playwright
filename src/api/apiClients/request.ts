// обертка над реквестом playwrignt что бы в ней данные сохраняли к репорту перед отправкой и после отправки (при получении респонса)
// данные тоже сохранялись
// отправка кастомного варианта как отправляются опции и кастомный вариант как возвращается интерфейс

import test, { APIRequestContext, APIResponse, request } from "@playwright/test";
import _ from "lodash";
import { IRequestOptions, IResponse } from "types/api.types";

export class RequestApi {
  constructor(private requestContext: APIRequestContext) {}
  private response: APIResponse | undefined;

  async send<T extends Object | null>(options: IRequestOptions): Promise<IResponse<T>> {
    try {
      // const requestContext = await request.newContext({
      //   baseURL: options.baseURL ?? apiConfig.BASE_URL,
      // });

      this.response = await this.requestContext.fetch(
        options.baseURL + options.url,
        _.omit(options, ["baseURL", "url"])
      );
      if (this.response.status() >= 500) throw new Error("Request failed with status " + this.response.status());
      const result = await this.transformResponse();
      return result;
    } catch (err) {
      console.log((err as Error).message);
      throw err;
    }
  }

  async transformResponse() {
    let body;
    const contentType = this.response!.headers()["content-type"] || "";
    if (contentType.includes("application/json")) {
      body = await this.response!.json();
    } else {
      body = await this.response!.text();
    }

    return {
      status: this.response!.status(),
      body,
      headers: this.response!.headers(),
    };
  }
}