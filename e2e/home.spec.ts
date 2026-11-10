import { expect, test } from '@playwright/test'

test('de startpagina toont het spel', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Wie zit goed? | Arcadia')
  await expect(page.getByRole('heading', { name: 'Wie zit goed?' })).toBeVisible()
  await expect(page.getByRole('img', { name: 'Arcadia scholen' })).toBeVisible()
})