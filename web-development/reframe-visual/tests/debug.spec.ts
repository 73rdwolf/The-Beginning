import { test, expect } from '@playwright/test';

test('Debug: Capture screenshot and logs', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
      errors.push(msg.text());
    } else {
      console.log('BROWSER LOG:', msg.text());
    }
  });

  page.on('pageerror', exception => {
    console.log('BROWSER EXCEPTION:', exception.message);
    errors.push(exception.message);
  });

  await page.goto('/');
  await page.waitForTimeout(2000); // Wait for potential hydration
  await page.screenshot({ path: 'debug-screenshot.png', fullPage: true });
  
  const content = await page.content();
  console.log('HTML Content length:', content.length);
  
  const h1Count = await page.locator('h1').count();
  console.log('H1 Count:', h1Count);
  
  expect(errors.length).toBe(0);
});
