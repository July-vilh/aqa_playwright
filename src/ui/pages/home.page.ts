import { Locator, Page } from "@playwright/test";
import {
  IMainMetricsValues,
  MetricTypeMap,
  ModuleName,
} from "types/home.types";
import { SalesPortalPage } from "./salesPortal.page";
import { MAIN_METRICS } from "data/homePage/mainMetrics.data";
import numeral from "numeral";

// этот класс нажимает на кнопки из бокового меню
export class HomePage extends SalesPortalPage {
  title = this.page.locator(".welcome-text");

  // кнопки которые открывают свои модули в нав-бар меню (их локаторы) описание
  // constructor(protected page: Page) // все это убрали после наследования

  customersButton = this.page.getByRole("link", { name: "Customer" });
  productsButton = this.page.getByRole("link", { name: "Products" });
  ordersButton = this.page.getByRole("link", { name: "Orders" });

  readonly ordersThisYear = this.page.locator(
    "#total-orders-container .card-text"
  );
  readonly newCustomers = this.page.locator(
    "#total-customers-container .card-text"
  );
  readonly canceledOrders = this.page.locator(
    "#canceled-orders-container .card-text"
  );
  readonly totalRevenue = this.page.locator(
    "#total-revenue-container .card-text"
  );
  readonly avgOrderValue = this.page.locator(
    "#avg-orders-value-container .card-text"
  );

  uniqueElement = this.title;

  async getMainMetricsValues(): Promise<IMainMetricsValues> {
    return {
      ordersThisYear: +(await this.ordersThisYear.innerText()),
      newCustomers: +(await this.newCustomers.innerText()),
      canceledOrders: +(await this.canceledOrders.innerText()),
      totalRevenue: await this.totalRevenue.innerText(),
      avgOrderValue: await this.avgOrderValue.innerText(),
    };
  }

  async getMetricsValueByName<T extends keyof MetricTypeMap>(
    name: T
  ): Promise<MetricTypeMap[T]> {
    switch (name) {
      case MAIN_METRICS.OrdersThisYear:
        return +(await this.ordersThisYear.innerText()) as MetricTypeMap[T];
      case MAIN_METRICS.NewCustomers:
        return +(await this.newCustomers.innerText()) as MetricTypeMap[T];
      case MAIN_METRICS.CanceledOrders:
        return +(await this.canceledOrders.innerText()) as MetricTypeMap[T];
      case MAIN_METRICS.TotalRevenue:
        return (await this.totalRevenue.innerText()) as MetricTypeMap[T];
      case MAIN_METRICS.AvgOrderValue:
        return (await this.avgOrderValue.innerText()) as MetricTypeMap[T];
      default:
        throw new Error(`Unknown metric name: ${name}`);
    }
  }
}
