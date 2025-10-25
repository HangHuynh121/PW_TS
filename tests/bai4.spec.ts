
/// Ở trong PW có 3 cấp độ để kiểm soát timeOut
// 1/ Cấp độ cao nhất: Inline TimeOut (Mệnh lệnh của sếp) => set o types.s.ts file
// 2/ Cấp độ 2: Trung bình = actionTimeOut => Quy định của phòng ban => set o playwright.config.ts file => use: { actionTimeout: 10000 }    
// 3/ Cấp độ 3: Thấp nhất = timeout toàn cục -> quy định của công ty =>et o playwright.config.ts file => timeout: 10000


import { test, expect } from '@playwright/test';
import { count, time } from 'console';

const DEMO_URL = 'https://demoapp-sable-gamma.vercel.app/';



//Cấp 1: Mệnh lệnh của sếp
test('Cấp 1: Mệnh lệnh của sếp', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
    await page.locator("//span[contains(text(),'Bắt đầu Test')]").click();
    const slowButton1 = page.locator('#button-1');
    //Lỗi timeout 5000ms
    await slowButton1.click({ timeout: 7000 }); // wait 6s

});



//cap2: Gioi han cả phong ban
test('Cấp 2: giới hạn phòng ban', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
    await page.locator("//span[contains(text(),'Bắt đầu Test')]").click();
    const slowButton2 = page.locator('#button-2');
    //Lỗi timeout 10000 set o set o playwright.config.ts file => use: { actionTimeout: 10000 } 
    await slowButton2.click({ timeout: 11000 }); //wait 12s

});