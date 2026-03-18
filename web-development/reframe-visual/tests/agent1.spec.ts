import { test, expect } from '@playwright/test';

// AGENT 1: Architectural & Data Integrity
// Focus: State consistency, Component lifecycle
test.describe('Agent 1: Integrity', () => {
  test('FAQ state remains consistent when toggling', async ({ page }) => {
    await page.goto('/');
    
    // Find the FAQ section
    const faqSection = page.locator('section').filter({ hasText: 'Questions worth asking.' });
    
    // Open the first FAQ
    const firstFaqBtn = faqSection.locator('button').first();
    await firstFaqBtn.click();
    
    // The answer should become visible
    const firstAnswer = faqSection.locator('.text-text-secondary.leading-relaxed').first();
    await expect(firstAnswer).toBeVisible();
    
    // Ensure state integrity when navigating away and back (scroll simulation)
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // The answer should still be visible (DOM integrity)
    await expect(firstAnswer).toBeVisible();
    
    // Close the FAQ
    await firstFaqBtn.click();
    await expect(firstAnswer).not.toBeVisible();
  });
});
