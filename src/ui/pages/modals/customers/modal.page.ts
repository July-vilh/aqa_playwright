import { expect } from "@playwright/test";
import { SalesPortalPage } from "ui/pages/salesPortal.page";

// общий класс сугубо для модалко от которого можно будет наследоваться для конкретных модалок
export abstract class Modal extends SalesPortalPage {
  async waitForClosed() {
    await expect(this.uniqueElement).not.toBeVisible();
  }
}
