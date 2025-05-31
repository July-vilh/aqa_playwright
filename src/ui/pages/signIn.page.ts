import { SalesPortalPage } from "./salesPortal.page";
import { ICredentials } from "types/user.types";

export class SignIn extends SalesPortalPage {
  emailInput = this.page.locator("#emailinput");
  passwordInput = this.page.locator("#passwordinput");
  loginButton = this.page.getByRole("button", { name: "Login" });

  uniqueElement = this.loginButton;

  async fillCredentials(userCreds: ICredentials) {
    await this.emailInput.fill(userCreds.username);
    await this.passwordInput.fill(userCreds.password);
  }
  async clickOnLoginButton() {
    await this.loginButton.click();
  }
}
