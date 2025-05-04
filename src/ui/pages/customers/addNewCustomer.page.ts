import { Locator, Page } from "@playwright/test";

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

  constructor(protected page: Page){
    this.emailInput = this.page.locator("#inputEmail");
    this.nameInput = this.page.locator("#inputName");
    this.countryInput = this.page.locator("#inputCountry");
    this.cityInput = this.page.locator("#inputCity");
    this.streetInput = this.page.locator("#inputStreet");
    this.houseInput = this.page.locator("#inputHouse");
    this.flatInput = this.page.locator("#inputFlat");
    this.phoneInput = this.page.locator("#inputPhone");
    this.notesInput = this.page.locator("#textareaNotes");
  }

  //метод заполнения полей с использованием интерфейса
  async fillInputs(){

  }
}