export const apiConfig = {
  BASE_URL: "https://aqa-course-project.app",
  ENDPOINTS: {
    LOGIN: "/api/login",
    CUSTOMERS: "/api/customers",
    CUSTOMER_BY_ID: (id: string) => `/api/customers/${id}/`,
    METRICS: "/api/metrics",
    PRODUCTS: "/api/products",
    PRODUCT_BY_ID: (id: string) => `/api/products/${id}/`,
  },
} as const;
