import { expect, Locator } from "@playwright/test";
import { SalesPortalPage } from "../salesPortal.page";
import { IProduct } from "types/product.types";

export class AddNewProductPage extends SalesPortalPage {
    readonly name = this.page.locator("#inputName");
    readonly price = this.page.locator("#inputPrice");
    readonly amount = this.page.locator("#inputAmount");
    readonly manufacturer = this.page.locator("#inputManufacturer");
    readonly notes = this.page.locator("#textareaNotes");
    readonly saveButton = this.page.locator("#save-new-product");
    readonly clearButton = this.page.locator("#clear-inputs");

    readonly nameError = this.page.locator("#error-inputName");

    readonly uniqueElement = this.name;

    async fillInputs(product: Partial<IProduct>) {
        product.name && (await this.name.fill(String(product.name)));
        product.price && (await this.price.fill(product.price?.toString()));
        product.amount && (await this.amount.fill(product.amount?.toString()));
        product.manufacturer && (await this.manufacturer.selectOption(product.manufacturer));
        product.notes && (await this.notes.fill(product.notes));
    }

    async getError() {
        return await this.nameError.textContent();
    }

    async clickSaveNewProduct() {
        await this.saveButton.click();
    }
}