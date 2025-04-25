/* Создайте ОДИН смоук тест со следующими шагами:

1. Переход на страницу https://anatoly-karpovich.github.io/demo-registration-form/
2. Заполните форму регистрации
3. Проверьте, что пользователь успешно зарегистрирован */

import { test, expect } from "@playwright/test";

test.describe("[UI] [Demo] Registration page", () => {
  const validCredentials = {
    firstName: "July",
    lastName: "Vilchynskaya",
    address: "Lithuania, Kaunas",
    email: "july.vilh@gmail.com",
    phone: "370695841",
    country: "USA",
    gender: "female",
    hobbies: "Travelling",
    language: "Russian",
    skills: ["JavaScript", "C++", "Ruby"],
    yearOfBirth: "1998",
    monthOfBirth: "January",
    dayOfBirth: "6",
    password: "123456",
    confirmPassword: "123456",
  };

  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://anatoly-karpovich.github.io/demo-registration-form/"
    );
    await page.locator('//button[@class="btn btn-primary"]').click();
  });

  test("fill fields with valid data", async ({ page }) => {
    await page.locator("#firstName").fill(validCredentials.firstName);
    await page.locator("#lastName").fill(validCredentials.lastName);
    await page.locator("#address").fill(validCredentials.address);
    await page.locator("#email").fill(validCredentials.email);
    await page.locator("#phone").fill(validCredentials.phone);
    await page.locator("#country").selectOption(validCredentials.country);
    await page.locator("//input[@value='female']").click();
    await page.locator('.hobby[value="Travelling"]').click();
    await page.locator("#language").fill(validCredentials.language);
    await page.locator("#skills").selectOption(validCredentials.skills);
    await page.locator("#year").selectOption(validCredentials.yearOfBirth);
    await page.locator("#month").selectOption(validCredentials.monthOfBirth);
    await page.locator("#day").selectOption(validCredentials.dayOfBirth);
    await page.locator("#password").fill(validCredentials.password);
    await page
      .locator("#password-confirm")
      .fill(validCredentials.confirmPassword);
    await page.locator('button[type="submit"]').click();

    //assert
    await expect(page.locator("h2.text-center")).toContainText(
      "Registration Details"
    );

    await expect(page.locator("#fullName")).toContainText(
      `${validCredentials.firstName} ${validCredentials.lastName}`
    );
    await expect(page.locator("#address")).toContainText(
      `${validCredentials.address}`
    );
    await expect(page.locator("#email")).toContainText(
      `${validCredentials.email}`
    );
    await expect(page.locator("#phone")).toContainText(
      `${validCredentials.phone}`
    );
    await expect(page.locator("#country")).toContainText(
      `${validCredentials.country}`
    );
    await expect(page.locator("#gender")).toContainText(
      `${validCredentials.gender}`
    );
    await expect(page.locator("#language")).toContainText(
      `${validCredentials.language}`
    );
    await expect(page.locator("#skills")).toContainText(
      `${validCredentials.skills.join(", ")}`
    );
    await expect(page.locator("#hobbies")).toContainText(
      `${validCredentials.hobbies}`
    );
    const fullDate = `${validCredentials.dayOfBirth} ${validCredentials.monthOfBirth} ${validCredentials.yearOfBirth}`;
    await expect(page.locator("#dateOfBirth")).toContainText(fullDate);
    await expect(page.locator("#password")).toContainText(`******`);
  });
});
