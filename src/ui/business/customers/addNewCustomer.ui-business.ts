import { expect, Page } from "@playwright/test";
import { apiConfig } from "config/api-config";
import { generateCustomerData } from "data/customers/generateCustomer.data";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import _ from "lodash";
import { ICustomer, ICustomerResponse } from "types/customer.types";
import { AddNewCustomerPage } from "ui/pages/customers/addNewCustomer.page";
import { CustomersPage } from "ui/pages/customers/customers.page";
import { PageHolder } from "../base.ui-business";


export class AddNewCustomerUiService extends PageHolder {
  private addNewCustomerPage = new AddNewCustomerPage(this.page);
  private customersPage = new CustomersPage(this.page);

  async create(customData?: ICustomer) {
    const data = generateCustomerData(customData);
    await this.addNewCustomerPage.fillInputs(data);
    const response = await this.addNewCustomerPage.interceptResponse<ICustomerResponse, any>(
      apiConfig.ENDPOINTS.CUSTOMERS,
      this.addNewCustomerPage.clickSaveNewCustomer.bind(this.addNewCustomerPage)
    );
    expect(response.status).toBe(STATUS_CODES.CREATED);
    expect(_.omit(response.body.Customer, "_id", "createdOn")).toEqual({ ...data });
    await this.customersPage.waitForOpened();
    return response.body.Customer;
  }
}