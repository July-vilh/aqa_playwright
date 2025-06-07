import { MAIN_METRICS } from "data/homePage/mainMetrics.data";

export type ModuleName = 'Customers' | 'Products' | 'Orders';

export interface IMainMetricsValues {
  ordersThisYear: number;
  newCustomers: number;
  canceledOrders: number;
  totalRevenue: string;
  avgOrderValue: string;
}

export type MetricTypeMap = {
  [MAIN_METRICS.OrdersThisYear]: number;
  [MAIN_METRICS.NewCustomers]: number;
  [MAIN_METRICS.CanceledOrders]: number;
  [MAIN_METRICS.TotalRevenue]: string;
  [MAIN_METRICS.AvgOrderValue]: string;
};
