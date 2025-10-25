
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
// 1/ Cấp độ cao nhất: Inline TimeOut (Mệnh lệnh của sếp) => set o types.s.ts file
// 2/ Cấp độ 2: Trung bình = actionTimeOut => Quy định của phòng ban => set o playwright.config.ts file => use: { actionTimeout: 10000 }    
// 3/ Cấp độ 3: Thấp nhất = toàn cục -> quy định của công ty =>et o playwright.config.ts file => timeout: 10000

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
//Kha nang phan thu co o trang thai chon/kich hoat hay không









//toBeDisabled
//la mot ham trong assertion kiem tra xem phan tu co o trang thai bi vo hieu hoa hay khong
test('toBeDisabled', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
    await page.getByRole('button', { name: 'expect() có await' }).click();
    await page.pause();
    //ẩn dialog
    await page.locator('#toggle-disabled').click();
    await expect(page.locator('#email')).toBeDisabled();
});




//toHaveCount
//la mot ham trong assertion kiem tra so luong phan tu







//toContainText
//la mot ham trong assertion kiem tra phan tu co chua van ban mong muon hay khong





//ToBeFocused
//la mot ham trong assertion kiem tra phan tu co o trang thai dc focus hay khong




//toHaveValue
//LA mot ham trong assertion kiem tra gia tri cua phan tu co giong nhu mong muon hay khong
/* test('toHaveValue', async ({ page }) => {
    await page.goto(DEMO_URL);   */








//toContainClass
//la mot ham trong assertion kiem tra phan tu co chua class mong muon hay khong

/* test('toContainClass', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();    
    }); */








//toHaveCSS
//la mot ham trong assertion kiem tra phan tu co style css nhu mong muon hay khong
/* test('toHaveCSS', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();    
    }); */







//toHaveAttribute
//la mot ham trong assertion kiem tra phan tu co thuoc tinh nhu mong muon hay khong
/* test('toHaveAttribute', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();    
    }); */











//toHaveId
//la mot ham trong assertion kiem tra phan tu co id nhu mong muon hay khong
/* test('toHaveId', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();    
    }); */












//toBeInViewport
//la mot ham trong assertion kiem tra phan tu co hien thi trong viewport hay khong
test('toBeInViewport', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
    await page.locator("#viewport-target").scrollIntoViewIfNeeded();
    await expect(page.locator("#viewport-target")).toBeInViewport();
});







//toHaveText vs toContainText
// la mot ham trong assertion kiem tra phan tu co chua van ban nhu mong muon hay khong
//ToHavetexxt: kiem tra van ban giong hoan toan
//ToContainText: kiem tra van ban chi can chua van ban mong muon
//Tự trim khoảng trắng đầu cuối và không phân biệt hoa thường
test('toHaveText vs toContainText', async ({ page }) => {
    await page.goto(DEMO_URL);
    await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
}); 