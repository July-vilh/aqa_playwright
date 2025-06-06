import { Locator, Page } from "@playwright/test";
import { ModuleName } from "types/home.types";
import { SalesPortalPage } from "./salesPortal.page";

// этот класс нажимает на кнопки из бокового меню
export class HomePage extends SalesPortalPage {
  title = this.page.locator(".welcome-text");

  // кнопки которые открывают свои модули в нав-бар меню (их локаторы) описание
  // constructor(protected page: Page) // все это убрали после наследования

  customersButton = this.page.getByRole("link", { name: "Customer" });
  productsButton = this.page.getByRole("link", { name: "Products" });
  ordersButton = this.page.getByRole("link", { name: "Orders" });

  uniqueElement = this.title;

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
