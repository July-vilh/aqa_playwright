import { MANUFACTURERS } from "data/products/manufactures.data";
import { IResponseFields, sortDirection } from "./api.types";

export interface IProduct {
  name: string;
  manufacturer: MANUFACTURERS;
  price: number;
  amount: number;
  notes?: string;
}

export interface IProductFromResponse extends IProduct {
  _id: string;
  createdOn: string;
}

export interface IProductResponse extends IResponseFields {
  Product: IProductFromResponse;
}

export interface IProductsResponse extends IResponseFields {
  Products: IProductFromResponse[];
  sorting: {
    sortField: "createdOn" | "name" | "manufacturer" | "price";
    sortOrder: sortDirection;
  };
}

export interface IProductInOrder extends IProduct {
  _id: string;
  received: boolean;
}

export interface ITopProduct {
  name: string;
  sales: number;
}

export interface IProductsResponse extends IResponseFields {
  Products: IProductFromResponse[];
  sorting: {
    sortField: "createdOn" | "name" | "manufacturer" | "price";
    sortOrder: sortDirection;
  };
}
