import { ICustomer } from "types/customer.types";
import { SalesPortalPage } from "../salesPortal.page";
import { COUNTRIES } from "data/customers/countries.data";

export class CustomerDetailsPage extends SalesPortalPage {
  readonly email = this.page.locator("#customer-email");
  readonly name = this.page.locator("#customer-name");
  readonly phone = this.page.locator("#customer-phone");
  readonly notes = this.page.locator("#customer-notes");
  readonly country = this.page.locator("#customer-country");
  readonly city = this.page.locator("#customer-city");
  readonly street = this.page.locator("#customer-street");
  readonly house = this.page.locator("#customer-house");
  readonly flat = this.page.locator("#customer-flat");
  readonly registrationDate = this.page.locator("#customer-created-on");
  uniqueElement = this.name;

    async open(id: string) {
    await this.page.evaluate(async (id: string) => {
      await (
        window as typeof window & { renderCustomerDetailsPage: (id: string) => Promise<void> }
      ).renderCustomerDetailsPage(id);
    }, id);
  }

  /* это метод, который "парсит" данные с UI (т.е. из DOM-элементов) и возвращает объект клиента.
  1. Извлекает текст из полей на странице, таких как email, имя, телефон и т.д.
  2. Делает это все одновременно (с помощью Promise.all), чтобы не ждать каждый вызов по очереди — это ускоряет выполнение
  3. Возвращает объект, который соответствует интерфейсу ICustomer, но с одним отличием: поле registrationDate переименовано в createdOn
  метод возвращает объект клиента, как в типе ICustomer, плюс дополнительное поле createdOn (вместо registrationDate)
 */
  async getDetails(): Promise<ICustomer & { createdOn: string; }>{
    const [email, name, phone, registrationDate, notes, country, city, street, house, flat] = await Promise.all([
      this.email.innerText(),
      this.name.innerText(),
      this.phone.innerText(),
      this.registrationDate.innerText(),
      this.notes.innerText(),
      this.country.innerText(),
      this.city.innerText(),
      this.street.innerText(),
      this.house.innerText(),
      this.flat.innerText(),
    ]);
    return {email, name, phone, createdOn: registrationDate, notes, country: country as COUNTRIES, city, street, house: +house, flat: +flat};
  }
}
