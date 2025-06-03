export const apiConfig = {
  BASE_URL: "https://aqa-course-project.app",
  ENDPOINTS: {
    LOGIN: "/api/login",
    CUSTOMERS: "/api/customers",
    CUSTOMER_BY_ID: (id: string) => `/api/customers/${id}/`,
  },
} as const;
