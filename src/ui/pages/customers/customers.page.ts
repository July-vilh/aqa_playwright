//import { Locator, Page } from "@playwright/test";
import { Locator } from "playwright";
import { SalesPortalPage } from "../salesPortal.page";

// этот класс нажимает на кнопку добавить customer
export class CustomersPage extends SalesPortalPage {
  //addNewCustomerButton: Locator;

  //constructor(protected page: Page) // все это убрали после наследования
  addNewCustomerButton = this.page.getByRole("button", {
    name: "+ Add Customer",
  });

  uniqueElement = this.addNewCustomerButton;

  async clickAddNewCustomer() {
    await this.addNewCustomerButton.click();
  }
}
