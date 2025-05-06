//import { Locator, Page } from "@playwright/test";
import { SalesPortalPage } from "../salesPortal.page";

// этот класс нажимает на кнопку добавить customer
export class CustomersPage extends SalesPortalPage {
  //addNewCustomerButton: Locator;

  //constructor(protected page: Page) // все это убрали после наследования
  addNewCustomerButton = this.page.getByRole("button", {
    name: "+ Add Customer",
  });
  async clickAddNewCustomer() {
    await this.addNewCustomerButton.click();
  }
}
