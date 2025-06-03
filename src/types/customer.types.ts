import { COUNTRIES } from "data/customers/countries.data";
import { customersSortField, IResponseFields, sortDirection } from "./api.types";
export interface ICustomer {
  email: string;
  name: string;
  country: COUNTRIES;
  city: string;
  street: string;
  house: number;
  flat: number;
  phone: string;
  notes?: string;
}

export interface ICustomerFromResponse extends ICustomer {
  _id: string;
  createdOn: string;
}

export interface ICustomerResponse extends IResponseFields {
  Customer: ICustomerFromResponse;
}

export interface ICustomersResponse extends IResponseFields {
  Customers: ICustomerFromResponse[];
  sorting: {
    sortField: customersSortField;
    sortOrder: sortDirection;
  };
}

export type ICustomerInTable = Pick<ICustomer, "email" | "country" | "name">;
