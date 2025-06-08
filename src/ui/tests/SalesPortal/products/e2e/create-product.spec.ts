/*Реализовать E2E тест по созданию продукта (модуль Products) по аналогии c Customers с шагами
  - залогиниться 
  - Перейти на страницу Products List 
  - Перейти на страницу Add New Product 
  - Заполнить поля валидными данными
  - Сохранить продукт
  - Проверить наличие продукта в таблице


  Требования найдете в валидационных сообщениях на фронте:) Уникальное поле - Имя*/
import { expect, test } from "fixtures/ui-business.fixture";
import { STATUS_CODES } from "data/schemas/customers/statusCodes.schema";
test.describe("[E2E] [UI] [Products] [Create]", () => {
  let id = "";
  let token = "";
  test("Create product with smoke data", async ({
    signInUIService,
    homeUIService,
    productsUIService,
    addNewProductUIService,
    productsController,
  }) => {
    token = await signInUIService.SignInAsLocalUser();
    await homeUIService.openModule("Products");
    console.log("Открываем Add New Product");
    await productsUIService.openAddPage();
    const createdProduct = await addNewProductUIService.create();
    const response = await productsController.getById(
      createdProduct._id,
      token
    );
    id = createdProduct._id;
    expect(response.status).toBe(STATUS_CODES.OK);
  });

  test.afterEach(async ({ productsController }) => {
    await productsController.delete(id, token);
  });
});
