import { Page } from '@playwright/test';
import { apiConfig } from 'config/api-config';
import { STATUS_CODES } from 'data/schemas/customers/statusCodes.schema';
import { ICustomerResponse, ICustomersResponse } from 'types/customer.types';
import { IMetricsResponse } from 'types/mertics.types';
import { IProductResponse, IProductsResponse } from 'types/product.types';

export class Mock {
  constructor(private page: Page) {}

  async customers(body: ICustomersResponse, statusCode: STATUS_CODES = STATUS_CODES.OK) {
    this.page.route(/\/api\/customers(\?.*)?$/, async (route) => {
      await route.fulfill({
        status: statusCode,
        contentType: 'application/json',
        body: JSON.stringify(body),
      });
    });
  }

  async customerDetails(body: ICustomerResponse, statusCode: STATUS_CODES = STATUS_CODES.OK) {
    this.page.route(apiConfig.BASE_URL + '/' + apiConfig.ENDPOINTS.CUSTOMER_BY_ID(body.Customer._id), async (route) => {
      await route.fulfill({
        status: statusCode,
        contentType: 'application/json',
        body: JSON.stringify(body),
      });
    });
  }

  async metrics(body: IMetricsResponse, statusCode: STATUS_CODES = STATUS_CODES.OK) {
    this.page.route(apiConfig.BASE_URL + '/' + apiConfig.ENDPOINTS.METRICS, async (route) => {
      await route.fulfill({
        status: statusCode,
        contentType: 'application/json',
        body: JSON.stringify(body),
      });
    });
  }
  async products(body: IProductsResponse, statusCode: STATUS_CODES = STATUS_CODES.OK) {
        this.page.route(/\/api\/products(\?.*)?$/, async (route) => {
            await route.fulfill({
                status: statusCode,
                contentType: "application/json",
                body: JSON.stringify(body),
            });
        });
    }

    async productDetails(body: IProductResponse, statusCode: STATUS_CODES = STATUS_CODES.OK) {
        this.page.route(apiConfig.BASE_URL + "/" + apiConfig.ENDPOINTS.PRODUCT_BY_ID(body.Product._id), async (route) => {
            await route.fulfill({
                status: statusCode,
                contentType: "application/json",
                body: JSON.stringify(body),
            });
        });
    }
}