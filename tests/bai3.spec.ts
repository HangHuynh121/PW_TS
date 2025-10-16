//web accessibility (kha nang tiep can) - nen tang của getByRole
//getByRole của Playwright sẽ xac dinh nhung the HTML co cau truc
//Interface hoac la type alias locator



import { test, expect } from '@playwright/test';
test('Vai tro ngam dinh', async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app')
    await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click()


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






    await page.getByRole('button', { name: 'XPath Selector' }).click()
    await page.locator('#username-input').fill('Hang');
    await page.locator('#password-input').fill('123456')
    page.pause()
    await page.locator('#login-submit-btn').click()
    page.pause()
});






