import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mycar.kz/');
  await expect(page.getByRole('banner').getByRole('link', { name: 'Поиск авто'})).toBeEnabled();
  await expect(page.getByText('Выберите город')).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Алматы' })).toBeEnabled();
  await expect(page.getByText('Марка и модель')).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Toyota Toyota', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Camry', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'показать' })).toBeEnabled();
  await expect(page.getByText('Поколение')).toBeEnabled();
  await expect(page.getByRole('button', { name: 'XV70 XV70 2017 - 2021' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Готово' })).toBeEnabled();
  await expect(page.getByText('Исключить из поиска')).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Acura Acura' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'ILX' }).getByLabel('')).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Исключить' })).toBeEnabled();
  await expect(page.getByLabel('Цена, От')).toBeEnabled();
  await expect(page.getByLabel('Цена, От').fill('13 000 000')).toBe('13 000 000');
  await expect(page.locator('div').filter({ hasText: /^Цена, До$/ }).nth(1)).toBeEnabled();
  await expect(page.getByLabel('Цена, До')).toBeEnabled();
  await expect(page.getByLabel('Цена, До').fill('18 000 000')).toBe('18 000 000');
  await expect(page.locator('.first\\:rounded-t-lg > div > div:nth-child(3)').first()).toBeEnabled();
  await expect(page.getByLabel('Первоначальный взнос')).toBeEnabled();
  await expect(page.getByLabel('Первоначальный взнос').fill('5 000 000')).toBe('5 000 000');
  await expect(page.getByLabel('Ежемесячный платеж')).toBeEnabled();
  await expect(page.getByLabel('Ежемесячный платеж').fill('250 000')).toBe('250 000');
  await expect(page.getByLabel('Год выпуска, От')).toBeEnabled();
  await expect(page.getByLabel('Год выпуска, От').fill('2017')).toBe("2017");
  await expect(page.getByLabel('Год выпуска, До')).toBeEnabled();
  await expect(page.getByLabel('Год выпуска, До').fill('2020')).toBe('2020');
  await expect(page.getByLabel('Пробег, До')).toBeEnabled();
  await expect(page.getByLabel('Пробег, До').fill('150 000')).toBe('150 000');
  await expect(page.locator('.flex > div:nth-child(2) > div:nth-child(3)')).toBeEnabled();
  await expect(page.locator('div:nth-child(9) > div > .my-2')).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Выбрать все' })).toBeEnabled();
  await expect(page.getByLabel('Автомат')).toBeEnabled();
  await expect(page.getByLabel('Механика')).toBeEnabled();
  await expect(page.getByLabel('Седан')).toBeEnabled();
  await expect(page.getByLabel('Универсал')).toBeEnabled();
  await expect(page.getByLabel('Кроссовер')).toBeEnabled();
  await expect(page.getByLabel('Пикап')).toBeEnabled();
  await expect(page.getByLabel('Минивэн')).toBeEnabled();
  await expect(page.getByLabel('Электрический')).toBeEnabled();
  await expect(page.getByLabel('Бензиновый')).toBeEnabled();
  await expect(page.getByLabel('Гибридный')).toBeEnabled();
  await expect(page.getByLabel('Дизельный')).toBeEnabled();
  await page.goto('https://mycar.kz/cars');
  await expect(page.locator('div:nth-child(13) > div:nth-child(2) > .my-2')).toBeEnabled();
  await expect(page.getByLabel('Объем двигателя, От')).toBeEnabled();
  await expect(page.getByLabel('Объем двигателя, От').fill('2.')).toBe('2');
  await expect(page.getByLabel('increment').first()).toBeEnabled();
  await expect(page.getByLabel('Объем двигателя, От')).toBeEnabled();
  await expect(page.getByLabel('increment').first()).toBeEnabled();
  await expect(page.getByLabel('decrement').first()).toBeEnabled();
  await expect(page.getByLabel('Объем двигателя, До')).toBeEnabled();
  await expect(page.getByLabel('Объем двигателя, До').fill('3.')).toBe('3');
  await expect(page.getByLabel('increment').nth(1)).toBeEnabled();
  await expect(page.getByLabel('increment').nth(1)).toBeEnabled();
  await expect(page.getByLabel('Объем двигателя, До')).toBeEnabled();
  await expect(page.getByLabel('decrement').nth(1)).toBeEnabled();
  await expect(page.getByLabel('Белый')).toBeEnabled();
  await expect(page.getByLabel('Серебристый')).toBeEnabled();
  await expect(page.getByLabel('Черный')).toBeEnabled();
  await expect(page.getByLabel('Серый')).toBeEnabled();
  await expect(page.getByLabel('Золотистый')).toBeEnabled();
  await expect(page.getByLabel('Передний')).toBeEnabled();
  await expect(page.getByLabel('Задний')).toBeEnabled();
  await expect(page.getByLabel('Полный')).toBeEnabled();
  await expect(page.locator('div:nth-child(17) > div > .my-2').first()).toBeEnabled();
  await expect(page.locator('div:nth-child(17) > div:nth-child(2) > .my-2')).toBeEnabled();
  await expect(page.locator('div:nth-child(3) > .my-2')).toBeEnabled();
  await page.goto('https://mycar.kz/cars');
  await expect(page.getByRole('link', { name: 'Главная' })).toBeEnabled();
  await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Поиск авто' })).toBeEnabled();
  await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Создать объявление' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Автокредит' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Mycar Гид' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Профиль' })).toBeEnabled();
  await expect(page.getByRole('button').first()).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Мои объявления' })).toBeEnabled();
  await expect(page.getByRole('button').first()).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Избранное' })).toBeEnabled();
  await expect(page.getByRole('button').first()).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Настройки' })).toBeEnabled();
  await expect(page.getByRole('button').first()).toBeEnabled();
  await expect(page.getByRole('link', { name: 'О компании' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Франшиза' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Пользовательское соглашение' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Политика конфиденциальности' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Сбор и обработка персональных данных' })).toBeEnabled();
});
