import { Page } from '@playwright/test';

export class PageHolder {
  constructor(protected page: Page) {}
}