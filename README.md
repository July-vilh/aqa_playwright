В данной ветке описана реализация работы с приватными (чувствительными) данными по типу логина пароля

Изменения:
1. Добавлен файл "environment.ts" в src -> config с работой  приватными данными
2. Добавлен файл .env с приватными данми (логин пароль)
3. Файл .env добавлен в .gitignore
4. В файле playwright.config добавлены import dotenv from "dotenv"; dotenv.config();
5. Обновлен файл с тестами addNewCustomer.spec.ts в src -> tests -> SalesPortal - customers
6. Обновлен файл loginCredentials.data.ts в src -> data -> customers 
