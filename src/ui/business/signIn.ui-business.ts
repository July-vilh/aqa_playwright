import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { Page } from "playwright/test";
import { HomePage } from "ui/pages/home.page";
import { SignInPage } from "ui/pages/signIn.page";
import { PageHolder } from "./base.ui-business";

//page objectы не могут работать с другими страницами и с валидациями поэтому добавляется абстракция которая будет над ними
export class SignInUIService extends PageHolder {
  private signInPage = new SignInPage(this.page);
  private homePage = new HomePage(this.page);

  async signInAsLocalUser() {
    await this.signInPage.openPortal();
    await this.signInPage.fillCredentials({ username: USER_LOGIN, password: USER_PASSWORD });
    await this.signInPage.clickOnLoginButton();
    await this.homePage.waitForOpened();
    const token = (await this.page.context().cookies()).find((c) => c.name === "Authorization")!.value;
    return token;
  }
}