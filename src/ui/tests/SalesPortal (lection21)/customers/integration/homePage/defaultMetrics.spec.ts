import {
  MAIN_METRICS,
  DEFAULT_METRICS_RESPONSE,
} from "data/homePage/mainMetrics.data";
import { test, expect } from "fixtures/businessSteps.fixture";
import numeral from "numeral";

interface IMetricTestData {
  metricName: MAIN_METRICS;
  expected: string;
}

const formatCurrency = (value: number): string => {
  return "$" + numeral(value).format("0.0a");
};

const metricsTestData: IMetricTestData[] = [
  {
    metricName: MAIN_METRICS.OrdersThisYear,
    expected: numeral(
      DEFAULT_METRICS_RESPONSE.Metrics.orders.totalOrders
    ).format("0.0a"),
  },
  {
    metricName: MAIN_METRICS.NewCustomers,
    expected: numeral(
      DEFAULT_METRICS_RESPONSE.Metrics.customers.totalNewCustomers
    ).format("0.0a"),
  },
  {
    metricName: MAIN_METRICS.CanceledOrders,
    expected: numeral(
      DEFAULT_METRICS_RESPONSE.Metrics.orders.totalCanceledOrders
    ).format("0.0a"),
  },
  {
    metricName: MAIN_METRICS.TotalRevenue,
    expected: formatCurrency(
      DEFAULT_METRICS_RESPONSE.Metrics.orders.totalRevenue
    ),
  },
  {
    metricName: MAIN_METRICS.AvgOrderValue,
    expected: formatCurrency(
      DEFAULT_METRICS_RESPONSE.Metrics.orders.averageOrderValue
    ),
  },
];

test.describe("[UI] [Home] Main Metrics", () => {
  for (const { metricName, expected } of metricsTestData) {
    test(`Should display correct '${metricName}' metric`, async ({loginAsLocalUser, homePage, mock}) => {
      await mock.metrics(DEFAULT_METRICS_RESPONSE);
      await loginAsLocalUser();
      const raw = await homePage.getMetricsValueByName(metricName);

      let actual: string;

      if (metricName === MAIN_METRICS.NewCustomers || metricName === MAIN_METRICS.OrdersThisYear || metricName === MAIN_METRICS.CanceledOrders) {
        actual = (typeof raw === "number" ? raw : Number(raw)).toFixed(1);
      } else {
        actual = typeof raw === "string" ? raw.replace(/\$/g, "") : String(raw);
      }

      const expectedClean = expected.replace(/\$/g, "");
      expect(actual).toBe(expectedClean);
    });
  }
});

