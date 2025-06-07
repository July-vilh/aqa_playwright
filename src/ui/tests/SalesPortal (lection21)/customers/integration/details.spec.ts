import { apiConfig } from "config/api-config";
import { COUNTRIES } from "data/customers/countries.data";
import { test, expect } from "fixtures/businessSteps.fixture";
import { convertToDateAndTime } from "utils/date.utils";

/* - Это UI-тест, который проверяет, 
что на странице деталей клиента отображаются корректные данные, которые приходят с сервера.
- если изменить данные на сайте = тест не сломаетя тк мы проверяем как фронт отображает данные которые переданы
здесь actual = expected поэтому тест никогда не будет падать тк мы не проверяем живые данные а проверяем фронт граммотно рендерит данные
- живые данные на уровне API тестов
- что бы тесты работали и когда кастомеров в таблице 0 надо = надо подмокать страницу customer list и положить в нее только 1 кастомера */

test.describe("[UI] [Customers] [Details]", () => {
  test("Should display valid customer data", async ({
    loginAsLocalUser,
    homePage,
    customerDetailsPage,
    mock,
  }) => {
    const expected = {
      email: "test1748970606002@gmail.com",
      name: "Test umBxNQiTghubtKQetLkpeagKlQKHclxogZp",
      country: COUNTRIES.GREAT_BRITAIN as COUNTRIES,
      city: "City LcyhXBMNqdbuYZp",
      street: "Street 6BLKSvAlN61SEUsoPcpPXEcySMfeH0UVP",
      house: 659,
      flat: 1397,
      phone: "+1900364263",
      createdOn: "2025-06-03T17:10:06.000Z",
      notes:
        "Notes IgmuhWAVLRclFXhgZLNjgOBDEMCzYRFYLZGQdNZeAvXLFDZfutseUpjtBdToMMpHpkJzMaiYLxAbwVviiEHsCNyvAhOJAJVSiVTVlgfMfEnuokmXgsJOHZYoKEYHuEUmoHeSWhpCLmdYtEsTexIQLCZznUSXkEkLoNgojqztBHilBuPoNSYlDrlwmKIBMkUSNnqGmqwSZJuPsnYCNTviAcfFVyOTXHMJtolYabTeWnhNjOWStRXk",
    };

    const id = "683f2c6e1c508c5d5e50a2f0";

    // // Мокается HTTP-запрос к API /customer/:id.
    // // Вместо настоящего ответа с сервера возвращаются подставленные данные из expected.
    // await page.route(
    //   apiConfig.BASE_URL + apiConfig.ENDPOINTS.CUSTOMERS,
    //   async (route) => {
    //     await route.fulfill({
    //       status: 200,
    //       contentType: "application/json",
    //       body: JSON.stringify({
    //         Customer: {
    //           _id: id,
    //           ...expected,
    //         },
    //         ErrorMessage: null,
    //         IsSuccess: true,
    //       }),
    //     });
    //   }
    // );

    // await mock.customers({
    //   Customers: [
    //     {
    //       _id: id,
    //       ...expected,
    //     },
    //   ],
    //   ErrorMessage: null,
    //   IsSuccess: true,
    //   sorting: {
    //     sortField: "createdOn",
    //     sortOrder: "desc",
    //   },
    // });

    await mock.customerDetails({
      Customer: { _id: id, ...expected },
      ErrorMessage: null,
      IsSuccess: true,
    });

    await loginAsLocalUser();
    await homePage.waitForOpened();
    //await customersPage.waitForOpened();
    //setTimeout(() => {}, 10000);

    // await customersPage.clickTableAction(
    //   "test1748791073389@gmail.com",
    //   "details"
    // );
    // await customerDetailsPage.waitForOpened();

    // const actual = await customerDetailsPage.getDetails();
    // expect(actual).toEqual({
    //   ...expected,
    //   createdOn: convertToDateAndTime(expected.createdOn),
    // });

    await customerDetailsPage.open(id);

    await customerDetailsPage.waitForOpened();

    const actual = await customerDetailsPage.getDetails();
    expect(actual).toEqual({
      ...expected,
      createdOn: convertToDateAndTime(expected.createdOn),
    });
  });
});
