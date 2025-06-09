import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { test as base } from "./pages.fixture";

interface IBusinessSteps {
  loginAsLocalUser(): Promise<void>;
}

export const test = base.extend<IBusinessSteps>({
  loginAsLocalUser: async ({ homePage, signInPage }, use) => {
    await use(async () => {
      await signInPage.openPortal();
      await signInPage.fillCredentials({ username: USER_LOGIN, password: USER_PASSWORD });
      await signInPage.clickOnLoginButton();
      //await homePage.waitForOpened();
    });
  },
});

export { expect } from "@playwright/test";
