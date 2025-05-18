import { SignIn } from "ui/pages/signIn.page";
import { test as base } from "./pages.fixture";
import { SALES_PORTAL_URL, USER_LOGIN, USER_PASSWORD } from "config/environment";
import { IUser } from "types/user.types";

interface IBusinessSteps {
  loginAsLocalUser: () => Promise<void>;
}

export const test = base.extend<IBusinessSteps>({
  loginAsLocalUser: async ({ page, homePage }, use) => {
    const signInPage = new SignIn(page); //создание объекта страницы
    const userCreds: IUser = {
      email: USER_LOGIN,
      password: USER_PASSWORD,
    };

    await use(async () => {
      await page.goto(SALES_PORTAL_URL);
      await signInPage.fillCredentials(userCreds);
      await signInPage.clickOnLoginButton();
      await homePage.waitForOpened();
    });
  },
});

export { expect } from "@playwright/test";
