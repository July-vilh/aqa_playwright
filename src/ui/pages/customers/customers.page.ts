//import { Locator, Page } from "@playwright/test";
//import { Locator } from "playwright";
import { expect } from "@playwright/test";
import { SalesPortalPage } from "../salesPortal.page";
import { ICustomer, ICustomerInTable } from "types/customer.types";
import { COUNTRIES } from "data/customers/countries.data";
import { FilterModal } from "../modals/customers/filter.modal";
import { DeleteModal } from "../modals/customers/delete.modal";
import { customersSortField } from "types/api.types";

// этот класс нажимает на кнопку добавить customer
export class CustomersPage extends SalesPortalPage {
  //addNewCustomerButton: Locator;
  //constructor(protected page: Page) // все это убрали после наследования

  //----- Modals
  // подход = композиция: вставили фильтрационную модалку как часть страницы кастомеров не передавая страницы кастомеров
  // через композицию дали доступ к этой модалке кастомерам не передавая ни селекторы ничего
  readonly filterModal = new FilterModal(this.page);
  readonly deleteCustomerModal = new DeleteModal(this.page);


  //----- Header menu
  readonly addNewCustomerButton = this.page.getByRole("button", {
    name: "+ Add Customer",
  });
  readonly filterButton = this.page.getByRole("button", { name: "Filter" });
  readonly searchInput = this.page.locator('input[type="search"]');
  readonly searchButton = this.page.locator("#search-customer");
  readonly chipButton = this.page.locator(".chip");
  readonly searchChipButton = this.page.locator(
    'div[data-chip-customers="search"]'
  );

  //----- Table
  readonly table = this.page.locator("#table-customers");


  //----- Table headers, селекторы хэдеров (названий) у колонок таблицы
  readonly tableHeader = this.page.locator("#table-customers th div");
  readonly emailHeader = this.tableHeader.filter({ hasText: "Email" });
  readonly nameHeader = this.tableHeader.filter({ hasText: "Name" });
  readonly countryHeader = this.tableHeader.filter({ hasText: "Country" });
  readonly createdOnHeader = this.page
    .locator('#table-customers th div[onclick*="sortCustomersInTable"]')
    .filter({ hasText: "Created On" });

  //----- Table Body
  readonly tableRow = this.page.locator("#table-customers tbody tr");
  readonly tableRowByEmail = (email: string) =>
    this.tableRow.filter({ has: this.page.getByText(email) }); //список всех строк таблицы
  //селекторы колонок таблицы
  readonly nameCell = (email: string) =>
    this.tableRowByEmail(email).locator("td:nth-child(1)"); //поле name через email
  readonly emailCell = (email: string) =>
    this.tableRowByEmail(email).locator("td:nth-child(2)"); //поле email
  readonly countryCell = (email: string) =>
    this.tableRowByEmail(email).locator("td:nth-child(3)"); //поле country
  //readonly createdOnCell = (email: string) => this.tableRowByEmail(email).locator("td:nth-child(4)"); //поле createdOn

  //селекторы кнопок в actions таблицы
  readonly editButton = (email: string) =>
    this.tableRowByEmail(email).getByTitle("Edit");
  readonly detailsButton = (email: string) =>
    this.tableRowByEmail(email).getByTitle("Details");
  readonly deleteButton = (email: string) =>
    this.tableRowByEmail(email).getByTitle("Delete");
  readonly emptyTableRow = this.page.locator("td.fs-italic");

  async open() {
    await this.page.evaluate(async () => {
      await (
        window as typeof window & { renderCustomersPage: () => Promise<void> }
      ).renderCustomersPage();
    });
  }

  async clickAddNewCustomer() {
    await this.addNewCustomerButton.click();
  }

  async clickFilter() {
    await this.filterButton.click();
  }

  //СРАВНЕНИЕ ТАБЛИЦЫ (ВАРИАНТ1)
  uniqueElement = this.addNewCustomerButton;

  //нажатие на кнопки из колонки с actions
  async clickTableAction(
    customerEmail: string,
    action: "edit" | "details" | "delete"
  ) {
    const buttons = {
      edit: this.editButton(customerEmail),
      details: this.detailsButton(customerEmail),
      delete: this.deleteButton(customerEmail),
    };
    await buttons[action].click();
  }

  async getCustomerData(customerEmail: string): Promise<ICustomerInTable> {
    // вариант1 (как делать можно но НЕ НУЖНО)
    /* return {
         name: await this.nameCell(email).textContent(),
         email: await this.emailCell(email).textContent(),
         country: await this.countryCell(email).textContent(),
         createdOn: await this.createdOnCell(email).textContent() }; */

    // вариант2 (что бы шло в параллель)
    /* const [email, name, country, createdOn] = await Promise.all([
      this.emailCell(customerEmail).textContent(),
      this.nameCell(customerEmail).textContent(),
      this.countryCell(customerEmail).textContent(),
      this.createdOnCell(customerEmail).textContent(),
    ]); 
    return { email, name, country, createdOn} ; */

    //вариант3
    const [email, name, country, createdOn] = await this.tableRowByEmail(
      customerEmail
    )
      .locator("td")
      .allInnerTexts();
    return {
      email,
      name,
      country: country as COUNTRIES,
      //createdOn
    };
  }

   //получение данных из всей таблицыMore actions
  async getTableData() {
    const tableData: Array<ICustomerInTable> = [];
    const rows = await this.tableRow.all(); //получение массива строк
    for (const row of rows) {
      const [email, name, country, createdOn] = await row
        .locator("td")
        .allInnerTexts();
      tableData.push({
        email,
        name,
        country: country as COUNTRIES,
        //createdOn
      });
      return tableData;
    }
  }

  //СРАВНЕНИЕ ТАБЛИЦЫ (ВАРИАНТ2)
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

  async fillSearch(value: string | number) {
    await this.searchInput.fill(String(value));
  }

  async clickSearch() {
    await this.searchButton.click();
  }

  async search(value: string | number) {
    await this.fillSearch(value);
    await this.clickSearch();
    await this.waitForOpened();
  }

  async clickTableHeader(header: customersSortField) {
    switch (header) {
      case "email":
        await this.emailHeader.click();
        break;
      case "name":
        await this.nameHeader.click();
        break;
      case "country":
        await this.countryHeader.click();
        break;
      case "createdOn":
        await this.createdOnHeader.click();
        break;
    }
  }
}
