import { ModuleName } from "types/home.types";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { HomePage } from "ui/pages/home.page";
import { PageHolder } from "./base.ui-business";
import { ProductsPage } from "ui/pages/products/product.page";

export class HomeUIService extends PageHolder {
  private customersPage = new CustomersPage(this.page);
  private homePage = new HomePage(this.page);
  private productsPage = new ProductsPage(this.page);

  async openModule(moduleName: ModuleName) {
    await this.homePage.clickModuleButton(moduleName);
    switch (moduleName) {
      case "Customers":
        await this.customersPage.waitForOpened();
        break;
    }
  }
  async openAsLoggedInUser() {
    await this.homePage.openPortal();
    await this.homePage.waitForOpened();
  }
}
