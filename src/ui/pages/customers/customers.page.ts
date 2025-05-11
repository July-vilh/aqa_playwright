//import { Locator, Page } from "@playwright/test";
//import { Locator } from "playwright";
import { expect } from "@playwright/test";
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

  // Получение всех ячеек (td) из первой строки таблицы
  async getFirstRowCells() {
    return this.page.locator("tbody tr").first().locator("td");
  }

  // Извлечение текстового содержимого первой строки таблицы и возвращение его в виде объекта
  async getFirstRowData() {
    const cells = await this.getFirstRowCells();
    const values = await cells.allTextContents();
    const [email, name, country] = values;
    return { email, name, country };
  }

  // Проверка, что значения в первой строке таблицы соответствуют ожидаемым
  async expectFirstRowCompare(expected: {
    email: string;
    name: string;
    country: string;
  }) {
    const cells = await this.getFirstRowCells();
    const { email, name, country } = expected;

    // Сравнение каждой ячейки с ожидаемым значением
    await expect(cells.nth(0)).toHaveText(email);
    await expect(cells.nth(1)).toHaveText(name);
    await expect(cells.nth(2)).toHaveText(country);
  }
}
