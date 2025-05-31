// обертка над реквестом playwrignt что бы в ней данные сохраняли к репорту перед отправкой и после отправки (при получении респонса)
// данные тоже сохранялись
// отправка кастомного варианта как отправляются опции и кастомный вариант как возвращается интерфейс

import { APIResponse, request } from "@playwright/test";
import { apiConfig } from "config/api-config";
import _ from "lodash";
import { IRequestOptions, IResponse } from "types/api.types";

export class RequestApi {
  //private response: APIResponse | undefined;
  private response?: APIResponse; //переменная для хранения ответа

  // класс с методом send нужен что бы мы могли качественно знать какие данные и как мы пересылаем для запроса и как этот респонс отправляется
  async send<T extends Object | null>(options: IRequestOptions): Promise<IResponse<T>> {
    try {
    /*Создание контекст запроса — это как «браузерная сессия» или «среда», в которой будет отправляться запрос.
    Контекст позволяет задать базовый адрес (baseURL), куки, заголовки и т.д.
    Если options.baseURL есть — используем его. Если нет — используем apiConfig.BASE_URL. */
      const requestContext = await request.newContext({
        baseURL: options.baseURL ?? apiConfig.BASE_URL,
      });
      /* Делаем сам запрос (fetch) на путь options.url. Но передаём в fetch только нужные поля: method, headers, data и т.д.
      Убираем из options поля baseURL и url, потому что: baseURL уже был передан в newContext, url уже передан как первый аргумент в fetch */
      this.response = await requestContext.fetch(options.url, _.omit(options, ["baseURL", "url"]));
      if(this.response.status() >= 500) throw new Error("Request failed with status " + this.response.status());
      const result = await this.transformResponse(); //возвращаем респонс
      return result;
    } catch (err) {
      console.log((err as Error).message);
      throw err;
    }
  }

  // функция которая отвечает за то в каком виде респонс получаем + типизация, переопределение того в каком виде возвращ-ся json
  async transformResponse(){
    let body;
    // если content-type не пришел в принципе то будет пустое поле
    const contentType = this.response!.headers()["content-type"] || "";
    // если constent-type пришел то преобразовываем в response!.json если нет то в response!.text
    // ! это this.response уже установлен и точно не undefined
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
