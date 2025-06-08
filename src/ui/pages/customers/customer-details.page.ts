import { SalesPortalPage } from "../salesPortal.page";
import { ICustomer } from "types/customer.types";
import { COUNTRIES } from "data/customers/countries.data";

export class CustomerDetailsPage extends SalesPortalPage {
  email = this.page.locator("#customer-email");
  name = this.page.locator("#customer-name");
  phone = this.page.locator("#customer-phone");
  country = this.page.locator("#customer-country");
  city = this.page.locator("#customer-city");
  street = this.page.locator("#customer-street");
  house = this.page.locator("#customer-house");
  flat = this.page.locator("#customer-flat");
  notes = this.page.locator("#customer-notes");
  registrationDate = this.page.locator("#customer-created-on");
  uniqueElement = this.registrationDate;

  async open(id: string) {
    await this.page.evaluate(async (id: string) => {
      await (
        window as typeof window & { renderCustomerDetailsPage: (id: string) => Promise<void> }
      ).renderCustomerDetailsPage(id);
    }, id);
  }

  async getDetails(): Promise<ICustomer & { createdOn: string }> {
    const [email, name, phone, country, city, street, house, flat, notes, registrationDate] = await Promise.all([
      this.email.innerText(),
      this.name.innerText(),
      this.phone.innerText(),
      this.country.innerText(),
      this.city.innerText(),
      this.street.innerText(),
      this.house.innerText(),
      this.flat.innerText(),
      this.notes.innerText(),
      this.registrationDate.innerText(),
    ]);
    return {
      email,
      name,
      phone,
      country: country as COUNTRIES,
      city,
      street,
      house: +house,
      flat: +flat,
      notes,
      createdOn: registrationDate,
    };
  }
}