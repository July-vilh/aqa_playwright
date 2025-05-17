import { expect } from "@playwright/test";
import { SalesPortalPage } from "ui/pages/salesPortal.page";
import { Modal } from "./modal.page";

export class DeleteModal extends Modal {
  readonly uniqueElement = this.page.locator("div.modal");
  readonly title = this.uniqueElement.locator(".modal-title");
  readonly deleteButton = this.uniqueElement.getByRole("button", {name: "Yes, Delete"});
  readonly cancelButton = this.uniqueElement.getByRole("button", {name: "Cancel"});
  readonly closeButton = this.uniqueElement.locator('button[aria-label="Close"]');

  async clickDelete() {
    await this.deleteButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }

  async close() {
      await this.closeButton.click();
      await expect(this.uniqueElement).not.toBeVisible();
    }
}