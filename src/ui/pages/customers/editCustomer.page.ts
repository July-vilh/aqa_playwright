import { ICustomer } from "types/customer.types";
import { SalesPortalPage } from "../salesPortal.page";
import { DeleteModal } from "../modals/customers/delete.modal";

export class EditCustomerPage extends SalesPortalPage {
  //Modals
  deleteCustomerModal = new DeleteModal(this.page);

  //inputs
  emailInput = this.page.locator("#inputEmail");
  nameInput = this.page.locator("#inputName");
  countryInput = this.page.locator("#inputCountry");
  cityInput = this.page.locator("#inputCity");
  streetInput = this.page.locator("#inputStreet");
  houseInput = this.page.locator("#inputHouse");
  flatInput = this.page.locator("#inputFlat");
  phoneInput = this.page.locator("#inputPhone");
  notesInput = this.page.locator("#textareaNotes");

  //errors
  emailError = this.page.locator("#error-inputEmail");
  nameError = this.page.locator("#error-inputName");
  cityError = this.page.locator("#error-inputCity");
  streetError = this.page.locator("#error-inputStreet");
  houseError = this.page.locator("#error-inputHouse");
  flatError = this.page.locator("#error-inputFlat");
  phoneError = this.page.locator("#error-inputPhone");
  notesError = this.page.locator("#error-textareaNotes");

  saveChangesButton = this.page.getByRole("button", { name: "Save Changes" });
  deleteCustomerButton = this.page.getByRole("button", { name: "Delete Customer" });

  uniqueElement = this.saveChangesButton;

  async fillInputs(customer: Partial<ICustomer>) {
    customer.email && (await this.emailInput.fill(customer.email));
    customer.name && (await this.nameInput.fill(customer.name));
    customer.country && (await this.countryInput.selectOption(customer.country));
    customer.city && (await this.cityInput.fill(customer.city));
    customer.street && (await this.streetInput.fill(customer.street));
    customer.house && (await this.houseInput.fill(customer.house.toString()));
    customer.flat && (await this.flatInput.fill(customer.flat.toString()));
    customer.phone && (await this.phoneInput.fill(customer.phone));
    customer.notes && (await this.notesInput.fill(customer.notes));
  }

  async getInputValues() {
    const [email, name, country, city, street, house, flat, phone, notes] = await Promise.all([
      this.emailInput.inputValue(),
      this.nameInput.inputValue(),
      this.countryInput.inputValue(),
      this.cityInput.inputValue(),
      this.streetInput.inputValue(),
      this.houseInput.inputValue(),
      this.flatInput.inputValue(),
      this.phoneInput.inputValue(),
      this.notesInput.inputValue(),
    ]);
    return { email, name, country, city, street, house, flat, phone, notes };
  }

  async clickSaveChanges() {
    await this.saveChangesButton.click();
  }

  async clickDeleteCustomer() {
    await this.deleteCustomerButton.click();
  }

  async getFormErrors() {
    return {
      email: (await this.emailError.isVisible()) ? await this.emailError.innerText() : null,
      name: (await this.nameError.isVisible()) ? await this.nameError.innerText() : null,
      city: (await this.cityError.isVisible()) ? await this.cityError.innerText() : null,
      street: (await this.streetError.isVisible()) ? await this.streetError.innerText() : null,
      house: (await this.houseError.isVisible()) ? await this.houseError.innerText() : null,
      flat: (await this.flatError.isVisible()) ? await this.flatError.innerText() : null,
      phone: (await this.phoneError.isVisible()) ? await this.phoneError.innerText() : null,
      notes: (await this.notesError.isVisible()) ? await this.notesError.innerText() : null,
    };
  }
}