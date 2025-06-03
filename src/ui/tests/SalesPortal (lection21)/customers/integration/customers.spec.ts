import { apiConfig } from "config/api-config";
import { COUNTRIES } from "data/customers/countries.data";
import { test, expect } from "fixtures/businessSteps.fixture";
import { customersSortField, sortDirection } from "types/api.types";

test.describe("[UI] [Customers] [Table component]", async () => {
  const customer = {
    email: "test1748970606002@gmail.com",
    name: "Test umBxNQiTghubtKQetLkpeagKlQKHclxogZp",
    country: COUNTRIES.GREAT_BRITAIN as COUNTRIES,
    city: "City LcyhXBMNqdbuYZp",
    street: "Street 6BLKSvAlN61SEUsoPcpPXEcySMfeH0UVP",
    house: 659,
    flat: 1397,
    phone: "+1900364263",
    createdOn: "2025-06-03T17:10:06.000Z",
    _id: "683f2c6e1c508c5d5e50a2f0",
    notes:
      "Notes IgmuhWAVLRclFXhgZLNjgOBDEMCzYRFYLZGQdNZeAvXLFDZfutseUpjtBdToMMpHpkJzMaiYLxAbwVviiEHsCNyvAhOJAJVSiVTVlgfMfEnuokmXgsJOHZYoKEYHuEUmoHeSWhpCLmdYtEsTexIQLCZznUSXkEkLoNgojqztBHilBuPoNSYlDrlwmKIBMkUSNnqGmqwSZJuPsnYCNTviAcfFVyOTXHMJtolYabTeWnhNjOWStRXk",
  };

  const fields: customersSortField[] = [
    "createdOn",
    "email",
    "name",
    "country",
  ];
  const directions: sortDirection[] = ["desc", "asc"];

  fields.forEach((field) => {
    directions.forEach((direction) => {
      test(`Should display correct sorting for ${field} field and ${direction} direction`, async ({
        loginAsLocalUser,
        customersPage,
        homePage,
        mock,
      }) => {
        await mock.customers({
          Customers: [
            {
              ...customer,
            },
          ],
          ErrorMessage: null,
          IsSuccess: true,
          sorting: {
            sortField: field,
            sortOrder: direction,
          },
        });

        await loginAsLocalUser();

        await homePage.waitForOpened();
        await customersPage.open();
        await customersPage.waitForOpened();
        await expect(customersPage.table).toHaveScreenshot();
      });
    });
  });

  test("Should send correct query clicking on Created On header", async ({
    loginAsLocalUser,
    customersPage,
    homePage,
    page,
  }) => {
    await loginAsLocalUser();
    await homePage.waitForOpened();
    await customersPage.open();
    await customersPage.waitForOpened();
    // const [request] = await Promise.all([
    //   page.waitForRequest((request) => request.url().includes(apiConfig.ENDPOINTS.CUSTOMERS)),
    //   customersPage.clickTableHeader("createdOn"),
    // ]);
    const request = await customersPage.interceptRequest(
      apiConfig.ENDPOINTS.CUSTOMERS,
      customersPage.clickTableHeader.bind(customersPage),
      "createdOn"
    );
    // expect(request.url()).toBe(
    //   `${apiConfig.BASE_URL}/${apiConfig.ENDPOINTS.CUSTOMERS}?sortField=createdOn&sortOrder=asc`
    // );
    expect(request.url()).toContain("sortField=createdOn");
    expect(request.url()).toContain("sortOrder=asc");
  });
});
