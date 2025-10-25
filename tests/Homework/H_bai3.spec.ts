import { test, expect } from '@playwright/test';

test('Homework.Bai3', async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app')
    await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click()
    await page.getByRole('button', { name: 'Bài tập' }).click()



    /*     //Bai1
        const buttonB = page.getByRole('button', { name: 'Bold', pressed: true })
        await expect(buttonB).toBeVisible */



    //Bai2
    const buttonC = page.getByRole('button', { name: 'More options', expanded: false })
    await buttonC.click()
    const menuDuplicated = page.getByRole('menuitem', { name: 'Duplicate' })
    await expect(menuDuplicated).toBeVisible()



})