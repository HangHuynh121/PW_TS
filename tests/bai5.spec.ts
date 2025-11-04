//Bài 5 : Kỹ thuật Tìm Kiếm Phần Tử Text & Khẳng định Kết quả

import { test, expect } from '@playwright/test';
const DEMO_URL = "https://demoapp-sable-gamma.vercel.app/";



/* 
test('Get text', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 3: Tổng hợp Text Methods' }).click();

    const parent = page.locator('#demo-element-1');

    const text1 = await parent.textContent();
    console.log(text1);

    const text2 = await parent.textContent();
    console.log(text2);

    const text3 = await parent.textContent();
    console.log(text3);

    await page.pause();

});
  */


























//Expect() khong co wait
//so sanh nghiem ngac giong voi === trong JS TS =>kiem tra ca gia tri va kieu du lieu
test('toBe(value)', () => {
    const name: string = 'Playwright';
    expect(name).toBe('Playwright');

    const version: number = 1.56;
    expect(version).toBe(1.56);

    const isActive: boolean = true;
    expect(isActive).toBe(true);

    expect(version).toBe('1.56');

});