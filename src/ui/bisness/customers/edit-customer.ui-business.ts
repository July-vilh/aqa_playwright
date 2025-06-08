import { expect, Page } from "@playwright/test";
import { apiConfig } from "config/api-config";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import _ from "lodash";
import { ICustomer, ICustomerResponse } from "types/customer.types";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { EditCustomerPage } from "ui/pages/customers/editCustomer.page";

export class EditCustomerUiService {
  private editCustomerPage: EditCustomerPage;
  private customersPage: CustomersPage;
  constructor(private page: Page) {
    this.editCustomerPage = new EditCustomerPage(page);
    this.customersPage = new CustomersPage(page);
  }

  async edit(customData?: ICustomer) {
    const data = generateCustomerData(customData);
    await this.editCustomerPage.fillInputs(data);
    const response = await this.editCustomerPage.interceptResponse<ICustomerResponse, any>(
      apiConfig.ENDPOINTS.CUSTOMERS,
      this.editCustomerPage.clickSaveChanges.bind(this.editCustomerPage)
    );
    expect(response.status).toBe(STATUS_CODES.OK);
    expect(_.omit(response.body.Customer, "_id", "createdOn")).toEqual({ ...data });
    await this.customersPage.waitForOpened();
    return response.body.Customer;
  }
}