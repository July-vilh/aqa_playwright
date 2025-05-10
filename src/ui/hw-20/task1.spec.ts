/*Создать тест сьют используя DDT подход с негативными тест-кейсами по регистрации на сайте
https://anatoly-karpovich.github.io/demo-login-form/

Требования:
Страница регистрации:
  Username: обязательное, от 3 до 40 символов включительно, запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
  Password: обязательное, от 8 до 20 символов включительно, необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен

Страница логина:
  Username: обязательное
  Password: обязательное */

import { test, expect } from "@playwright/test";

interface IRegistrationData {
  testName: string;
  username: string;
  password: string;
  testMessage: string;
  needsRemoveMaxLength?: boolean;
}

const registrationInvalidTestData: IRegistrationData[] = [
  {
    testName: "Empty username field + valid password",
    username: "",
    password: "ValidPassword",
    testMessage: "Username is required",
    needsRemoveMaxLength: false,
  },
  {
    testName: "Invalid min length for username and password",
    username: "we",
    password: "123",
    testMessage: "Please, provide valid data",
    needsRemoveMaxLength: false,
  },
  {
    testName: "Invalid min length for username + valid password",
    username: "we",
    password: "ValidPassword",
    testMessage: "Username should contain at least 3 characters",
    needsRemoveMaxLength: false,
  },
  {
    testName: "Invalid max length for username + valid password",
    username: "veryLongUsernameveryLongUsernameVeryLongUser",
    password: "ValidPassword",
    testMessage: "Username can't exceed 40 characters",
    needsRemoveMaxLength: true,
  },
  {
    testName: "Repeat registration with already used username",
    username: "validUsername1",
    password: "ValidPassword",
    testMessage: "Username is in use",
    needsRemoveMaxLength: false,
  },
  {
    testName: "Empty password field + valid username",
    username: "validUsername1",
    password: "",
    testMessage: "Password is required",
    needsRemoveMaxLength: false,
  },
  {
    testName: "Invalid min length for password + valid username",
    username: "validUsername1",
    password: "123",
    testMessage: "Password should contain at least 8 characters",
    needsRemoveMaxLength: false,
  },
  {
    testName: "Invalid max length for password + valid username",
    username: "validUsername1",
    password: "123456789123456789123s",
    testMessage: "Password can't exceed 20 characters",
    needsRemoveMaxLength: true,
  },
  {
    testName: "No character in lower case for password + valid username",
    username: "validUsername1",
    password: "PASSWORD123",
    testMessage: "Password should contain at least one character in lower case",
    needsRemoveMaxLength: false,
  },
  {
    testName: "Username with prefix and postfix spaces + valid password",
    username: " validUsername1 ",
    password: "ValidPassword",
    testMessage: "Prefix and postfix spaces are not allowed is username",
    needsRemoveMaxLength: false,
  },
];

//Функция для ввода данных и клика по кнопке регистрации
async function fillRegistrationForm(form, username: string, password: string) {
  await form.locator("#userNameOnRegister").fill(username);
  await form.locator("#passwordOnRegister").fill(password);
  await form.locator("#register").click();
}

//Функция для проверки сообщения об ошибке
async function checkErrorMessage(form, expectedMessage: string) {
  await expect(form.locator("#errorMessageOnRegister")).toHaveText(
    expectedMessage
  );
}

test.describe("[UI] [Demo Login Form] [Registration] Negative scenarios (DDT)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://anatoly-karpovich.github.io/demo-login-form/");
    await page.locator("#registerOnLogin").click();
  });

  registrationInvalidTestData.forEach(
    ({ testName, username, password, testMessage, needsRemoveMaxLength }) => {
      test(testName, async ({ page }) => {
        const form = page.locator(".registerForm");

        //Если нужно убрать максимальную длину (для тестов "Invalid max length for username + valid password"
        //и "Invalid max length for password + valid username")
        if (needsRemoveMaxLength) {
          await page.evaluate(() => {
            const usernameInput = document.querySelector("#userNameOnRegister");
            const passwordInput = document.querySelector("#passwordOnRegister");
            if (usernameInput) {
              usernameInput.removeAttribute("maxlength");
            }
            if (passwordInput) {
              passwordInput.removeAttribute("maxlength");
            }
          });
        }

        //Для теста "Repeat registration with already used username" (ошибка "Username is in use")
        if (testName === "Repeat registration with already used username") {
          //Заполнение формы с валидными данными и регистрация
          await fillRegistrationForm(form, username, password);

          //Повторное заполнение формы с валидными данными и регистрация
          await fillRegistrationForm(form, username, password);

          //Проверка ошибки "Username is in use"
          await checkErrorMessage(form, testMessage);
        } else {
          // Для всех остальных кейсов
          await fillRegistrationForm(form, username, password);
          await checkErrorMessage(form, testMessage);
        }
      });
    }
  );
});
