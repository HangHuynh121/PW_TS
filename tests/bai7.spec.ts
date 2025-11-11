import { test, expect } from '@playwright/test';
import { count, time } from 'console';
const DEMO_URL = 'https://demoapp-sable-gamma.vercel.app/';

test('ví dụ về  alert va modal', async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app/');

    await page.getByRole('link', { name: 'Bài 4: Mouse Actions' }).click();
    await page.getByRole('tab', { name: 'Alerts & Modals' }).click();

    // ALERT → Accept và assert UI
    page.once('dialog', async (dialog) => {
        console.log(dialog.type());
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toContain('Hello from alert');
        await dialog.accept();
    });
    await page.locator('#btn-alert').click();
    await expect(page.locator('#alert-result')).toHaveText('Alert acknowledged');
    await page.pause();
});




test('ví dụ về modal', async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app/');
    await page.getByRole('link', { name: 'Bài 4: Mouse Actions' }).click();
    await page.getByRole('tab', { name: 'Alerts & Modals' }).click();
    // Mở modal, điền tên, xác nhận và assert kết quả
    await page.locator('#open-basic-modal').click();
    //assert là thằng modal sẽ hiện ra để thao tác
    const dialog = page.getByRole('dialog', { name: 'Thông báo' });
    await expect(dialog).toBeVisible();
    //thao tác với modal
    await dialog.locator('#basic-modal-input').fill('Alice');
    await dialog.getByRole('button', { name: 'Đồng ý' }).click();
    await expect(dialog).toHaveCount(0);
    await expect(page.locator('#basic-modal-result')).toHaveText('Submitted: Alice');
    await page.pause();
});