export const allCustomersSchema = {
  type: "object",
  properties: {
    Customers: {
      type: "array",
      items: {
        type: "object",
        properties: {
          _id: { type: "string" },
          email: { type: "string" },
          name: { type: "string" },
          country: { type: "string" },
          city: { type: "string" },
          street: { type: "string" },
          house: { type: "number" },
          flat: { type: "number" },
          phone: { type: "string" },
          createdOn: { type: "string" },
          notes: { type: ["string", "null"] },
        },
        required: [
          "_id",
          "email",
          "name",
          "country",
          "street",
          "city",
          "createdOn",
          "house",
          "flat",
          "phone",
        ],
      },
    },
    IsSuccess: { type: "boolean" },
    ErrorMessage: { type: ["string", "null"] },
  },
  required: ["Customers", "IsSuccess", "ErrorMessage"],
};
