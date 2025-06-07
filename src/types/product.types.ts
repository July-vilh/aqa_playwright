import { MANUFACTURERS } from "data/products/manufactures.data";

export interface IProduct {
  _id: string;
  name: string;
  amount: number;
  price: number;
  manufacturer: MANUFACTURERS;
  notes?: string;
  received: boolean;
}

export interface ITopProduct {
  name: string;
  sales: number;
}