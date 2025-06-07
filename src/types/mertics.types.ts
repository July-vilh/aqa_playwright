import { IResponseFields } from "./api.types";
import { ITopCustomer } from "./customer.types";
import { IOrder } from "./order.types";
import { ITopProduct } from "./product.types";

export interface IMetricsResponse extends IResponseFields {
  Metrics: {
    orders: {
      totalRevenue: number;
      totalOrders: number;
      averageOrderValue: number;
      totalCanceledOrders: number;
      recentOrders: IOrder[];
      ordersCountPerDay: IMetricsCountItem[];
    };
    customers: {
      totalNewCustomers: number;
      topCustomers: ITopCustomer[];
      customerGrowth: IMetricsCountItem[];
    };
    products: {
      topProducts: ITopProduct[];
    };
  };
}

export interface IMetricsCountItem {
  date: IDate;
  count: number;
}

export interface IDate {
  year: number;
  month: number;
  day: number;
}