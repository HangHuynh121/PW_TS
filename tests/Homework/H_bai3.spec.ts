import { test, expect } from '@playwright/test';

test('Homework.Bai2', async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app')
    await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click()
    await page.getByRole('button', { name: 'Bài tập' }).click()



    //Bai1
    const buttonB = page.getByRole('textbox', { name: 'Bold', pressed: true })
    await expect(buttonB).toBeVisible



    //Bai2
    page.getByRole('button', { name: 'More options', expanded: false })
    await buttonB.click()
    const menuDuplicated = page.getByRole('menuitem', { name: 'Duplicate' })
    await expect(menuDuplicated).toBeVisible()



})