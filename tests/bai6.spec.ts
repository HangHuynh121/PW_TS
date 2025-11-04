import { test, expect } from '@playwright/test';
import { count, time } from 'console';
const DEMO_URL = 'https://demoapp-sable-gamma.vercel.app/';



//bai4.Mouse Actions /DEMO: Click element that va gia
//thang the span khong co event listener hay thuoc tinh disable -> khi disable vẫn click duoc
test('Click disabled element', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 4: Mouse Actions' }).click();
    await page.getByRole('button', { name: 'Disabled Button' }).click();
    await expect(page.getByText('Disabled Button Clicked')).toBeVisible();
});