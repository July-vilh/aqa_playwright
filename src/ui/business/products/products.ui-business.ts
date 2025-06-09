import { Page } from "@playwright/test";
import { AddNewProductPage } from "ui/pages/products/addNewProduct.page";
import { ProductsPage } from "ui/pages/products/product.page";
import { PageHolder } from "../base.ui-business";

export class ProductsUIService extends PageHolder {
  private productsPage = new ProductsPage(this.page);
  private addNewProductPage = new AddNewProductPage(this.page);

    async openAddPage() {
        await this.productsPage.clickAddNewProduct();
        await this.addNewProductPage.waitForOpened();
    }
}