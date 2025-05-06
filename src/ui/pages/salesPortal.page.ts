// сделать класс от которого будем наследоваться всеми нашими страницами и иметь доступ к общим вещам
// абстрактный класс тк этот класс явл-ся надстройкой над нашими педж обжектами и мы не предполагаем что из этого будет создаваться объект
// класс с Page

// плюс добавление метода для спинера
import { expect, Locator, Page } from "@playwright/test";

export abstract class SalesPortalPage {
  spinner: Locator;
  constructor(protected page: Page) {
    this.spinner = page.locator(".spinner-border");
  }

  async waitForSpinner() {
    //await expect(welcomeTitle).toBeVisible();
    await expect(this.spinner).toHaveCount(0);
  }
}
