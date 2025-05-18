// описание json схемы для API тестов (валидации json схемы в API тестах)
// properties = те ключи которые будут в объекте находиться
// после properties в required описываются все обязательные поля

import { COUNTRIES } from "data/customers/countries.data";

export const customerSchema = {
  type: "object",
  properties: {
    Customer: {
      type: "object",
      properties: {
        _id: { type: "string" },
        email: { type: "string" },
        name: { type: "string" },
        country: { type: "string", enum: Object.values(COUNTRIES) }, //1 любая из countries возвращается с типом string
        city: { type: "string" },
        street: { type: "string" },
        house: { type: "number" },
        flat: { type: "number" },
        phone: { type: "string" },
        notes: { type: "string" },
        createdOn: { type: "string" },
      },
      required: ["_id", "email", "name", "country", "city", "street", "house", "flat", "phone", "createdOn"],
    },
    IsSuccess: { type: "boolean"},
    ErrorMessage: { type: ["string", "null"]},
  },
  required: ["Customer", "IsSuccess", "ErrorMessage"],
};
