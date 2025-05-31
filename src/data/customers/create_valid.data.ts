import { generateCustomerData } from "data/customers/generateCustomer.data";

export const validTestCases = [
  {
    name: "Create customer with default valid data",
    data: generateCustomerData(),
    expectedError: null,
    isSuccess: true,
  },
  {
    name: "Create customer with empty notes",
    data: generateCustomerData({ notes: "" }),
    expectedError: null,
    isSuccess: true,
  },
  {
    name: "Create customer with minimal flat and house",
    data: generateCustomerData({ flat: 1, house: 1 }),
    expectedError: null,
    isSuccess: true,
  },
  {
    name: "Create customer with maximal flat and house",
    data: generateCustomerData({ flat: 9999, house: 999 }),
    expectedError: null,
    isSuccess: true,
  },
  {
    name: "Create customer with valid phone with 10 digits",
    data: generateCustomerData({ phone: "+1234567890" }),
    expectedError: null,
    isSuccess: true,
  },
  {
    name: "Create customer with valid phone with 20 digits",
    data: generateCustomerData({ phone: "+12345678901234567890" }),
    expectedError: null,
    isSuccess: true,
  },
];
