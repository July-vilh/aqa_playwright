/*   Разработайте смоук тест-сьют с тестами на REGISTER 
на странице https://anatoly-karpovich.github.io/demo-login-form/

  Требования:
      1. Username: обязательное, от 3 до 40 символов включительно, 
      запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
      2. Password: обязательное, от 8 до 20 символов включительно, 
      необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен */

import test, { expect } from "@playwright/test";

test.describe("[UI] [Demo] Register Form", () => {
  const validCredentials = {
    username: "validuser1",
    password: "ValidPassword",
  };

  const invalidCredentials = {
    username: "we",
    password: "123",
  };

  async function submitUser(page, username: string, password: string) {
    await page.locator("#userNameOnRegister").fill(username);
    await page.locator("#passwordOnRegister").fill(password);
    await page.locator("#register").click();
  }

  async function expectNotificationText(page, expectedText: string) {
    const notification = page.locator("#errorMessageOnRegister");
    await expect(notification).toContainText(expectedText);
  }

  test.beforeEach(async ({ page }) => {
    // Arrange: переход на страницу регистрации
    await page.goto("https://anatoly-karpovich.github.io/demo-login-form/");
    await page.locator("#registerOnLogin").click();
  });

  test("Should register with valid credentials", async ({ page }) => {
    // Act: заполняем форму и отправляем
    await submitUser(
      page,
      validCredentials.username,
      validCredentials.password
    );

    // Assert: проверяем успешное сообщение
    await expectNotificationText(
      page,
      "Successfully registered! Please, click Back to return on login page"
    );
  });

  test("Should NOT register with invalid credentials", async ({ page }) => {
    //action (act)
    await submitUser(
      page,
      invalidCredentials.username,
      invalidCredentials.password
    );

    //assert
    await expectNotificationText(page, "Please, provide valid data");
  });

  test("Should NOT register with invalid length of password", async ({
    page,
  }) => {
    //action (act)
    await submitUser(
      page,
      validCredentials.username,
      invalidCredentials.password
    );

    //assert
    await expectNotificationText(
      page,
      "Password should contain at least 8 characters"
    );
  });

  test("Should NOT register with invalid length of username", async ({
    page,
  }) => {
    //action (act)
    await submitUser(
      page,
      invalidCredentials.username,
      validCredentials.password
    );

    //assert
    await expectNotificationText(
      page,
      "Username should contain at least 3 characters"
    );
  });

  test("Should NOT register with empty username", async ({ page }) => {
    //action (act)
    await submitUser(page, "", validCredentials.password);

    //assert
    await expectNotificationText(page, "Username is required");
  });

  test("Should NOT register with empty password", async ({ page }) => {
    //action (act)
    await submitUser(page, validCredentials.username, "");

    //assert
    await expectNotificationText(page, "Password is required");
  });

  test("Should NOT register with already used username", async ({ page }) => {
    //action (act)
    await submitUser(
      page,
      validCredentials.username,
      validCredentials.password
    );

    await submitUser(
      page,
      validCredentials.username,
      validCredentials.password
    );

    //assert
    await expectNotificationText(page, "Username is in use");
  });

  test("Should NOT register with prefix space in username", async ({
    page,
  }) => {
    //action (act)
    await submitUser(page, " validuser1", validCredentials.password);

    //assert
    await expectNotificationText(
      page,
      "Prefix and postfix spaces are not allowed is username"
    );
  });

  test("Should NOT register with password which contains only numbers", async ({
    page,
  }) => {
    //action (act)
    await submitUser(page, validCredentials.username, "123456789");

    //assert
    await expectNotificationText(
      page,
      "Password should contain at least one character in lower case"
    );
  });
});
