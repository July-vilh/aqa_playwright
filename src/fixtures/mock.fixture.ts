import { test as base } from './controllers.fixture';
import { Mock } from './mock';

interface MockFixture {
  mock: Mock;
}

export const test = base.extend<MockFixture>({
  mock: async ({ page }, use) => {
    await use(new Mock(page));
  },
});

export { expect } from '@playwright/test';
