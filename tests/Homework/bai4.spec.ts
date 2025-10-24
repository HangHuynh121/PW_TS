import { test, expect } from '@playwright/test';
import { count } from 'console';

const DEMO_URL = 'https://demoapp-sable-gamma.vercel.app/';

//Cấp 1: Mệnh lệnh của sếp
test('Cấp 1: Mệnh lệnh của sếp', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
    await page.locator("//span[contains(text(),'Bắt đầu Test')]").click();
    const slowButton1 = page.locator('#button-1');
    //Lỗi timeout 5000ms
    await slowButton1.click({ timeout: 5000 });



});
//Cấp 2: Giới hạn của phòng ban
test('Cấp 2: Giới hạn của phòng ban', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
    await page.locator("//span[contains(text(),'Bắt đầu Test')]").click();
    const slowButton2 = page.locator('#button-2');
    //Lỗi timeout 10000ms
    await slowButton2.click();
});


test.setTimeout(30000);
//Tc chạy pass khi set lại timeout toàn cục
test('Set lại timeout', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
    await page.locator("//span[contains(text(),'Bắt đầu Test')]").click();
    const startBtn = page.locator('#start-btn');
    const continueBtn = page.locator('#continue-btn');
    const expectedBtn = page.locator('#final-btn');
    //action timeout 10 s mà tiến trình có 8s thì thoải mái => 8s
    await startBtn.click();
    // 8s < 10s thỏa mãn  => 8s
    await continueBtn.click();
    // tổng phải chờ là 16s
    //báo lỗi timeout 15s
    await expectedBtn.click();
});

/// Ở trong PW có 3 cấp độ để kiểm soát timeOut
// 1/ Cấp độ cao nhất: Inline TimeOut (Mệnh lệnh của sếp)
// 2/ Cấp độ 2: Trung bình = actionTimeOut => Quy định của phòng ban
// 3/ Cấp độ 3: Thấp nhất = toàn cục -> quy định của công ty

//timeout toan cuc

//mac dinh sẽ la 30s cho tiemout toan cuc và 30s cho action timeout



//Web-First Assertions
//cấp độ 1: Cao nhất -> Inline TimeOut
test('Web - first asertion', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
    await page.getByText("Web-First Assertions").click();
    await page.getByText("Bắt đầu chờ").click();
    const statusMessage = page.locator('#status-message');

    //playwright se dam bao co che retry de dam bao là sau khi x giay locator sẽ dc expec
    expect(statusMessage).toHaveText('Tải dữ liệu thành công!', { timeout: 8000 });
});

//cấp độ 2: toàn cục -> quy dinh chung là 5s



//toBeAttached
//kiemtrar phan tu co ton tai trong DOM hay khong, khong quna tam den hien thi tren man hinh







//toBeVisible
//kiem tra phan tu vưa ton tai trong DOM vua hien thi trên mna hinh
test('toBeVisible', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
    await page.getByRole('button', { name: 'expect() có await' }).click();
    await page.pause();
    //ẩn dialog
    await page.locator('#btn-hide').click();
    await page.locator('#btn-show').click();
    //đợi 5s để phần tử đc gắn vào DOM
    await expect(page.locator('#visibility-target')).toBeVisible();
});


//toBeCheked
//Kha nang phan thu co o trang thai chon/.kic hoat hay không









//toBeDisabled

test('toBeDisabled', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
    await page.getByRole('button', { name: 'expect() có await' }).click();
    await page.pause();
    //ẩn dialog
    await page.locator('#toggle-disabled').click();
    await expect(page.locator('#email')).toBeDisabled();
});


