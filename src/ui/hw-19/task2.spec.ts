/* Разработать тест со следующими шагами:
 - Открыть url https://anatoly-karpovich.github.io/aqa-course-project/#
 - Войти в приложения используя учетные данные test@gmail.com / 12345678 при этом:
 - дождаться исчезновения спиннеров
 - проверить действительно ли пользователь с логином Anatoly вошел в систему
 - Проверить скриншотом боковое навигационное меню с выбранной страницей Home */

import test, { expect } from "@playwright/test";

test.describe("[UI] [Sales Portal] Login", () => {
  const validCredentials = {
    email: "test@gmail.com",
    password: "12345678",
  };
  test("check Dynamic Controls page", async ({ page }) => {
    //precondition
    await page.goto("https://anatoly-karpovich.github.io/aqa-course-project/#");

    //action: Войти в приложения используя учетные данные test@gmail.com / 12345678 + дождаться исчезновения спиннеров
    await page.locator("#emailinput").fill(validCredentials.email);
    await page.locator("#passwordinput").fill(validCredentials.password);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator(".spinner-border")).toHaveCount(0, {
      timeout: 10000,
    });

    //assert: проверить действительно ли пользователь с логином Anatoly вошел в систему
    await expect(page.locator("strong")).toHaveText("Anatoly");

    //assert: Проверить скриншотом боковое навигационное меню с выбранной страницей Home
    await expect(page.locator("#sidebar")).toHaveScreenshot();
  });
});
