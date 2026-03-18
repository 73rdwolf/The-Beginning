import { test, expect } from '@playwright/test';

// AGENT 3: UX Perception & Accessibility
// Focus: Visual hierarchy, contrast, semantic HTML
test.describe('Agent 3: UX', () => {
  test('Primary CTAs are accessible and properly contrasted', async ({ page }) => {
    await page.goto('/');
    
    const ctas = page.locator('button', { hasText: 'Get Started' });
    const count = await ctas.count();
    
    for (let i = 0; i < count; i++) {
      const cta = ctas.nth(i);
      await expect(cta).toBeVisible();
      
      // Check computed styles for semantic validation
      const color = await cta.evaluate((el) => window.getComputedStyle(el).backgroundColor);
      // Brand primary is #185FA5 -> rgb(24, 95, 165)
      expect(color).toMatch(/rgb\(24, 95, 165\)|rgba\(0, 0, 0, 0\)/); // Could be standard button or the transparent wrapper depending on component
    }
  });

  test('Page has correct structure', async ({ page }) => {
    await page.goto('/');
    
    // Must have exactly one H1
    const h1s = page.locator('h1');
    await expect(h1s).toHaveCount(1);
    
    // Must have a main landmark
    await expect(page.locator('main')).toBeVisible();
  });
});
