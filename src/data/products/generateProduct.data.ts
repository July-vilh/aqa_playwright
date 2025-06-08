import { IProduct } from "types/product.types";
import { MANUFACTURERS } from "./manufactures.data";
import { faker } from "@faker-js/faker";
import { getRandomEnumValue } from "utils/enum.utils";

export function generateProductData(params?: Partial<IProduct>): IProduct {
    return {
        name: `Test ${faker.string.alpha(35)}`,
        manufacturer: getRandomEnumValue(MANUFACTURERS),
        price: faker.number.int({ min: 1, max: 99999 }),
        amount: faker.number.int({ min: 0, max: 999 }),
        notes: `Notes ${faker.string.alpha(240)}`,
        ...params,
    };
}