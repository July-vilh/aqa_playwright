import { faker } from "@faker-js/faker";
import { ICustomer } from "types/customer.types";
import { getRandomEnumValue } from "utils/enum.utils";
import { COUNTRIES } from "data/customers/countries.data";
// params?: Partial<ICustomer>: функция принимает объект которого может и не быть (параметры необязательные)

export function generateCustomerData(params?: Partial<ICustomer>): ICustomer {
  return {
    email: `julytest${Date.now()}@gmail.com`,
    name: `Test ${faker.string.alpha(35)}`,
    country: getRandomEnumValue(COUNTRIES),
    city: `City ${faker.string.alpha(15)}`,
    street: `Street ${faker.string.alphanumeric(33)}`,
    house: faker.number.int(999),
    flat: faker.number.int(9999),
    phone: `+${faker.number.int(999999999999999)}`,
    notes: `Notes ${faker.string.alpha(244)}`,
    // если в params придет хоть что-то то это что-то будет точно соответствовать хотя бы 1 ключу-значению с точными
    // данными которые хранятся в этом объекте
    // то что пришло последнее будет перезаписывать то что пришло раньше благодаря спреду таким образом данные всегда будут новые
    ...params,
  };
}
