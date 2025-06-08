import { AddNewProductPage } from "ui/pages/products/addNewProduct.page";
import { expect, Page } from "@playwright/test";
import { IProduct, IProductResponse } from "types/product.types";
import { apiConfig } from "config/api-config";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
import _ from "lodash";
import { ProductsPage } from "ui/pages/products/product.page";
import { generateProductData } from "data/products/generateProduct.data";

export class AddNewProductUiService {
  private addNewProductPage: AddNewProductPage;
  private productsPage: ProductsPage;
  constructor(private page: Page) {
    this.addNewProductPage = new AddNewProductPage(page);
    this.productsPage = new ProductsPage(page);
  }
  async create(customData?: IProduct) {
    const data = generateProductData(customData);
    await this.addNewProductPage.fillInputs(data);
    const response = await this.addNewProductPage.interceptResponse<IProductResponse,any>(
      apiConfig.ENDPOINTS.PRODUCTS,
      this.addNewProductPage.clickSaveNewProduct.bind(this.addNewProductPage)
    );
    expect(response.status).toBe(STATUS_CODES.CREATED);
    expect(_.omit(response.body.Product, "_id", "createdOn")).toEqual({...data});
    await this.productsPage.waitForOpened();
    return response.body.Product;
  }
}

