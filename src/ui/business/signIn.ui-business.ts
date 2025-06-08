import { USER_LOGIN, USER_PASSWORD } from "config/environment";
import { Page } from "playwright/test";
import { HomePage } from "ui/pages/home.page";
import { SignInPage } from "ui/pages/signIn.page";

//page objectы не могут работать с другими страницами и с валидациями поэтому добавляется абстракция которая будет над ними
export class SignInUIService {
  private signInPage: SignInPage;
  private homePage: HomePage;
  constructor(private page: Page) {
    this.signInPage = new SignInPage(page);
    this.homePage = new HomePage(page);
  }

  async SignInAsLocalUser() {
    await this.signInPage.openPortal();
    await this.signInPage.fillCredentials({ username: USER_LOGIN, password: USER_PASSWORD });
    await this.signInPage.clickOnLoginButton();
    await this.homePage.waitForOpened();
    const token = (await this.page.context().cookies()).find((c) => c.name === "Authorization")!.value;
    return token;
  }
}