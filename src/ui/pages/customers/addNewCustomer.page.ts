import { Locator, Page } from "@playwright/test";
import { ICustomer } from "types/customer.types";

//этот класс заполняет поля на странице создания кастомера ()
export class AddNewCustomerPage {
  emailInput: Locator;
  nameInput: Locator;
  countryInput: Locator;
  cityInput: Locator;
  streetInput: Locator;
  houseInput: Locator;
  flatInput: Locator;
  phoneInput: Locator;
  notesInput: Locator;
  saveNewCustoberButton: Locator;

  constructor(protected page: Page) {
    this.emailInput = this.page.locator("#inputEmail");
    this.nameInput = this.page.locator("#inputName");
    this.countryInput = this.page.locator("#inputCountry");
    this.cityInput = this.page.locator("#inputCity");
    this.streetInput = this.page.locator("#inputStreet");
    this.houseInput = this.page.locator("#inputHouse");
    this.flatInput = this.page.locator("#inputFlat");
    this.phoneInput = this.page.locator("#inputPhone");
    this.notesInput = this.page.locator("#textareaNotes");
    this.saveNewCustoberButton = this.page.locator("#save-new-customer");
  }

  //метод заполнения полей с использованием интерфейса (partial делает все поля в интерфейсе необязательными);
  //если customer.email присутствует то вызовется метод который заполняет поле email (все это делается последовательно, не в параллель)
  //если данных для какого-то поля не будет то оно не заполнится
  async fillInputs(customer: Partial<ICustomer>) {
    customer.email && (await this.emailInput.fill(customer.email));
    customer.name && (await this.nameInput.fill(customer.name));
    customer.country &&
      (await this.countryInput.selectOption(customer.country));
    customer.city && (await this.cityInput.fill(customer.city));
    customer.street && (await this.streetInput.fill(customer.street));
    customer.house && (await this.houseInput.fill(customer.house.toString()));
    customer.flat && (await this.flatInput.fill(customer.flat.toString()));
    customer.phone && (await this.phoneInput.fill(customer.phone));
    customer.notes && (await this.notesInput.fill(customer.notes));
  }

  //метод нажатия на кнопку создания кастомера после заполнения всех полей
  async clickSaveNewCustomer() {
    await this.saveNewCustoberButton.click();
  }
}
