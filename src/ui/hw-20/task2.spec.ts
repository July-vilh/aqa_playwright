/* Разработать тест со следующими шагами:
https://anatoly-karpovich.github.io/demo-shopping-cart/
  - добавить продукты 2,4,6,8,10
  - завалидировать бейдж с количеством
  - открыть чекаут
  - завалидировать сумму и продукты
  - ввести все найденные вами промокоды (вспоминаем первую лекцию)
  - завалидировать конечную сумму
  - зачекаутиться
  - завалидировать сумму */

import { test, Page, expect } from "@playwright/test";
enum Promocodes {
  DISCOUNT20 = "HelloThere",
  DISCOUNT15 = "15-PERCENT-FOR-CSS",
  DISCOUNT10_BASIC = "10-PERCENT-FOR-REDEEM",
  DISCOUNT10 = "HOT-COURSE",
  DISCOUNT8 = "NO-PYTHON",
  DISCOUNT7 = "JAVA-FOR-BOOMERS",
  DISCOUNT5 = "5-PERCENT-FOR-UTILS",
}

test.describe("[UI] [Shopping Cart] [Catalog]", () => {
  test("Successfully checkout with 5 products", async ({ page }) => {
    await page.goto("https://anatoly-karpovich.github.io/demo-shopping-cart/");

    //- добавить продукты 2,4,6,8,10
    await addProductsToCartButton("Product 2", page).click();
    await addProductsToCartButton("Product 4", page).click();
    await addProductsToCartButton("Product 6", page).click();
    await addProductsToCartButton("Product 8", page).click();
    await addProductsToCartButton("Product 10", page).click();

    //- открыть чекаут + завалидировать сумму и продукты (названия)
    const [price2, price4, price6, price8, price10] = await Promise.all([
      getProductPrice("Product 2", page),
      getProductPrice("Product 4", page),
      getProductPrice("Product 6", page),
      getProductPrice("Product 8", page),
      getProductPrice("Product 10", page),
    ]);

    await page.locator("#shopping-cart-btn").click();
    const total = price2 + price4 + price6 + price8 + price10;
    await expect(page.locator("#total-price")).toHaveText(`$${total}.00`);

    await expect(page.locator("h5")).toContainText([
      "Product 2",
      "Product 4",
      "Product 6",
      "Product 8",
      "Product 10",
    ]);

    // - ввести все найденные вами промокоды
    await addPromoCodes(Promocodes.DISCOUNT20, page);
    await addPromoCodes(Promocodes.DISCOUNT15, page);
    await addPromoCodes(Promocodes.DISCOUNT10, page);
    await addPromoCodes(Promocodes.DISCOUNT8, page);
    await addPromoCodes(Promocodes.DISCOUNT7, page);
    await addPromoCodes(Promocodes.DISCOUNT5, page);
    await addPromoCodes(Promocodes.DISCOUNT10_BASIC, page);

    // - завалидировать конечную сумму
    const finalDiscount = await getDiscount(page);
    const finalPriceWithDiscount = total * (1 - finalDiscount / 100);
    const discount = total - finalPriceWithDiscount;
    await expect(page.locator("#total-price")).toHaveText(
      `$${finalPriceWithDiscount.toFixed(2)} (-$${discount})`
    );

    // - зачекаутиться + завалидировать сумму
    await page.locator("#continue-to-checkout-button").click();
    await expect(page.locator(".text-muted")).toHaveText(
      `$${finalPriceWithDiscount.toFixed(2)}`
    );
  });

  // функция что бы - добавить продукты 2,4,6,8,10
  function addProductsToCartButton(productName: string, page: Page) {
    return page
      .locator("div.card-body")
      .filter({ has: page.getByText(productName, { exact: true }) })
      .getByRole("button", { name: "Add to card" });
  }

  //функции для получения цен продуктов
  async function getProductPrice(
    productName: string,
    page: Page
  ): Promise<number> {
    const productPriceSelector = getProductPriceSelector(productName, page);
    const priceText = await productPriceSelector.innerText();
    const price = priceText.replace("$", "");
    return +price;
  }
  function getProductPriceSelector(productName: string, page: Page) {
    return page
      .locator("div.card-body")
      .filter({ has: page.getByText(productName, { exact: true }) })
      .locator("span");
  }

  //функция для добавления промокодов
  async function addPromoCodes(promo: Promocodes, page: Page) {
    await page.locator("#rebate-input").fill(promo);
    await page.getByRole("button", { name: "Redeem" }).click();
    await page.waitForTimeout(500);
  }

  //функция вычисления общей скидки на основе промокодов
  async function getDiscount(page: Page) {
    const discounts = await page.locator("#rebates-container #rebates-list small").allTextContents();
    return discounts.reduce((sum, text) => sum + +text.replace("-", "").replace("%", ""), 0);
  }
});
