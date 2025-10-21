//web accessibility (kha nang tiep can) - nen tang của getByRole
//getByRole của Playwright sẽ xac dinh nhung the HTML co cau truc nhu the nao theo vai tro ngam dinh
//Interface hoac la type alias locator



import { test, expect } from '@playwright/test';
import { link } from 'fs';

test('Vai tro ngam dinh', async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app')
    await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click()
    /* 
    const linkLocator = page.getByRole('link', { name: 'Trang chủ' }) //Cach viet khac
    linkLocator.click()
    linkLocator.highlight()
     */


    /*
   await page.getByRole('button', { name: 'Playwright getByRole' }).click()

   //   page.getByRole('link', {name: 'Trang chủ'})
   const linkLocator = page.getByRole('link', { name: 'Trang chủ' })
   console.log('phan tu o tren web', await linkLocator.count());
   await linkLocator.nth(0).hover
   //   await linkLocator.hover()
   await linkLocator.highlight()
   await page.pause() 
  


   
       await page.getByRole('textbox', { name: 'Tên: ' }).fill('Hang Driver');
       await page.getByRole('button', { name: 'Gửi' }).click();
       await page.pause()
    */


    await page.getByRole('button', { name: 'CSS Selector' }).click()
    await page.locator('#username-input').fill('Hang');
    await page.locator('#password-input').fill('123456')
    page.pause()
    await page.locator('#login-submit-btn').click()
    page.pause()






    //<input placeholder="Nhập email" type="email" name="email" style="padding: 8px; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" xpath="1">
    await page.locator('input[placeholder="Nhập email"]').fill('Hang@gmail.com')
    page.pause()

});

//<input placeholder="Nhập tên đăng nhập" type="text" name="username" style="padding: 8px; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" xpath="1">
//tag = input x
//id khong có x
// class x
//attribute: [placeholder = "Nhập tên đăng nhập"]



//<input placeholder="Nhập email" type="email" name="email" style="padding: 8px; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" xpath="1">


//<div id="header" class="sticky visible" data-testid="main-header" style="background-color: rgb(248, 249, 250); padding: 10px; border: 2px solid rgb(0, 123, 255); border-radius: 4px; color: rgb(51, 51, 51);" xpath="1">Header (sticky + visible)</div>



