import { Page } from "@playwright/test";
import { ModuleName } from "types/home.types";
import { AddNewCustomerPage } from "ui/pages/customers/addNewCustomer.page";
import { CustomerDetailsPage } from "ui/pages/customers/customer-details.page";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { EditCustomerPage } from "ui/pages/customers/editCustomer.page";
import { HomePage } from "ui/pages/home.page";
import { PageHolder } from "../base.ui-business";

export class CustomersUIService extends PageHolder {
  private customersPage = new CustomersPage(this.page);
  private addNewCustomerPage = new AddNewCustomerPage(this.page);
  private editCustomerPage = new EditCustomerPage(this.page);
  private customerDetailsPage = new CustomerDetailsPage(this.page);
  async openAddPage() {
    await this.customersPage.clickAddNewCustomer();
    await this.addNewCustomerPage.waitForOpened();
  }
  async openEditPage(email: string) {
    await this.customersPage.clickTableAction(email, "edit");
    await this.editCustomerPage.waitForOpened();
  }
  async OpenDetailsPage(email: string) {
    await this.customersPage.clickTableAction(email, "details");
    await this.customerDetailsPage.waitForOpened();
  }
}
