import { COUNTRIES } from "data/customers/countries.data";
import { ORDER_STATUSES } from "data/orders/statuses.data";
import { ICustomerFromResponse } from "./customer.types";
import { IProduct } from "./product.types";
import { IUser } from "./user.types";
import { DELIVERY_CONDITIONS } from "data/orders/deliveryConditions.data";
import { ORDER_HISTORY_ACTIONS } from "data/orders/historyActions.data";

export interface IOrder {
  _id: string;
  status: ORDER_STATUSES;
  customer: ICustomerFromResponse;
  products: IProduct[];
  delivery: IDelivery | null;
  total_price: number;
  createdOn: string;
  comments?: IOrderComment[];
  history?: IOrderHistory[];
  assignedManager: IUser | null;
}


export interface IAddress {
  country: COUNTRIES;
  city: string;
  street: string;
  house: number;
  flat: number;
}

export interface IOrderComment {
  _id: string;
  text: string;
  createdOn: string;
}

export interface IDelivery {
  finalDate: string;
  condition: DELIVERY_CONDITIONS;
  address: IAddress;
}

export interface IOrderHistory {
  status: ORDER_STATUSES;
  customer: string;
  products: IProduct[];
  total_price: number;
  delivery: IDelivery | null;
  changedOn: string;
  action: ORDER_HISTORY_ACTIONS;
  performer: IUser;
}

export interface IPerformer {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    roles: string[];
    createdOn: string;
}


