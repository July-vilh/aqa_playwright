import { Page } from "@playwright/test";
import { IResponse } from "types/api.types";

export abstract class BasePage {
  constructor(protected page: Page) {}

  async interceptResponse<U extends object | null, T extends unknown[]>(
    url: string,
    triggerAction: (...args: T) => Promise<void>,
    ...args: T
  ): Promise<IResponse<U>> {
    const [response] = await Promise.all([
      this.page.waitForResponse((response) => response.url().includes(url)),
      triggerAction(...args),
    ]);
    return {
      status: response.status(),
      headers: response.headers(),
      body: (await response.json()) as U,
    };
  }
}
