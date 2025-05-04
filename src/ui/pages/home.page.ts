import { Locator, Page } from "@playwright/test";
import { ModuleName } from "types/home.types";

//этот класс нажимает на кнопки из бокового меню
export class HomePage {
  customersButton: Locator;
  productsButton: Locator;
  ordersButton: Locator;

  //кнопки которые открывают свои модули в нав-бар меню (их локаторы) описание
  constructor(protected page: Page) {
    this.customersButton = this.page.getByRole("link", { name: "Customers" });
    this.productsButton = this.page.getByRole("link", { name: "Products" });
    this.ordersButton = this.page.getByRole("link", { name: "Orders" });
  }
  //метод который нажимает на эти 3 кнопки (действие)
  async clickModuleButton(moduleName: ModuleName) {
    const moduleButtons: Record<ModuleName, Locator> = {
      Customers: this.customersButton,
      Products: this.productsButton,
      Orders: this.ordersButton,
    };

    await moduleButtons[moduleName].click();
  }
}
