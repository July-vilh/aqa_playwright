import { Page } from "@playwright/test";
import { ModuleName } from "types/home.types";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { HomePage } from "ui/pages/home.page";

export class HomeUIService {
    homePage: HomePage;
    customersPage: CustomersPage;
    constructor(private page: Page){
      this.customersPage = new CustomersPage(page);
      this.homePage = new HomePage(page);
    }
  async openModule(moduleName: ModuleName){
    await this.homePage.clickModuleButton(moduleName);
    switch(moduleName){
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