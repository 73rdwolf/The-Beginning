import { test, expect } from '@playwright/test';

// AGENT 4: Leaks & Telemetry
// Focus: Console errors, network leaks, unhandled rejections
test.describe('Agent 4: Leaks', () => {
  test('No unexpected console errors or unhandled promise rejections', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    page.on('pageerror', exception => {
      errors.push(exception.message);
    });

    await page.goto('/');
    
    // Simulate typical user flow to trigger potential hidden errors
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Interact with FAQ to test logic
    const firstFaqBtn = page.locator('section', { hasText: 'Questions worth asking.' }).locator('button').first();
    if(await firstFaqBtn.isVisible()){
       await firstFaqBtn.click();
    }
    
    // We expect ZERO errors in the console
    expect(errors.length).toBe(0);
  });
});
