import { SalesPortalPage } from "./salesPortal.page";
import { IUser } from "types/user.types";

export class SignIn extends SalesPortalPage {
  emailInput = this.page.locator("#emailinput");
  passwordInput = this.page.locator("#passwordinput");
 loginButton = this.page.getByRole("button", { name: "Login" });

  uniqueElement = this.buttonLogin;

  async fillCredentials(userCreds: IUser) {
    await this.emailInput.fill(userCreds.email);
    await this.passwordInput.fill(userCreds.password);
  }
  async clickOnLoginButton() {
    await this.buttonLogin.click();
  }
}
