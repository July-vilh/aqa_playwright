// сделать класс от которого будем наследоваться всеми нашими страницами и иметь доступ к общим вещам
// абстрактный класс тк этот класс явл-ся надстройкой над нашими педж обжектами и мы не предполагаем что из этого будет создаваться объект
// класс с Page
// это надстройка над всеми пэйдж обжектами

// плюс добавление метода для спинера
import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export abstract class SalesPortalPage extends BasePage {
  // spinner: Locator;
  // notification: Locator;
  /*каждая страница будет обладать методом waitForOpened и тк мы сделали uniqueElement абстрактным то каждая страница обязана
  будет реализовать это поле (uniqueElement) те прописать какой локатор явл-ся уникальным
  и когда из любой пейджи будет вызываться метод waitForOpened он будет тянуть селектор собственный уникального элемента
  и следовательно 1 раз написав сигнатуру такого метода он будет на каждой странице ожидать разные элементы */

  abstract uniqueElement: Locator;

  readonly spinner = this.page.locator(".spinner-border");
  readonly notification = this.page.locator(".toast-body");

  async waitForOpened() {
    await expect(this.uniqueElement).toBeVisible();
    await this.waitForSpinner();
  }

  async waitForSpinner() {
    //await expect(welcomeTitle).toBeVisible();
    await expect(this.spinner).toHaveCount(0);
  }

  async waitForNotification(text: string) {
    await expect(this.notification.last()).toHaveText(text);
  }
}
