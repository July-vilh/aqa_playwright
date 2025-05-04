import { Locator, Page } from "@playwright/test";

// этот класс нажимает на кнопку добавить customer 
export class CustomersPage {
  addNewCustomerButton: Locator;

  constructor(protected page: Page) {
    this.addNewCustomerButton = this.page.getByRole("button", {
      name: "+ Add Customer",
    });
  }

  async clickAddNewCustomer(){
    await this.addNewCustomerButton.click();
  }
}
