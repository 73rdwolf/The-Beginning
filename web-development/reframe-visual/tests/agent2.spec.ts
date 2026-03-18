import { test, expect } from '@playwright/test';

// AGENT 2: Chaos & Environment
// Focus: Viewport chaos, rapid resizing, rapid clicks
test.describe('Agent 2: Chaos', () => {
  test('Layout survives rapid viewport manipulation', async ({ page }) => {
    await page.goto('/');
    
    const sizes = [
      { width: 375, height: 667 }, // Mobile
      { width: 1024, height: 768 }, // Tablet
      { width: 1920, height: 1080 }, // Desktop
      { width: 320, height: 568 }, // Small Mobile
      { width: 1440, height: 900 } // Laptop
    ];

    for (const size of sizes) {
      await page.setViewportSize(size);
      // Wait for reflow
      await page.waitForTimeout(100);
      
      // Ensure the navigation doesn't break
      const header = page.locator('header');
      await expect(header).toBeVisible();
    }
  });

  test('Survives rapid interaction without crashing', async ({ page }) => {
    await page.goto('/');
    const getStartedBtn = page.locator('button', { hasText: 'Get Started' }).first();
    
    // Rapid clicks
    for(let i=0; i<10; i++) {
      await getStartedBtn.click();
    }
    
    // The page should still be responsive and elements visible
    await expect(page.locator('h1')).toBeVisible();
  });
});
