// сделать класс от которого будем наследоваться всеми нашими страницами и иметь доступ к общим вещам
// абстрактный класс тк этот класс явл-ся надстройкой над нашими педж обжектами и мы не предполагаем что из этого будет создаваться объект
// класс с Page
// это надстройка над всеми пэйдж обжектами

// плюс добавление метода для спинера
import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { SALES_PORTAL_URL } from "config/environment";

export abstract class SalesPortalPage extends BasePage {
  abstract uniqueElement: Locator;

  readonly spinner = this.page.locator(".spinner-border");
  readonly notification = this.page.locator(".toast-body");

  async waitForOpened() {
    await expect(this.uniqueElement).toBeVisible();
    await this.waitForSpinner();
  }

  async waitForSpinner() {
    await expect(this.spinner).toHaveCount(0);
  }

  async waitForNotification(text: string) {
    await expect(this.notification.last()).toHaveText(text);
  }

  async openPortal() {
    this.page.goto(SALES_PORTAL_URL);
  }
}
