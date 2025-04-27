/* Разработать тест со следующими шагами:

  - открыть https://the-internet.herokuapp.com/
  - перейти на страницу Dynamic Controls
  - Дождаться появления кнопки Remove
  - Завалидировать текста в заголовке страницы
  - Чекнуть чекбокс
  - Кликнуть по кнопке Remove
  - Дождаться исчезновения чекбокса
  - Проверить наличие кнопки Add
  - Завалидировать текст It's gone!
  - Кликнуть на кнопку Add
  - Дождаться появления чекбокса
  - Завалидировать текст It's back! */

import test, { expect } from "@playwright/test";

test.describe("[UI] [Heroku] Dynamic Controls", () => {
  test("check Dynamic Controls page", async ({ page }) => {

    //precondition
    await page.goto("https://the-internet.herokuapp.com/");

    //arrange: переход на страницу Dynamic Controls
    await page
      .getByRole("link", {
        name: "Dynamic Controls",
        exact: true,
      })
      .click();

    //assert: Дождаться появления кнопки Remove
    await expect(page.getByRole("button", { name: "Remove" })).toBeVisible({
      timeout: 10000,
    });

    //assert: Завалидировать текста в заголовке страницы
    await expect(
      page.getByRole("heading", { name: "Dynamic Controls" })
    ).toContainText("Dynamic Controls");
    await expect(page.locator("//p")).toContainText(
      "This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously."
    );

    //action (act): Чекнуть чекбокс + Кликнуть по кнопке Remove
    const checkbox = 'input[type="checkbox"]';
    await page.locator(checkbox).check();
    await page.getByRole("button", { name: "Remove" }).click();

    //assert: Дождаться исчезновения чекбокса + Проверить наличие кнопки Add + Завалидировать текст It's gone!
    await expect(page.locator(checkbox)).toBeHidden();
    await expect(page.getByRole("button", { name: "Add" })).toBeVisible();
    await expect(page.locator("//*[@id='message']")).toHaveText("It's gone!");

    //action (act): Кликнуть на кнопку Add
    await page.getByRole("button", { name: "Add" }).click();

    //assert: Дождаться появления чекбокса + Завалидировать текст It's back!
    await expect(page.locator("//*[@id='checkbox']")).toBeVisible({
      timeout: 10000,
    });
    await expect(page.getByText("It's back!")).toBeVisible();
  });
});
