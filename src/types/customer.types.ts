//import { COUNTRIES } from "data/customers/countries.data";
export interface ICustomer {
  email: string;
  name: string;
  country: COUNTRIES;
  city: string;
  street: string;
  house: string;
  flat: string;
  phone: string;
  notes?: string;
}