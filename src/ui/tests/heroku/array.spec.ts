import test, { Locator } from "@playwright/test";

test.describe("[UI] [Heroku] [Links]", () => {
  test("Links array", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    const links = await page.locator("li a").all();

    const linksWithB: Locator[] = [];
    for (const link of links) {
      const linkText = await link.innerText();
      if (linkText.includes("B")) linksWithB.push(link);
    }

    //вернуть названия всех линок на странице
    const linksTextArray = await Promise.all(links.map((el) => el.innerText()));
    console.log(linksTextArray);

    // const linksWithText = linksTextArray.filter((text) => text !== "");
    // expect(linksWithText.length).toBe(45);
  });
});
